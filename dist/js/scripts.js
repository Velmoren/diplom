$(document).ready(function(){$(".arrows__right").click(function(){$("#slider-1").trigger("next.owl.carousel",[1e3])}),$(".arrows__left").click(function(){$("#slider-1").trigger("prev.owl.carousel",[1e3])}),$("#slider-1").owlCarousel({loop:!0,margin:10,responsive:{0:{items:1},768:{items:1},1200:{items:1}}}),$(".arrows__right").click(function(){$("#slider-2").trigger("next.owl.carousel",[1e3])}),$(".arrows__left").click(function(){$("#slider-2").trigger("prev.owl.carousel",[1e3])}),$("#slider-2").owlCarousel({loop:!0,margin:32.5,responsive:{0:{items:1},320:{items:1},768:{items:2},992:{items:3},1200:{items:5},1900:{items:5}}}),$(".layouts-card").hover(function(){$(this).find("img.nocolor").stop().animate({opacity:"0"},800)},function(){$(this).find("img.nocolor").stop().animate({opacity:"1"},800)})});