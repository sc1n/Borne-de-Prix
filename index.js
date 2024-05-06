const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware pour analyser les corps de requête au format JSON
app.use(bodyParser.json());

// Simulation d'une base de données de produits
const products = [
    { reference: "123456", name: "Produit 1", price: 10 },
    { reference: "654321", name: "Produit 2", price: 20 }
    // Ajoutez d'autres produits ici
];

// Endpoint pour rechercher un produit par référence
app.post('/api/search', (req, res) => {
    const reference = req.body.reference;
    const product = products.find(prod => prod.reference === reference);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: "Produit non trouvé" });
    }
});

// Middleware pour gérer les erreurs 404
app.use((req, res, next) => {
    res.status(404).json({ error: "Endpoint non trouvé" });
});

// Middleware pour gérer les erreurs globales
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Erreur interne du serveur" });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
