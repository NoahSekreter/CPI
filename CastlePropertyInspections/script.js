﻿$(document).ready(function () {
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

