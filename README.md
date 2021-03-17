![logo_complete](https://user-images.githubusercontent.com/55686729/111455776-811b1c80-8716-11eb-9e1f-4e70cc76a8e0.png)

# Mohea : Student project

## Web application generating accessible tools
:busts_in_silhouette: **Contribution** : Samuel Gerard, Olivier Roessel, Coralie Bach  
:mortar_board: **School** : IUT Haguenau
  
## Tech stack  
* :small_red_triangle: [Laravel](https://github.com/laravel/laravel) 
* :small_red_triangle: [React](https://github.com/facebook/react)
* :small_red_triangle: [Redux](https://github.com/reduxjs/redux)

## Installation 
  
> 1. Copy data connection information to your .env file  
``` cp .env.example .env ```
> 2. Set the key application to encrypte the data users  
``` php artisan key:generate ```
> 3. Install php dependencies   
``` composer install ```
> 4. Install javascript dependencies (inclued react)  
``` npm install ```
> 5. Link storage folder to public  
``` php artisan storage:link ```
> 6. Make migrations of the database (in case there is no database provided)  
``` php artisan migrate ```  
  
  
## Development
Execute the following command to compile the different assests  
``` npm run dev ```
