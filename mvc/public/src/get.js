function listVolontaires(id) {
    $(id).children().remove();

    $.get("prive/getAllVol", function (data) {
        let append = `<option value="">Liste des volontaires</option>`;
        for (const value of data) {
            append += `<option value="${value["id"]}" nom="${value["nom"]}" age="${value["age"]}">ID ${value["id"]} : ${value["nom"]} - ${value["age"]} ans</option>`;
        }
        $(id).append(append);
    }, 'json');
}

function listBuvettes(id) {
    $(id).children().remove();

    $.get("prive/getAllBuv", function (data) {
        let append = `<option value="">Liste des buvettes</option>`;
        for (const value of data) {
            append += `<option value="${value["id"]}" nomBuvette="${value["nomBuvette"]}" emplacement="${value["emplacement"]}" idVol="${value["idVol"]}">ID ${value["id"]} : ${value["nomBuvette"]} à ${value["emplacement"]} - Resp : ID ${value["idVol"]} : ${value["nom"]} - ${value["age"]} ans</option>`;
        }
        $(id).append(append);
    }, 'json');
}

function listEquipes(id) {
    $(id).children().remove();
    
    $.get("prive/getAllEqu", function (data) {
        let append = `<option value="">Liste des équipes</option>`;
        for (const value of data) {
            append += `<option value="${value["id"]}" pays="${value["pays"]}" drapeau="${value["drapeau"]}">ID ${value["id"]} : ${value["pays"]}</option>`;
        }
        $(id).append(append);
    }, 'json');
}

function listMatchs(id) {
    $(id).children().remove();

    $.get("prive/getAllMat", function (data) {
        let append = `<option value="">Liste des matchs</option>`;
        for (const value of data) {
            append += `<option value="${value["id"]}" date="${value["date"]}" emplacement="${value["emplacement"]}" equ1="${value["equ1"]}" scoreEqu1="${value["scoreEqu1"]}" pays1="${value["pays1"]}" equ2="${value["equ2"]}" scoreEqu2="${value["scoreEqu2"]}" pays2="${value["pays2"]}">
            ID ${value["id"]} : Le ${value["date"]} à ${value["emplacement"]} - ${value["pays1"]} vs ${value["pays2"]}
            </option>`;
        }
        $(id).append(append);
    }, 'json');
}

function listAssigner(id) {
    $(id).children().remove();

    $.get("affectations/getAllAss", function (data) {
        let append = `<option value="">Liste des affectations d'une buvette à un match</option>`;
        for (const value of data) {
            append += `<option value="${value["id"]}" idBuvette="${value["idBuvette"]}" idMatch="${value["idMatch"]}" nomBuvette="${value["nomBuvette"]}" emplacementB="${value["emplacementB"]}" pays1="${value["pays1"]}" pays2="${value["pays2"]}" dateMatch="${value["dateMatch"]}" emplacement="${value["emplacement"]}">
            ID ${value["id"]} : La buvette ${value["nomBuvette"]} à ${value["emplacementB"]} est affectée au match ${value["pays1"]} vs ${value["pays2"]} le ${value["dateMatch"]} à ${value["emplacement"]}
            </option>`;
        }
        $(id).append(append);
    }, 'json');
}