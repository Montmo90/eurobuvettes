<?php
class ModelPrive extends Model {
    function addVolotaire() {
        $sql = "INSERT INTO `volontaire`(`nomVolontaire`, `ageVolontaire`) VALUES (:nom,:age)";

        $prep = $pdo->connection()->prepare($sql);

        $prep->execute(array(":nom" => $_POST["newVol"], ":age" => $_POST["ageVol"]));

    }
}
?>