<?php

    require_once("../vendor/autoload.php");

    $dotenv = Dotenv\Dotenv::createUnsafeImmutable('../');
    $dotenv->load();

    header("Content-type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    new \App\Core\Router();


?>