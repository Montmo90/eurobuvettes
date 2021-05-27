function accueil() {
    let buvettesSlot = document.querySelector(".buvettesSlot");

    for (let i = 0; i < listeMatch.length; i++) {
        let listVol = listeMatch[i].buvette.listVol.split(',');

        let buvette = 
        `<div class="panel buvettesAccueil">
            <div>
                <h3>${listeMatch[i].buvette.ouvert ? "Ouvert" : "Fermée"}</h3>
                <img src="${listeMatch[i].teamA.drapeau}" alt="drapeau ${listeMatch[i].teamA.pays}">
                <span>VS</span>
                <img src="${listeMatch[i].teamB.drapeau}" alt="drapeau ${listeMatch[i].teamB.pays}">
                <p>${listVol.length} volontaire${listVol.length > 1 ? "s" : ""} participant${listVol.length > 1 ? "s" : ""} à la buvette</p>
                <p>${listeMatch[i].buvette.lieu}</p>
                <button onclick="plus(${i})" id="buttonBuvette${i}">+</button>
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
            document.getElementById("buttonBuvette" + i).innerText = "+";
        }
    }

    if(plus.style.maxHeight) {
        plus.style.maxHeight = null;
        document.getElementById("buttonBuvette" + id).innerText = "+";
    } else {
        plus.style.maxHeight = 5 + "rem";
        document.getElementById("buttonBuvette" + id).innerText = "-";
    }
}