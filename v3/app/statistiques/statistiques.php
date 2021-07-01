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


<body onload="listStatMatch()" class="vh-100 d-flex flex-column">

    <!--    Header      -->   
    <?php include('../../template/header.php'); ?>

    <!--        Main            -->
    <div class="container-fluid  main py-3 h-100 ">
        <div class="container-md panel py-2">
            <form class="formulaireStats row row-cols-lg-auto align-items-center justify-content-center">
                <div class="col-12">
                    <input list="listeMatchs" id="matchs" name="matchs" placeholder="Liste des matchs" class="form-control"/>
                    <datalist id="listeMatchs">
                     
                    </datalist>
                </div>
                <div class="col-12">
                    <input class="form-check-input me-lg-auto" type="checkbox" name="Top Volontaires" id="TopVol">
                    <label class="form-check-label" for="TopVol">Top Volontaires</label> 
                </div>
                <div class="col-12">
                    <input class="form-check-input me-lg-auto" type="checkbox" name="Top Buvettes" id="TopBuv">
                    <label class="form-check-label" for="TopBuv">Top Buvettes</label>
                </div>
                <div>
                    <input class="btn btn-custom" type="button" value="Rechercher" onclick="getStats()">
                </div>
              </form>
        </div>
        <div class="stats text-center table-responsive">
        </div>
    </div>

    <!--        Footer          -->
    <?php include('../../template/footer.php'); ?>

    <!--        JS          -->
    <script src="statistiques.js"></script>
    
</body>


</html>