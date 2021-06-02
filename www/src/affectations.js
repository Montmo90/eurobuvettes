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