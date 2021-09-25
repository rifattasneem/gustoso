$(document).ready(function(){

	 $(window).scroll(function() { 
	    if ($(document).scrollTop() > 150) { 
	      $('.navv').addClass('shrink'); 
	    } else { 
	      $('.navv').removeClass('shrink'); 
	    } 
	  });

	// slider syncing
	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  arrows: false,
	  fade: true,
	  responsive: [
	  {
	  	breakpoint:576,
	  	settings:{
	  		arrows:false,
	  		slidesToShow: 1
	  	}
	  }
	 ]
	});

	$("#datetime").datetimepicker({
	   format: 'yyyy-mm-dd hh:ii'
	});
});

// wow
new WOW().init();
