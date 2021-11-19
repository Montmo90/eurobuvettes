<?php
class Prive extends Controller {

    function start() {
        session_start();
    }

    function index() {
        if(!isset($_SESSION['login'])) {
            $this->render("prive_connexion");
        } else {
            $this->render("prive_formulaire");
        }
    } 
    
    function login() {
        if(isset($_SESSION['login']))
            $this->back();

        $mdp = htmlentities($_POST['mdp']);

        if($mdp == "123") {
            $_SESSION['login'] = true;
            //connexion
            $this->back();
        } else {
            //erreur
            $this->render("prive_connexion", ["erreur" => true]);
        }
    }
    
    function logout() {
        session_destroy();
        $this->back();
    }

    function estLoguer() {
        if(!isset($_SESSION['login'])) {
            $this->back();
        }
    }

    #region Volontaire
    //Create
    function addVol (){
        $this->estLoguer();
        
        $nom = htmlentities($_POST['nom']);
        $age = intval(htmlentities($_POST['age']));
        
        if ($nom == ""){
            echo 'false';
            die;
        }

        if ($age == "" || $age < 18) {
            echo 'false';
            die;
        }
        
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
        $this->estLoguer();
        
        $id = htmlentities($_POST['id']);
        $nom = htmlentities($_POST['nom']);
        $age = htmlentities($_POST['age']);
        
        if ($nom == ""){
            echo 'false';
            die;
        }

        if ($age == "" || $age < 18) {
            echo 'false';
            die;
        }
        
        if($this->model->updateVolontaire($id, $nom, $age)) {
            echo 'true';
            die;
        }
        echo 'false';
    }

    //Delete
    function deleteVol () {
        $this->estLoguer();
        
        $id = htmlentities($_POST['id']);
        $reponse = $this->model->deleteVolontaire($id);
        echo $reponse;
    }
    #endregion

    #region Buvettes
    //Create
    function addBuv (){
        $this->estLoguer();
        
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
    function getAllBuv() {
        echo json_encode($this->model->getAllBuvettes());
    }
    
    //Update
    function updateBuv() {
        $this->estLoguer();
        
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
    function deleteBuv () {
        $this->estLoguer();
        
        $id = htmlentities($_POST['id']);
        $reponse = $this->model->deleteBuvette($id);
        echo $reponse;
    }
    #endregion

    #region Equipe
    //Create
    function addEqu(){
        $this->estLoguer();
        
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
        $this->estLoguer();
        
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
        $this->estLoguer();
        
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
        $this->estLoguer();
        
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
        $this->estLoguer();
        
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
        $this->estLoguer();
        
        $id = htmlentities($_POST['id']);

        echo $this->model->deleteMatch($id);
    }
    #endregion

}

?>