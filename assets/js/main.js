(function ($) {
	"use strict";

	$(document).ready(function () {
		//Dark Light Template Area//
		$(".mode--toggle").on("click", function () {
			setTheme(localStorage.getItem("theme"));
		});
		if (localStorage.getItem("theme") == "light-theme") {
			localStorage.setItem("theme", "dark-theme");
		} else {
			localStorage.setItem("theme", "light-theme");
		}
		setTheme(localStorage.getItem("theme"));
		function setTheme(theme) {
			if (theme == "dark-theme") {
				localStorage.setItem("theme", "light-theme");
				$("html").addClass(theme);
				$(".mode--toggle").find("img").attr("src", "assets/img/sun.png");
			} else {
				localStorage.setItem("theme", "dark-theme");
				$("html").removeClass("dark-theme");
				$(".mode--toggle").find("img").attr("src", "assets/img/moon.png");
			}
		}
		//Dark Light Template Area//

		//>> Mobile Menu Js Start <<//
		$("#mobile-menu").meanmenu({
			meanMenuContainer: ".mobile-menu",
			meanScreenWidth: "1199",
			meanExpand: ['<i class="far fa-plus"></i>'],
		});

		//>> Sidebar Toggle Js Start <<//
		$(".offcanvas__close,.offcanvas__overlay").on("click", function () {
			$(".offcanvas__info").removeClass("info-open");
			$(".offcanvas__overlay").removeClass("overlay-open");
		});
		$(".sidebar__toggle").on("click", function () {
			$(".offcanvas__info").addClass("info-open");
			$(".offcanvas__overlay").addClass("overlay-open");
		});

		//>> Body Overlay Js Start <<//
		$(".body-overlay").on("click", function () {
			$(".offcanvas__area").removeClass("offcanvas-opened");
			$(".df-search-area").removeClass("opened");
			$(".body-overlay").removeClass("opened");
		});

		//>> Sticky Header Js Start <<//

		$(window).scroll(function () {
			if ($(this).scrollTop() > 250) {
				$("#header-sticky").addClass("sticky");
			} else {
				$("#header-sticky").removeClass("sticky");
			}
		});

		//>> Video Popup Start <<//
		$(".img-popup").magnificPopup({
			type: "image",
			gallery: {
				enabled: true,
			},
		});

		$(".video-popup").magnificPopup({
			type: "iframe",
			callbacks: {},
		});

		//>> Counterup Start <<//
		$(".count").counterUp({
			delay: 15,
			time: 4000,
		});

		//>> Wow Animation Start <<//
		new WOW().init();

		//>> Nice Select Start <<//
		$("select").niceSelect();

		//>> feature Slider Start <<//
		if ($(".feature-slider").length > 0) {
			const featureSlider = new Swiper(".feature-slider", {
				spaceBetween: 30,
				speed: 2000,
				loop: true,
				autoplay: {
					delay: 1000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: ".array-prev",
					prevEl: ".array-next",
				},
				breakpoints: {
					1399: {
						slidesPerView: 4,
					},
					1199: {
						slidesPerView: 3,
					},
					991: {
						slidesPerView: 3,
					},
					767: {
						slidesPerView: 2,
					},
					575: {
						slidesPerView: 2,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}

		//>> hero Slider Start <<//
		if ($(".hero-slider").length > 0) {
			const heroSlider = new Swiper(".hero-slider", {
				spaceBetween: 30,
				speed: 2000,
				loop: true,
				autoplay: {
					delay: 1000,
					disableOnInteraction: false,
				},
				pagination: {
					el: ".dot",
					clickable: true,
				},
				breakpoints: {
					1399: {
						slidesPerView: 4,
					},
					1199: {
						slidesPerView: 3,
					},
					991: {
						slidesPerView: 2,
					},
					767: {
						slidesPerView: 2,
					},
					575: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}

		//>> hero Slider Start <<//
		if ($(".hero-slider2").length > 0) {
			const heroSlider2 = new Swiper(".hero-slider2", {
				spaceBetween: 30,
				speed: 2000,
				loop: true,
				autoplay: {
					delay: 1000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: ".array-prev",
					prevEl: ".array-next",
				},
				breakpoints: {
					1199: {
						slidesPerView: 3,
					},
					991: {
						slidesPerView: 2,
					},
					767: {
						slidesPerView: 2,
					},
					575: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		}

		if ($(".top-news-slider").length > 0) {
			const topNewsSlider = new Swiper(".top-news-slider", {
				slidesPerView: "auto",
				spaceBetween: 10,
				freemode: true,
				centeredSlides: true,
				loop: true,
				speed: 15000,
				allowTouchMove: false,
				autoplay: {
					delay: 1,
					disableOnInteraction: true,
				},
			});
		}

		// Search bar
		$(".search-toggle").on("click", function () {
			$(".header-search-bar").addClass("search-open");
			$(".offcanvas-overlay").addClass("offcanvas-overlay-open");
		});

		$(".search-close,.offcanvas-overlay").on("click", function () {
			$(".header-search-bar").removeClass("search-open");
			$(".offcanvas-overlay").removeClass("offcanvas-overlay-open");
		});

		//>> Back To Top Slider Start <<//
		$(window).scroll(function () {
			if ($(this).scrollTop() > 20) {
				$("#back-top").addClass("show");
			} else {
				$("#back-top").removeClass("show");
			}
		});
		$("#back-top").click(function () {
			$("html, body").animate({ scrollTop: 0 }, 800);
			return false;
		});
	}); // End Document Ready Function
})(jQuery); // End jQuery
