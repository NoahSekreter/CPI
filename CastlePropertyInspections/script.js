$(document).ready(function () {
    $(window).scroll(function () {

        console.log($(window).height());

        if ($(window).scrollTop() > $(window).height() - 50) {
            $('.menu').addClass('navbar-fixed');
        }

        if ($(window).scrollTop() < $(window).height() - 50) {
            $('.menu').removeClass('navbar-fixed');
        }
    });
});

// Select all links with hashes
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname)
      {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
              event.preventDefault();
              $('html, body').animate({
                  scrollTop: target.offset().top - 50
              }, 1000, function () {
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) {
                      return false;
                  } else {
                      $target.focus();
                  };
              });
          }
      }
  });

var modal = document.getElementById('popUp');
var btn = document.getElementById("inspection-button");
var span = document.getElementsByClassName("close")[0];
var body = document.body;

// When the user clicks on the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
    body.style.overflow = "hidden";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    body.style.overflow = "auto";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
}