# [SEE WORK ON NETLIFY](https://adoring-minsky-2fd7e1.netlify.com/)

---

## CheatSheet Git

* Pour voir une branche particulière
```
git checkout nomDeLaBranche
```

* Creer une branche à partir de la où on est :
```
git checkout -b nomDeLaNouvelleBranche
```

* Pour commit tout ou certains fichiers
```
git add . ou nomdufichier.json autrefichier.jsx
git commit -m "decrire le commit"
```

* Pour changer de branche
```
git checkout nomdelabranche
```


* Pour fusionner avec master
```
git merge down nomdelabranche
```


* Pour supprimer une branche
```
git branch -d nomdelabranche
```
<br/>

---
## Work

1. Creation containers->DataContainer.jsx

Creation du modèle + connection à l'API
componentDidMount() => cycle de vie des components React, ce qui s'execute au démarrage
<br/>Si !data, mettre un loader sinon les infos ne pourront pas s'afficher puisqu'elles ne seront pas arrivées 
<br/>Ajout DataContainer dans App.js

---

2. Déplacer la liste de personnes dans un container 
Ajouter photo de profil, nom, sexe etc...
---

3. Ajouter du style css


Add FontAwesome
```
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/react-fontawesome
```
to use
```
<FontAwesomeIcon icon="coffee" />
```
---

## CSS bootstrap 

https://htmlcheatsheet.com/

### [Grid](https://react-bootstrap.github.io/layout/grid/)
```
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1em;
}
```

### Material Design Box shadow 
Favorites :
- [1](https://codepen.io/sdthornton/pen/wBZdXq)
- [2](https://codepen.io/haibnu/pen/FxGsI)

Used here :
```
.card-1 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.card-1:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
```
---
4. Ajouter page profil


#TO DO
- banner responsive
- pagination
- page profile
- icones à la place des titres


---

MISE EN LIGNE
PAAS
## [Netlify](https://app.netlify.com)
## [Heroku](https://www.heroku.com/)
## [DATO CMS](https://www.datocms.com/)

[jamstack](https://jamstack.org/)

--- 

JAMAIS de setState() dans render()
setState() déclenche un render()
