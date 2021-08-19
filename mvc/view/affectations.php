<div class="panel container">
    <nav class="pt-3">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active w-50" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Affecter un volontaire</button>
            <button class="nav-link w-50" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Statut buvette</button>
        </div>
    </nav>
    <div class="tab-content text-center py-2" id="nav-tabContent">
        <!--    Affichage bouton Affecter un volontaire     -->
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <form id="choixVol" class="formAffect container-fluid">
                <div class="row d-flex align-items-center">
                    <div class="col-md">
                        <span>Match :</span>
                        <select id="match_list" class="form-select" onchange="changeListBuvettes('buvette_list', this)">
                            <option selected>
                                <!--        Insertion liste matchs          -->
                            </option>
                        </select>
                    </div>
                    <div class="col-md">
                        <span>Buvette :</span>
                        <select id="buvette_list" class="form-select">
                            <!--        Insertion liste buvettes        -->
                        </select>
                    </div>
                    <div class="col-md">
                        <span>Volontaire :</span>
                        <input type="text" list="volontaire_list" name="volontaire" class="form-control">
                        <datalist id="volontaire_list">
                            <!--        Insertion listes volontaires        -->
                        </datalist>
                    </div>
                    <div class="col-md">
                        <label class="form-check-label" for="responsable">Responsable :</label>
                        <input type="checkbox" class="from-check-input" id="responsable">
                    </div>
                    <div class="col-12 col-xl pt-3 pt-xl-0">

                        <button type="submit" class="btn btn-custom">Envoyer</button>
                        <button type="reset" onclick="clearAffect('buvette_list')" class="btn btn-custom">Reinitialiser</button>
                    </div>
                </div>
            </form>
        </div>
        <!--    Affichage bouton statut de buvette     -->
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <form id="choixBuv" class="formAffect row d-flex align-items-center">

                <div class="col-md">
                    <span>Match :</span>
                    <select id="match_list2" onchange="changeListBuvettes('buvette_list2',this)" class="form-select">
                        <option selected></option>
                    </select>
                </div>
                <div class="col-md">
                    <span>Buvette :</span>
                    <select id="buvette_list2" onchange="selectBuvettes()" class="form-select">
                    </select>
                </div>
                <div class="col-md">
                    <span id="statut">Statut : </span>
                </div>
                <div class="col-md pt-3 pt-lg-0">
                    <button type="button" class="btn btn-custom" onclick="confirmation(true)" id="btnOuvrirBuvette" disabled>Ouvrir</button>
                    <button type="button" class="btn btn-custom" onclick="confirmation(false)" id="btnFermerBuvette" disabled>Fermer</button>
                </div>
            </form>
        </div>
    </div>
</div>