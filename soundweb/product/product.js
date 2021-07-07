

$(document).ready(function () {
  $('.showMenu').on('click', function (event) {
    event.preventDefault();
    $('.botton').toggleClass('menu-show');
  });
  $(".botton li a").on("click", function (event) {
    $('.botton').toggleClass('menu-show');
  });
}); 

$(document).ready(function(){
	var oldtext=['Home','About Us','Products','Platforms','Contact us']
	var newtext=['首頁','關於我們','產品介紹','案例介紹','聯絡我們']



})