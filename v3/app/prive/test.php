<?php


    /*var_dump($_GET);

    if(count($_GET) != 0) {

        echo "Get de pain de " . $_GET["nom"] . " ;p";

    } else {

        echo "Pas get de pain";
    }*/



    var_dump($_POST);

    if(count($_POST)) {
        echo "Post de pain de " . $_POST["nom"] . " ;p";
    }



?>


<form action="#" method="POST">
    <input type="text" name="nom" id="" placeholder="Nom">
    <button type="submit">Valider</button>
</form>