document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('vistaPrevia').addEventListener('click', function () {
        const vinoBase = document.querySelector('input[name="vino"]:checked')?.value || 'No seleccionado';
        const frutas = Array.from(document.querySelectorAll('input[name="frutas"]:checked')).map(f => f.value);
        const edulcorante = document.querySelector('input[name="edulcorante"]:checked')?.value || 'No seleccionado';
        const licores = Array.from(document.querySelectorAll('input[name="licores"]:checked')).map(l => l.value);
        const especias = Array.from(document.querySelectorAll('input[name="especias"]:checked')).map(e => e.value);

        // Muestra la vista previa
        const previewDiv = document.getElementById('preview');
        previewDiv.innerHTML = `
            <h3>Vista Previa de tu Sangría</h3>
            <p><strong>Vino Base:</strong> ${vinoBase}</p>
            <p><strong>Frutas:</strong> ${frutas.length > 0 ? frutas.join(', ') : 'Ninguna'}</p>
            <p><strong>Edulcorante:</strong> ${edulcorante}</p>
            <p><strong>Licores:</strong> ${licores.length > 0 ? licores.join(', ') : 'Ninguno'}</p>
            <p><strong>Especias y Hierbas:</strong> ${especias.length > 0 ? especias.join(', ') : 'Ninguna'}</p>
        `;
    });

    // Manejo del Envío del Pedido
    document.getElementById('enviarPedido').addEventListener('click', function () {
        const fechaEntrega = document.getElementById('fechaEntrega').value || 'No seleccionada';
        const envio = document.getElementById('envio').value || 'No seleccionado';

        alert(`Tu pedido ha sido enviado.\nFecha de Entrega: ${fechaEntrega}.\nOpción de Envío: ${envio}.`);
    });

    document.getElementById('comenzar').addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
