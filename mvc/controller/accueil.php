<?php
class Accueil extends Controller {
    
    function start() {}

    function index() {
        $matchs = $this->model->getAllMatch();

        $matchsAfter = array();

        //var_dump($matchs);
        foreach ($matchs as $value) {
            $participer = $this->model->getParticiper($value["idMatch"]);
            $value += ['participer' => $participer];

            $buvettes = $this->model->getBuvette($value["idMatch"]);
            $buvettesAfter = array();

            foreach ($buvettes as $b) {               
                $present = $this->model->getPresent($b["idBuvette"]);
                $b += ['present' => $present];
                $buvettesAfter += $b;
            }

            $value += ['buvette' => $buvettesAfter];

            $matchsAfter += [$value];
        }

        //var_dump($matchsAfter);
        $this->render("accueil", ['matchs' => $matchsAfter]);
    }

}
?>