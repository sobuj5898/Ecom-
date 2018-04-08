(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

		$(".product-list") .masonry();
		
		$(".homepage-slider") .owlCarousel({
			items: 1,
			autoplay: true,
			dots: false,
			loop: true,
			nav:true,
			navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"] 
		});
		$(".product-item-blog") .owlCarousel({
			items: 1,
			dots: true,
			loop: true,
			nav: false,
			autoplay: true
		});
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	