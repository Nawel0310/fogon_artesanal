document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch('http://localhost:8080/api/enviarFormulario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('¡Tu consulta ha sido enviada con éxito!');
        } else {
            alert('Hubo un problema al enviar tu consulta. Inténtalo de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('ERROR DEL SERVIDOR: Hubo un problema al enviar tu consulta. ¡Contactanos por WhatsApp o Instagram!');
    });
});