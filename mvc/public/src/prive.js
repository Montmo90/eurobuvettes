let modifVol = false;

$(function() {
    listVolontaires();
});

$("#formAddVol").submit(function (event) {
    event.preventDefault();

    nom = $("#formAddVol").find('input[name="nomVol"]').val();
    age = $("#formAddVol").find('input[name="ageVol"]').val();

    if(modifVol) {
        updateVol(id, nom, age);
    } else {
        addVol(nom, age);
    }

});

function addVol (nom, age) {
    $.post("api/addVol", {nom,age})
    .done(function(data) {
        if(data == 'true') {
            toast("success", "Félicitation !", `Le volontaire <strong>${nom}</strong> a bien été ajouté.`);
        } else {
            toast("danger", "Erreur !", `Une erreur est survenue.`);
        }

    
        $("#formAddVol")[0].reset();
    
        listVolontaires();
    });
}

function updateVol (id, nom, age) {
    $.post("api/updateVol", {id,nom,age})
    .done(function(data) {
        if(data == 'true') {
            toast("warning", "Félicitation !", `Le volontaire <strong>${nom}</strong> a bien été modifé.`);
        } else {
            toast("danger", "Erreur !", `Une erreur est survenue.`);
        }
    
        $("#formAddVol")[0].reset();
    
        listVolontaires();

        modifVol = false;
        $("#btnAddVol").val('Ajouter');
    });
}

$("#formPriveVol").submit(function (event) {
    event.preventDefault();

    id = $("#volList").val();
    nom = $("#volList option[value="+id+"]").attr("nom");

    $.post("api/deleteVol", {id})
    .done(function(data) {
        if(data == 'true') {
            toast("success", "Félicitation !", `Le volontaire <strong>${nom}</strong> a bien été supprimé.`);
        } else {
            toast("danger", "Erreur !", `Une erreur est survenue.`);
        }
        
        listVolontaires();
    });    
});

$("#modifVol").click(function() {
    id = $("#volList").val();
    nom = $("#volList option[value="+id+"]").attr("nom");
    age = $("#volList option[value="+id+"]").attr("age");

    $("#formAddVol").find('input[name="idVol"]').val(id);
    $("#formAddVol").find('input[name="nomVol"]').val(nom);
    $("#formAddVol").find('input[name="ageVol"]').val(age);

    $("#btnAddVol").val('Modifier');
    modifVol = true;
});

function listVolontaires() {
    $("#volList").children().remove();

    $.get("api/getAllVol", function(data) {
        for (const value of data) {
            $("#volList").append(`
                <option value="${value["id"]}" nom="${value["nom"]}" age="${value["age"]}">ID ${value["id"]} : ${value["nom"]} - ${value["age"]} ans</option>
            `);            
        }
    }, 'json');
}

let countToast = 0;
function toast(type, title, content) {
    let t = `  
    <div id="toast${countToast}" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header bg-${type} bg-gradient text-white">
            <strong class="me-auto">${title}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            ${content}
        </div>
    </div>`;

    $("#mainToast").append(t);

    var toast = new bootstrap.Toast($(`#toast${countToast}`));
    toast.show();

    countToast++;
}