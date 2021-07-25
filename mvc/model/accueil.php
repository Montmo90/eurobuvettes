<?php
class M_Accueil extends Model {

    public function getAllMatch() {
        $sql = "SELECT * FROM matchs";
        $query = $this->connect->prepare($sql);
        $query->execute();
        return $query->fetchAll();
    }
}
?>