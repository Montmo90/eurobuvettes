<!--
16/04/2021
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
    <link rel="stylesheet" href="../../css/style-bts.css">
    <link rel="stylesheet" href="couleur.css">
    <title>Eurobuvettes 2021</title>
</head>

<body onload="accueil()" class="vh-100 d-flex flex-column">

    <!--    Header      -->   
    <?php require('../../template/header.php'); ?>

    <!--        Main            -->
    <main class="main">
        <div class="mainAccueil container py-3">
            <section class="accueil row" id="buvettes">
                <section class="buvettesSlot col-lg-8">                
                    <!--Emplacement des buvettes ajouté via JS-->
                </section>
                <!-- Aside annexe accueil   -->
                <aside class="annexeAccueil col-lg-4 rounded-1 py-3">
                    <p>Bienvenue sur le site de gestion des buvettes de l'Euro 2021, ici vous trouverez tout le nécessaire pour la gestion des buvettes de la saison.</p>
                    <hr class="asideBarre">
                    <p>11/06/2021 : Le Championnat d'Europe de football 2021 commence !</p>
                    <p>25/02/2021 : Bientôt de nouveaux matchs, tenez vous prêts pour cette nouvelle saison.</p>
                    <p>15/01/2021 : Excellents retours sur les précèdentes sessions, continuez ainsi !</p>
                    <p>01/01/2020 : Bonne année !  /!\ Recherche un dernier volontaire en urgence pour le match de ce soir /!\</p>
                    <p>29/12/2020 : 3 nouveaux volontaires, bienvenue à eux !</p>
                    <p>18/12/2020 : Besoin de volontaires pour les matchs de janvier, soyez présents après les fêtes !</p>
                </aside>            
            </section>
        </div>
    </main>

    <!--        Footer          -->
    <?php require('../../template/footer.php'); ?>

    <!--        JS          -->
    <script src="accueil.js"></script>
</body>
</html>