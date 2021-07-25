<?php
abstract class Model {

    private $host = "localhost";
    private $dbName = "eurobuvette";
    private $userName = "root";
    private $mdp = "";

    protected $connect; 

    public function __construct() {
        $this->Connect();
    }

    private function Connect() {
        try {
            $this->connect = new PDO ("mysql:host=" . $this->host ."; dbname=" . $this->dbName, $this->userName, $this->mdp);
        } catch(PDOException $e) {
            echo "Erreur BD : " . $e->getMessage();
        } catch(Exception $e) {
            echo "Autre erreur : " . $e->getMessage();
        }
    }
    
}
?>