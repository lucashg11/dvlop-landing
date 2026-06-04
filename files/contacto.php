<?php
/**
 * ============================================================
 *  BACKEND DE CONTACTO — PHPMailer + SMTP
 *  Fácil de personalizar: solo modifica la sección "CONFIGURACIÓN"
 * ============================================================
 */

// ── CONFIGURACIÓN ────────────────────────────────────────────
// Cambia estos valores según tu proveedor de hosting

$config = [
    // SMTP
    'smtp_host'     => 'mail.tudominio.com',   // Servidor SMTP (ej: mail.ferozo.com)
    'smtp_user'     => 'cuenta@tudominio.com', // Tu cuenta de correo
    'smtp_pass'     => 'tu_contraseña',        // Tu contraseña
    'smtp_port'     => 465,                    // 465 = SSL | 587 = TLS
    'smtp_secure'   => 'ssl',                  // 'ssl' o 'tls'

    // Correo
    'email_destino' => 'destino@tudominio.com',  // ¿A quién llegan los mensajes?
    'email_asunto'  => 'Nuevo mensaje desde el formulario de contacto',

    // Origen permitido (CORS / seguridad básica)
    // Pon la URL de tu sitio web. Deja '' para deshabilitar la verificación.
    'origen_permitido' => '',  // Ej: 'https://tudominio.com'
];

// ── NO TOCAR DESDE AQUÍ ──────────────────────────────────────

header('Content-Type: application/json; charset=utf-8');

// Verificar origen si está configurado
if (!empty($config['origen_permitido'])) {
    header('Access-Control-Allow-Origin: ' . $config['origen_permitido']);
} else {
    header('Access-Control-Allow-Origin: *');
}
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Solo aceptar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'mensaje' => 'Método no permitido.']);
    exit;
}

// Leer el body (acepta tanto form-data como JSON)
$datos = [];
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';

if (str_contains($contentType, 'application/json')) {
    $body = file_get_contents('php://input');
    $datos = json_decode($body, true) ?? [];
} else {
    $datos = $_POST;
}

// Validar campos requeridos
$nombre  = trim($datos['nombre']  ?? '');
$email   = trim($datos['email']   ?? '');
$mensaje = trim($datos['mensaje'] ?? '');

if (empty($nombre) || empty($email) || empty($mensaje)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'mensaje' => 'Todos los campos son obligatorios.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'mensaje' => 'El email no es válido.']);
    exit;
}

// Sanitizar
$nombre  = htmlspecialchars($nombre,  ENT_QUOTES, 'UTF-8');
$email   = htmlspecialchars($email,   ENT_QUOTES, 'UTF-8');
$mensaje = htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8');

// Cargar PHPMailer (instalado via Composer)
require __DIR__ . '/../../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
    $mail = new PHPMailer(true); // true = activa excepciones

    // Servidor SMTP
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['smtp_user'];
    $mail->Password   = $config['smtp_pass'];
    $mail->SMTPSecure = $config['smtp_secure'];
    $mail->Port       = $config['smtp_port'];
    $mail->CharSet    = 'UTF-8';

    // Remitente y destinatario
    $mail->setFrom($config['smtp_user'], 'Formulario Web');
    $mail->addAddress($config['email_destino']);
    $mail->addReplyTo($email, $nombre); // Reply-To apunta al visitante

    // Contenido del correo
    $mail->isHTML(true);
    $mail->Subject = $config['email_asunto'];

    // Cuerpo HTML
    $mail->Body = "
        <div style='font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px;'>
            <h2 style='color:#333;margin-bottom:16px;'>Nuevo mensaje de contacto</h2>
            <p><strong>Nombre:</strong> {$nombre}</p>
            <p><strong>Email:</strong> {$email}</p>
            <hr style='margin:16px 0;border:none;border-top:1px solid #eee;'>
            <p style='white-space:pre-line;'>{$mensaje}</p>
        </div>
    ";

    // Cuerpo texto plano (fallback)
    $mail->AltBody = "Nombre: {$nombre}\nEmail: {$email}\n\n{$mensaje}";

    $mail->send();

    echo json_encode(['ok' => true, 'mensaje' => 'Tu mensaje fue enviado correctamente.']);

} catch (Exception $e) {
    http_response_code(500);
    // En producción no expongas $mail->ErrorInfo; usa logs internos
    error_log('PHPMailer Error: ' . $mail->ErrorInfo);
    echo json_encode(['ok' => false, 'mensaje' => 'No se pudo enviar el mensaje. Intenta más tarde.']);
}
