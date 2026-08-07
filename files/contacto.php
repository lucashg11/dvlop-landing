<?php
/**
 * ============================================================
 *  BACKEND DE CONTACTO — PHP nativo (sin dependencias)
 *  Fácil de personalizar: solo modifica la sección "CONFIGURACIÓN"
 * ============================================================
 */

// ── CONFIGURACIÓN ────────────────────────────────────────────

$config = [
    // Correo
    'email_destino' => 'destino@tudominio.com',  // ¿A quién llegan los mensajes?
    'email_asunto'  => 'Nuevo mensaje desde el formulario de contacto',
    'email_from'    => 'noreply@tudominio.com',  // Dirección del remitente

    // Origen permitido (CORS / seguridad básica)
    // Pon la URL de tu sitio web. Deja '' para deshabilitar la verificación.
    'origen_permitido' => '',  // Ej: 'https://tudominio.com'
];

// ── NO TOCAR DESDE AQUÍ ──────────────────────────────────────

header('Content-Type: application/json; charset=utf-8');

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

// Armar el correo
$cuerpo = "Nombre: {$nombre}\nEmail: {$email}\n\n{$mensaje}";

$headers = implode("\r\n", [
    "From: {$config['email_from']}",
    "Reply-To: {$email}",
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
]);

$enviado = mail(
    $config['email_destino'],
    $config['email_asunto'],
    $cuerpo,
    $headers
);

if ($enviado) {
    echo json_encode(['ok' => true, 'mensaje' => 'Tu mensaje fue enviado correctamente.']);
} else {
    http_response_code(500);
    error_log('mail() falló al intentar enviar desde el formulario de contacto.');
    echo json_encode(['ok' => false, 'mensaje' => 'No se pudo enviar el mensaje. Intenta más tarde.']);
}
