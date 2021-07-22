<?php
class Connect
{
    function connection() {
        $c;
        try {
            $c = new PDO ("mysql:host=localhost; dbname=eurobuvette", "root", "");
        } catch(PDOException $e) {
            echo "Erreur BD : " . $e->getMessage();
        } catch(Exception $e) {
            echo "Autre erreur : " . $e->getMessage();
        }
        return $c;
    }
}


?>