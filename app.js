var main = function() {
  $('img').on("click", function(){
    console.log("winning");
    $('.dropdown-menu').toggle();
  });
};
 
$(document).ready(main);
