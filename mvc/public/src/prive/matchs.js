$(function () {
    listMatchs("#matList");
});

let modifMat = false;

let erreurDate = true;
let erreurEmpMatch = true;
let erreurEqu1 = true;
let erreurScoreEqu1 = true;
let erreurEqu2 = true;
let erreurScoreEqu2 = true;

//Input Data
$("#newMat").change(function () {
    let date = $("#newMat").val();

    if (date == "") {
        erreurDate = true;
        $("#newMat").addClass("is-invalid");
        $("#newMat").removeClass("is-valid");
    } else {
        erreurDate = false;
        $("#newMat").addClass("is-valid");
        $("#newMat").removeClass("is-invalid");
    }

    canAddMatch();
});

//Input Emplacement
$("#empMat").change(function () {
    let emplacement = $("#empMat").val();

    if (emplacement == "") {
        erreurEmpMatch = true;
        $("#empMat").addClass("is-invalid");
        $("#empMat").removeClass("is-valid");
    } else {
        erreurEmpMatch = false;
        $("#empMat").addClass("is-valid");
        $("#empMat").removeClass("is-invalid");
    }

    canAddMatch();
});

//Input Equipe 1
$("#equ1").change(function () {
    let equ1 = $("#equ1").val();

    if (equ1 == "") {
        erreurEqu1 = true;
        $("#equ1").addClass("is-invalid");
        $("#equ1").removeClass("is-valid");
    } else {
        erreurEqu1 = false;
        $("#equ1").addClass("is-valid");
        $("#equ1").removeClass("is-invalid");
    }

    canAddMatch();
});

//Input Score Equipe 1
$("#scoreEqu1").change(function () {
    let scoreEqu1 = $("#scoreEqu1").val();

    if (scoreEqu1 == "" || isNaN(scoreEqu1) || scoreEqu1 < 0) {
        erreurScoreEqu1 = true;
        $("#scoreEqu1").addClass("is-invalid");
        $("#scoreEqu1").removeClass("is-valid");
    } else {
        erreurScoreEqu1 = false;
        $("#scoreEqu1").addClass("is-valid");
        $("#scoreEqu1").removeClass("is-invalid");
    }

    canAddMatch();
});

//Input Equipe 2
$("#equ2").change(function () {
    let equ2 = $("#equ2").val();

    if (equ2 == "") {
        erreurEqu2 = true;
        $("#equ2").addClass("is-invalid");
        $("#equ2").removeClass("is-valid");
    } else {
        erreurEqu2 = false;
        $("#equ2").addClass("is-valid");
        $("#equ2").removeClass("is-invalid");
    }

    canAddMatch();
});

//Input Score Equipe 2
$("#scoreEqu2").change(function () {
    let scoreEqu2 = $("#scoreEqu2").val();

    if (scoreEqu2 == "" || isNaN(scoreEqu2) || scoreEqu2 < 0) {
        erreurScoreEqu2 = true;
        $("#scoreEqu2").addClass("is-invalid");
        $("#scoreEqu2").removeClass("is-valid");
    } else {
        erreurScoreEqu2 = false;
        $("#scoreEqu2").addClass("is-valid");
        $("#scoreEqu2").removeClass("is-invalid");
    }

    canAddMatch();
});

//Input List Volontaires
$("#matList").change(function () {
    let matList = $("#matList").val();

    if (matList == "") {
        $("#effacerMat").attr("disabled", true);
        $("#modifMat").attr("disabled", true);
    } else {
        $("#effacerMat").attr("disabled", false);
        $("#modifMat").attr("disabled", false);
    }
});

//Bouton Can Ajouter
function canAddMatch() {
    if (erreurDate || erreurEmpMatch || erreurEqu1 || erreurScoreEqu1 || erreurEqu2 || erreurScoreEqu2)
        $("#btnAddMat").attr("disabled", true);
    else
        $("#btnAddMat").attr("disabled", false);
}

//Bouton Ajouter/Modifier
$("#btnAddMat").click(function () {
    if (erreurDate || erreurEmpMatch || erreurEqu1 || erreurScoreEqu1 || erreurEqu2 || erreurScoreEqu2)
        return;

    let date = $("#newMat").val();
    let emplacement = $("#empMat").val();
    let equ1 = $("#equ1").val();
    let scoreEqu1 = $("#scoreEqu1").val();
    let equ2 = $("#equ2").val();
    let scoreEqu2 = $("#scoreEqu2").val();

    if (modifMat) {
        let id = $("#idMat").val();
        //console.log(id);
        updateMat(id, date, emplacement, equ1, scoreEqu1, equ2, scoreEqu2);
    } else {
        addMat(date, emplacement, equ1, scoreEqu1, equ2, scoreEqu2);
    }
});

