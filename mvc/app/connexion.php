<!--
15/07/2021
Projet : Site EuroBuvette 2021
Groupe B :
            Fabian Metayer
            Jeremy Chekroun
            Morgan Tranquard
-->
<?php
    class Connexion {
        public function Connect() {
            return new PDO ("mysql:host=localhost; dbname=connect", "root", "");
        }
    }
?>