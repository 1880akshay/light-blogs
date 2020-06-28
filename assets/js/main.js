$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        items:1,
        margin: 30,
        stagePadding: 0,
        nav: true,
        navText: ['<span class="fa fa-caret-left" style="font-size: larger">', '<span class="fa fa-caret-right" style="font-size: larger">'],
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 3
            },
            1000:{
                items: 3
            }
        },
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });
  });