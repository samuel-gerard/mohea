# Projet Licence Professionnelle DWEB
## Web application generating accessible tools
:eyes: **Hosting** : http://mohea.bach.mmi-unistra.fr  
:busts_in_silhouette: **Collaboration** : Samuel Gerard, Olivier Roessel, Coralie Bach  
:mortar_board: **School** : IUT Haguenau
  
## This project use  
* Laravel 6.18.0 
* React 16.10
* Redux 4.0.5  

## Installation
Execute the following command to instal the project in your localhost  
``` git clone git@bitbucket.org:mohea/mohea.bach.mmi-unistra.fr.git ```  
  
Copy data connection information to your .env file  
``` cp .env.example .env ```  
  
Set the key application to encrypte the data users  
``` php artisan key:generate ```  
  
Install php dependencies   
``` composer install ```  
  
Install javascript dependencies (inclued react)  
``` npm install ```  
  
Link storage folder to public  
``` php artisan storage:link ```  
  
Make migrations of the database (in case there is no database provided)  
``` php artisan migrate ```  
  
  
## Development
Execute the following command to compile the different assests  
``` npm run dev ```
