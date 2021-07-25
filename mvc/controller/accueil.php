<!--
15/07/2021
Projet : Site EuroBuvette 2021
Groupe B :
            Fabian Metayer
            Jeremy Chekroun
            Morgan Tranquard
-->
<?php
class Accueil extends Controller {

    function begin(&$name) {
        $name = self::class;
    }

    function start() {
        $matchs = $this->model->getAllMatch();
        $this->render("accueil", $matchs);
    }

}
?>