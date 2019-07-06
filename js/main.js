$(document).ready(function () {

	$('.heading h1 a').click(function () {
		$('.inner-popup, .overlay').fadeIn()
	});

	

	$('.closed').click(function () {
		$('.inner-popup, .overlay').fadeOut()
	});



	$(".heading").click(function () {
		$("body").addClass("desible");
	});



	$(".closed").click(function () {
		$("body").removeClass("desible");
	})



	$('.inner').click(function () {
		$('.content').slideUp();
		$('h2').removeClass('active');

		if ($(this).find('.content').css('display') == "block") {
			$('.content').slideUp();
			$('h2').removeClass('active');
			return false;
		}
		$(this).find('.content').slideDown();
		$(this).find('h2').addClass('active');
	});



	$('.toggle').click(function () {
		$(this).toggleClass('active');
		$('nav').toggleClass('active')
	});


	$(document).on("scroll", function () {
		if ($(document).scrollTop() > 70) {
			$("header").addClass("pad00");
		} else {
			$("header").removeClass("pad00");
		}
	});


	$('.search-icon').click(function () {
		$('.inner-search').fadeIn();
	});


	$('.serachclosed').click(function () {
		$('.inner-search').fadeOut();
	});


	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#scroll').fadeIn();
		} else {
			$('#scroll').fadeOut();
		}
	});


});










