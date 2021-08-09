<?php

$host = "localhost";
$dbName = "eurobuvette";
$userName = "root";
$mdp = "";

$connect;

try {
    $connect = new PDO ("mysql:host=" . $host ."; dbname=" . $dbName, $userName, $mdp);
} catch(PDOException $e) {
    echo "Erreur BD : " . $e->getMessage();
} catch(Exception $e) {
    echo "Autre erreur : " . $e->getMessage();
}

$sql = "SELECT * FROM matchs";
$query = $connect->prepare($sql);
$query->execute();

echo json_encode($query->fetchAll(PDO::FETCH_ASSOC));
