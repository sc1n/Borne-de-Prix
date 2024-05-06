function searchProduct() {
    const reference = document.getElementById('productReference').value.trim();
    if (reference === '') {
        alert('Veuillez entrer une référence de produit.');
        return;
    }

    fetch('/api/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reference })
    })
    .then(response => response.json())
    .then(data => {
        const productInfoDiv = document.getElementById('productInfo');
        if (data.error) {
            productInfoDiv.innerHTML = `<p>${data.error}</p>`;
        } else {
            productInfoDiv.innerHTML = `
                <p><strong>Nom:</strong> ${data.name}</p>
                <p><strong>Prix:</strong> ${data.price} €</p>
            `;
        }
    })
    .catch(error => {
        console.error('Erreur :', error);
    });
}
