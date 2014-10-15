// Team Plugin v1.1.0 for jQuery
// =============
// Author: Ali Beceren
// Created: 2/14/2011
// Date: 10/08/2014
// Website: http://www.jenaldesign.com
// Description: Creates Team profiles 

(function($) {
	
	$.fn.team = function(options) {		
		
		// Settings	
		var settings = $.extend({
			margin       : 10,
			image        : null,
			radius       : 0
		}, options);
			
		if ( settings.margin ) {
			var teammargin = settings.margin;
		}

		if ( settings.image ) {
			var teamimage = settings.image;
			
		if ( settings.radius ) {
			var imageradius = settings.radius;
		}
			$('.team-photo img').css( {"border-radius": imageradius} );
			
		}
		
		$(this).addClass( "teamviewer" );

		
		var total= $('.teamviewer li').length;
					
			// Li add class
			$( ".teamviewer li" ).addClass(function( index ) {
				return "team-" + index;
			});
			// Button add class
			$( ".teamviewer .team-click" ).addClass(function( index ) {
				return "team-overlay-" + index;
			});

			// Description add class
			$( ".teamviewer .desc" ).addClass(function( index ) {
				return "team-desc-" + index;
			});
			
			$( ".teamviewer .desc .close" ).addClass(function( index ) {
				return "close-" + index;
			});
							
			$( ".teamviewer li" ).each( function(index) {
				
				var position = ($(".teamviewer .team-" + index).offset().left - $('.teamviewer').offset().left)-teammargin;
				
				//console.log(position);
				
				$(".team-overlay-" + index).click(function(){
					$(".team-" + index).animate({left:"-="+position+"px"}, "slow" );
					$( "li" ).not(".team-" + index).animate({opacity:'0'},1000);
					$(".team-" + index).animate({opacity:'1'},1000);
					$('.team-desc-' + index).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
					//$(".team-overlay-"+index).attr('disabled', 'disabled');
					$(".team-overlay-"+index).off("click");
				});
				
				$('.close-'+ index).click(function(){
					$(".team-overlay-"+index).on("click", function() {
						$(".team-" + index).animate({left:"-="+position+"px"}, "slow" );
						$( "li" ).not(".team-" + index).animate({opacity:'0'},1000);
						$(".team-" + index).animate({opacity:'1'},1000);
						$('.team-desc-' + index).slideUp( 300 ).delay( 800 ).fadeIn( 400 );
						//$(".team-overlay-"+index).attr('disabled', 'disabled');
						$(".team-overlay-"+index).off("click");
					});
					$('.team-desc-' + index).hide();
					$(".team-" + index).animate({left:"+="+position+"px"}, "slow" );
					$( "li" ).not(".team-" + index).animate({opacity:'1'},1000);
					
				});			
			});
			
	};

}(jQuery));
