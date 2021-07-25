<!--
15/07/2021
Projet : Site EuroBuvette 2021
Groupe B :
            Fabian Metayer
            Jeremy Chekroun
            Morgan Tranquard
-->
<?php

require_once("icontroller.php");

abstract class Controller implements IController{
    public $nameClass;
    public $model;

    function __construct() {
        $this->begin($this->nameClass);

        require_once("model/". $this->nameClass .".php");
        $n = "M_".$this->nameClass;
        $this->model = new $n();

        $this->start();
    }

    public function render(string $fichier, array $data = []) {
        ob_start();

        require_once("view/".$fichier.".php");

        $content = ob_get_clean();

        require_once("view/layout/default.php");
    }

}
?>