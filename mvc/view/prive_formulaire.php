<div class="container">
    <section class="row panel py-3">
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="nav-volontaire-tab" data-bs-toggle="tab" data-bs-target="#nav-volontaire" type="button" role="tab" aria-controls="nav-volontaire" aria-selected="true">Volontaire</button>
                <button class="nav-link" id="nav-buvette-tab" data-bs-toggle="tab" data-bs-target="#nav-buvette" type="button" role="tab" aria-controls="nav-buvette" aria-selected="false">Buvette</button>
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
                    <div class="col-6">
                        <form class="row justify-content-center p-2" id="formAddVol" method="POST">
                            <input name="idVol" hidden>
                            <p>Ajouter un volontaire</p>
                            <div class="col-12 pb-3">
                                <input type="text" class="form-control" name="nomVol" id="nomVolo" placeholder="Nom" required>
                            </div>
                            <div class="col-12 pb-3">
                                <input type="text" class="form-control" name="ageVol" id="ageVolo" placeholder="Age" required>
                            </div>
                            <div class="col-12 d-flex  align-items-end">
                                <input class="btn btn-custom" type="submit" id="btnAddVol" value="Ajouter">
                                <input class="btn btn-danger ms-auto" type="button" id="btnCancelVol" value="Annuler" hidden>
                            </div>
                        </form>
                    </div>
                    <div class="col-6">
                        <div class="row justify-content-center p-2 h-100" id="formPriveVol">
                            <div class="col-12">
                                <p>Liste des volontaires</p>
                                <select id="volList" class="form-select" name="delVol">
                                    <!-- option -->
                                </select>
                            </div>
                            <div class="col-12 d-flex align-items-end">
                                <input class="btn btn-custom" type="button" id="effacerVol" value="Effacer" data-bs-toggle="modal" data-bs-target="#modalDeleteVol">
                                <input class="btn btn-warning ms-auto" type="button" id="modifVol" value="Modifier">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Buvette -->
            <div class="tab-pane fade" id="nav-buvette" role="tabpanel" aria-labelledby="nav-buvette-tab">
                <div class="row">
                    <div class="col-6">
                        <form class="row justify-content-center p-2" id="formPriveBuv" name="formPriveBuv">
                            <input name="idBuv" hidden>
                            <p>Ajouter une buvette</p>
                            <div class="col-12 pb-3">
                                <input type="text" class="form-control" name="newBuv" id="newBuve" placeholder="Nom">
                            </div>
                            <div class="col-12 pb-3">
                                <input list="empList" class="form-control" name="empBuv" id="empBuve" placeholder="Emplacement">
                            </div>
                            <div class="col-12 pb-3">
                                <select id="respBuvList" class="form-select" name="respBuv">
                                    <!-- option -->
                                </select>
                            </div>
                            <div class="col-12 d-flex  align-items-end">
                                <input class="btn btn-custom" type="submit" id="btnAddBuv" value="Ajouter">
                                <input class="btn btn-danger ms-auto" type="button" id="btnCancelBuv" value="Annuler" hidden>
                            </div>
                        </form>
                    </div>
                    <div class="col-6">
                        <div class="row justify-content-center p-2 h-100" id="formPriveBuvette">
                            <div class="col-12">
                                <p>Liste des buvettes</p>
                                <select id="buvList" class="form-select" name="buvList">
                                    <!-- option -->
                                </select>
                            </div>
                            <div class="col-12 d-flex align-items-end">
                                <input class="btn btn-custom" type="submit" id="effacerBuv" value="Effacer" data-bs-toggle="modal" data-bs-target="#modalDeleteBuv">
                                <input class="btn btn-warning ms-auto" type="button" id="modifBuv" value="Modifier">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Match -->
            <div class="tab-pane fade" id="nav-match" role="tabpanel" aria-labelledby="nav-match-tab">
                <form class="row align-items-start justify-content-center p-2" name="formPriveBuv">
                    <div class="col-lg-6">
                        <p>Ajouter un match</p>
                        <div class="col-12 pb-3">
                            <input type="date" class="form-control" name="newMatch" id="newMtch" placeholder="Date">
                        </div>
                        <div class="col-12 pb-3">
                            <input list="empMatch" class="form-control" name="empMatch" id="empMtch" placeholder="Lieu">
                            <datalist id="empMatch">

                            </datalist>
                        </div>
                        <div class="col-12 pb-3">
                            <input list="eqpList" class="form-control" name="equipe1" id="eqp1" placeholder="Equipe 1">
                            <datalist id="eqpList">

                            </datalist>
                        </div>
                        <div class="col-12 pb-3">
                            <input list="eqpList2" class="form-control" name="equipe2" id="eqp2" placeholder="Equipe 2">
                            <datalist id="eqpList2">

                            </datalist>
                        </div>
                        <div class="col-12 pb-4">
                            <input class="btn btn-custom" type="submit" value="Ajouter">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <p>Effacer un match</p>
                        <div class="col-12">
                            <input list="matchList" class="form-control" name="delMatch" id="delMtch" placeholder="Liste des matchs">
                            <datalist id="matchList">

                            </datalist>
                            <p>Action irreversible !</p>
                        </div>
                        <div class="col-12">
                            <input class="btn btn-custom" type="submit" value="Effacer">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</div>

<!-- TOAST -->
<div class="position-fixed bottom-0 end-0 p-3 toast-container" style="z-index: 11" id="mainToast">
</div>

<!-- MOPDAL DELETE VOLONTAIRE-->
<div class="modal fade " id="modalDeleteVol" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deleteVolLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="deleteVolLabel">Suppression</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Souhaitez vous supprimer le volontaire <strong><span id="modalNomVol"></span></strong>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Annuler</button>
                <button type="button" class="btn btn-custom" id="deleteVol">Valider</button>
            </div>
        </div>
    </div>
</div>

<!-- MOPDAL DELETE BUVETTE-->
<div class="modal fade " id="modalDeleteBuv" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deleteBuvLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="deleteBuvLabel">Suppression</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Souhaitez vous supprimer la buvette <strong><span id="modalNomBuv"></span></strong>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Annuler</button>
                <button type="button" class="btn btn-custom" id="deleteBuv">Valider</button>
            </div>
        </div>
    </div>
</div>

<script src="<?= $this->url ?>public/src/prive.js"></script>