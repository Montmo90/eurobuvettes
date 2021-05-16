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
var listeAge = "30|30|24|22|31|#Ondemandepaslagedunedame|Vieux|27|22|31|?".split("|");
var listeNbPart = "17|13|11|8|6|6|5|4|3|2|1".split("|");
var listeResp = "false|true|false|true|true|false|false|false|true|false|true".split("|");

/*Grace à une boucle j'ajoute mes listes à mon tableau listeVolontaires*/
for (var li = 0 ; li < listeNom.length; li++) {
    /*Ajoute un nouveau Objet Volontaire avec comme paramétre la valeur du tableau à l'indice li*/
    listeVolontaires.push(new Volontaire(listeNom[li], listeAge[li], parseInt(listeNbPart[li]), (listeResp[li] == "true")))
}

//dbg(listeVolontaires[6].nom);//Jean-Michel

function Equipe (id, pays, drapeau) {
    this.id = id;
    this.pays = pays;
    this.drapeau = drapeau;
}

var listeEquipe = [new Equipe("fr", "FRANCE", "img/fr.png"),
                   new Equipe("alb", "ALBANIE", "img/alb.png"),
                   new Equipe("ga", "GALLES", "img/ga.png"),
                   new Equipe("an", "ANGLETERRE", "img/an.png"),
                   new Equipe("tu", "TURQUIE", "img/tu.png"),
                   new Equipe("po", "PORTUGAL", "img/po.png"),
                   new Equipe("al", "ALLEMAGNE", "img/al.png"),
                   new Equipe("es", "ESPAGNE", "img/es.png"),
                   new Equipe("ro", "ROUMANIE", "img/ro.png"),
                   new Equipe("su", "SUEDE", "img/su.png"),
                   new Equipe("sl", "SLOVENIE", "img/sl.png"),
                   new Equipe("ru", "RUSSIE", "img/ru.png"),
                   new Equipe("cr", "CROATIE", "img/cr.png"),
                   new Equipe("ir", "IRLANDE", "img/ir.png"),
                   new Equipe("uk", "UKRAINE", "img/uk.png"),
                   new Equipe("rt", "REPUBLIQUE TCHEQUE", "img/rt.png")];

/*Création du constructeur Matchs*/
function Match (date, teamA, teamB, score) {
    this.date = date;
    this.teamA = teamA;
    this.teamB = teamB;
    this.score = score;
}

var listeMatch = [new Match("01-01-2021", "fr", "ro", "13-0"),
                  new Match("02-01-2021", "alb", "su", "0-0"),
                  new Match("03-01-2021", "ga", "sl", "2-1"),
                  new Match("04-01-2021", "an", "ru", "3-3"),
                  new Match("05-01-2021", "tu", "cr", "5-2"),
                  new Match("06-01-2021", "po", "ir", "4-0"),
                  new Match("07-01-2021", "al", "uk", "1-3"),
                  new Match("08-01-2021", "es", "rt", "0-1")];

function Buvette(nom, lieu, nbVol, listVol) {
    this.nom = nom;
    this.lieu = lieu;
    this.nbVol = nbVol;
    this.listVol = listVol;
}

var listeBuvettes = [new Buvette("bv1","Rochefort"), 
                     new Buvette("bv2","La Rochelle"),
                     new Buvette("","")];

//dbg(listeBuvettes[1].nom)
