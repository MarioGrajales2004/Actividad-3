
ModalMetal - Componente Modal Interactivo

Librería JavaScript reutilizable de componentes visuales interactivos construida con Vanilla JavaScript y CSS3 puro (sin frameworks ni dependencias externas)[cite: 10].



¿Qué problema resuelve?

Los métodos nativos de los navegadores como `alert()` o `confirm()` son intrusivos, bloquean la ejecución del hilo principal del navegador y rompen por completo la experiencia estética de una aplicación web moderna

ModalMetal resuelve esta limitación proporcionando un componente visual dinámico:

* Genera dinámicamente los elementos en el DOM (como el overlay oscuro y la caja del modal) sin obligar al desarrollador a escribir código HTML previo
* No bloquea la interacción del usuario, ya que funciona de manera asíncrona
* Es altamente parametrizable (permite cambiar el tipo de instrumento, el título y el contenido, ajustando los colores dinámicamente)
* Cuenta con soporte para cierre automático mediante un temporizador integrado.

Instalación

Para integrar el componente en cualquier proyecto web, incluye la hoja de estilos en la sección `<head>` y el script de la librería justo antes de cerrar la etiqueta `</body>`

html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi Aplicación Musical</title>
    
    <link rel="stylesheet" href="css/componente.css">
</head>
<body>

    <script src="js/componente.js"></script>
</body>
</html>

Uso con Ejemplos de Código Embebido

Método directo de renderizado

La librería incluye una función principal simplificada que adapta el estilo visual dependiendo del instrumento seleccionado:

javascript
mostrarNotificacionMetal(
    'guitarra', 
    'Guitarra Eléctrica', 
    'Dave Mustaine popularizó la técnica del Spider Chord en el thrash metal.'
);

mostrarNotificacionMetal(
    'bateria', 
    'La Batería Thrash', 
    'The Rev utilizaba una técnica patentada llamada The Double Ride.'
);

