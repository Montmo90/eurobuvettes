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
}

?>