let modifVol = false;

$(function() {
    listVolontaires();
});

$("#formAddVol").submit(function (event) {
    event.preventDefault();

    let nom = $("#formAddVol").find('input[name="nomVol"]').val();
    let age = $("#formAddVol").find('input[name="ageVol"]').val();
    
    if(modifVol) {
        let id = $("#formAddVol").find('input[name="idVol"]').val();
        console.log(id);
        updateVol(id, nom, age);
    } else {
        addVol(nom, age);
    }

});

//Create
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

//Update
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

$("#modifVol").click(function() {
    let id = $("#volList").val();
    let nom = $("#volList option[value="+id+"]").attr("nom");
    let age = $("#volList option[value="+id+"]").attr("age");

    $("#formAddVol").find('input[name="idVol"]').val(id);
    $("#formAddVol").find('input[name="nomVol"]').val(nom);
    $("#formAddVol").find('input[name="ageVol"]').val(age);

    $("#btnAddVol").val('Modifier');
    modifVol = true;
});

//Delete
$("#formPriveVol").submit(function (event) {
    event.preventDefault();

    let id = $("#volList").val();
    let nom = $("#volList option[value="+id+"]").attr("nom");

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

//Read
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

    let toast = new bootstrap.Toast($(`#toast${countToast}`));
    toast.show();

    countToast++;
}