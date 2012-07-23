(function($){
	
	var scrollablePlugin = function enableScrolling(element, options) {
		
		var elem = $(element);
		var obj = this;
		
		var defaultSettings = {next: '.next',prev: '.prev',scrollable: '.scrollable',scrollstep: 200, debug: false, disabled: 'disabled', highlighted: 'highlighted'};
		var opts =  $.extend(defaultSettings, options || {});
		
		var nextButton = elem.find(opts.next);
		var previousButton = elem.find(opts.prev);
		var scrollableZone = elem.find(opts.scrollable);
		var htmlContent = scrollableZone.html();
		var scrollStep = opts.scrollstep;
		var topBase = 0;
		var heightBase = 0;
		var Boundary1 = 0;
		var Boundary2 = 0;
		var heightScrollableZone = 0;
		
		scrollableZone.empty().prepend("<div></div>");
		var scrollDiv = scrollableZone.find("div");
		scrollDiv.html(htmlContent).css("position","absolute");
		scrollableZone.css("overflow","hidden");
		scrollableZone.css("position","relative");
		scrollableZone.css("display","block");
		scrollableZone.css("zoom","1");
		
		// prepare arrows
		previousButton.addClass(opts.disabled);
		
		// mesure positions
		topBase = parseInt(scrollDiv.css('top'));
		// 	by default initial position is first boundary
		Boundary1 = topBase;
		//	get heights
		heightBase = parseInt(scrollDiv.css('height'));
		heightScrollableZone = parseInt(scrollableZone.css('height'));
		// 	define 2nd boundary
		Boundary2 = topBase - heightBase + heightScrollableZone;
		
		this.scrollDown = function() {
			var top = parseInt(scrollDiv.css('top'));
			if(opts.debug) {console.log('next-before top: '+top+' boundary 1: '+Boundary1 + ' boundary 2: ' + Boundary2);}
			step = scrollStep;
			if(top>Boundary2){
				if(top-scrollStep<=Boundary2){
					step = -(Boundary2-top);
					// disable button
					nextButton.addClass(opts.disabled);
				}
				nextButton.addClass(opts.highlighted);
				scrollDiv.stop().animate({top:'-='+step},{complete:function(){
					previousButton.removeClass(opts.disabled);
					nextButton.removeClass(opts.highlighted);
					top = parseInt(scrollDiv.css('top'));
					if(opts.debug) {console.log('next-after top: '+top+' boundary 1: '+Boundary1 + ' boundary 2: ' + Boundary2);}
				}});
			}
		};
		
		this.scrollUp = function() {
			var top = parseInt(scrollDiv.css('top'));
			if(opts.debug) {console.log('previous-before top: '+top+' boundary 1: '+Boundary1 + ' boundary 2: ' + Boundary2);}
			step = scrollStep;
			if(top<Boundary1){
				if(top+scrollStep>=Boundary1){
					step = -(top-Boundary1);
					// disable button
					previousButton.addClass(opts.disabled);
				}
				previousButton.addClass(opts.highlighted);
				scrollDiv.stop().animate({top:'+='+step},{complete:function(){
					nextButton.removeClass(opts.disabled);
					previousButton.removeClass(opts.highlighted);
					top = parseInt(scrollDiv.css('top'));
					if(opts.debug) {console.log('previous-after top: '+top+' boundary 1: '+Boundary1 + ' boundary 2: ' + Boundary2);}
				}});
			}
		};
	};
	
	$.fn.scrollable = function(options){
		return this.each(function(){
			var element = $(this);
			// Return early if this element already has a plugin instance
			if (element.data('scrollable')) return;
			// pass options to plugin constructor
			var myplugin = new scrollablePlugin(this, options);
			// Store plugin object in this element's data
			element.data('scrollable', myplugin);
      });
	};
	
})(jQuery);