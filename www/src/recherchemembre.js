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
                resultat += `<table class="table table-striped panel container mt-3 text-center">
                                <thead>
                                    
                                        <th scope="col">Nom</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Participations</th>
                                        <th scope="col">Responsable ?</th>
                                    
                                </thead>`;

            resultat += `<tr>
                            <td class="w-25">${listeVolontaires[j].nom}</td>
                            <td class="w-25">${listeVolontaires[j].age}</td>
                            <td class="w-25">${listeVolontaires[j].nbPart}</td>
                            <td class="w-25">${(listeVolontaires[j].resp == true ? "Oui" : "Non")}</td>
                        </tr>`;
            pasResultat = false;

            count++;
        }
    }
    resultat += "</table>";
    if(pasResultat)
        resultat += `<div class="panel container my-3"><div class="fs-3 text-center noResultat fw-bold">Pas de résultat !</div></div>`;
    else
        resultat += `<div class="container"><caption>${count} résultat(s) trouvé(s).</caption></div>`;
           
    //Affichage de la section resultat et intégration du résultat
    document.getElementById("resultat").hidden = false;
    document.getElementById("resultat").innerHTML = resultat;
}