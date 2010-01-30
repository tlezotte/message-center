/*
 * Message Center - Easily inform the user.
 * By Tom LeZotte (http://plugins.jquery.com/project/message-center)
 * Copyright (c) 2009 Tom LeZotte (tlezotte@gmail.com)
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/


(function($){  

	$.fn.message_center = function(options) {  
			
		/* ===== Display Message Center ===== */ 
		if (options.text != '') {
			var message = '<div id="mc_close" /><span id="mc_text">' + options.text + '</span>';
		
		    switch (options.action)
		    {
		    	case 'show':
		    		$('#message_center').html(message).show("slow");
		    	break;
		    	case 'fade':
		    		$('#message_center').html(message).fadeIn("slow");
		    	break; 	
		    	default:
		    		$('#message_center').html(message).slideDown("slow");
		    }
		}
		
		/* ===== Modify Message Center look ===== */
		if (options.type != '') {
	    	$('#message_center').addClass(options.type); 
			$('#mc_close').addClass(options.type);
		}
		
	}
    
})(jQuery); 
