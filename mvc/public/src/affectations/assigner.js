$(function () {
    listBuvettes("#buvListAss");
    listMatchs("#matListAss");
    listAssigner("#assList");
});

let modifAssigner = false;

let erreurBuvListAss = true;
let erreurMatListAss = true;


//Input Buvette
$("#buvListAss").change(function () {
    let buvListAss = $("#buvListAss").val();

    if (buvListAss == "") {
        erreurBuvListAss = true;
        $("#buvListAss").addClass("is-invalid");
        $("#buvListAss").removeClass("is-valid");
    } else {
        erreurBuvListAss = false;
        $("#buvListAss").addClass("is-valid");
        $("#buvListAss").removeClass("is-invalid");
    }

    canAssigner();
});

//Input Match
$("#matListAss").change(function () {
    let matListAss = $("#matListAss").val();

    if (matListAss == "") {
        erreurMatListAss = true;
        $("#matListAss").addClass("is-invalid");
        $("#matListAss").removeClass("is-valid");
    } else {
        erreurMatListAss = false;
        $("#matListAss").addClass("is-valid");
        $("#matListAss").removeClass("is-invalid");
    }

    canAssigner();
});

//Input List Assigner
$("#assList").change(function () {
    let assList = $("#assList").val();

    if (assList == "") {
        $("#effacerAss").attr("disabled", true);
        $("#modifAss").attr("disabled", true);
    } else {
        $("#effacerAss").attr("disabled", false);
        $("#modifAss").attr("disabled", false);
    }
});

//Bouton Can Ajouter
function canAssigner() {
    if (erreurBuvListAss || erreurMatListAss)
        $("#btnAddAss").attr("disabled", true);
    else
        $("#btnAddAss").attr("disabled", false);
}

//Bouton Ajouter/Modifier
$("#btnAddAss").click(function () {
    if (erreurBuvListAss || erreurMatListAss)
        return;

    let idBuvette = $("#buvListAss").val();
    let idMatch = $("#matListAss").val();

    if (modifAssigner) {
        let id = $("#idAss").val();
        //console.log(id);
        updateAssigner(id, idBuvette, idMatch);
    } else {
        addAssigner(idBuvette, idMatch);
    }
});

//Create
function addAssigner(idBuvette, idMatch) {
    $.post("affectations/addAss", { idBuvette, idMatch })
        .done(function (data) {
            if (data == 'true') {
                let buvette = $("#buvListAss option[value=" + idBuvette + "]").attr("nomBuvette");
                let match = $("#buvListAss option[value=" + idMatch + "]").attr("date");

                toast("success", "Félicitation !", `La buvette <strong>${buvette}</strong> a bien été assigné au match du <strong>${match}</strong>.`);

                resetAssigner();

                listAssigner("#assList");
            } else {
                toast("danger", "Erreur !", `Une erreur est survenue.`);
            }
        });
}

//Update
function updateAssigner(id, idBuvette, idMatch) {
    console.log(id, idBuvette, idMatch)
    $.post("affectations/updateAss", { id, idBuvette, idMatch })
        .done(function (data) {
            if (data == 'true') {
                toast("warning", "Félicitation !", `L'assignation a bien été modifiée.`);
                
                resetAssigner();

                listAssigner("#assList");
            } else {
                toast("danger", "Erreur !", `Une erreur est survenue.`);
            }
        });
}

//Modify
$("#modifAss").click(function () {
    if ($("#assList").val() == "")
        return;

    let id = $("#assList").val();
    let idBuvette = $("#assList option[value=" + id + "]").attr("idBuvette");
    let idMatch = $("#assList option[value=" + id + "]").attr("idMatch");

    $("#idAss").val(id);

    $("#buvListAss").val(idBuvette);
    $("#buvListAss").change();

    $("#matListAss").val(idMatch);
    $("#matListAss").change();

    $("#btnAddAss").val('Modifier');
    $("#btnCancelAss").attr("hidden", false);
    $("#effacerAss").attr("disabled", true);
    modifAssigner = true;
});

//Cancel Modify
$("#btnCancelAss").click(function () {
    resetAssigner();
});

//Delete
$("#effacerAss").click(function () {
    if ($("#assList").val() == "")
        return;

    let myModal = new bootstrap.Modal(document.getElementById('modalDelete'));
    myModal.show();

    let id = $("#assList").val();
    let buvette = $("#assList option[value=" + id + "]").attr("nomBuvette");
    let emplacementB = $("#assList option[value=" + id + "]").attr("emplacementB");
    let date = $("#assList option[value=" + id + "]").attr("dateMatch");
    let pays1 = $("#assList option[value=" + id + "]").attr("pays1");
    let pays2 = $("#assList option[value=" + id + "]").attr("pays2");
    let emplacement = $("#assList option[value=" + id + "]").attr("emplacement");

    $("#modalDelete .modal-body").html(`Souhaitez-vous supprimer l'affectation de la buvette ${buvette} à ${emplacementB} au match ${pays1} vs ${pays2} le ${date} à ${emplacement} ?`);

    $("#deleteConfirm").off("click");
    $("#deleteConfirm").on("click", deleteAss);
});


//Confirme Delete
function deleteAss() {
    let myModalEl = document.getElementById('modalDelete');
    let modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();

    let id = $("#assList").val();

    $.post("affectations/deleteAss", { id })
        .done(function (data) {
            if (data == 'true') {
                toast("success", "Félicitation !", `L'assignation a bien été supprimée.`);
                
                listAssigner("#assList");
            } else {
                toast("danger", "Erreur !", `Une erreur est survenue.`);
            }
        });
}

//Reset
function resetAssigner() {
    $("#idAss").val("");

    $("#buvListAss").val("");
    $("#buvListAss").change();
    $("#buvListAss").removeClass("is-invalid");

    $("#matListAss").val("");
    $("#matListAss").change();
    $("#matListAss").removeClass("is-invalid");

    modifAssigner = false;

    $("#btnAddAss").val('Ajouter');
    $("#btnCancelAss").attr("hidden", true);
    $("#assList").change();
}