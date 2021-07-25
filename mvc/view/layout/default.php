<!--
15/07/2021
Projet : Site EuroBuvette 2021
Groupe B :
            Fabian Metayer
            Jeremy Chekroun
            Morgan Tranquard
-->
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="public/css/style-bts.css">
    <title>Eurobuvettes 2021</title>
</head>

<body class="vh-100 d-flex flex-column">

<div class="container-fluid my-2">
    <div class="row d-flex align-items-end">
        <div class="col-lg-1">
            <img src="public/img/UEFA_Euro_2020_logo.png" alt="logo eurobuvette 2021" class="img-fluid">
        </div>
        <div class="col-lg-11">
            <h1>EUROBuvettes</h1>
            <h2>Le site de gestion des buvettes de l'EURO 2021 !</h2>
        </div>
    </div>
</div>

<!--        Menu navigation du header           -->
<div class="navbar navbar-expand-lg navigation p-0">
    <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav navlien">
            <?php
                if($this->nameClass == "Accueil")
                    echo '<li class="nav-item"><a class ="nav-link mx-3 active" href="../accueil/accueil.php">Nouveautés</a></li>';
                else
                    echo '<li class="nav-item"><a class ="nav-link mx-3" href="../accueil/accueil.php">Nouveautés</a></li>';
                    

                if($this->nameClass == "Statistiques")
                    echo '<li class="nav-item"><a class ="nav-link mx-3 active" href="../statistiques/statistiques.php">Statistiques</a></li>';
                else
                    echo '<li class="nav-item"><a class ="nav-link mx-3" href="../statistiques/statistiques.php">Statistiques</a></li>';
                

                if($this->nameClass == "Recherchemembres")
                    echo '<li class="nav-item"><a class ="nav-link mx-3 active" href="../membres/recherchemembres.php">Membres</a></li>';
                else
                    echo '<li class="nav-item"><a class ="nav-link mx-3" href="../membres/recherchemembres.php">Membres</a></li>';


                if($this->nameClass == "Affectations")
                    echo '<li class="nav-item"><a class ="nav-link mx-3 active" href="../affectations/affectations.php">Affectations</a></li>';
                else
                    echo '<li class="nav-item"><a class ="nav-link mx-3" href="../affectations/affectations.php">Affectations</a></li>';

                
                if($this->nameClass == "Prive")
                    echo '<li class="nav-item"><a class ="nav-link mx-3 active" href="../prive/prive.php">Administrateur</a></li>';
                else
                    echo '<li class="nav-item"><a class ="nav-link mx-3" href="../prive/prive.php">Administrateur</a></li>';
            ?>
        </ul>
    </div>
</div>

<main class="main">

    <?= $content ?>

</main>
    <footer class="container-fluid py-2 mt-auto">
            <div class="row text-center ">
                <p class="my-1">&copy; Eurobuvettes 2021</p>
            </div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</body>
</html>