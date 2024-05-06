# Borne-de-Prix

Ce projet est une application web simple conçue pour rechercher des produits par référence. Il utilise une base de données MongoDB pour stocker les informations sur les produits et est hébergé sur Glitch.

## Fonctionnalités

- Recherche de produit par référence.
- Affichage du nom et du prix du produit trouvé.

## Technologies Utilisées

### Backend
- Node.js
- Express.js
- MongoDB Atlas (Base de données)

### Frontend
- HTML
- CSS
- JavaScript (Fetch API)

## Configuration

1. **Base de données MongoDB Atlas**
   - Créez un compte sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Créez une nouvelle base de données et une nouvelle collection pour stocker les produits.
   - Obtenez l'URL de connexion à votre base de données.

2. **Hébergement sur Glitch**
   - Créez un compte sur [Glitch](https://glitch.com/).
   - Créez un nouveau projet sur Glitch.
   - Importez votre code backend et frontend sur Glitch.
   - Configurez les variables d'environnement pour définir l'URL de connexion à votre base de données MongoDB Atlas.

## Installation

1. Cloner ce référentiel sur votre machine :
   ```bash
   git clone <URL_DU_REPO>
   ```

2. Installer les dépendances backend :
   ```bash
   cd recherche-produit-backend
   npm install
   ```

3. Installer les dépendances frontend :
   - Aucune installation requise, car le frontend est statique.

## Démarrage

Pour démarrer le serveur backend, utilisez la commande suivante :
   ```bash
   npm start
   ```

Le serveur démarrera sur le port 3000 par défaut. Vous pouvez accéder à l'API à l'adresse `http://localhost:3000`.

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez créer une nouvelle branche à partir de `master` et proposer une Pull Request.
