* Pour voir une branche particulière
```
git checkout nomDeLaBranche
```

* Creer une branche à partir de la où on est :
```
git checkout -b nomDeLaNouvelleBranche
```
```
git add . ou nomdufichier.json autrefichier.jsx
git commit -m "decrire le commit"
```

* Pour fusionner avec master
```
git merge down nomdelabranche
```


* Pour supprimer une branche
```
git branch -d nomdelabranche
```
---

1. Creation containers->DataContainer.jsx

Creation du modèle + connection à l'API
componentDidMount() => cycle de vie des components React, ce qui s'execute au démarrage
Si !data, mettre un loader sinon les infos ne pourront pas s'afficher puisqu'elles ne seront pas arrivées 
Ajout DataContainer dans App.js

---

2. Déplacer la liste de personnes dans un container 


Add FontAwesome
```
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/react-fontawesome
```