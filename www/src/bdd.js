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
var listeAge = "30|30|24|22|31|#On-demande-pas-l-age-d-une-dame|16|27|22|31|?".split("|");
var listeNbPart = "13|7|11|42|2|31|22|8|12|2|5".split("|");
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

/*Création du constructeur Buvette*/
function Buvette(ouvert, nom, lieu, nbVol, listVol, resp) {
    this.ouvert = ouvert;
    this.nom = nom;
    this.lieu = lieu;
    this.nbVol = nbVol;
    this.listVol = listVol;
    this.resp = resp;
}

var listeBuvettes = [new Buvette(true, "Drinkons ensemble!","Parc des princes", 4, "Jean-Michel,Kevin,Fairouze,Jeremy", "Jean-Michel"), 
                     new Buvette(true, "ALCOLO","Stade de France", 1, "Alexis M", "Alexis M"),
                     new Buvette(false, "Yapado","Stade Vélodrome", 5, "Fabian,Morgan,Jeremy,Killian,Cédric", "Killian"),
                     new Buvette(false, "Bubbletohol","Allianz Riviera", 3, "Fairouze,Aziz,Alexis M", "Fairouze"),
                     new Buvette(false,"Balon bourré","Stade Geoffroy-Guichard", 2, "Aziz,Jeremy", "Jeremy"),
                     new Buvette(true, "Open Bar","Stadium", 1, "Jean-Michel", "Jean-Michel"),
                     new Buvette(false, "Un chat un verre","Stade Bollaert", 2, "Cédric,Jeremy", "Cédric"),
                     new Buvette(true, "Débit de boisson","Stade Pierre Mauroy", 3, "Alexis M,Killian,Morgan", "Morgan"),
                     new Buvette(false, "Glouglou","Stade des lumières", 4, "Fabian,Jean-Michel,Jeremy,Kevin", "Kevin"),
                    ];


//dbg(listeBuvettes[1].nom)

/*Création du constructeur Matchs*/
function Match (date, teamA, teamB, score, buvette) {
    this.date = date;
    this.teamA = teamA;
    this.teamB = teamB;
    this.score = score;
    this.buvette = buvette;
}

var listeMatch = [new Match("01-01-2021", listeEquipe[0], listeEquipe[8], "13-0", listeBuvettes[1]),
                  new Match("02-01-2021", listeEquipe[1], listeEquipe[9], "0-0", listeBuvettes[1]),
                  new Match("03-01-2021", listeEquipe[2], listeEquipe[10], "2-1", listeBuvettes[2]),
                  new Match("04-01-2021", listeEquipe[3], listeEquipe[11], "3-3", listeBuvettes[3]),
                  new Match("05-01-2021", listeEquipe[4], listeEquipe[12], "5-2", listeBuvettes[4]),
                  new Match("06-01-2021", listeEquipe[5], listeEquipe[13], "4-0", listeBuvettes[5]),
                  new Match("07-01-2021", listeEquipe[6], listeEquipe[14], "1-3", listeBuvettes[6]),
                  new Match("08-01-2021", listeEquipe[7], listeEquipe[15], "0-1", listeBuvettes[7])];
