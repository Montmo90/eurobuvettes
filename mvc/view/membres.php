<div id="rechercheMembres" class="container-md panel py-3">
    <form class="formulaireRechercheMembres row row-cols-lg-auto align-items-center justify-content-center" name="formulaireConnexion">
        <div class="col-12">
            <input type="text" class="form-control" name="nom" id="nom" placeholder="Nom">
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