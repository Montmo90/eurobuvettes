function LogAdmin (){
    var pass=document.getElementById("mdp");
    console.log(pass.value);
    if(pass.value==MDP){
    document.querySelector("form").innerHTML="<p>Vous êtes désormais connecté en tant qu'administrateur.</p><br><div>Ajouter un volontaire</div><input type=textfield><input type=button value=Confirmer><br><div>Programmer une buvette</div><input type=textfield><input type=button value=Confirmer><br><div>Programmer un match</div><input type=textfield><input type=button value=Confirmer>";
    }
    else {
        alert("Mauvais mot de passe !");
    }
}