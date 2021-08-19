<div class="container-md panel py-3">
    <form class="formulaireStats row row-cols-lg-auto align-items-center justify-content-center">
        <div class="col-12">
            <input list="listeMatchs" id="matchs" name="matchs" placeholder="Liste des matchs" class="form-control" />
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