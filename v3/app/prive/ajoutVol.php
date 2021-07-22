<?php
    if(count($_POST) == 0) {
        header("Location: prive.php");
        die();
    } else {
        echo "tu as passé les variables suivantes :";
        var_dump($_POST);

        require_once("../connexion.php");

        $pdo = new Connect;

        $sql = "INSERT INTO `volontaire`(`nomVolontaire`, `ageVolontaire`) VALUES (:nom,:age)";

        $prep = $pdo->connection()->prepare($sql);

        $prep->execute(array(":nom" => $_POST["newVol"], ":age" => $_POST["ageVol"]));

        header("Location: prive.php");
        die();

    }
?>