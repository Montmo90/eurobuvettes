<?php
class M_Api extends Model {

    #region Volonatires
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
        //test avant si le volontaire est reponsable d'une buvette
        $sqlBuv = "SELECT * FROM buvette WHERE idVolontaire = :id";
        if (count($this->FetchAll($sqlBuv, array(":id" => $id))) == 0) {
            $sql = "DELETE FROM volontaire WHERE idVolontaire = :id";
            if($this->Execute($sql, array(":id" => $id))) {
                return "true";
            }
            return "false";
        }
        return "vol";
    }
    #endregion

    #region Buvettes
    //Create
    function addBuvette($buvette, $emplacement, $idResp) {
        $sql = "INSERT INTO buvette(nomBuvette, emplacementB, idVolontaire) VALUES (:buvette,:emplacement,:idResp)";
        if($this->Execute($sql, array(":buvette" => $buvette, ":emplacement" => $emplacement, ":idResp" => $idResp))) {
            return true;
        }
        return false;
    }
    
    //Read
    function getAllBuvettes() {
        $sql = "SELECT idBuvette as id, nomBuvette, emplacementB as emplacement, buvette.idVolontaire as idVol, nomVolontaire as nom, ageVolontaire as age FROM buvette INNER JOIN volontaire ON buvette.idVolontaire = volontaire.idVolontaire ORDER BY buvette.idBuvette ASC";
        return $this->FetchAll($sql);
    }

    //Update
    function updateBuvette($id, $nom, $emplacement, $idResp) {
        $sql = "UPDATE buvette SET nomBuvette=:nom, emplacementB=:emplacement, idVolontaire=:idResp WHERE idBuvette = :id";
        if($this->Execute($sql, array(":id" => $id, ":nom" => $nom, ":emplacement" => $emplacement, ":idResp" => $idResp))) {
            return true;
        }
        return false;
    }
    
    //Delete
    function deleteBuvette($id) {
        $sql = "DELETE FROM buvette WHERE idBuvette = :id";
        if($this->Execute($sql, array(":id" => $id))) {
            return true;
        }
        return false;
    }
    #endregion
}
?>