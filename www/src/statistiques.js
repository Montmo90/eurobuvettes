function dbg(x){
    console.log(x);
}

// 
function userInput(usrInput){
    var input=document.querySelector(usrInput);
    return input;
}

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
            value = "Top Buvettes";
        }
    else
        if (match && topVol == false && topBuv == false) {
            value = "Match : " + match;
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
    for (var i = 0; i < 5; i++) {
        topVolName = listeVolontaires[i].nom;
        topVolNbPart = listeVolontaires[i].nbPart;

        content += "<div class=\"resultat-membres-item center\">" + "<span>" + topVolName + "</span>" + "<span>" + topVolNbPart+ " participation(s)" + "</span></div>";
    }
    return content;

}

