$(document).ready(function () {
  $('.showMenu').on('click', function (event) {
    event.preventDefault();
    $('.botton').toggleClass('menu-show');
  });
  $(".botton li a").on("click", function (event) {
    $('.botton').toggleClass('menu-show');
  });
}); 