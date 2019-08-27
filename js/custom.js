$(document).ready(function() {
	var kaSwiper1 = new Swiper('.swiper1', {
		loop: true,
		paginationClickable: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		spaceBetween: 4,
		autoHeight: true,
		navigation: {
			nextEl: '.swiper-button-next',
		},
		breakpoints: {
			768: {
				spaceBetweenSlides: 10
			}
		}
	});

	//animate offset js starts
	$('.scroll-down a, .navbar-nav li a, .drnik-btn a ').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1000, 'linear');
	});
	//animate offset js ends
	// tab active class js starts
	$('.nav-tabs a#one').click(function() {
		$('#two').removeClass('active');
		$('#three').removeClass('active');
		$('#four').removeClass('active');
		$('#one').addClass('active');
	});
	$('.nav-tabs a#two').click(function() {
		$('#one').removeClass('active');
		$('#three').removeClass('active');
		$('#four').removeClass('active');
		$('#two').addClass('active');
	});
	$('.nav-tabs a#three').click(function() {
		$('#one').removeClass('active');
		$('#two').removeClass('active');
		$('#four').removeClass('active');
		$('#three').addClass('active');
	});
	$('.nav-tabs a#four').click(function() {
		$('#one').removeClass('active');
		$('#two').removeClass('active');
		$('#three').removeClass('active');
		$('#four').addClass('active');
	});
	//tab active class js ends
	$('.navbar-nav li a').click(function() {
		$('.navbar-collapse').toggleClass('in');
	});
	$('.moreless-button').click(function() {
		$('.moretext').slideToggle();
		if ($('.moreless-button').text() == "Read more") {
			$(this).text("Read less")
		} else {
			$(this).text("Read more")
		}
	});
	$('.gallery-wrap').hide();
	$('.btn-gallery').click(function() {
		$('.gallery-wrap').show();
		$('.gallery-img').hide();
	});
	$('.btn-back').click(function() {
		$('.gallery-wrap').hide();
		$('.gallery-img').show();
	});
});