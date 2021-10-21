<?php
class M_Prive extends Model
{

    #region Volonatires
    //Create
    function addVolontaire($nom, $age)
    {
        $sql = "INSERT INTO volontaire (nomVolontaire, ageVolontaire) VALUES (:nom, :age)";
        if ($this->Execute($sql, array(":nom" => $nom, ":age" => $age))) {
            return true;
        }
        return false;
    }

    //Read
    function getAllVolontaire()
    {
        $sql = "SELECT idVolontaire as id, nomVolontaire as nom, ageVolontaire as age FROM volontaire WHERE suppr = 0";
        return $this->FetchAll($sql);
    }

    //Update
    function updateVolontaire($id, $nom, $age)
    {
        $sql = "UPDATE volontaire SET nomVolontaire=:nom, ageVolontaire=:age WHERE idVolontaire = :id";
        if ($this->Execute($sql, array(":id" => $id, ":nom" => $nom, ":age" => $age))) {
            return true;
        }
        return false;
    }

    //Delete
    function deleteVolontaire($id)
    {
        //test avant si le volontaire est reponsable d'une buvette
        $sqlBuv = "SELECT * FROM buvette WHERE idVolontaire = :id AND suppr = 0";
        if (count($this->FetchAll($sqlBuv, array(":id" => $id))) == 0) {
            $sql = "UPDATE volontaire SET suppr=1 WHERE idVolontaire = :id";
            if ($this->Execute($sql, array(":id" => $id))) {
                return "true";
            }
            return "false";
        }
        return "vol";
    }
    #endregion



    #region Buvettes
    //Create
    function addBuvette($buvette, $emplacement, $idResp)
    {
        $sql = "INSERT INTO buvette(nomBuvette, emplacementB, idVolontaire) VALUES (:buvette,:emplacement,:idResp)";
        if ($this->Execute($sql, array(":buvette" => $buvette, ":emplacement" => $emplacement, ":idResp" => $idResp))) {
            return true;
        }
        return false;
    }

    //Read
    function getAllBuvettes()
    {
        $sql = "SELECT idBuvette as id, nomBuvette, emplacementB as emplacement, buvette.idVolontaire as idVol, nomVolontaire as nom, ageVolontaire as age FROM buvette INNER JOIN volontaire ON buvette.idVolontaire = volontaire.idVolontaire WHERE buvette.suppr = 0 ORDER BY buvette.idBuvette ASC";
        return $this->FetchAll($sql);
    }

    //Update
    function updateBuvette($id, $nom, $emplacement, $idResp)
    {
        $sql = "UPDATE buvette SET nomBuvette=:nom, emplacementB=:emplacement, idVolontaire=:idResp WHERE idBuvette = :id";
        if ($this->Execute($sql, array(":id" => $id, ":nom" => $nom, ":emplacement" => $emplacement, ":idResp" => $idResp))) {
            return true;
        }
        return false;
    }

    //Delete
    function deleteBuvette($id)
    {
        //test avant si la buvette est assigner à un match
        $sqlAss = "SELECT * FROM assigner WHERE idBuvette = :id AND suppr = 0";
        if (count($this->FetchAll($sqlAss, array(":id" => $id))) == 0) {
            $sql = "UPDATE buvette SET suppr=1 WHERE idBuvette = :id";
            if ($this->Execute($sql, array(":id" => $id))) {
                return "true";
            }
            return "false";
        }
        return "buv";
    }
    #endregion



    #region Equipe    
    //Create
    function addEquipe($pays, $drapeau)
    {
        $sql = "INSERT INTO equipe(paysEquipe, drapeauEquipe) VALUES (:pays,:drapeau)";
        if ($this->Execute($sql, array(":pays" => $pays, ":drapeau" => $drapeau))) {
            return true;
        }
        return false;
    }

    //Read
    function getAllEquipe()
    {
        $sql = "SELECT idEquipe as id, paysEquipe as pays, drapeauEquipe as drapeau FROM equipe WHERE suppr = 0";
        return $this->FetchAll($sql);
    }

    //Update
    function updateEquipe($id, $pays, $drapeau)
    {
        $sql = "UPDATE equipe SET paysEquipe=:pays, drapeauEquipe=:drapeau WHERE idEquipe = :id";
        if ($this->Execute($sql, array(":id" => $id, ":pays" => $pays, ":drapeau" => $drapeau))) {
            return true;
        }
        return false;
    }

    //Delete
    function deleteEquipe($id)
    {
        //test avant si l'equipe est participe à un match
        $sqlPar = "SELECT * FROM matchs WHERE idEqu1 = :id OR idEqu2 = :id AND suppr = 0";
        if (count($this->FetchAll($sqlPar, array(":id" => $id))) == 0) {
            $sql = "UPDATE equipe SET suppr=1 WHERE idEquipe = :id";
            if ($this->Execute($sql, array(":id" => $id))) {
                return "true";
            }
            return "false";
        }
        return "equ";
    }
    #endregion



    #region Matchs
    //Create
    function addMatch($date, $emplacement, $equ1, $scoreEqu1, $equ2, $scoreEqu2)
    {
        $sql = "INSERT INTO matchs(dateMatch, emplacement, idEqu1, scoreEqu1, idEqu2, scoreEqu2) VALUES (:date,:emplacement,:equ1,:scoreEqu1,:equ2,:scoreEqu2)";
        if ($this->Execute($sql, array(":date" => $date, ":emplacement" => $emplacement, ":equ1" => $equ1, ":scoreEqu1" => $scoreEqu1, ":equ2" => $equ2, ":scoreEqu2" => $scoreEqu2))) {
            return true;
        }
        return false;
    }

    //Read
    function getAllMatchs()
    {
        $sql = "SELECT idMatch as id, dateMatch as date, emplacement, idEqu1 as equ1, scoreEqu1, idEqu2 as equ2, scoreEqu2, equ1.paysEquipe as pays1, equ1.drapeauEquipe as drap1, equ2.paysEquipe as pays2, equ2.drapeauEquipe as drap2 FROM matchs INNER JOIN equipe as equ1 ON matchs.idEqu1 = equ1.idEquipe INNER JOIN equipe as equ2 ON matchs.idEqu2 = equ2.idEquipe WHERE matchs.suppr = 0";
        return $this->FetchAll($sql);
    }

    //Update
    function updateMatch($id, $date, $emplacement, $equ1, $scoreEqu1, $equ2, $scoreEqu2)
    {
        $sql = "UPDATE matchs SET dateMatch=:date, emplacement=:emplacement, idEqu1=:equ1, scoreEqu1=:scoreEqu1, idEqu2=:equ2, scoreEqu2=:scoreEqu2 WHERE idMatch = :id";
        if ($this->Execute($sql, array(":id" => $id, ":date" => $date, ":emplacement" => $emplacement, ":equ1" => $equ1, ":scoreEqu1" => $scoreEqu1, ":equ2" => $equ2, ":scoreEqu2" => $scoreEqu2))) {
            return true;
        }
        return false;
    }

    //Delete
    function deleteMatch($id)
    {
        $sqlAss = "SELECT * FROM assigner WHERE idMatch = :id AND suppr = 0";
        if (count($this->FetchAll($sqlAss, array(":id" => $id))) == 0) {
            $sql = "UPDATE matchs SET suppr=1 WHERE idMatch = :id";
            if ($this->Execute($sql, array(":id" => $id))) {
                return "true";
            }
            return "false";
        }
        return "buv";
    }
    #endregion

}
