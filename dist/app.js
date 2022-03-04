$(function(){
    $(".nav-placeholder").load("nav.html");
  });


function myFunction(){
  themenu = document.querySelector('.navbar').getElementsByTagName('ul')[0];
  themenu.classList.toggle('shown');
  themenu.classList.toggle('not-shown');
}
$(document).on("click", ".menu-button", myFunction);