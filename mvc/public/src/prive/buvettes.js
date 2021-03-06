$(function () {
    listBuvettes("#buvList");
});

let modifBuvette = false;

let erreurBuvette = true;
let erreurEmplacement = true;
let erreurResp = true;


//Input Nom Buvette
$("#newBuv").change(function () {
    let buvette = $("#newBuv").val();

    if (buvette == "") {
        erreurBuvette = true;
        $("#newBuv").addClass("is-invalid");
        $("#newBuv").removeClass("is-valid");
    } else {
        erreurBuvette = false;
        $("#newBuv").addClass("is-valid");
        $("#newBuv").removeClass("is-invalid");
    }

    canAddBuvette();
});

//Input Emplacement
$("#empBuv").change(function () {
    let emplacement = $("#empBuv").val();

    if (emplacement == "") {
        erreurEmplacement = true;
        $("#empBuv").addClass("is-invalid");
        $("#empBuv").removeClass("is-valid");
    } else {
        erreurEmplacement = false;
        $("#empBuv").addClass("is-valid");
        $("#empBuv").removeClass("is-invalid");
    }

    canAddBuvette();
});

//Input Responsable
$("#respBuvList").change(function () {
    let idResp = $("#respBuvList").val();

    if (idResp == "") {
        erreurResp = true;
        $("#respBuvList").addClass("is-invalid");
        $("#respBuvList").removeClass("is-valid");
    } else {
        erreurResp = false;
        $("#respBuvList").addClass("is-valid");
        $("#respBuvList").removeClass("is-invalid");
    }

    canAddBuvette();
});

//Input List Buvettes
$("#buvList").change(function () {
    let buvList = $("#buvList").val();

    if (buvList == "") {
        $("#effacerBuv").attr("disabled", true);
        $("#modifBuv").attr("disabled", true);
    } else {
        $("#effacerBuv").attr("disabled", false);
        $("#modifBuv").attr("disabled", false);
    }
});

//Bouton Can Ajouter
function canAddBuvette() {
    if (erreurBuvette || erreurEmplacement || erreurResp)
        $("#btnAddBuv").attr("disabled", true);
    else
        $("#btnAddBuv").attr("disabled", false);
}

//Bouton Ajouter/Modifier
$("#btnAddBuv").click(function () {
    if (erreurBuvette || erreurEmplacement || erreurResp)
        return;

    let buvette = $("#newBuv").val();
    let emplacement = $("#empBuv").val();
    let idResp = $("#respBuvList").val();

    if (modifBuvette) {
        let id = $("#idBuv").val();
        //console.log(id);
        updateBuvette(id, buvette, emplacement, idResp);
    } else {
        addBuvette(buvette, emplacement, idResp);
    }
});

//Create
function addBuvette(buvette, emplacement, idResp) {
    $.post("prive/addBuv", { buvette, emplacement, idResp })
        .done(function (data) {
            if (data == 'true') {
                toast("success", "F??licitation !", `La buvette <strong>${buvette}</strong> a bien ??t?? ajout??e.`);

                resetBuvette();

                listBuvettes("#buvList");
            } else {
                toast("danger", "Erreur !", `Une erreur est survenue.`);
            }
        });
}

//Update
function updateBuvette(id, buvette, emplacement, idResp) {
    $.post("prive/updateBuv", { id, buvette, emplacement, idResp })
        .done(function (data) {
            if (data == 'true') {
                toast("warning", "F??licitation !", `La buvette <strong>${buvette}</strong> a bien ??t?? modifi??e.`);
                
                resetBuvette();
    
                listBuvettes("#buvList");
            } else {
                toast("danger", "Erreur !", `Une erreur est survenue.`);
            }

        });
}

//Modify
$("#modifBuv").click(function () {
    if ($("#buvList").val() == "")
        return;

    let id = $("#buvList").val();
    let nom = $("#buvList option[value=" + id + "]").attr("nomBuvette");
    let emplacement = $("#buvList option[value=" + id + "]").attr("emplacement");
    let idVol = $("#buvList option[value=" + id + "]").attr("idVol");

    $("#idBuv").val(id);

    $("#newBuv").val(nom);
    $("#newBuv").change();

    $("#empBuv").val(emplacement);
    $("#empBuv").change();

    $("#respBuvList").val(idVol);
    $("#respBuvList").change();

    $("#btnAddBuv").val('Modifier');
    $("#btnCancelBuv").attr("hidden", false);
    $("#effacerBuv").attr("disabled", true);
    modifBuvette = true;
});

//Cancel Modify
$("#btnCancelBuv").click(function () {
    resetBuvette();
});

//Delete
$("#effacerBuv").click(function () {
    if ($("#buvList").val() == "")
        return;

    let myModal = new bootstrap.Modal(document.getElementById('modalDelete'));
    myModal.show();

    let id = $("#buvList").val();
    let nom = $("#buvList option[value=" + id + "]").attr("nomBuvette");

    $("#modalDelete .modal-body").html(`Souhaitez-vous supprimer la buvette ${nom} ?`);

    $("#deleteConfirm").off("click");
    $("#deleteConfirm").on("click", deleteBuv);
});


//Confirme Delete
function deleteBuv() {
    let myModalEl = document.getElementById('modalDelete');
    let modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();

    let id = $("#buvList").val();
    let nom = $("#buvList option[value=" + id + "]").attr("nomBuvette");

    $.post("prive/deleteBuv", { id })
        .done(function (data) {
            if (data == 'true') {
                toast("success", "F??licitation !", `La buvette <strong>${nom}</strong> a bien ??t?? supprim??e.`);
                
                listBuvettes("#buvList");
            } else if (data == 'false') {
                toast("danger", "Erreur !", `Une erreur est survenue.`);
            } else {
                toast("danger", "Erreur !", `Vous ne pouvez pas supprimer la buvette <strong>${nom}</strong> car elle est assign??e ?? au moins un match.`);
            }
        });
}

//Reset
function resetBuvette() {
    $("#idBuv").val("");

    $("#newBuv").val("");
    $("#newBuv").change();
    $("#newBuv").removeClass("is-invalid");

    $("#empBuv").val("");
    $("#empBuv").change();
    $("#empBuv").removeClass("is-invalid");

    $("#respBuvList").val("");
    $("#respBuvList").change();
    $("#respBuvList").removeClass("is-invalid");

    modifBuvette = false;

    $("#btnAddBuv").val('Ajouter');
    $("#btnCancelBuv").attr("hidden", true);
    $("#buvList").change();
}