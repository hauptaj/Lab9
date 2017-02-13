$(document).ready(function() {

  $(function() {
      $("li").mouseover(function() {
          $(this).fadeTo(1000, 0.25);
      }).mouseout(function(){
          $(this).fadeTo(1000, 1);
      });
    });

    $(function() {
      $("li").click(function() {
        $(this).css("background-color", "black");
        $(this).css("color", "white");
        $(this).text("Clicked!");
      })
    });

});
