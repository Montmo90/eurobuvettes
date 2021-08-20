let modifVol = false;
let modifBuvette = false;

$(function() {
    listVolontaires("#volList");
    listVolontaires("#respBuvList");
    listBuvettes("#buvList");
});

// #region Volontaires
$("#formAddVol").submit(function (event) {
    event.preventDefault();

    let nom = $("#formAddVol").find('input[name="nomVol"]').val();
    let age = $("#formAddVol").find('input[name="ageVol"]').val();
    
    if(modifVol) {
        let id = $("#formAddVol").find('input[name="idVol"]').val();
        //console.log(id);
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
    
        listVolontaires("#volList");
        listVolontaires("#respBuvList");
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

        resetVolontaire();
    
        listVolontaires("#volList");
        listVolontaires("#respBuvList");
        listBuvettes("#buvList");
    });
}

//Modify
$("#modifVol").click(function() {
    let id = $("#volList").val();
    let nom = $("#volList option[value="+id+"]").attr("nom");
    let age = $("#volList option[value="+id+"]").attr("age");

    $("#formAddVol").find('input[name="idVol"]').val(id);
    $("#formAddVol").find('input[name="nomVol"]').val(nom);
    $("#formAddVol").find('input[name="ageVol"]').val(age);

    $("#btnAddVol").val('Modifier');
    $("#btnCancelVol").attr("hidden",false);
    $("#effacerVol").attr("hidden",true);
    modifVol = true;
});

//Cancel Modify
$("#btnCancelVol").click(function() {
    resetVolontaire();
});

//Delete
$("#deleteVol").click(function () {
    var myModalEl = document.getElementById('modalDeleteVol');
    var modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();

    let id = $("#volList").val();
    let nom = $("#volList option[value="+id+"]").attr("nom");

    $.post("api/deleteVol", {id})
    .done(function(data) {

        console.log(data);

        if(data == 'true') {
            toast("success", "Félicitation !", `Le volontaire <strong>${nom}</strong> a bien été supprimé.`);
        }else if (data == 'false') {
            toast("danger", "Erreur !", `Une erreur est survenue.`);
        } else {
            toast("danger", "Erreur !", `Vous ne pouvez pas supprimer le volontaire <strong>${nom}</strong> car il est responsable d'au moins une buvette.`);
        }
        
        listVolontaires("#volList");
        listVolontaires("#respBuvList");
    });    
});

$("#effacerVol").click(function () {
    let id = $("#volList").val();
    let nom = $("#volList option[value="+id+"]").attr("nom");
    $("#modalNomVol").replaceWith(nom);
})

//Read
function listVolontaires(id) {
    $(id).children().remove();

    $.get("api/getAllVol", function(data) {
        for (const value of data) {
            $(id).append(`
                <option value="${value["id"]}" nom="${value["nom"]}" age="${value["age"]}">ID ${value["id"]} : ${value["nom"]} - ${value["age"]} ans</option>
            `);            
        }
    }, 'json');
}

//Reset
function resetVolontaire() {
    $("#formAddVol")[0].reset();
    modifVol = false;
    $("#btnAddVol").val('Ajouter');
    $("#btnCancelVol").attr("hidden",true);
    $("#effacerVol").attr("hidden",false);
}
// #endregion


// #region Buvettes
$("#formPriveBuv").submit(function (event) {
    event.preventDefault();

    let buvette = $("#formPriveBuv").find('input[name="newBuv"]').val();
    let emplacement = $("#formPriveBuv").find('input[name="empBuv"]').val();
    let idResp = $("#respBuvList").val();
    
    if(modifBuvette) {
        let id = $("#formPriveBuv").find('input[name="idBuv"]').val();
        //console.log(id);
        updateBuvette(id, buvette, emplacement, idResp);
    } else {
        addBuvette(buvette, emplacement, idResp);
    }
});

//Create
function addBuvette(buvette, emplacement, idResp) {
    $.post("api/addBuvette", {buvette, emplacement, idResp})
    .done(function(data) {
        if(data == 'true') {
            toast("success", "Félicitation !", `La buvette <strong>${buvette}</strong> a bien été ajoutée.`);
        } else {
            toast("danger", "Erreur !", `Une erreur est survenue.`);
        }

        $("#formPriveBuv")[0].reset();
        
        listBuvettes("#buvList");
    });
}

//Update
function updateBuvette (id, buvette, emplacement, idResp) {
    $.post("api/updateBuvette", {id, buvette, emplacement, idResp})
    .done(function(data) {
        console.log(data);
        if(data == 'true') {
            toast("warning", "Félicitation !", `La buvette <strong>${buvette}</strong> a bien été modifée.`);
        } else {
            toast("danger", "Erreur !", `Une erreur est survenue.`);
        }
    
        resetBuvette();
    
        listBuvettes("#buvList");
    });
}

//Modify
$("#modifBuv").click(function() {
    let id = $("#buvList").val();
    let nom = $("#buvList option[value="+id+"]").attr("nomBuvette");
    let emplacement = $("#buvList option[value="+id+"]").attr("emplacement");
    let idVol = $("#buvList option[value="+id+"]").attr("idVol");

    $("#formPriveBuv").find('input[name="idBuv"]').val(id);
    $("#formPriveBuv").find('input[name="newBuv"]').val(nom);
    $("#formPriveBuv").find('input[name="empBuv"]').val(emplacement);
    $("#respBuvList").val(idVol);

    $("#btnAddBuv").val('Modifier');
    modifBuvette = true;
    $("#btnCancelBuv").attr("hidden",false);
    $("#effacerBuv").attr("hidden",true);
});

//Cancel Modify
$("#btnCancelBuv").click(function() {
    resetBuvette();
});

//Delete
$("#deleteBuv").click(function () {
    var myModalEl = document.getElementById('modalDeleteBuv');
    var modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();

    let id = $("#buvList").val();
    let nom = $("#buvList option[value="+id+"]").attr("nomBuvette");

    $.post("api/deleteBuvette", {id})
    .done(function(data) {
        if(data == 'true') {
            toast("success", "Félicitation !", `La buvette <strong>${nom}</strong> a bien été supprimée.`);
        } else {
            toast("danger", "Erreur !", `Une erreur est survenue.`);
        }
        
        listBuvettes("#buvList");
    });    
});

$("#effacerBuv").click(function () {
    let id = $("#buvList").val();
    let nom = $("#buvList option[value="+id+"]").attr("nomBuvette");
    $("#modalNomBuv").replaceWith(nom);
})

//Read
function listBuvettes(id) {
    $(id).children().remove();

    $.get("api/getAllBuvettes", function(data) {
        //console.log (data);
        for (const value of data) {
            $(id).append(`
                <option value="${value["id"]}" nomBuvette="${value["nomBuvette"]}" emplacement="${value["emplacement"]}" idVol="${value["idVol"]}">ID ${value["id"]} : ${value["nomBuvette"]} à ${value["emplacement"]} - Resp : ID ${value["idVol"]} : ${value["nom"]} - ${value["age"]} ans</option>
            `);            
        }
    }, 'json');
}

//Reset
function resetBuvette() {
    $("#formPriveBuv")[0].reset();
    modifBuvette = false;
    $("#btnAddBuv").val('Ajouter');
    $("#btnCancelBuv").attr("hidden",true);
    $("#effacerBuv").attr("hidden",false);
}
// #endregion

//Toast
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