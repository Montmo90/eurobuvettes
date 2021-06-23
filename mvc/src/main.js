
    function templateInsert (cible, source) {
        $.get(source + ".html", function (data) {
            $(cible).append(data);
        });
    }

    $(function() {
        templateInsert("t-header", "header");
    });