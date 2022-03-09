jQuery(function ($) {
    'use strict';
	
        // Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
		});

		// Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "1199"
        });
		
		// Others Option For Responsive JS
		$(".others-option-for-responsive .dot-menu").on("click", function(){
			$(".others-option-for-responsive .container .container").toggleClass("active");
		});
		
		// Search JS
        $(".others-options .search-box i").on("click", function(){
            $(".search-overlay").toggleClass("search-overlay-active");
        });
        $(".search-overlay-close").on("click", function(){
            $(".search-overlay").removeClass("search-overlay-active");
        });
        
        // Categories Slider
		$('.categories-slider').owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			smartSpeed: 500,
			margin: 20,
			autoplayHoverPause: true,
            autoplay: true,
            navText: [
                "<i class='bx bx-chevron-left'></i>",
                "<i class='bx bx-chevron-right'></i>"
            ],
			responsive: {
				0: {
					items: 2
				},
				576: {
					items: 2
				},
				768: {
					items: 3
				},
				1024: {
					items: 4
				},
				1200: {
					items: 6
				}
			}
        });
		
		// Client Slider
		$('.client-slider').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
            autoplayHoverPause: true,
            items: 1,
            smartSpeed: 300,
			autoplay: true,
		});

		// Doctor Slider
		$('.doctor-slider').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			smartSpeed: 500,
			margin: 30,
			autoplayHoverPause: true,
            autoplay: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1024: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});

		// Testimonial Slider
		$('.testimonial-slider').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
            autoplayHoverPause: true,
            items: 1,
            smartSpeed: 300,
			autoplay: true,
		});

		// Popup Video
		$('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
		
		// Odometer JS
        $('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});

		// Subscribe form
		$(".newsletter-form").validator().on("submit", function (event) {
			if (event.isDefaultPrevented()) {
				formErrorSub();
				submitMSGSub(false, "Please enter your email correctly.");
			} 
			else {
				event.preventDefault();
			}
		});
		function callbackFunction (resp) {
			if (resp.result === "success") {
				formSuccessSub();
			}
			else {
				formErrorSub();
			}
		}
		function formSuccessSub(){
			$(".newsletter-form")[0].reset();
			submitMSGSub(true, "Thank you for subscribing!");
			setTimeout(function() {
				$("#validator-newsletter").addClass('hide');
			}, 4000)
		}
		function formErrorSub(){
			$(".newsletter-form").addClass("animated shake");
			setTimeout(function() {
				$(".newsletter-form").removeClass("animated shake");
			}, 1000)
		}
		function submitMSGSub(valid, msg){
			if(valid){
				var msgClasses = "validation-success";
			} 
			else {
				var msgClasses = "validation-danger";
			}
			$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
		}

		// AJAX MailChimp
		$(".newsletter-form").ajaxChimp({
			url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", 
			callback: callbackFunction
        });
		
		// Nice Select JS
		$('select').niceSelect();

		// Datetimepicker
		jQuery('#datetimepicker').datetimepicker({
			i18n:{
				de:{
					months:[
					'Januar','Februar','März','April',
					'Mai','Juni','Juli','August',
					'September','Oktober','November','Dezember',
					],
					dayOfWeek:[
					"So.", "Mo", "Di", "Mi", 
					"Do", "Fr", "Sa.",
					]
				}
			},
			timepicker:false,
			format:'d.m.Y'
		});

		// Go to Top JS
		$(window).on('scroll', function() {
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) $('.go-top').addClass('active');
			if (scrolled < 600) $('.go-top').removeClass('active');
		});  
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});

		// Tabs
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		$('.tab ul.tabs li a').on('click', function (g) {
			var tab = $(this).closest('.tab'), 
			index = $(this).closest('li').index();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			g.preventDefault();
		});

		// FAQ Accordion
        $('.accordion').find('.accordion-title').on('click', function(){
			// Adds Active Class
			$(this).toggleClass('active');
			// Expand or Collapse This Panel
			$(this).next().slideToggle('fast');
			// Hide The Other Panels
			$('.accordion-content').not($(this).next()).slideUp('fast');
			// Removes Active Class From Other Titles
			$('.accordion-title').not($(this)).removeClass('active');		
		});

		// Count Time 
		function makeTimer() {
			var endTime = new Date("September 13, 2022 18:00:00 PDT");			
			var endTime = (Date.parse(endTime)) / 1000;
			var now = new Date();
			var now = (Date.parse(now) / 1000);
			var timeLeft = endTime - now;
			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }
			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");
		}
        setInterval(function() { makeTimer(); }, 0);

		// Popup Image
        $('a[data-imagelightbox="popup-btn"]')
        .imageLightbox({
            activity: true,
            overlay: true,
            button: true,
            arrows: true
		});

		// Input Plus & Minus Number JS
        $('.input-counter').each(function() {
            var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find('.plus-btn'),
            btnDown = spinner.find('.minus-btn'),
            min = input.attr('min'),
            max = input.attr('max');
            
            btnUp.on('click', function() {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
            btnDown.on('click', function() {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
		});

		//Schedule Calendar
		if($('#schedule_calendar').length) {
			$('#schedule_calendar').monthly();
		}

        // WOW JS
		$(window).on ('load', function (){
			if ($(".wow").length) { 
				var wow = new WOW({
				boxClass:     'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset:       20,          // distance to the element when triggering the animation (default is 0)
				mobile:       true, // trigger animations on mobile devices (default is true)
				live:         true,       // act on asynchronously loaded content (default is true)
				});
				wow.init();
			}
		});

		// Preloader Area
		jQuery(window).on('load', function() {
			$('.preloader').fadeOut();
		});

}(jQuery));