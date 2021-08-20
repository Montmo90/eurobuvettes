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

    #region Volontaire
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
        $reponse = $this->model->deleteVolontaire($id);
        echo $reponse;
    }
    #endregion

    #region Buvettes
    //Create
    function addBuvette (){
        $buvette = htmlentities($_POST['buvette']);
        $emplacement = htmlentities($_POST['emplacement']);
        $idResp = htmlentities($_POST['idResp']);

        if($this->model->addBuvette($buvette, $emplacement, $idResp)) {
            echo 'true';
            die;
        }
        echo 'false';
    }
    
    //Read
    function getAllBuvettes() {
        echo json_encode($this->model->getAllBuvettes());
    }
    
    //Update
    function updateBuvette() {
        $id = htmlentities($_POST['id']);
        $buvette = htmlentities($_POST['buvette']);
        $emplacement = htmlentities($_POST['emplacement']);
        $idResp = htmlentities($_POST['idResp']);
        
        if($this->model->updateBuvette($id, $buvette, $emplacement, $idResp)) {
            echo 'true';
            die;
        }
        echo 'false';
    }

    //Delete
    function deleteBuvette () {
        $id = htmlentities($_POST['id']);

        if($this->model->deleteBuvette($id)) {
            echo 'true';
            die;
        }
        echo 'false';
    }
    #endregion
}

?>