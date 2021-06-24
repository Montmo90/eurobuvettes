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
    var headerSelect = 0;
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
            headerSelect = 2;
        }
    else
        if (topBuv == true && topVol == false && !match) {
            divContent = topBuvettes();
            value = "Top Buvettes";
            headerSelect = 2;
        }
    else
        if (match && topVol == false && topBuv == false) {
            value = "Match du " + match;
            divContent = currentMatch(match);
            headerSelect = 3;
        }
    else {
        value = "Trop d'arguments !";
    }
    var headerD = `<table class="table table-striped panel container mt-3 align-middle"><thead ><th colspan="${headerSelect}">`;
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
                    <td class="w-50">
                        ${topVolName}
                    </td>
                    <td>
                        ${topVolNbPart} participation(s)
                    </td class="w-50">
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
                        <td class="w-50">
                            ${topBuvName}
                        </td>
                        <td class="w-50">
                            ${topBuvPlace}
                        </td >
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
        infosFlag = `<tr>
                        <td style="width:33.33%">
                            <img width"80" height="60" src="${id.teamA.drapeau}">
                        </td>
                        <td style="width:33.33%">
                            ${id.score}
                        </td>
                        <td style="width:33.33%">
                        <img width="80" height="60" src="${id.teamB.drapeau}">
                        </td>
                     </tr>`;
                             
        infosMatch = `<tr>
                        
                        <td style="width:33.33%">${id.teamA.pays}</td>
                        
                        <td style="width:33.33%"></td>
                        
                        <td style="width:33.33%">${id.teamB.pays}</td>
                        
                        </tr>
                    `;  
        InfosBuvettes = `<tr>
                            
                            <td style="width:33.33%">Buvette : ${id.buvette.nom}</td>
                            
                            <td style="width:33.33%">Lieu : ${id.buvette.lieu}</td>
                            
                            <td style="width:33.33%">Responsable : ${id.buvette.resp}</td>
                        </tr>
                        `;
        content += infosFlag + infosMatch + InfosBuvettes + `</table>`;
    return content;
}

function listStatMatch(){
    for(var j = listeMatch.length - 1 ; j >= 0 ; j-- )
    document.getElementById("listeMatchs").innerHTML += `<option value="${listeMatch[j].date}">${listeMatch[j].teamA.pays} - ${listeMatch[j].teamB.pays}</option>`;
}