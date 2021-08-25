<?php
class Affectations extends Controller {
    
    function start() {}

    function index() {
        $this->render("affectations");
    }

    #region Assigner
    //Create
    function addAss(){
        $idBuvette = htmlentities($_POST['idBuvette']);
        $idMatch = htmlentities($_POST['idMatch']);

        echo $this->model->addAssigner($idBuvette, $idMatch);
    }
    
    //Read
    function getAllAss() {
        echo json_encode($this->model->getAllAssigner());
    }
    
    //Update
    function updateAss() {
        $id = htmlentities($_POST['id']);
        $idBuvette = htmlentities($_POST['idBuvette']);
        $idMatch = htmlentities($_POST['idMatch']);
        
        echo $this->model->updateAssigner($id, $idBuvette, $idMatch);
    }

    //Delete
    function deleteAss () {        
        $id = htmlentities($_POST['id']);
        echo $this->model->deleteAssigner($id);
    }   
    #endregion
}