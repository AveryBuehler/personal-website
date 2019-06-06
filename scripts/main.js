$(".theme-div")
  .children()
  .click(function () {
    var selected = $(this)[0].className;
    if (selected != active) {
      var active = selected;
      $(this).css("pointer-events", "none");
      var background = $(this).css("background-color");
      $(".div-left").css({
        "background-color": background
      });
      $(".text-logo").css({
        "background-color": background
      });
      $(".diag-line-1").css({
        "background-color": "linear-gradient(188deg," +
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

$(document).ready(function () {
  $('.contact-container input, .contact-container textarea').blur(function () {
    if ($(this).val() !== '' && !$(this).hasClass('not-empty')) {
      $(this).addClass('not-empty');
    } else if ($(this).val() === '') {
      $(this).removeClass('not-empty');
    }
  });
});

$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 75) {
    $('.back2top').fadeIn(250);
  } else {
    $('.back2top').fadeOut(250);
  }
});
$(document).ready(function () {
  $(".back2top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });

});