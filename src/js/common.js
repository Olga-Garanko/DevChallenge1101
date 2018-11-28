$(document).ready(function() {

  /* sandwich menu */
  var menu = $('.nav__menu');
  var menuItem = $('.nav__menu li a');

  $(menuItem).click(function() {
    $(menuItem).removeClass("active");
    $(this).addClass("active");
  });

  $(".toggle_menu").click(function() {
    $(".sandwich").toggleClass("active");
    $(menu).toggleClass("active");
  });
  
  $(menuItem).click(function() {
    if (window.matchMedia("(max-width: 839px)").matches) {
      $(menu).toggleClass("active");
      $(".sandwich").toggleClass("active");
    }
  });
  
  $(window).resize(function(){
    if(window.matchMedia("(min-width: 840px)").matches && menu.is(":hidden")){
      menu.removeAttr('style');
      menuItem.removeAttr('style');
    }
  });

  $('[data-toggle=popover]').popover();
  $('[data-toggle="tooltip"]').tooltip();

});