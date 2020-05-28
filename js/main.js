




jQuery(document).ready(function ($) {



  $(document).ready(function ($) {
    var Body = $('body');
    Body.addClass('preloader-site');
  });
  $(window).load(function () {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
  });

  // Initiate the AOS animation library
  AOS.init();

  // Smoth scroll on page hash links
  $('.moreIcon a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Counter 
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
  $('.counter').addClass('animated fadeInDownBig');
  $('h1.counterBig').addClass('animated fadeIn');


});


// error point
$(window).load(
  function () {

    // Header fixed and Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('.back-to-top').fadeIn('slow');
        $('#header').addClass('header-fixed');
      } else {
        $('.back-to-top').fadeOut('slow');
        $('#header').removeClass('header-fixed');
      }
    });
    $('.back-to-top').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
    });

  }
);

$(document).ready(
  function () {

    // Initiate superfish on nav menu
    $('.moreIcon').superfish({
      animation: {
        opacity: 'show'
      },
      speed: 400
    });

    // $('.moreIcon a').click(function () {
    //   $('.moreIcon a ').toggle('1000');
    //   $("i", this).toggleClass("fa-chevron-down fa-chevron-up");
    // });

    // $('.moreIcon a').on('shown.bs.collapse', function () {
    //   $(this).parent().find("i").removeClass("fa-chevron-down").addClass("fa-chevron-down");
    // }).on('hidden.bs.collapse', function () {
    //   $(this).parent().find("i").removeClass("fa-chevron-up").addClass("fa-chevron-up");
    // });


  }
);



$("#passwordfield").on("keyup", function () {
  if ($(this).val())
    $(".fas.fa-eye").show();
  else
    $(".fas.fa-eye").hide();
});
$(".fas.fa-eye").mousedown(function () {
  $("#passwordfield").attr('type', 'text');
}).mouseup(function () {
  $("#passwordfield").attr('type', 'password');
}).mouseout(function () {
  $("#passwordfield").attr('type', 'password');
});

$(document).ready(function () {
  $("#forgetPassword").submit(function () {
    
    $( "#formMain" ).hide(slow);
    //alert("disply");
    $( "#successAlert" ).css("display", "block");

  });
});
 

 


