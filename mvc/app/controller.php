<?php

require_once("icontroller.php");

abstract class Controller implements IController{
    public $nameClass;
    public $model;
    public $url;

    function __construct() {
        $url = str_replace('index.php', '', $_SERVER['SCRIPT_FILENAME']);
        $this->url = str_replace($_SERVER['CONTEXT_DOCUMENT_ROOT'], '', $url);

        require_once("model/". get_class($this) .".php");
        $n = "M_".get_class($this);
        $this->model = new $n();

        $this->start();
    }

    function render(string $fichier, array $data = []) {
        extract($data);

        ob_start();

        require_once("view/".$fichier.".php");

        $content = ob_get_clean();

        require_once("view/layout/default.php");
    }

    function back() {
        header("Location:../" . get_class($this));
        die;
    }

}
?>