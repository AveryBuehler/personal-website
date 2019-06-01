$(".theme-div")
  .children()
  .click(function() {
    var selected = $(this)[0].className;
    if (selected != active) {
      var active = selected;
      $(this).css("pointer-events", "none");
      var background = $(this).css("background-color");
      $(".div-left").css({
        "background-color": background
      });
      $(".text-logo").css({ "background-color": background });
      $(".diag-line-1").css({
        "background-color":
          "linear-gradient(188deg," +
          background +
          ", 60%, rgba(255, 0, 0, 0) 0)"
      });
      $(this).toggleClass("theme-active");
    }

    $(".theme-div")
      .children()
      .not("div." + selected)
      .css("pointer-events", "auto")
      .removeClass("theme-active");
  });

$(document).ready(function() {});
