//fixed header when scroll
	$(window)
		.resize(function() {
			// Variables
			var windowHeight = $(window).height();

			// Find the value of 90% of the viewport height
			var ninetypercent = 0 * windowHeight;

			// When the document is scrolled ninety percent, toggle the classes
			// Does not work in iOS 7 or below
			// Hasn't been tested in iOS 8
			$(document).scroll(function() {
				// Store the document scroll function in a variable
				var y = $(this).scrollTop();

				// If the document is scrolled 90%
				if (y > ninetypercent) {
					// Add the "sticky" class . here "header-area" is the sticky class which associated in header
					$(".header-area").addClass("fixed-header");
				} else {
					// Else remove it.
					$(".header-area").removeClass("fixed-header");
				}
			});

			// Call it on resize.
		})
		.resize();		
			
