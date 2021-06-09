function accueil() {
    let buvettesSlot = document.querySelector(".buvettesSlot");

    for (let i = listeMatch.length - 1; i >= 0; i--) {
        let listVol = listeMatch[i].buvette.listVol.split(',');

        // ligne 15 <p>${listVol.length} volontaire${listVol.length > 1 ? "s" : ""} participant${listVol.length > 1 ? "s" : ""} à la buvette</p>
        let buvette = 
        `<br>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-heading${i}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${i}" aria-expanded="false" aria-controls="flush-collapse${i}">   
        <div class="container">
        <div class="row">
          <div class="col">
            ${listeMatch[i].buvette.ouvert ? "Ouvert" : "Fermée"}
          </div>
          <div class="col">
            <img src="${listeMatch[i].teamA.drapeau}" alt="drapeau ${listeMatch[i].teamA.pays}" class="buvettesImgDrapeau">
            <span>VS</span>
            <img src="${listeMatch[i].teamB.drapeau}" alt="drapeau ${listeMatch[i].teamB.pays}" class="buvettesImgDrapeau">
          </div>
          <div class="col">
            ${listeMatch[i].date}
          </div>
          <div class="col">
            ${listeMatch[i].buvette.lieu}
          </div>
        </div>
    </div>
      </button>
      </h2>
    <div id="flush-collapse${i}" class="accordion-collapse collapse" aria-labelledby="flush-heading${i}" data-bs-parent="#accordionFlushExample">
    <div class="row">
    <div class="col">
    <br>
    <p><span>Nom :</span> ${listeMatch[i].buvette.nom}</p>
    </div>
    <div class="col">
    <br>
    <p><span>Responsable :</span> ${listeMatch[i].buvette.resp}</p>
    </div>
    <div class="col">
    <br>
    <p><span>Volontaires :</span> ${listeMatch[i].buvette.listVol.replaceAll(',', ', ')}</p>
    <br>
    </div>
  </div>
</div>
</div>
</div>
    </div>
  </div>
  <br>`;
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