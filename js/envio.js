// Validación manual extra
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Por favor, rellena todos los campos antes de enviar.');
        }
    });