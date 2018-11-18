$(function(){
    // filterizr JS
      var filterizd = $('.filtr-container').filterizr({
      });

    // venobox about part start 
        $('.venobox').venobox(); 
    // venobox about part end


  //animation scroll js start
  var html_body = $('html, body');
  $('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 30
        }, 1500);
        return false;
      }
    }
  });
//animation scroll js end

// Back to Top Button start 
  $(window).scroll(function () {
    var sticky = $(".nav_part");
    var $scrolling = $(this).scrollTop();
    var bc2top = $(".back-top-btn");
    if ($scrolling > 150) {
      bc2top.fadeIn(1000);
    } else {
      bc2top.fadeOut(400);
    }
   if($scrolling > 30){
          sticky.addClass("nav_bg");
      }
      else{
          sticky.removeClass("nav_bg");
      }
  });
// Back to Top Button start 

// another back to top button start
  $('.back-top-btn').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 1500);
  });
// another back to top button end
// Preloader js start   
$(window).on('load', function(){
  $('.preloader').delay(1500).fadeOut(500);
});
// Preloader js end
// Closes responsive menu when a menu link is clicked- start
$('.nav-link').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});
// Closes responsive menu when a menu link is clicked-end
//testimonial part start 
$('.client_slide').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  speed: 900,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows:true,
  dots:false,
});
//testimonial part end 
  
  });