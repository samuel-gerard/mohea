# Projet licence pro
## Application web générant des outils accessibles
Hébergement : mohea.bach.mmi-unistra.fr  
Collaboration : Samuel Gerard, Olivier Roessel, Coralie Bach

## Installation
Lancer la commande suivante pour installer le projet en local  
``` git clone git@bitbucket.org:mohea/mohea.bach.mmi-unistra.fr.git ```  
Copier les informations de connexion de données  
``` cp .env.example .env ```  
Installer les clés de l'application pour encrypter les utilisateurs    
``` php artisan key:generate ```  
Installer les dépendances php  
``` composer install ```  
Installer les dépendances js (dont react)  
``` npm install ```  

## Développement
Chaque module utilise une branche différente à son nom.  
Lancer la commande suivante pour compiler les différents fichiers css, js et react  
``` npm run dev ```
