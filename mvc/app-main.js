/*

$(function() {
    $.get("app-main.json")
});
*/

function onLitlHtml(){
    for(html){
        app>{
            if(done)
            else{
            let temporaire = app-accueil.replace('app-', '');
            $.get(`app/${temporaire}/config.json`)
            }
        }
    }
}

function templateInsert (cible, source) {
    $.get("app/"+source + ".html", function (data) {
        $(cible).append(data);
    });
}

$(function() {
    templateInsert("t-header", "header");
});


let mondossier = "header";

let mesBalises; //app-header : "app/header/config.json"
//app-header : header

$.get('app-main.json', function(data) {
    for (const element of data.component) {
        console.log(element);
        
    }
}, 'json');

/*
for (const element of leJson.component) {
    console.log(element);
}
*/