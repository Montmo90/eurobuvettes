function accueil() {
    let buvettesSlot = document.querySelector(".buvettesSlot");

    for (let i = 0; i < listeMatch.length; i++) {
        let listVol = listeMatch[i].buvette.listVol.split(',');

        // ligne 15 <p>${listVol.length} volontaire${listVol.length > 1 ? "s" : ""} participant${listVol.length > 1 ? "s" : ""} à la buvette</p>
        let buvette = 
        `<div class="panel buvettesAccueil">
            <div>
                <h3>${listeMatch[i].buvette.ouvert ? "Ouvert" : "Fermée"}</h3>
                <img src="${listeMatch[i].teamA.drapeau}" alt="drapeau ${listeMatch[i].teamA.pays}" class="buvettesImgDrapeau">
                <span>VS</span>
                <img src="${listeMatch[i].teamB.drapeau}" alt="drapeau ${listeMatch[i].teamB.pays}" class="buvettesImgDrapeau">
                <p>${listeMatch[i].date}</p>
                <p>${listeMatch[i].buvette.lieu}</p>
                <img src="img/icons/loupe-avec-signe-plus.png" alt="" class="imgPlusMoins" onclick="plus(${i})" id="buttonBuvette${i}">
            </div>
            <div class="buvettesPlus" id="plusBuvettes${i}">
                <p><span>Nom :</span> ${listeMatch[i].buvette.nom}</p>
                <p><span>Responsable :</span> ${listeMatch[i].buvette.resp}</p>
                <p><span>Volontaires :</span> ${listeMatch[i].buvette.listVol.replaceAll(',', ', ')}</p>
            </div>
        </div>        
        `;
        buvettesSlot.innerHTML += buvette;
    }
}

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