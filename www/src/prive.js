function LogAdmin (){
    var pass=document.getElementById("mdp");
    console.log(pass.value);
    if(pass.value==MDP){
    document.querySelector("form").innerHTML="<p>Test</p>";
    }
    else {
        alert("Mauvais mot de passe !");
    }
}