<?php
//permet de mettre dans un tableau l'url en séparant avec le /
$url =  explode('/', rtrim($_GET['url'], '/'));
//var_dump($url);
//$url[0] => le controleur
//$url[1] => l'action donc la logique
//$url[2] => les paramétres

//on vas vérifier avec si l'argument 0 dopnc le controlleur est vide car si c'est le cas on affichera la page index
$url[0] = $url[0] == "" ? "Accueil" : $url[0];

//Je test pour voir si le fichier existe avec $url[0] et donc si j'ai un controleur pour l'url
if (file_exists('controller/' . $url[0]  . '.php')) {

    //J'ajoute le controller dans mon fichier
    require('controller/' . $url[0]  . '.php');
    
    //Instantie un nouvel objet grace au constructeur de la classe de mon controleur
    $con = new $url[0];

    //regarde si il y a un action par defaut index
    $action = isset($url[1]) ? $url[1] : "index";

        //Je vais tester si la method que je vais appeler via l'url existe
        if(method_exists($con, $action)) {
            //si il y a un paramétre
            if(array_key_exists(2,$url)) {
                //Alors j'exécute la fonction avec argument
                $con->{$action}($url[2]);
            } else {
                //Alors j'exécute la fonction sans argument
                //les accolades servent à utiliser dynamiquement un nom de fonction ou de variable
                $con->{$action}();
            }        
        //si non j'affiche un message d'erreur
        } else {
            echo '<h1>Pas de function <b>"' . $url[1] . '"</b> dans le controller <b>"'.$url[0].'"</b></h1>';
        }
}
else {
    require_once("view/404.php");
    //msg($url);
}

?>