//Create
function addMat(date, emplacement, equ1, scoreEqu1, equ2, scoreEqu2) {
    $.post("api/addMat", { date, emplacement, equ1, scoreEqu1, equ2, scoreEqu2 })
        .done(function (data) {
            if (data == 'true') {
                toast("success", "Félicitation !", `Le match du <strong>${date}</strong> a bien été ajouté.`);

                resetMatch();

                listMatchs("#matList");
            } else {
                toast("danger", "Erreur !", `Une erreur est survenue.`);
            }
        });
}

//Update
function updateMat(id, date, emplacement, equ1, scoreEqu1, equ2, scoreEqu2) {
    $.post("api/updateMat", { id, date, emplacement, equ1, scoreEqu1, equ2, scoreEqu2 })
        .done(function (data) {
            if (data == 'true') {
                toast("warning", "Félicitation !", `Le match du <strong>${date}</strong> a bien été modifié.`);

                resetMatch();

                listMatchs("#matList");
            } else {
                toast("danger", "Erreur !", `Une erreur est survenue.`);
            }
        });
}

//Modify
$("#modifMat").click(function () {
    if ($("#matList").val() == "")
        return;

    let id = $("#matList").val();
    let date = $("#matList option[value=" + id + "]").attr("date");
    let emplacement = $("#matList option[value=" + id + "]").attr("emplacement");
    let equ1 = $("#matList option[value=" + id + "]").attr("equ1");
    let scoreEqu1 = $("#matList option[value=" + id + "]").attr("scoreEqu1");
    let equ2 = $("#matList option[value=" + id + "]").attr("equ2");
    let scoreEqu2 = $("#matList option[value=" + id + "]").attr("scoreEqu2");

    $("#idMat").val(id);

    $("#newMat").val(date);
    $("#newMat").change();

    $("#empMat").val(emplacement);
    $("#empMat").change();

    $("#equ1").val(equ1);
    $("#equ1").change();

    $("#scoreEqu1").val(scoreEqu1);
    $("#scoreEqu1").change();

    $("#equ2").val(equ2);
    $("#equ2").change();

    $("#scoreEqu2").val(scoreEqu2);
    $("#scoreEqu2").change();

    $("#btnAddMat").val('Modifier');
    $("#btnCancelMat").attr("hidden", false);
    $("#effacerMat").attr("disabled", true);
    modifMat = true;
});

//Cancel Modify
$("#btnCancelMat").click(function () {
    resetMatch();
});

//Delete
$("#effacerMat").click(function () {
    if ($("#matList").val() == "")
        return;

    var myModal = new bootstrap.Modal(document.getElementById('modalDeleteMat'));
    myModal.show();

    let id = $("#matList").val();
    let date = $("#matList option[value=" + id + "]").attr("date");

    $("#modalNomMat").html(date);
})

//Confirme Delete
$("#deleteMat").click(function () {
    var myModalEl = document.getElementById('modalDeleteMat');
    var modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();

    let id = $("#matList").val();
    let date = $("#matList option[value=" + id + "]").attr("date");

    $.post("api/deleteMat", { id })
        .done(function (data) {
            if (data == 'true') {
                toast("success", "Félicitation !", `Le match du <strong>${date}</strong> a bien été supprimé.`);

                listMatchs("#matList");
            } else {
                toast("danger", "Erreur !", `Une erreur est survenue.`);
            }
        });
});

//Read
function listMatchs(id) {
    $(id).children().remove();

    $.get("api/getAllMat", function (data) {
        let append = `<option value="">Liste des matchs</option>`;
        for (const value of data) {
            append += `<option value="${value["id"]}" date="${value["date"]}" emplacement="${value["emplacement"]}" equ1="${value["equ1"]}" scoreEqu1="${value["scoreEqu1"]}" equ2="${value["equ2"]}" scoreEqu2="${value["scoreEqu2"]}">ID ${value["id"]} : Le ${value["date"]} à ${value["emplacement"]} - ${value["pays1"]} vs ${value["pays2"]}</option>`;
        }
        $(id).append(append);
    }, 'json');
}

//Reset
function resetMatch() {
    $("#idMat").val("");

    $("#newMat").val("");
    $("#newMat").change();
    $("#newMat").removeClass("is-invalid");

    $("#empMat").val("");
    $("#empMat").change();
    $("#empMat").removeClass("is-invalid");

    $("#equ1").val("");
    $("#equ1").change();
    $("#equ1").removeClass("is-invalid");

    $("#scoreEqu1").val("");
    $("#scoreEqu1").change();
    $("#scoreEqu1").removeClass("is-invalid");

    $("#equ2").val("");
    $("#equ2").change();
    $("#equ2").removeClass("is-invalid");

    $("#scoreEqu2").val("");
    $("#scoreEqu2").change();
    $("#scoreEqu2").removeClass("is-invalid");

    $("#matList").val("");

    modifMat = false;

    $("#btnAddMat").val('Ajouter');
    $("#btnCancelMat").attr("hidden", true);
    $("#matList").change();
}