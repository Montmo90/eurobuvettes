function rechercheMembres() {
    //Récupération et stockage de toutes les valeurs du formulaire
    var nom = document.getElementById("nom").value;
    var age = document.getElementById("age").value;
    var nbParticipations = document.getElementById("nbParticipations").value;
    var respBuvetteOui = document.getElementById("respBuvetteOui").checked;
    var respBuvetteNon = document.getElementById("respBuvetteNon").checked;

    var respBuvette = respBuvetteOui || respBuvetteNon;
    var pasResultat = true;
    var resultat = "";
    var count = 0;

    for (var j = 0; j < listeVolontaires.length; j++) {
        
        var trouve = nom == listeVolontaires[j].nom || age == listeVolontaires[j].age || nbParticipations == listeVolontaires[j].nbPart;
        
        if(trouve || (respBuvette && respBuvetteOui == listeVolontaires[j].resp) || (respBuvette && !respBuvetteNon == listeVolontaires[j].resp)) {
            //Création du Header des résultats
            if(resultat == "")
                resultat += "<div class=\"resultat-membres-header\"><span>Nom</span><span>Age</span><span>Participations</span><span>Responsable ?</span></div>";

            resultat += "<div class=\"resultat-membres-item\"><span>" + listeVolontaires[j].nom +"</span><span>"+ listeVolontaires[j].age +"</span><span>"+ listeVolontaires[j].nbPart +"</span><span>" + (listeVolontaires[j].resp == true ? "Oui" : "Non")  + "</span></div>";
            pasResultat = false;

            count++;
        }
    }

    if(pasResultat)
        resultat += "<div class=\"resultat-membres-header\"><span>Pas de résultat !</span></div>";
    else
        resultat += "<div class=\"resultat-membres-footer\">" + count + " résultat(s) trouvé(s).</div>";
    
    //Affichage de la section resultat et intégration du résultat
    document.getElementById("resultat").hidden = false;
    document.getElementById("resultat").innerHTML = resultat;
}