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
            <div class="row">
                <div class="col-6">
                    <div class="row justify-content-center p-2">
                        <input id="idAff" hidden>
                        <p>Affecter un volontaire à une buvette</p>
                        <div class="col-12 pb-3">
                            <select id="matListAff" class="form-select" aria-describedby="invalidMatListAff">
                                <!-- option -->
                            </select>
                            <div id="invalidMatListAff" class="invalid-feedback">
                                Merci de choisir un match.
                            </div>
                        </div>
                        <div class="col-12 pb-3">
                            <select id="buvListAff" class="form-select" aria-describedby="invalidBuvListAff">
                                <!-- option -->
                            </select>
                            <div id="invalidBuvListAff" class="invalid-feedback">
                                Merci de choisir une buvette.
                            </div>
                        </div>
                        <div class="col-12 pb-3">
                            <select id="volListAff" class="form-select" aria-describedby="invalidVolListAff">
                                <!-- option -->
                            </select>
                            <div id="invalidVolListAff" class="invalid-feedback">
                                Merci de choisir un volontaire.
                            </div>
                        </div>
                        <div class="col-12 d-flex  align-items-end">
                            <input class="btn btn-custom" type="button" id="btnAddAff" value="Ajouter" disabled>
                            <input class="btn btn-danger ms-auto" type="button" id="btnCancelAff" value="Annuler" hidden>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row justify-content-center p-2 h-100">
                        <div class="col-12">
                            <p>Liste des affectations d'un volontaire à une buvette</p>
                            <select id="affList" class="form-select">
                                <!-- option -->
                            </select>
                        </div>
                        <div class="col-12 d-flex align-items-end">
                            <input class="btn btn-custom" type="button" id="effacerAff" value="Effacer" disabled>
                            <input class="btn btn-warning ms-auto" type="button" id="modifAff" value="Modifier" disabled>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Statut d'une buvette -->
        <div class="tab-pane fade" id="statutBuvette" role="tabpanel" aria-labelledby="statutBuvette-tab">
            <div class="row">
                <div class="col-6">
                    <div class="row justify-content-center p-2">
                        <input id="idSta" hidden>
                        <p>Statut d'une buvette</p>
                        <div class="col-12 pb-3">
                            <select id="buvListSta" class="form-select" aria-describedby="invalidBuvListSta">
                                <!-- option -->
                            </select>
                            <div id="invalidBuvListSta" class="invalid-feedback">
                                Merci de choisir une buvette.
                            </div>
                        </div>
                        <div class="col-12 pb-3">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" id="staBuv" disabled>
                                <label class="form-check-label" for="staBuv">Ouvrir</label>
                            </div>
                        </div>
                        <div class="col-12 d-flex  align-items-end">
                            <input class="btn btn-custom" type="button" id="btnAddSta" value="Ajouter" disabled>
                            <input class="btn btn-danger ms-auto" type="button" id="btnCancelSta" value="Annuler" hidden>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row justify-content-center p-2 h-100">
                        <div class="col-12">
                            <p>Liste des buvettes ouvertes</p>
                            <select id="staList" class="form-select">
                                <!-- option -->
                            </select>
                        </div>
                        <div class="col-12 d-flex align-items-end">
                            <input class="btn btn-custom" type="button" id="effacerSta" value="Effacer" disabled>
                            <input class="btn btn-warning ms-auto" type="button" id="modifSta" value="Modifier" disabled>
                        </div>
                    </div>
                </div>
            </div>
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
<script src="<?= $this->url ?>public/src/affectations/affecter.js"></script>
<script src="<?= $this->url ?>public/src/affectations/statuer.js"></script>
<script src="<?= $this->url ?>public/src/toast.js"></script>