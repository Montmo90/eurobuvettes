<?php
class M_Accueil extends Model {

    public function getAllMatch() {
        $sql = "SELECT * FROM matchs";
        return $this->Query($sql);
    }

    public function getParticiper($idMatch) {
        $sql = "SELECT * FROM participer INNER JOIN equipe ON participer.idEquipe = equipe.idEquipe WHERE idMatch = " . $idMatch;
        return $this->Query($sql);
    }

    public function getBuvette($idMatch) {
        $sql = "SELECT * FROM est_ouverte INNER JOIN buvette ON est_ouverte.idBuvette = buvette.idBuvette INNER JOIN volontaire ON buvette.idVolontaire = volontaire.idVolontaire WHERE idMatch = " . $idMatch;
        return $this->Query($sql);
    }

    public function getPresent($idBuvette) {
        $sql = "SELECT * FROM est_present INNER JOIN volontaire ON est_present.idVolontaire = volontaire.idVolontaire WHERE idMatch = " . $idBuvette;
        return $this->Query($sql);
    }
}
?>