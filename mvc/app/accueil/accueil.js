function accueil() {
    let buvettesSlot = document.querySelector(".buvettesSlot");

    for (let i = listeMatch.length - 1; i >= 0; i--) {
        let listVol = listeMatch[i].buvette.listVol.split(',');

        // ligne 15 <p>${listVol.length} volontaire${listVol.length > 1 ? "s" : ""} participant${listVol.length > 1 ? "s" : ""} à la buvette</p>
        let buvette = 
        `
  <div class="accordion accordion-flush panel mx-0" id="accordionFlushExample">
    <div class="accordion-item accordion-item-custom">
      <div class="accordion-header" id="flush-heading${i}">
        <button class="accordion-button collapsed buvExpand accordion-button-custom row" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${i}" aria-expanded="false" aria-controls="flush-collapse${i}">   
         
            <div class="col">
              ${listeMatch[i].buvette.ouvert ? "Ouvert" : "Fermée"}
            </div>
            <div class="col">
              <div class="row">
                <div class="col-sm-5">
                  <img src="../../${listeMatch[i].teamA.drapeau}" alt="drapeau ${listeMatch[i].teamA.pays}" class="buvettesImgDrapeau img-fluid">
                </div>
                <div class="col-sm-2">
                VS
                </div>
                <div class="col-sm-5">
                  <img src="../../${listeMatch[i].teamB.drapeau}" alt="drapeau ${listeMatch[i].teamB.pays}" class="buvettesImgDrapeau img-fluid">
                </div>
              </div>
            </div>
            <div class="col text-center">
              ${listeMatch[i].date}
            </div>
            <div class="col">
              ${listeMatch[i].buvette.lieu}
            </div>
        </button>
      </div>
      <div id="flush-collapse${i}" class="accordion-collapse collapse buvExpand" aria-labelledby="flush-heading${i}" data-bs-parent="#accordionFlushExample">
        <div class="row pt-5">
          <div class="col">
            <p><span>Nom :</span> ${listeMatch[i].buvette.nom}</p>
          </div>
          <div class="col">
            <p><span>Responsable :</span> ${listeMatch[i].buvette.resp}</p>
          </div>
          <div class="col">
            <p><span>Volontaires :</span> ${listeMatch[i].buvette.listVol.replaceAll(',', ', ')}</p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
        buvettesSlot.innerHTML += buvette;
    }
}
/*
function plus(id) {
    let plus = document.getElementById("plusBuvettes" + id);

    for (let i = 0; i < listeMatch.length; i++) {
        if(id != i) {
            document.getElementById("plusBuvettes" + i).style.maxHeight = null;
            document.getElementById("buttonBuvette" + i).innerText = "img/icons/loupe-avec-signe-plus.png";
        }
    }

    if(plus.style.maxHeight) {
        plus.style.maxHeight = null;
        document.getElementById("buttonBuvette" + id).src = "img/icons/loupe-avec-signe-plus.png";
    } else {
        plus.style.maxHeight = 5 + "rem";
        document.getElementById("buttonBuvette" + id).src = "img/icons/option-de-zoom-arriere.png";
    }
}
*/