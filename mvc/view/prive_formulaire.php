<div class="container">
    <section class="row panel py-3">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-volontaire-tab" data-bs-toggle="tab" data-bs-target="#nav-volontaire" type="button" role="tab" aria-controls="nav-volontaire" aria-selected="true">Volontaire</button>
                <button class="nav-link" id="nav-buvette-tab" data-bs-toggle="tab" data-bs-target="#nav-buvette" type="button" role="tab" aria-controls="nav-buvette" aria-selected="false">Buvette</button>
                <button class="nav-link" id="nav-equipe-tab" data-bs-toggle="tab" data-bs-target="#nav-equipe" type="button" role="tab" aria-controls="nav-equipe" aria-selected="false">Équipe</button>
                <button class="nav-link" id="nav-match-tab" data-bs-toggle="tab" data-bs-target="#nav-match" type="button" role="tab" aria-controls="nav-match" aria-selected="false">Match</button>
                <div class="ms-auto">
                    <a href="<?= $this->url ?>prive/logout" class="btn btn-custom">Déconnexion</a>
                </div>
            </div>
        </nav>

        <div class="tab-content" id="nav-tabContent">
            <!-- Volontaire -->
            <div class="tab-pane fade show active" id="nav-volontaire" role="tabpanel" aria-labelledby="nav-volontaire-tab">
                <div class="row">
                    <div class="col-12 col-sm-6">
                        <div class="row justify-content-center p-2">
                            <input id="idVol" hidden>
                            <p>Ajouter un volontaire</p>
                            <div class="col-12 pb-3">
                                <input type="text" class="form-control" id="nomVol" placeholder="Nom" aria-describedby="invalidNomVol">
                                <div id="invalidNomVol" class="invalid-feedback">
                                    Merci de saisir un nom.
                                </div>
                            </div>
                            <div class="col-12 pb-3">
                                <input type="number" class="form-control" id="ageVol" placeholder="Age" aria-describedby="invalidAgeVol">
                                <div id="invalidAgeVol" class="invalid-feedback">
                                    Merci de saisir un age.
                                </div>
                            </div>
                            <div class="col-12 d-flex  align-items-end">
                                <input class="btn btn-custom" type="button" id="btnAddVol" value="Ajouter" disabled>
                                <input class="btn btn-danger ms-auto" type="button" id="btnCancelVol" value="Annuler" hidden>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="row justify-content-center p-2 h-100">
                            <div class="col-12 pb-3">
                                <hr class="d-block d-sm-none">
                                <p>Liste des volontaires</p>
                                <select id="volList" class="form-select">
                                    <!-- option -->
                                </select>
                            </div>
                            <div class="col-12 d-flex align-items-end">
                                <input class="btn btn-custom" type="button" id="effacerVol" value="Effacer" disabled>
                                <input class="btn btn-warning ms-auto" type="button" id="modifVol" value="Modifier" disabled>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Buvette -->
            <div class="tab-pane fade" id="nav-buvette" role="tabpanel" aria-labelledby="nav-buvette-tab">
                <div class="row">
                    <div class="col-12 col-sm-6">
                        <div class="row justify-content-center p-2">
                            <input id="idBuv" hidden>
                            <p>Ajouter une buvette</p>
                            <div class="col-12 pb-3">
                                <input type="text" class="form-control" id="newBuv" placeholder="Nom" aria-describedby="invalidNomBuv">
                                <div id="invalidNomBuv" class="invalid-feedback">
                                    Merci de saisir un nom.
                                </div>
                            </div>
                            <div class="col-12 pb-3">
                                <input type="text" class="form-control" id="empBuv" placeholder="Emplacement" aria-describedby="invalidEmpBuv">
                                <div id="invalidEmpBuv" class="invalid-feedback">
                                    Merci de saisir un emplacement.
                                </div>
                            </div>
                            <div class="col-12 pb-3">
                                <select id="respBuvList" class="form-select" aria-describedby="invalidEmpBuv">
                                    <!-- option -->
                                </select>
                                <div id="invalidEmpBuv" class="invalid-feedback">
                                    Merci de choisir un responsable.
                                </div>
                            </div>
                            <div class="col-12 d-flex align-items-end">
                                <input class="btn btn-custom" type="button" id="btnAddBuv" value="Ajouter" disabled>
                                <input class="btn btn-danger ms-auto" type="button" id="btnCancelBuv" value="Annuler" hidden>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="row justify-content-center p-2 h-100">
                            <div class="col-12 pb-3">
                                <hr class="d-block d-sm-none">
                                <p>Liste des buvettes</p>
                                <select id="buvList" class="form-select">
                                    <!-- option -->
                                </select>
                            </div>
                            <div class="col-12 d-flex align-items-end">
                                <input class="btn btn-custom" type="button" id="effacerBuv" value="Effacer" disabled>
                                <input class="btn btn-warning ms-auto" type="button" id="modifBuv" value="Modifier" disabled>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Equipe -->
            <div class="tab-pane fade" id="nav-equipe" role="tabpanel" aria-labelledby="nav-equipe-tab">
                <div class="row">
                    <div class="col-12 col-sm-6">
                        <div class="row justify-content-center p-2">
                            <input id="idEqu" hidden>
                            <p>Ajouter une équipe</p>
                            <div class="col-12 pb-3">
                                <input type="text" class="form-control" id="nomEqu" placeholder="Nom">
                            </div>
                            <p>Choisir un drapeau</p>
                            <div class="col-12 pb-3">
                                <img src="<?= $this->url ?>public/img/flags/0.webp" class="form-control w-25" alt="drapeau vide" id="drapEqu">
                            </div>
                            <div class="col-12 d-flex  align-items-end">
                                <input class="btn btn-custom" type="button" id="btnAddEqu" value="Ajouter" disabled>
                                <input class="btn btn-danger ms-auto" type="button" id="btnCancelEqu" value="Annuler" hidden>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6">
                        <div class="row justify-content-center p-2 h-100">
                            <div class="col-12 pb-3">
                                <hr class="d-block d-sm-none">
                                <p>Liste des équipes</p>
                                <select id="equList" class="form-select">
                                    <!-- option -->
                                </select>
                            </div>
                            <div class="col-12 pb-3">
                                <img src="<?= $this->url ?>public/img/flags/0.webp" alt="drapeau vide" id="equListDrap">
                            </div>
                            <div class="col-12 d-flex align-items-end">
                                <input class="btn btn-custom" type="button" id="effacerEqu" value="Effacer" disabled>
                                <input class="btn btn-warning ms-auto" type="button" id="modifEqu" value="Modifier" disabled>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Match -->
            <div class="tab-pane fade" id="nav-match" role="tabpanel" aria-labelledby="nav-match-tab">
                <div class="row">
                    <div class="col-12 col-sm-6">
                        <div class="row justify-content-center p-2">
                            <input id="idMat" hidden>
                            <p>Ajouter un match</p>
                            <div class="col-12 pb-3">
                                <input type="date" class="form-control" id="newMat">
                            </div>
                            <div class="col-12 pb-3">
                                <input type="text" class="form-control" id="empMat" placeholder="Lieu">
                            </div>
                            <div class="col-12 pb-3">
                                <div class="row">
                                    <div class="col-12 col-sm-6 pb-1 pb-sm-0">
                                        <select id="equ1" class="form-select">
                                            <!-- option -->
                                        </select>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="number" class="form-control" id="scoreEqu1" placeholder="Score">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 pb-3">
                                <div class="row">
                                    <div class="col-12 col-sm-6 pb-1 pb-sm-0">
                                        <select id="equ2" class="form-select">
                                            <!-- option -->
                                        </select>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="number" class="form-control" id="scoreEqu2" placeholder="Score">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 d-flex align-items-end">
                                <input class="btn btn-custom" type="button" id="btnAddMat" value="Ajouter">
                                <input class="btn btn-danger ms-auto" type="button" id="btnCancelMat" value="Annuler" hidden>
                            </div>
                        </div>
                    </div>                    
                    <div class="col-12 col-sm-6">
                        <div class="row justify-content-center p-2 h-100">
                            <div class="col-12 pb-3">
                                <hr class="d-block d-sm-none">
                                <p>Liste des matchs</p>
                                <select id="matList" class="form-select">
                                    <!-- option -->
                                </select>
                            </div>
                            <div class="col-12 d-flex align-items-end">
                                <input class="btn btn-custom" type="button" id="effacerMat" value="Effacer" data-bs-toggle="modal" data-bs-target="#modalDeleteMat" disabled>
                                <input class="btn btn-warning ms-auto" type="button" id="modifMat" value="Modifier" disabled>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
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

<!-- MOPDAL DRAPEAU-->
<div class="modal fade" id="modalDrapeau" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="drapeauEquLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex flex-wrap text-center" id="listDrapEqu">

            </div>
        </div>
    </div>
</div>

<script src="<?= $this->url ?>public/src/get.js"></script>
<script src="<?= $this->url ?>public/src/prive/volontaires.js"></script>
<script src="<?= $this->url ?>public/src/prive/buvettes.js"></script>
<script src="<?= $this->url ?>public/src/prive/equipes.js"></script>
<script src="<?= $this->url ?>public/src/prive/matchs.js"></script>
<script src="<?= $this->url ?>public/src/toast.js"></script>