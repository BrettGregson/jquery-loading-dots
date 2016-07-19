$(function(){
	$.dots = function(element, options) {    
		// store reference to our dots instance
        var self = this;        
		
		// select the target element with as a jQuery object
        self.$element = $(element);
                
        self.$element.data("dots", self);
        
		// create a dot or clear the dots
        self.createDot = function($elementement, numberOfDots) {
			// check if we have reached the max nubmer of dots, if so clear the dots
            if ( $elementement.text().length == numberOfDots ) {
                $elementement.text("");
            } else {				
                $elementement.append(dotCharacter);
            }
        };
        
        // init the plugin
        self.init = function() {
		 	self.options = $.extend({},$.dots.defaultOptions, options);
		  
            if ( typeof( speed ) === "undefined" || speed === null ) speed = self.options.speed;
			if ( typeof( numberOfDots ) === "undefined" || numberOfDots === null ) numberOfDots = self.options.numberOfDots;
            if ( typeof( loadingWord ) === "undefined" || loadingWord === null ) loadingWord = self.options.loadingWord;
			if ( typeof( dotCharacter ) === "undefined" || dotCharacter === null ) dotCharacter = self.options.dotCharacter;
            
            self.speed = speed;
            self.numberOfDots = numberOfDots;  
			self.dotCharacter = dotCharacter;
                        
            self.$element.html("<span class='dot-text'>" + self.options.loadingWord + "<span class='dots-dot'></span></span>");
            
            self.$dots = self.$element.find("span.dots-dot");
            self.$loadingWord = self.$element.find("span.dot-text");
            
            self.$element.css("position", "relative");
            self.$loadingWord.css({
                "position": "absolute",
                "top": (self.$element.outerHeight() / 2) - (self.$loadingWord.outerHeight() / 2),
                "left": (self.$element.width() / 2) - (self.$loadingWord.width() / 2)
            });
                        
            self.theInterval = setInterval(self.createDot, self.options.speed, self.$dots, self.options.numberOfDots);
        };
        
		// start the plugin
        self.init();  
		
		// clear the interval (stop the dots)
		self.stopDots = function(){
			clearInterval(self.theInterval);
		};
    };
	
    
    $.dots.defaultOptions = {
        speed			: 250,
        numberOfDots	: 3,
        loadingWord		: "Loading",
		dotCharacter	: ".",
    };
    
    $.fn.dots = function(options) {
		return new $.dots(this, options)
    };
});