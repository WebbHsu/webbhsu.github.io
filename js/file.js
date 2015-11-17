// JavaScript Document
var References = {
	
	  init: function(){
			
			  var items = $$('#references .item');
				items.each(function(element){
				  var img = element.getElement('img');
				  var imgFx = new Fx.Tween(img, { duration: 200, wait: false });
					element.addEvent('mouseenter', function(){
					  imgFx.start('opacity', 0);
						element.setStyle('cursor','pointer');
					});
					element.addEvent('mouseleave', function(){
					  imgFx.start('opacity', 1);
					});
					element.addEvent('click', function(){
					  window.location = element.getElement('a').getProperty('href');
					});
				});
				
		}
		
};


var FileCz = {
	init: function(){
		 
    // Reference
		References.init();
		
		// SmoothScroll
		new SmoothScroll({ duration: 1500, wait: false,  transition: Fx.Transitions.Quint.easeOut });
		
	}
};

window.addEvent('domready', function(){
																		 
  FileCz.init();

	
});