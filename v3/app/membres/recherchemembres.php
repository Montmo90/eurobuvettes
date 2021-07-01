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


<body class="vh-100 d-flex flex-column">

    <!--    Header      -->   
    <?php include('../../template/header.php'); ?>

    <!--        Main            -->
    <div class="container-fluid pt-3">
        <div id="rechercheMembres" class="container-md panel py-2">        
            <form class="formulaireRechercheMembres row row-cols-lg-auto align-items-center justify-content-center" name="formulaireConnexion">
                <div class="col-12">
                    <input type="text" class="form-control" name="nom" id="nom" placeholder="Nom" >
                </div>
                <div class="col-12">
                    <input type="text" class="form-control" name="age" id="age" placeholder="Age">
                </div>
                <div class="col-12">
                    <input type="text" class="form-control" name="nbParticipations" id="nbParticipations" placeholder="Nombre de participation">
                </div>
                <div class="col-12">
                    Responsable d’une buvette ?
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input me-lg-auto" name="respBuvetteOui" id="respBuvetteOui">
                        <label class="form-check-label" for="respBuvetteOui">Oui</label>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" name="respBuvetteNon" id="respBuvetteNon">
                        <label class="form-check-label" for="respBuvetteNon">Non</label>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-custom" onclick="rechercheMembres()">Rechercher</button>
                </div>                
            </form>
        </div>      
        <div id="resultat" class="table-responsive" hidden>
            <!--Résultat de la recherche ajouté via JS-->
        </div>
    </div>

    <!--        Footer          -->
    <?php include('../../template/footer.php'); ?>

    <!--        JS          -->
    <script src="recherchemembre.js"></script>
    
</body>
</html>