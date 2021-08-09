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
    
    function start() {}

    function index() {
        $matchs = $this->model->getAllMatch();

        //var_dump($matchs[0]);

        for ($i=0; $i < count($matchs); $i++) {
            $participer = $this->model->getParticiper($matchs[0][$i]);
            $matchs[$i] += ['participer' => $participer];

            $buvette = $this->model->getBuvette($matchs[0][$i]);
            for ($j=0; $j < count($buvette); $j++) {
                $present = $this->model->getPresent($buvette[0][$j]);
                $buvette[$j] += ['present' => $present];
            }            
            $matchs[$i] += ['buvette' => $buvette];
        }

        //var_dump($matchs);
        $this->render("accueil", ['matchs' => $matchs]);
    }

}
?>