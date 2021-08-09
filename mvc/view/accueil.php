<div class="container py-3">
    <div class="row" id="buvettes">
        <section class="buvettesSlot col-lg-8">                
            <!--Emplacement des buvettes ajouté via JS-->
            <!--<pre>
            <?php print_r($matchs); ?>
            </pre>-->
            <?php foreach($matchs as $match): ?>
                <div class="accordion accordion-flush panel mx-0 mb-4" id="accordionFlushExample">
                    <div class="accordion-item accordion-item-custom">
                        <div class="accordion-header" id="flush-heading<?= $match['idMatch'] ?>">
                            <button class="accordion-button collapsed buvExpand accordion-button-custom row mx-0 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse<?= $match['idMatch'] ?>" aria-expanded="false" aria-controls="flush-collapse<?= $match['idMatch'] ?>">
                                <div class="col">
                                    <?php //${listeMatch[i].buvette.ouvert ? "Ouvert" : "Fermée"} ?>
                                </div>
                                <div class="col">
                                    <div class="row">
                                    <div class="col-sm-5">
                                        <img src="../../${listeMatch[i].teamA.drapeau}" alt="drapeau ${listeMatch[i].teamA.pays}" class="buvettesImgDrapeau img-fluid">
                                        <?= $match['participer'][0]['paysEquipe'] ?>
                                    </div>
                                    <div class="col-sm-2">
                                    VS
                                    </div>
                                    <div class="col-sm-5">
                                        <img src="../../${listeMatch[i].teamB.drapeau}" alt="drapeau ${listeMatch[i].teamB.pays}" class="buvettesImgDrapeau img-fluid">
                                        <?= $match['participer'][1]['paysEquipe'] ?>
                                    </div>
                                    </div>
                                </div>
                                <div class="col text-center">
                                    <?= $match['dateMatch']?>
                                </div>
                                <div class="col">
                                    <?php //${listeMatch[i].buvette.lieu} ?>
                                </div>
                            </button>
                        </div>
                        <div id="flush-collapse<?= $match['idMatch'] ?>" class="accordion-collapse collapse buvExpand" aria-labelledby="flush-heading<?= $match['idMatch'] ?>" data-bs-parent="#accordionFlushExample">
                            <div class="row pt-5">
                                <div class="col">
                                <p><span>Nom :</span>  <?php //${listeMatch[i].buvette.nom} ?></p>
                                </div>
                                <div class="col">
                                <p><span>Responsable :</span>  <?php //${listeMatch[i].buvette.resp} ?></p>
                                </div>
                                <div class="col">
                                <p><span>Volontaires :</span>  <?php //${listeMatch[i].buvette.listVol.replaceAll(',', ', ')} ?></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            <?php endforeach; ?>

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
    </div>
</div>