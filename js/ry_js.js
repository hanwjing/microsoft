$(document).ready(function(){
    $(".ry_title>span").click(function () {
        $(this).find("ul").slideToggle();
    });

    $("#subscription").click(function () {
        $("#ry_show").show();
        $(".ry_popbox").show();
    });
    $(" .GLJ-img .GLJ-now").click(function () {
        $("#ry_show").show();
        $(".ry_popbox").show();
    });

    $("#ry_close").click(function () {
        $(".ry_popbox").fadeOut();
        $("#ry_show").hide();
    });
});

