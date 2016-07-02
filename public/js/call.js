$(document).ready(function() {

// // $("input:radio").transformRadio({
// // 	checked : "http://s25.postimg.org/z5fbr5hor/checked_dagency.png", 	// Checked image to show
// // 	unchecked : "http://s25.postimg.org/h1cb6ik0b/unchecked_dagency.png"	// Unchecked image to show
// // });

// slider
$("#main-slider").owlCarousel({
	lazyLoad: true,
	margin:0,
	loop:false,
	autoWidth:false,
	items:1,
	center: true,
	nav:false,
	dots: true,
	responsiveClass:true,
});

// menu
$('#menu').slicknav({
	label: '',
});

// scroll
// $('#header .promo-bar').scrollToFixed();


// Waypoints
var waypoint = new Waypoint({
	element: document.getElementById('slider'),
	handler: function () {
		$("#minimenu").toggleClass("minimenu-fixed");
	}
})

}); 
//End function



$(window).load(function() {

});
//End function
smoothScroll.init();