# Fisheye

Fisheye est un projet réalisé lors de ma formation OpenClassrooms, que j'ai ensuite réécrit en React pour approfondir ma pratique avec cette bibliothèque. Ce site est dédié aux photographes, permettant aux utilisateurs de découvrir les réalisations des photographes avec une interface dynamique.

## Technologies utilisées

- **React** : Bibliothèque JavaScript pour la création d'interfaces utilisateurs.
- **React Router DOM** : Pour gérer la navigation entre les pages.
- **React Modal** : Pour afficher des fenêtres modales (comme la Lightbox).
- **AOS (Animate on Scroll)** : Pour ajouter des animations lors du défilement des éléments de la page.
- **CSS** : Pour le style du site.
- **Font Awesome** : Pour les icônes (utilisées pour les likes, par exemple).

## Fonctionnalités

- **Page d'accueil** : Affiche une carte pour chaque photographe, incluant son nom, sa ville, son pays, une phrase d'accroche et son prix par jour.
- **Page photographe** : Lorsqu'une carte est cliquée, l'utilisateur est redirigé vers la page du photographe, où il peut voir ses réalisations (photos), ainsi qu'un bouton pour envoyer un mail.
- **Likes** : Chaque photo des réalisations peut être aimée (like), et le nombre total de likes est mis à jour en temps réel.
- **Lightbox** : En cliquant sur une image dans les réalisations, une Lightbox s'ouvre pour afficher l'image en grand format.

## Installation

1. Clonez ce dépôt :

```bash
git clone https://snibix.github.io/Fisheye-react/
```

2. Accédez au dossier du projet :

```bash
cd Fisheye-react
```

3. Installez les dépendances :

```bash
npm install
```

4. Lancez le projet en mode développement :

```bash
npm start
```
