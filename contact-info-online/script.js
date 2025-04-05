jQuery(document).ready(function ($) {
  $("#social_box")
    .find("a.c")
    .click(function () {
      $("#social_box").find("a[href],a.c").hide();
      $("#social_box").find("a.o").show();
    });

  $("#social_box")
    .find("a.o")
    .on("click", function () {
      $("#social_box").find("a[href],a.c").show();
      $(this).hide();
    });
});
