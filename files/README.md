# Formulario de Contacto — Astro + Tailwind + PHPMailer

Formulario listo para producción. Fácil de implementar, fácil de personalizar.

---

## Estructura de archivos

```
/
├── src/
│   └── components/
│       └── ContactForm.astro      ← Componente Astro (copiar a tu proyecto)
├── public/
│   └── api/
│       └── contacto.php           ← Backend PHP (subir a tu servidor)
├── composer.json                  ← Instala PHPMailer
└── vendor/                        ← Generado por Composer (NO subir a Git)
```

---

## Instalación en 3 pasos

### 1. Instalar PHPMailer con Composer

En la raíz de tu proyecto (donde está `composer.json`):

```bash
composer install
```

Esto genera la carpeta `vendor/`. Asegúrate de que esté **en la raíz** de tu proyecto
(un nivel arriba de `public/`).

> **Sin Composer en el servidor?** Ejecuta `composer install` en local
> y sube la carpeta `vendor/` junto con los demás archivos.

### 2. Configurar el PHP

Abre `public/api/contacto.php` y modifica la sección `$config`:

```php
$config = [
    'smtp_host'        => 'mail.tudominio.com',   // Tu servidor SMTP
    'smtp_user'        => 'cuenta@tudominio.com', // Tu cuenta de correo
    'smtp_pass'        => 'tu_contraseña',
    'smtp_port'        => 465,                    // 465 = SSL | 587 = TLS
    'smtp_secure'      => 'ssl',
    'email_destino'    => 'destino@tudominio.com',
    'email_asunto'     => 'Nuevo contacto desde mi sitio',
    'origen_permitido' => 'https://tudominio.com', // URL de tu sitio
];
```

### 3. Usar el componente en Astro

```astro
---
import ContactForm from '../components/ContactForm.astro';
---

<!-- Uso básico -->
<ContactForm />

<!-- Personalizado -->
<ContactForm
  apiUrl="/api/contacto.php"
  titulo="Hablemos"
  subtitulo="Te respondemos en menos de 24 hs."
  btnTexto="Quiero contactarme"
  className="max-w-lg mx-auto"
/>
```

---

## Props del componente

| Prop         | Tipo     | Default                              | Descripción                        |
|--------------|----------|--------------------------------------|------------------------------------|
| `apiUrl`     | `string` | `'/api/contacto.php'`                | URL del backend PHP                |
| `titulo`     | `string` | `'Contáctanos'`                      | Título del formulario              |
| `subtitulo`  | `string` | `'Completa el formulario y...'`      | Subtítulo                          |
| `btnTexto`   | `string` | `'Enviar mensaje'`                   | Texto del botón                    |
| `className`  | `string` | `''`                                 | Clases Tailwind extra para wrapper |

---

## Agregar campos adicionales

### En `ContactForm.astro`

Agrega el campo HTML dentro del `<form>`:

```html
<div class="mb-4">
  <label for="cf-telefono" class="block text-sm font-medium text-gray-700 mb-1">
    Teléfono
  </label>
  <input
    id="cf-telefono"
    name="telefono"
    type="tel"
    placeholder="+54 11 1234-5678"
    class="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm ..."
  />
</div>
```

Luego en el `<script>`, agrega al objeto que se envía:

```js
const telefono = document.getElementById('cf-telefono').value.trim();
body: JSON.stringify({ nombre, email, mensaje, telefono }),
```

### En `contacto.php`

Leer el campo nuevo y agregarlo al cuerpo del email:

```php
$telefono = htmlspecialchars(trim($datos['telefono'] ?? ''), ENT_QUOTES, 'UTF-8');

// Dentro del Body HTML:
<p><strong>Teléfono:</strong> {$telefono}</p>
```

---

## Notas de seguridad

- El campo `origen_permitido` en `$config` limita qué dominio puede llamar al PHP (CORS).
- Los errores internos de PHPMailer se loguean con `error_log()` y **no se exponen** al usuario.
- Todos los campos pasan por `htmlspecialchars()` antes de usarse.
- La validación ocurre tanto en el cliente (JS) como en el servidor (PHP).
