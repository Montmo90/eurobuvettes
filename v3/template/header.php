<div class="container-fluid my-2">
    <div class="row d-flex align-items-end">
        <div class="col-lg-1">
            <img src="../../img/UEFA_Euro_2020_logo.png" alt="logo eurobuvette 2021" class="img-fluid">
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
                $url = explode("/", $_SERVER['REQUEST_URI']);
                $page = $url[count($url) - 1];
                
                if($page == "accueil.php")
                    echo '<li class="nav-item"><a class ="nav-link mx-3 active" href="../accueil/accueil.php">Nouveautés</a></li>';
                else
                    echo '<li class="nav-item"><a class ="nav-link mx-3" href="../accueil/accueil.php">Nouveautés</a></li>';
                    

                if($page == "statistiques.php")
                    echo '<li class="nav-item"><a class ="nav-link mx-3 active" href="../statistiques/statistiques.php">Statistiques</a></li>';
                else
                    echo '<li class="nav-item"><a class ="nav-link mx-3" href="../statistiques/statistiques.php">Statistiques</a></li>';
                

                if($page == "recherchemembres.php")
                    echo '<li class="nav-item"><a class ="nav-link mx-3 active" href="../membres/recherchemembres.php">Membres</a></li>';
                else
                    echo '<li class="nav-item"><a class ="nav-link mx-3" href="../membres/recherchemembres.php">Membres</a></li>';


                if($page == "affectations.php")
                    echo '<li class="nav-item"><a class ="nav-link mx-3 active" href="../affectations/affectations.php">Affectations</a></li>';
                else
                    echo '<li class="nav-item"><a class ="nav-link mx-3" href="../affectations/affectations.php">Affectations</a></li>';

                
                if($page == "prive.php")
                    echo '<li class="nav-item"><a class ="nav-link mx-3 active" href="../prive/prive.php">Administrateur</a></li>';
                else
                    echo '<li class="nav-item"><a class ="nav-link mx-3" href="../prive/prive.php">Administrateur</a></li>';

            ?>
        </ul>
    </div>       
</div>
