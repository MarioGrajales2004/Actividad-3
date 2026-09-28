function mostrarNotificacionMetal(instrumento, titulo, datoCurioso) {
    var modalExistente = document.getElementById("modal-overlay");
    if (modalExistente) modalExistente.remove();

    var overlay = document.createElement("div");
    overlay.id = "modal-overlay";

     var iconos = {
        'guitarra': '🎸',
        'bajo': '🪕',
        'bateria': '🥁',
        'teclado': '🎹'
    };
    var simbolo = iconos[instrumento] || '🤘';

    var modal = document.createElement("div");
    modal.className = "modal-metal modal-" + instrumento;

    modal.innerHTML = `
        <div class="modal-icono">${simbolo}</div>
        <h3 class="modal-titulo">${titulo}</h3>
        <p class="modal-texto">${datoCurioso}</p>
        <p class="modal-nota">Este modal se cerrará automáticamente</p>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    setTimeout(function() {
        if (document.body.contains(overlay)) {
            overlay.style.opacity = "0"; // Animación de desvanecimiento
            setTimeout(function() {
                if (document.body.contains(overlay)) {
                    overlay.remove(); // Borrar del HTML
                }
            }, 300);
        }
    }, 4000);
}