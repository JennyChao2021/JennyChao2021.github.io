
 $ ( ".kv" ) .backstretch ( [ 
    "banner3.png" , 
    "banner2.png" , 
    "banner4.png"     
  ] ,  { duration : 4000 } ) ;



$(document).ready(function () {
  $('.showMenu').on('click', function (event) {
    event.preventDefault();
    $('.botton').toggleClass('menu-show');
  });
  $(".botton li a").on("click", function (event) {
    $('.botton').toggleClass('menu-show');
  });
}); 
