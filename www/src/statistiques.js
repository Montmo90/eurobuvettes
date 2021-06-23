function dbg(x){
    console.log(x);
}

// Selectionne 
function userInput(usrInput){
    var input=document.querySelector(usrInput);
    return input;
}

// reinitialise les champs du formulaire
function uncheck() {
    userInput("#TopVol").checked = false;
    userInput("#TopBuv").checked = false;
    userInput("#matchs").value = "";
}

function getStats() {
    var stats = document.querySelector(".stats");
    stats.style = "visibility: visible";
    // input dans les variables
    var topVol = userInput("#TopVol").checked;
    var topBuv = userInput("#TopBuv").checked;
    var match = userInput("#matchs").value;
    var headerD = `<table class="table table-striped panel container mt-3"><thead ><th colspan="2">`
    var headerF = `</th></thead></div>`;
    var divContent = "";
    var value = "";
    // Si input vide, renvoyez pas de resultat
    if (topVol == "" && topBuv == "" && match == "")
        value = "Pas de résultat !";   
    else
        if (topVol == true && topBuv == false && !match) {
            divContent = topVolontaires();
            value = "Top Volontaires";
        }
    else
        if (topBuv == true && topVol == false && !match) {
            divContent = topBuvettes();
            value = "Top Buvettes";
        }
    else
        if (match && topVol == false && topBuv == false) {
            value = "Match (" + match + ") :";
            divContent = currentMatch(match);
        }
    else {
        value = "Trop d'arguments !";
    }
    stats.innerHTML = headerD + value + headerF + divContent;
    // reinitialise le champ du formulaire
    uncheck();
    
    
}

function topVolontaires () {
    var content = "";
    // Tri la liste d'objet volontaire du plus grand au plus petit
    // La fonction à l'interieur sers à comparer les proprietés de l'objet
    // afin de pouvoir trier l'objet grace à la methode sort(), prévue de base pour les chaines de caractères.
    listeVolontaires.sort(function compare(a, b){
        if (a.nbPart > b.nbPart)
           return -1;
        if (a.nbPart < b.nbPart )
           return 1;
        return 0;
    });
    // Affiche le top 5 des volontaires
    for (var i = 0; i < 5; i++) {
        topVolName = listeVolontaires[i].nom;
        topVolNbPart = listeVolontaires[i].nbPart;

        content +=`<tr>
                    <td>
                        ${topVolName}
                    </td>
                    <td>
                        ${topVolNbPart} participation(s)
                    </td>
                    </tr>`;
    }
    content += `</table>`;
    return content;

}

function topBuvettes () {
    var content = "";
    // Tri la liste d'objet volontaire du plus grand au plus petit
    // La fonction à l'interieur sers à comparer les proprietés de l'objet
    // afin de pouvoir trier l'objet grace à la methode sort(), prévue de base pour les chaines de caractères.
    listeBuvettes.sort(function compare(a, b){
        if (a.nbVol > b.nbVol)
           return -1;
        if (a.nbVol < b.nbVol )
           return 1;
        return 0;
    });
    // Affiche le top 5 des volontaires
    for (var i = 0; i < 5; i++) {
        topBuvName = listeBuvettes[i].nom;
        topBuvPlace = listeBuvettes[i].lieu;

        content += `<tr>
                        <td>
                            ${topBuvName}
                        </td>
                        <td>
                            ${topBuvPlace}
                        </td>
                    </tr>`;
    }
    content += `</table>`;
    return content;

}

function currentMatch(match) {
    var content = "";
    var infosMatch;
    var InfosBuvettes;
    // parcours la liste des matchs jusqu'a trouver la date correspondante
    // puis enregistre la reference à l'objet dans la variable id
    for (var i = 0; i < listeMatch.length; i++) {
        if (listeMatch[i].date == match)
            var id = listeMatch[i];
    }
        infosFlag = `<div>
                        <div>
                            <div class="statsMatch">
                                <div>
                                    <img width"80" height="60" src="${id.teamA.drapeau}">
                                </div>
                                
                                <div>
                                </div>
                                <div>
                                <img width="80" height="60" src="${id.teamB.drapeau}">
                                </div>
                    </div>`;
        
        infosMatch = `<div class="center statsMatch">
                        
                        <div>${id.teamA.pays}</div>
                        
                        <div>${id.score}</div>
                        
                        <div>${id.teamB.pays}</div>
                        
                        </div>
                    `;  
        InfosBuvettes = `<div class="center statsMatch">
                            
                            <div>Buvette : ${id.buvette.nom}</div>
                            
                            <div>Lieu : ${id.buvette.lieu}</div>
                            
                            <div>Responsable : ${id.buvette.resp}</div>
                        </div>
                        `;
        content += infosFlag + infosMatch + InfosBuvettes;
    return content;
}

function listStatMatch(){
    for(var j = listeMatch.length - 1 ; j >= 0 ; j-- )
    document.getElementById("listeMatchs").innerHTML += `<option value="${listeMatch[j].date}">${listeMatch[j].teamA.pays} - ${listeMatch[j].teamB.pays}</option>`;
}