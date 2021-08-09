<div class="container py-3">
    <section class="row panel text-center py-3">
        <?php if(isset($erreur)) : ?>
            <div class="alert alert-danger" role="alert">
                Erreur de mot de passe
            </div>
        <?php endif; ?>
        <p>Veuillez saisir le mot de passe pour accéder au panel administrateur.</p>
        <form class="row align-items-center justify-content-center" name="formulaireConnexion" action="<?= $this->url ?>prive/login" method="POST">
            <div class="col-lg-4">
                <input class="form-control" type="password" name="mdp" id="mdp" placeholder="Mot de passe">
            </div>
            <div class="col-12 pt-2">
                <input class="btn btn-custom" type="submit" value="Connexion">  
            </div>            
        </form>
    </section>
</div>
