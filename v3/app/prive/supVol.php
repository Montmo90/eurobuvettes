<?php 
    if(count($_POST) == 0) {
        header("Location: prive.php");
        die();
    } else {
        echo "tu as passé les variables suivantes :";
        var_dump($_POST);

        require_once("../connexion.php");

        $pdo = new Connect;

        $pdo->connection()->query("DELETE FROM `volontaire` WHERE idVolontaire = " . $_POST["delVol"]);

        header("Location: prive.php");
        die();
    }

?>