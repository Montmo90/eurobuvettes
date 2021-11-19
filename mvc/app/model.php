<?php
abstract class Model {
    // private $host = "localhost";
    // private $dbName = "eurobuvette";
    // private $userName = "root";
    // private $mdp = "";

    private $host = "fmetayubd17.mysql.db";
    private $dbName = 'fmetayubd17';
    private $userName = 'fmetayubd17';
    private $mdp ='nVu4L7kTKEfd3eF';

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

    protected function FetchAll($sql, $values = null) {
        $query = $this->connect->prepare($sql);
        $query->execute($values);
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    protected function Fetch($sql, $values = null) {
        $query = $this->connect->prepare($sql);
        $query->execute($values);
        return $query->fetch(PDO::FETCH_ASSOC);
    }

    protected function Execute($sql, $values = null) {
        $query = $this->connect->prepare($sql);
        return $query->execute($values);
    }    
}
?>