const form = document.getElementById('contact-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const response = await fetch('https://formsubmit.co/bestyrelsen@sab-askholm.dk', {
        method: 'POST',
        body: formData
    });
    
    if (response.ok) {
        alert('Beskeden blev sendt!');
        form.reset(); // Reset the form fields
    } else {
        alert('Beskeden blev ikke sendt! - Alternativt kan du skrive direkte til bestyrelsen@sab-askholm.dk');
    }
});