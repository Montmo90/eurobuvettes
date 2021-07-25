<?php

class Prive extends Controller {

    function __construct() {
        echo "Prive";
    }

    public function AddVolontaire() {
        echo 'Ajout volontaire';
        $this->model->addVolotaire();
        require_once("view/prive.php");
    }

    public function DeleteVolontaire($id) {

    }

    public function UpdateVolontaire($id, $nom, $age) {

    }
    
}

?>