<?php
class M_Api extends Model {

    //Create
    function addVolontaire($nom, $age) {
        $sql = "INSERT INTO volontaire(nomVolontaire, ageVolontaire) VALUES (:nom,:age)";
        if($this->Execute($sql, array(":nom" => $nom, ":age" => $age))) {
            return true;
        }
        return false;
    }

    //Read
    function getAllVolontaire() {
        $sql = "SELECT idVolontaire as id, nomVolontaire as nom, ageVolontaire as age FROM volontaire";
        return $this->FetchAll($sql);
    }

    //Update
    function updateVolontaire($id, $nom, $age) {
        $sql = "UPDATE volontaire SET nomVolontaire=:nom, ageVolontaire=:age WHERE idVolontaire = :id";
        if($this->Execute($sql, array(":id" => $id, ":nom" => $nom, ":age" => $age))) {
            return true;
        }
        return false;
    }

    //Delete
    function deleteVolontaire($id) {
        $sql = "DELETE FROM volontaire WHERE idVolontaire = :id";
        if($this->Execute($sql, array(":id" => $id))) {
            return true;
        }
        return false;
    }
}
?>