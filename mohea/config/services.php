<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    // KEYS FOR SOCIALITES
    'facebook' => [
        'client_id' => '2162970197340778',
        'client_secret' => 'a0f3a40021fbc2f0c347c45818df5ee9',
        'redirect' => 'http://mohea.com',
    ],
    'google' => [
        'client_id' => 'mohea-255809',
        'client_secret' => 'AIzaSyC488BxgR4U8W8TFJ3XnRAFKdeQ2VQI_3c',
        'redirect' => 'http://mohea.com',
    ], 

];
