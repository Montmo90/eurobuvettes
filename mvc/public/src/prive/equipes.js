$(function () {
    listEquipes("#equList");
    listEquipes("#equ1");
    listEquipes("#equ2");
    listDrapeau();
});

let modifEquipe = false;

let erreurPays = true;
let erreurDrap = true;

//Input Pays
$("#nomEqu").change(function () {
    let pays = $("#nomEqu").val();

    if (pays == "") {
        erreurPays = true;
        $("#nomEqu").addClass("is-invalid");
        $("#nomEqu").removeClass("is-valid");
    } else {
        erreurPays = false;
        $("#nomEqu").addClass("is-valid");
        $("#nomEqu").removeClass("is-invalid");
    }

    canAddEqu();
});

//Input Drapeau
$("#drapEqu").click(function () {
    var myModal = new bootstrap.Modal(document.getElementById('modalDrapeau'));
    myModal.show();
});

$("#drapEqu").change(function () {
    let drapeau = $("#drapEqu").attr("pays");

    if (drapeau == "") {
        erreurDrap = true;
        $("#drapEqu").addClass("is-invalid");
        $("#drapEqu").removeClass("is-valid");
    } else {
        erreurDrap = false;
        $("#drapEqu").addClass("is-valid");
        $("#drapEqu").removeClass("is-invalid");
    }

    canAddEqu();
})

//Input List Equipes
$("#equList").change(function () {
    let equList = $("#equList").val();
    
    if (equList == "") {
        $("#effacerEqu").attr("disabled", true);
        $("#modifEqu").attr("disabled", true);
        $("#equListDrap").attr("src", "public/img/flags/0.webp");
    } else {
        $("#effacerEqu").attr("disabled", false);
        $("#modifEqu").attr("disabled", false);

        let drapeau = $("#equList option[value=" + equList + "]").attr("drapeau");
        $("#equListDrap").attr("src", "public/img/flags/" + drapeau);
    }

});

//Bouton Can Ajouter
function canAddEqu() {
    if (erreurPays || erreurDrap)
        $("#btnAddEqu").attr("disabled", true);
    else
        $("#btnAddEqu").attr("disabled", false);
}

//Bouton Ajouter/Modifier
$("#btnAddEqu").click(function () {
    if (erreurPays || erreurDrap)
        return;

    let pays = $("#nomEqu").val();
    let drapeau = $("#drapEqu").attr("pays");

    if (modifEquipe) {
        let id = $("#idEqu").val();
        //console.log(id);
        updateEqu(id, pays, drapeau);
    } else {
        addEqu(pays, drapeau);
    }
});

//Create
function addEqu(pays, drapeau) {
    $.post("prive/addEqu", { pays, drapeau })
        .done(function (data) {
            if (data == 'true') {
                toast("success", "Félicitation !", `L'équipe <strong>${pays}</strong> a bien été ajoutée.`);

                resetEquipe();

                listEquipes("#equList");
                listEquipes("#equ1");
                listEquipes("#equ2");
            } else {
                toast("danger", "Erreur !", `Une erreur est survenue.`);
            }
        });
}

//Update
function updateEqu(id, pays, drapeau) {
    $.post("prive/updateEqu", { id, pays, drapeau })
        .done(function (data) {
            if (data == 'true') {
                toast("warning", "Félicitation !", `L'équipe <strong>${pays}</strong> a bien été modifiée.`);

                resetEquipe();

                listEquipes("#equList");
                listEquipes("#equ1");
                listEquipes("#equ2");
            } else {
                toast("danger", "Erreur !", `Une erreur est survenue.`);
            }
        });
}

//Modify
$("#modifEqu").click(function () {
    if ($("#equList").val() == "")
        return;

    let id = $("#equList").val();
    let pays = $("#equList option[value=" + id + "]").attr("pays");
    let drapeau = $("#equList option[value=" + id + "]").attr("drapeau");

    $("#idEqu").val(id);

    $("#nomEqu").val(pays);
    $("#nomEqu").change();

    $("#drapEqu").attr("src", "public/img/flags/" + drapeau);
    $("#drapEqu").attr("pays", pays);
    $("#drapEqu").change();


    $("#btnAddEqu").val('Modifier');
    $("#btnCancelEqu").attr("hidden", false);
    $("#effacerEqu").attr("disabled", true);
    modifEquipe = true;
});

//Cancel Modify
$("#btnCancelEqu").click(function () {
    resetEquipe();
});

//Delete
$("#effacerEqu").click(function () {
    if ($("#equList").val() == "")
        return;

    let myModal = new bootstrap.Modal(document.getElementById('modalDelete'));
    myModal.show();

    let id = $("#equList").val();
    let pays = $("#equList option[value=" + id + "]").attr("pays");

    $("#modalDelete .modal-body").html(`Souhaitez-vous supprimer l'équipe ${pays} ?`);

    $("#deleteConfirm").off("click");
    $("#deleteConfirm").on("click", deleteEqu);
});


//Confirme Delete
function deleteEqu() {
    let myModalEl = document.getElementById('modalDelete');
    let modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();

    let id = $("#equList").val();
    let pays = $("#equList option[value=" + id + "]").attr("pays");

    $.post("prive/deleteEqu", { id })
        .done(function (data) {

            console.log(data);

            if (data == 'true') {
                toast("success", "Félicitation !", `L'équipe <strong>${pays}</strong> a bien été supprimée.`);

                listEquipes("#equList");
                $("#equListDrap").attr("src", "public/img/flags/0.webp");

                listEquipes("#equ1");
                listEquipes("#equ2");
            } else if (data == 'false') {
                toast("danger", "Erreur !", `Une erreur est survenue.`);
            } else {
                toast("danger", "Erreur !", `Vous ne pouvez pas supprimer l'équipe <strong>${pays}</strong> car elle participe à un matchs.`);
            }
        });
}

//Reset
function resetEquipe() {
    $("#idEqu").val("");

    $("#nomEqu").val("");
    $("#nomEqu").change();
    $("#nomEqu").removeClass("is-invalid");

    $("#drapEqu").attr("src", "public/img/flags/0.webp");
    $("#drapEqu").attr("pays", "");
    $("#drapEqu").change();
    $("#drapEqu").removeClass("is-invalid");

    $("#equList").val("");

    modifEquipe = false;

    $("#btnAddEqu").val('Ajouter');
    $("#btnCancelEqu").attr("hidden", true);
    $("#equList").change();
}

//Drapeau
function listDrapeau() {
    let append = "";
    $.get("prive/listDrapeau", function (data) {
        for (const value of data) {
            append += `<div onclick="choixDrapeau('${value}')"><img src="public/img/flags/${value}" alt="${value}" class="py-1 px-1"><p>${value}</p></div>`;
        }
        $("#listDrapEqu").append(append);
    }, 'json');
}

function choixDrapeau(name) {
    var myModalEl = document.getElementById('modalDrapeau');
    var modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();

    $("#drapEqu").attr("src", "public/img/flags/" + name);
    $("#drapEqu").attr("pays", name);
    $("#drapEqu").change();

    erreurDrap = false;

    canAddEqu();
}