<?php 

namespace App\Core;

class Database {
    private static $host;
    private static $dbname;
    private static $user;
    private static $pass;
    protected static $db;

    private function __construct(){
        self::$host = getenv('DB_HOST');
        self::$dbname = getenv('DB_TABLE');
        self::$user = getenv('DB_USER');
        self::$pass = getenv('DB_PASS');
        try{

            self::$db = new \PDO('mysql:host='.self::$host.';dbname='.self::$dbname, self::$user, self::$pass);

            self::$db->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_WARNING);
            self::$db->setAttribute(\PDO::ATTR_EMULATE_PREPARES, false);            
        }
        catch(\PDOException $error){
            echo $error->getMessage();
        }
    }


    public static function getConnection(){
        if(!self::$db){
            new Database();
        }

        return self::$db;
    }


}