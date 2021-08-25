<div class="panel container">
    <nav class="pt-3">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="assignerBuvette-tab" data-bs-toggle="tab" data-bs-target="#assignerBuvette" type="button" role="tab" aria-controls="assignerBuvette" aria-selected="true">Affecter une buvette</button>
            <button class="nav-link" id="affecterVolontaire-tab" data-bs-toggle="tab" data-bs-target="#affecterVolontaire" type="button" role="tab" aria-controls="affecterVolontaire" aria-selected="false">Affecter un volontaire</button>
            <button class="nav-link" id="statutBuvette-tab" data-bs-toggle="tab" data-bs-target="#statutBuvette" type="button" role="tab" aria-controls="statutBuvette" aria-selected="false">Statut buvette</button>
        </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
        <!-- Assigner une buvette -->
        <div class="tab-pane fade show active" id="assignerBuvette" role="tabpanel" aria-labelledby="assignerBuvette-tab">
            <div class="row">
                <div class="col-6">
                    <div class="row justify-content-center p-2">
                        <input id="idAss" hidden>
                        <p>Assigner une buvette à un match</p>
                        <div class="col-12 pb-3">
                            <select id="buvListAss" class="form-select" aria-describedby="invalidListAss">
                                <!-- option -->
                            </select>
                            <div id="invalidListAss" class="invalid-feedback">
                                Merci de choisir une buvette.
                            </div>
                        </div>
                        <div class="col-12 pb-3">
                            <select id="matListAss" class="form-select" aria-describedby="invalidMatListAss">
                                <!-- option -->
                            </select>
                            <div id="invalidMatListAss" class="invalid-feedback">
                                Merci de choisir un match.
                            </div>
                        </div>
                        <div class="col-12 d-flex  align-items-end">
                            <input class="btn btn-custom" type="button" id="btnAddAss" value="Ajouter" disabled>
                            <input class="btn btn-danger ms-auto" type="button" id="btnCancelAss" value="Annuler" hidden>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row justify-content-center p-2 h-100">
                        <div class="col-12">
                            <p>Liste des affectations d'une buvette à un match</p>
                            <select id="assList" class="form-select">
                                <!-- option -->
                            </select>
                        </div>
                        <div class="col-12 d-flex align-items-end">
                            <input class="btn btn-custom" type="button" id="effacerAss" value="Effacer" disabled>
                            <input class="btn btn-warning ms-auto" type="button" id="modifAss" value="Modifier" disabled>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Affecter un volontaire -->
        <div class="tab-pane fade" id="affecterVolontaire" role="tabpanel" aria-labelledby="affecterVolontaire-tab">
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
        <!-- Statut d'une buvette -->
        <div class="tab-pane fade" id="statutBuvette" role="tabpanel" aria-labelledby="statutBuvette-tab">
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

<!-- MOPDAL DELETE -->
<div class="modal fade" id="modalDelete" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deleteLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="deleteLabel">Suppression</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Annuler</button>
                <button type="button" class="btn btn-custom" id="deleteConfirm">Valider</button>
            </div>
        </div>
    </div>
</div>

<script src="<?= $this->url ?>public/src/get.js"></script>
<script src="<?= $this->url ?>public/src/affectations/assigner.js"></script>
<script src="<?= $this->url ?>public/src/toast.js"></script>