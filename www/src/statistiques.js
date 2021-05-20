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
    var headerD = "<div class=\"resultat-membres-header\"><span>";
    var headerF = "</span></div>";
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

        content += "<div class=\"resultat-membres-item center\">" + "<span>" + topVolName + "</span>" + "<span>" + topVolNbPart+ " participation(s)" + "</span></div>";
    }
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

        content += "<div class=\"resultat-membres-item center\">" + "<span>" + topBuvName + "</span>" + "<span>" + topBuvPlace + "</span></div>";
    }
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
        infosMatch = "<div class=\"center\">" + "<img width=\"80\" height=\"60\" src=\"" + id.teamA.drapeau + "\">" + id.teamA.pays + "  " + id.score + "  " + id.teamB.pays + "<img width=\"80\" height=\"60\" src=\"" + id.teamB.drapeau + "\">" + "</div>";
        InfosBuvettes = "<div class=\"center\">" + id.buvette.nom + "  " + id.buvette.lieu + "  " + id.buvette.resp + "</div>";
        content += infosMatch + InfosBuvettes;
        content += "<br><br>" + "<div class=\"center\">" + "/!\\UNDER CONSTRUCTION /!\\" + "</div>"; // A supprimer plus tard
    return content;
}

