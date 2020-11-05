$(function() {

    $("#phone1").mask("8 (999) 999 99 99");

    $("#phone2").mask("8 (999) 999 99 99");

});

$(document).ready(function() {


    $("a.topLink").click(function() {
       $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top + "px"
       }, {
          duration: 500,
          easing: "swing"
       });
       return false;
    });


 });

