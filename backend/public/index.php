<?php

    require_once("../vendor/autoload.php");

    $dotenv = Dotenv\Dotenv::createUnsafeImmutable('../');
    $dotenv->load();

    header("Content-type: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    new \App\Core\Router();



