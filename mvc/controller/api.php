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

    

    #region Equipe
    //Create
    function addEqu(){
        $pays = htmlentities($_POST['pays']);
        $drapeau = htmlentities($_POST['drapeau']);

        if($this->model->addEquipe($pays, $drapeau)) {
            echo 'true';
            die;
        }
        echo 'false';
    }

    //Read
    function getAllEqu() {
        echo json_encode($this->model->getAllEquipe());
    }

    //Update
    function updateEqu() {
        $id = htmlentities($_POST['id']);
        $pays = htmlentities($_POST['pays']);
        $drapeau = htmlentities($_POST['drapeau']);
        
        if($this->model->updateEquipe($id, $pays, $drapeau)) {
            echo 'true';
            die;
        }
        echo 'false';
    }

    //Delete
    function deleteEqu() {
        $id = htmlentities($_POST['id']);
        $reponse = $this->model->deleteEquipe($id);
        echo $reponse;
    }

    function listDrapeau() {
        $files = array();
        $count = 0;
        foreach (scandir("public/img/flags") as $value) {
            if($count > 2)
                array_push($files, $value);
            $count++;    
        }
        echo json_encode($files);
    }
    #endregion


    
    #region Matchs
    //Create
    function addMat (){
        $date = htmlentities($_POST['date']);
        $emplacement = htmlentities($_POST['emplacement']);
        $equ1 = htmlentities($_POST['equ1']);
        $scoreEqu1 = htmlentities($_POST['scoreEqu1']);
        $equ2 = htmlentities($_POST['equ2']);
        $scoreEqu2 = htmlentities($_POST['scoreEqu2']);

        if($this->model->addMatch($date, $emplacement, $equ1, $scoreEqu1, $equ2, $scoreEqu2)) {
            echo 'true';
            die;
        }
        echo 'false';
    }
    
    //Read
    function getAllMat() {
        echo json_encode($this->model->getAllMatchs());
    }
    
    //Update
    function updateMat() {
        $id = htmlentities($_POST['id']);
        $date = htmlentities($_POST['date']);
        $emplacement = htmlentities($_POST['emplacement']);
        $equ1 = htmlentities($_POST['equ1']);
        $scoreEqu1 = htmlentities($_POST['scoreEqu1']);
        $equ2 = htmlentities($_POST['equ2']);
        $scoreEqu2 = htmlentities($_POST['scoreEqu2']);
        
        if($this->model->updateMatch($id, $date, $emplacement, $equ1, $scoreEqu1, $equ2, $scoreEqu2)) {
            echo 'true';
            die;
        }
        echo 'false';
    }

    //Delete
    function deleteMat () {
        $id = htmlentities($_POST['id']);

        if($this->model->deleteMatch($id)) {
            echo 'true';
            die;
        }
        echo 'false';
    }
    #endregion

}
