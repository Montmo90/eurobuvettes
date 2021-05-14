/*  Desc : Permet de réinitialiser la valeur par défaut si l'imput est vide
    si non laisse la valeur dans l'imput
    obj : L'objet courant
    value : Valeur à remetre par défaut*/
/*function resetValue (obj, value) {            
    if(obj.value == '')
        return value;
    else
       return obj.value;
}*/

/*  Desc : Permet de changer la valeur d'un imput l'ors du focus
    obj : L'objet courant
    value : Valeur à remetre par défaut*/
/*function focusValue (obj, value) {            
    if(obj.value == value)
        return '';
    else
        return obj.value;
}*/

const MDP = "admin123";

/*Création du constructeur Volontaire*/
function Volontaire (nom, age, nbPart, resp) {
    this.nom = nom;
    this.age = age;
    this.nbPart = nbPart;
    this.resp = resp;
}

/*Création d'un tableau vide*/
var listeVolontaires = [];

/*Création des listes pour chaque propriétées du constructeur Volontaire*/
/*Split une chaine de charactére en tableau avec en paramétre une |*/
var listeNom = "Fabian|Morgan|Jeremy|Killian|Cédric|Fairouze|Jean-Michel|Alexis M|Alexis T|Kevin|Aziz".split("|");
var listeAge = "30|30|24|22|31|#Ondemandepaslagedunedame|Vieux|27|22|31|47".split("|");
var listeNbPart = "2|5|3|7||5|4|2|7|2|6".split("|");
var listeResp = "false|true|false|true|true|false|false|false|true|false|true".split("|");

/*Grace à une boucle j'ajoute mes listes à mon tableau listeVolontaires*/
for (var li = 0 ; li < listeNom.length; li++) {
    /*Ajoute un nouveau Objet Volontaire avec comme paramétre la valeur du tableau à l'indice li*/
    listeVolontaires.push(new Volontaire(listeNom[li], listeAge[li], listeNbPart[li], listeResp[li]))
}

//dbg(listeVolontaires[6].nom);//Jean-Michel

/*Création du constructeur Matchs*/
function Match (date, teamA, teamB, score) {
    this.date = date;
    this.teamA = teamA;
    this.teamB = teamB;
    this.score = score;
}



function Buvette(nom, lieu) {
    this.nom = nom;
    this.lieu = lieu;
}

var listeBuvettes = [new Buvette("AFPA","Rochefort"), 
                     new Buvette("Hérisson","La Rochelle"),
                     new Buvette("","")];

//dbg(listeBuvettes[1].nom)

var listeNomBuvette = "".split(",");
var listeLieuBuvette = "".split(",");
var listeBuvette = "".split(",");

function rechercheMembres() {
    document.getElementById('rechercheMembres').innerHTML += '<section class="panel">Pas de résultat !</section>';
}

/*function dbg(x){
    console.log(x);
}

function retour(){
    // ciblage de l'input a id "stats", récupérer la valeur du champ
    var testValue=document.getElementById("stats").value;
    // ciblage du main HTML pour ajouter du contenu
    var champMain=document.querySelector("main");
    // rajouter du contenu HTML dans une section
    champMain.innerHTML += testValue;
}
*/