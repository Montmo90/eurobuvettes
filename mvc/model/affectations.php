<?php
class M_Affectations extends Model {

    #region Buvettes
    //Create
    function addAssigner($idBuvette, $idMatch) {
        $sql = "INSERT INTO assigner(idBuvette, idMatch) VALUES (:idBuvette,:idMatch)";
        if($this->Execute($sql, array(":idBuvette" => $idBuvette, ":idMatch" => $idMatch))) {
            return "true";
        }
        return "false";
    }

    //Read
    function getAllAssigner() {
        $sql = "SELECT id, assigner.idBuvette, assigner.idMatch, nomBuvette, emplacementB, dateMatch, emplacement, idEqu1, equ1.paysEquipe as pays1, idEqu2, equ2.paysEquipe as pays2 FROM assigner INNER JOIN buvette ON assigner.idBuvette = buvette.idBuvette INNER JOIN matchs ON assigner.idMatch = matchs.idMatch INNER JOIN equipe as equ1 ON matchs.idEqu1 = equ1.idEquipe INNER JOIN equipe as equ2 ON matchs.idEqu2 = equ2.idEquipe";
        return $this->FetchAll($sql);
    }

    //Update
    function updateAssigner($id, $idBuvette, $idMatch) {
        $sql = "UPDATE assigner SET idBuvette=:idBuvette, idMatch=:idMatch WHERE id = :id";
        if($this->Execute($sql, array(":id" => $id, ":idBuvette" => $idBuvette, ":idMatch" => $idMatch))) {
            return "true";
        }
        return "false";
    }
    
    //Delete
    function deleteAssigner($id) {
        $sql = "DELETE FROM assigner WHERE id = :id";
        if($this->Execute($sql, array(":id" => $id))) {
            return "true";
        }
        return "false";
    }
    #endregion

}
