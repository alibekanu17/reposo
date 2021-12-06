$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");

    if ($(this).hasClass("is-active")) {
      $(".menu").slideDown(400);
    } else {
      $(".menu").slideUp(200);
    }
  });
});

