<?php
class Api extends Controller {

    function start() {
        session_start();
        if(!isset($_SESSION['login'])) {
            //redirection
        }
    }

    function index() {
        //redirection
    }

    //Create
    function addVol (){
        $nom = htmlentities($_POST['nom']);
        $age = htmlentities($_POST['age']);

        if($this->model->addVolontaire($nom, $age)) {
            echo 'true';
            die;
        }
        echo 'false';
    }

    //Read
    function getAllVol() {
        echo json_encode($this->model->getAllVolontaire());
    }

    //Update
    function updateVol() {
        $id = htmlentities($_POST['id']);
        $nom = htmlentities($_POST['nom']);
        $age = htmlentities($_POST['age']);
        
        if($this->model->updateVolontaire($id, $nom, $age)) {
            echo 'true';
            die;
        }
        echo 'false';
    }

    //Delete
    function deleteVol () {
        $id = htmlentities($_POST['id']);

        if($this->model->deleteVolontaire($id)) {
            echo 'true';
            die;
        }
        echo 'false';
    }
}

?>