//Exécuté quand le document est prêt
 $(function () {
    listVolontaires("#volList");
    listVolontaires("#respBuvList");
});

let modifVol = false;

let erreurNom = true;
let erreurAge = true;

//Input Nom
$("#nomVol").change(function () {
    let nom = $("#nomVol").val();

    if (nom == "") {
        erreurNom = true;
        $("#nomVol").addClass("is-invalid");
        $("#nomVol").removeClass("is-valid");
    } else {
        erreurNom = false;
        $("#nomVol").addClass("is-valid");
        $("#nomVol").removeClass("is-invalid");
    }

    canAddVol();
});

//Input Age
$("#ageVol").change(function () {
    let age = $("#ageVol").val();

    if (age == "" || isNaN(age) || age < 18) {
        erreurAge = true;
        $("#ageVol").addClass("is-invalid");
        $("#ageVol").removeClass("is-valid");
    } else {
        erreurAge = false;
        $("#ageVol").addClass("is-valid");
        $("#ageVol").removeClass("is-invalid");
    }

    canAddVol();
});

//Input List Volontaires
$("#volList").change(function () {
    let volList = $("#volList").val();

    if (volList == "") {
        $("#effacerVol").attr("disabled", true);
        $("#modifVol").attr("disabled", true);
    } else {
        $("#effacerVol").attr("disabled", false);
        $("#modifVol").attr("disabled", false);
    }
});

//Bouton Can Ajouter
function canAddVol() {
    if (erreurNom || erreurAge)
        $("#btnAddVol").attr("disabled", true);
    else
        $("#btnAddVol").attr("disabled", false);
}

//Bouton Ajouter/Modifier
$("#btnAddVol").click(function () {
    if (erreurNom || erreurAge)
        return;

    let nom = $("#nomVol").val();
    let age = $("#ageVol").val();

    if (modifVol) {
        let id = $("#idVol").val();
        //console.log(id);
        updateVol(id, nom, age);
    } else {
        addVol(nom, age);
    }
});

//Create
function addVol(nom, age) {
    $.post("prive/addVol", { nom, age })
        .done(function (data) {
            if (data == 'true') {
                toast("success", "Félicitation !", `Le volontaire <strong>${nom}</strong> a bien été ajouté.`);

                resetVolontaire();

                listVolontaires("#volList");
                listVolontaires("#respBuvList");
            } else {
                toast("danger", "Erreur !", `Une erreur est survenue.`);
            }
        });
}

//Update
function updateVol(id, nom, age) {
    $.post("prive/updateVol", { id, nom, age })
        .done(function (data) {
            if (data == 'true') {
                toast("warning", "Félicitation !", `Le volontaire <strong>${nom}</strong> a bien été modifié.`);

                resetVolontaire();

                listVolontaires("#volList");
                listVolontaires("#respBuvList");
                listBuvettes("#buvList");
            } else {
                toast("danger", "Erreur !", `Une erreur est survenue.`);
            }
        });
}

//Modify
$("#modifVol").click(function () {
    if ($("#volList").val() == "")
        return;

    let id = $("#volList").val();
    let nom = $("#volList option[value=" + id + "]").attr("nom");
    let age = $("#volList option[value=" + id + "]").attr("age");

    $("#idVol").val(id);

    $("#nomVol").val(nom);
    $("#nomVol").change();

    $("#ageVol").val(age);
    $("#ageVol").change();

    $("#btnAddVol").val('Modifier');
    $("#btnCancelVol").attr("hidden", false);
    $("#effacerVol").attr("disabled", true);
    modifVol = true;
});

//Cancel Modify
$("#btnCancelVol").click(function () {
    resetVolontaire();
});

//Delete
$("#effacerVol").click(function () {
    if ($("#volList").val() == "")
        return;

    let myModal = new bootstrap.Modal(document.getElementById('modalDelete'));
    myModal.show();

    let id = $("#volList").val();
    let nom = $("#volList option[value=" + id + "]").attr("nom");

    $("#modalDelete .modal-body").html(`Souhaitez-vous supprimer le volontaire ${nom} ?`);

    $("#deleteConfirm").off("click");
    $("#deleteConfirm").on("click", deleteVol);
})

//Confirme Delete
function deleteVol() {
    let myModalEl = document.getElementById('modalDelete');
    let modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();

    let id = $("#volList").val();
    let nom = $("#volList option[value=" + id + "]").attr("nom");

    $.post("prive/deleteVol", { id })
        .done(function (data) {
            if (data == 'true') {
                toast("success", "Félicitation !", `Le volontaire <strong>${nom}</strong> a bien été supprimé.`);

                listVolontaires("#volList");
                listVolontaires("#respBuvList");
            } else if (data == 'false') {
                toast("danger", "Erreur !", `Une erreur est survenue.`);
            } else {
                toast("danger", "Erreur !", `Vous ne pouvez pas supprimer le volontaire <strong>${nom}</strong> car il est responsable d'au moins une buvette.`);
            }
        });
}

//Reset
function resetVolontaire() {
    $("#idVol").val("");

    $("#nomVol").val("");
    $("#nomVol").change();
    $("#nomVol").removeClass("is-invalid");

    $("#ageVol").val("");
    $("#ageVol").change();
    $("#ageVol").removeClass("is-invalid");

    $("#volList").val("");

    modifVol = false;

    $("#btnAddVol").val('Ajouter');
    $("#btnCancelVol").attr("hidden", true);
    $("#volList").change();
}