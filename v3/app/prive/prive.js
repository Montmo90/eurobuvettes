function LogAdmin (){
    var pass=document.getElementById("mdp");
    if(pass.value==MDP){
    document.querySelector(".targetP").innerHTML=`
    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button class="nav-link active" id="nav-volontaire-tab" data-bs-toggle="tab" data-bs-target="#nav-volontaire" type="button" role="tab" aria-controls="nav-volontaire" aria-selected="true">Volontaire</button>
        <button class="nav-link" id="nav-buvette-tab" data-bs-toggle="tab" data-bs-target="#nav-buvette" type="button" role="tab" aria-controls="nav-buvette" aria-selected="false">Buvette</button>
        <button class="nav-link" id="nav-match-tab" data-bs-toggle="tab" data-bs-target="#nav-match" type="button" role="tab" aria-controls="nav-match" aria-selected="false">Match</button>
        </div>
    </nav>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-volontaire" role="tabpanel" aria-labelledby="nav-volontaire-tab">
                <form class="row align-items-start justify-content-center p-2" name="formPriveVol" action="ajoutVol.php" method="POST">
                    <div class="col-lg-6">
                        <p>Ajouter un volontaire</p>
                        <div class="col-12 pb-3">
                            <input type="text" class="form-control" name="newVol" id="newVolo" placeholder="Nom">
                        </div>
                        <div class="col-12 pb-3">
                            <input type="text" class="form-control" name="ageVol" id="ageVolo" placeholder="Age">
                        </div>
                        <div class="col-12 ps-4 pb-4">
                            <input class="btn btn-custom" type="submit" value="Ajouter">
                        </div>
                    </div>
                </form>
                <form>    
                    <div class="col-lg-6">
                        <p>Effacer un volontaire</p>
                        <div class="col-12">
                            <input list="volList" class="form-control" name="delVol" id="delVolo" placeholder="Nom">
                            <datalist id="volList">
                     
                            </datalist>
                            <p>Action irreversible !</p>
                            <br>
                        </div>
                        <div class="col-12">
                            <input class="btn btn-custom" type="submit" value="Effacer">
                        </div>
                    </div>
                </form>
            </div>
            <div class="tab-pane fade" id="nav-buvette" role="tabpanel" aria-labelledby="nav-buvette-tab">
                <form class="row align-items-start justify-content-center p-2" name="formPriveBuv">
                    <div class="col-lg-6">
                        <p>Ajouter une buvette</p>
                        <div class="col-12 pb-3">
                            <input type="text" class="form-control" name="newBuv" id="newBuve" placeholder="Nom">
                        </div>
                        <div class="col-12 pb-3">
                            <input list="empList" class="form-control" name="empBuv" id="empBuve" placeholder="Emplacement">
                            <datalist id="empList">
                    
                            </datalist>
                        </div>
                        <div class="col-12 pb-3">
                            <input list="respList" class="form-control" name="respBuv" id="respBuve" placeholder="Responsable">
                            <datalist id="respList">
                    
                            </datalist>
                        </div>
                        <div class="col-12 pb-4">
                            <input class="btn btn-custom" type="submit" value="Ajouter">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <p>Effacer une buvette</p>
                        <div class="col-12">
                            <input list="buvList" class="form-control" name="delBuv" id="delBuve" placeholder="Nom">
                            <datalist id="buvList">
                    
                            </datalist>
                            <p>Action irreversible !</p>
                        </div>
                        <br>
                        <br>
                        <br>
                        <div class="col-12">
                            <input class="btn btn-custom" type="submit" value="Effacer">
                        </div>
                    </div>
                </form>
            </div>
            <div class="tab-pane fade" id="nav-match" role="tabpanel" aria-labelledby="nav-match-tab">
                <form class="row align-items-start justify-content-center p-2" name="formPriveBuv">
                    <div class="col-lg-6">
                        <p>Ajouter un match</p>
                        <div class="col-12 pb-3">
                            <input type="date" class="form-control" name="newMatch" id="newMtch" placeholder="Date">
                        </div>
                        <div class="col-12 pb-3">
                            <input list="empMatch" class="form-control" name="empMatch" id="empMtch" placeholder="Emplacement">
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
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <div class="col-12">
                            <input class="btn btn-custom" type="submit" value="Effacer">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    `;
    }
    else {
        alert("Mauvais mot de passe !");
    }
}