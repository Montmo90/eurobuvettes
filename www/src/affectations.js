function AfficheFormVolontaire(){
    //var choix=document.getElementById("mdp");
    //console.log(choixVol);
    document.getElementById("choixVol").style.display="flex";
    document.getElementById("choixBuv").style.display="none";

    document.getElementById("btnAffecter").disabled = true;
    document.getElementById("btnOuvrir").disabled = false;
    
}

function AfficheFormBuvette(){
    //var choix=document.getElementById("mdp");
    //console.log(choixBuv);
    document.getElementById("choixVol").style.display="none";
    document.getElementById("choixBuv").style.display="flex";

    document.getElementById("btnAffecter").disabled = false;
    document.getElementById("btnOuvrir").disabled = true;

}

function startAffectations() {
    affect();
    ouvrirBuvette();
}

function affect(){
    /* 1- recupérer listes de bdd.js
        2- la liste de match
            1-sélectionner l'objet avec l'id match_list
            2-insérer les données avec la balise <option>
        3- la liste de noms de buvettes
            1-sélectionner l'objet avec l'id buvette_list
            2-insérer les données avec la balise <option>
        4- liste de volontaires
            1-sélectionner l'objet avec l'id volontaire_list
            2-insérer les données avec la balise <option>
    */
   
    //               i < listeMatch.length
    // Compter tableau : 1 2 3 4 5 6 7 8 9 10
    // taile  tableau  : 0 1 2 3 4 5 6 7 8 9

    //################# MATCHES ###############
    for(let i = 0; i < listeMatch.length; i++){
        //document.getElementById("match_list").innerHTML += '<option value="' + i + '">'; //ES5
        //document.getElementById("match_list").innerHTML += `<option value="$listeMatch{i}.date">`; //ES6
        document.getElementById("match_list").innerHTML += `<option value="${i}">${listeMatch[i].date} : ${listeMatch[i].teamA.id} - ${listeMatch[i].teamB.id}</option>`; //ES6
    }

    //################# VOLONTAIRES ###############
    for(let k = 0; k < listeVolontaires.length; k++){
        document.getElementById("volontaire_list").innerHTML += `<option value="${listeVolontaires[k].nom}">`; //ES6
    }
}

function ouvrirBuvette() {
    //################# MATCHES ###############
    for(let i = 0; i < listeMatch.length; i++){
        document.getElementById("match_list2").innerHTML += `<option value="${i}">${listeMatch[i].date} : ${listeMatch[i].teamA.id} - ${listeMatch[i].teamB.id}</option>`; //ES6
    }  
}

let _indexMatch = 0;
// Affichage noms de buvettes en fonction du match choisi
function changeListBuvettes(buvetteList, objSelect) {
    _indexMatch = objSelect.options.selectedIndex - 1;
    //console.log(listeMatch[index].buvette.nom);
    document.getElementById(buvetteList).innerHTML = `<option selected></option><option value="${_indexMatch}">${listeMatch[_indexMatch].buvette.nom}</option>`;
}

function selectBuvettes() {
    document.getElementById("statut").innerHTML = "Statut : " + (listeMatch[_indexMatch].buvette.ouvert == true ? "Ouvert" : "Fermé");

    if(listeMatch[_indexMatch].buvette.ouvert == true){
        document.getElementById("btnOuvrirBuvette").disabled = true;
        document.getElementById("btnFermerBuvette").disabled = false;
    } else {
        console.log(document.getElementById("btnOuvrirBuvette"));
        document.getElementById("btnOuvrirBuvette").disabled = false;
        document.getElementById("btnFermerBuvette").disabled = true;
    }
}

//Permet de reinitialiser la saisie des champs
function clearAffect(buvetteList){
    document.getElementById(buvetteList).innerHTML = '';
}

function confirmation(ouverture) {
    if(confirm("Confirmer " + (ouverture ? "l'ouverture" : "la fermeture") + " de la buvette ?")) {
        if(ouverture) {
            //ouvrir buvette
        } else {
            //fermer buvette
        }
        document.location.reload();
    }
}