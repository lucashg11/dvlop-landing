# Formulario de Contacto — Astro + PHP nativo

Formulario listo para producción. Sin dependencias externas — solo PHP puro.

---

## Estructura de archivos

```
/
├── src/
│   └── components/
│       └── ContactForm.astro      ← Componente Astro (copiar a tu proyecto)
└── files/
    └── contacto.php               ← Backend PHP (subir a tu servidor)
```

---

## Instalación en 2 pasos

### 1. Configurar el PHP

Abre `files/contacto.php` y modifica la sección `$config`:

```php
$config = [
    'email_destino'    => 'destino@tudominio.com',
    'email_asunto'     => 'Nuevo contacto desde mi sitio',
    'email_from'       => 'noreply@tudominio.com',
    'origen_permitido' => 'https://tudominio.com', // URL de tu sitio
];
```

> **Nota:** El script usa `mail()` nativo de PHP. No requiere Composer ni librerías externas.
> Tu servidor de hosting debe tener sendmail o equivalente configurado (la mayoría lo tiene por defecto).

### 2. Usar el componente en Astro

```astro
---
import ContactForm from '../components/ContactForm.astro';
---

<ContactForm />

<!-- Personalizado -->
<ContactForm
  apiUrl="/api/contacto.php"
  titulo="Hablemos"
  subtitulo="Te respondemos en menos de 24 hs."
  btnTexto="Quiero contactarme"
/>
```

---

## Props del componente

| Prop         | Tipo     | Default                         | Descripción                        |
|--------------|----------|---------------------------------|------------------------------------|
| `apiUrl`     | `string` | `'/api/contacto.php'`           | URL del backend PHP                |
| `titulo`     | `string` | `'Contáctanos'`                 | Título del formulario              |
| `subtitulo`  | `string` | `'Completa el formulario y...'` | Subtítulo                          |
| `btnTexto`   | `string` | `'Enviar mensaje'`              | Texto del botón                    |
| `className`  | `string` | `''`                            | Clases Tailwind extra para wrapper |

---

## Agregar campos adicionales

### En `ContactForm.astro`

Agrega el campo dentro del `<form>`:

```html
<input id="cf-telefono" name="telefono" type="tel" placeholder="+54 11 1234-5678" />
```

Luego en el `<script>`:

```js
const telefono = document.getElementById('cf-telefono').value.trim();
body: JSON.stringify({ nombre, email, mensaje, telefono }),
```

### En `contacto.php`

```php
$telefono = htmlspecialchars(trim($datos['telefono'] ?? ''), ENT_QUOTES, 'UTF-8');

// Dentro del $cuerpo:
$cuerpo = "Nombre: {$nombre}\nEmail: {$email}\nTeléfono: {$telefono}\n\n{$mensaje}";
```

---

## Notas de seguridad

- El campo `origen_permitido` limita qué dominio puede llamar al PHP (CORS).
- Los errores se loguean con `error_log()` y no se exponen al usuario.
- Todos los campos pasan por `htmlspecialchars()` antes de usarse.
- La validación ocurre tanto en el cliente (JS) como en el servidor (PHP).
