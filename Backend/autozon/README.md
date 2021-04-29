# Setup laravel project
To get this laravel backend up and running, you need to follow the steps below:

1. Start the mysql server on your device.
2. On your mysql server, create a database with the exact same name as the key 'DB_DATABASE' is set to in your .env file.
3. Install composer on your device.
4. Navigate into the folder ./Backend/autozon.
5. Install all composer dependencies via terminal (composer install).
6. Create the database via terminal (php artisan migrate).
7. Add data into the database via terminal (php artisan db:seed).
8. Create a jwt secret key via terminal (php artisan jwt:secret).

# Start application
In order to start the backend application, you need to follow these steps:

1. Start the mysql server on your device.
2. Start the application via terminal (php artisan serve).

# Some authentication methods are not working
Try to create a new jwt secret (php artisan jwt:secret). This might help.

# Testing
Unit tests can be run with the following command: php artisan test
