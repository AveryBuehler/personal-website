$(".theme-div").children().click(function () {
    var selected = $(this)[0].className;
    console.log(selected);
    if (selected != active) {
        var active = selected;
        $(this).css("pointer-events", "none");
        var background = $(this).css("background-color");
        $(".div-left").css({
            "background-color": background
        });
        $(this).toggleClass("theme-active");
    }

    $(".theme-div").children().not("div." + selected).css("pointer-events", "auto").removeClass("theme-active");
});