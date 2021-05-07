/*  Desc : Permet de réinitialiser la valeur par défaut si l'imput est vide
    si non laisse la valeur dans l'imput
    obj : L'objet conront
    value : Valeur à remetre par défaut*/
function resetValue (obj, value) {            
    if(obj.value == '')
        return value;
    else
        return obj.value;
}

function focusValue (obj, value) {            
    if(obj.value == value)
        return '';
    else
        return obj.value;
}

function rechercheMembres() {
    document.getElementById('rechercheMembres').innerHTML += '<section class="panel">Pas de résultat !</section>';
}