$(document).ready(function(){$(".arrows__right").click(function(){$(".owl-carousel").trigger("next.owl.carousel",[1e3])}),$(".arrows__left").click(function(){$(".owl-carousel").trigger("prev.owl.carousel",[1e3])}),$(".owl-carousel").owlCarousel({loop:!0,margin:10,responsive:{0:{items:1},768:{items:1},1200:{items:1}}})});