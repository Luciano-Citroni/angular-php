<?php

    require_once("../vendor/autoload.php");

    $dotenv = Dotenv\Dotenv::createUnsafeImmutable('../');
    $dotenv->load();

    header("Content-type: application/json");

    new \App\Core\Router();



