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
    <main class="center">        
        <section>
            <form class="panel" name="formulaireConnexion">
                    <p>Veuillez saisir le mot de passe pour accéder au panel administrateur.</p><br>
                    <input type="password" name="mdp" id="mdp" placeholder="Mot de passe"><br>
                    <input type="submit" value="Connexion" onclick="LogAdmin()">
            </form>
        </section>
    </main>

    <!--        Footer          -->
    <?php include('../../template/footer.php'); ?>

    <!--        JS          -->
    <script src="prive.js"></script>
</body>


</html>