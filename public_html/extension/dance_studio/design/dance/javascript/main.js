
$(document).ready(function(){	
	$(window).load(function(){
		$("#galleryHolder").gallerySplash();
		$("footer>ul>li>a").overButtons();
		$('section>ul>li').each(function(e){
			if($(this).find(".scrollbar").length ==1){
				$(this).tinyscrollbar({axis: 'y', sizethumb:"124", size:"700"});
			}
		})	
   	 	var content=$("section"),
  	  		nav=$("nav"),
			animationState = false,
 			MSIE = ($.browser.msie) && ($.browser.version <= 8),
 			splashPage = "#!/splash";
 			
  	 	//menu  			
    	   	$("nav > ul").superfish({
    	   		hoverClass: "sfHover",
    	     	delay:       100,
    	      	speed:       400,
    	       	autoArrows:  false,
    	        dropShadows: false,
    			onInit: function(){
    				$("nav > ul > li > a").each(function(index){
    					var conText = $(this).text();
    					$(this).html("<div class='outText'>"+conText+"</div><div class='overPart'></div><div class='overText'>"+conText+"</div>");
						$(".outText", this).css({"width":$(".outText", this).width()+5});
						$(".overText", this).css({"width":$(".overText", this).width()+5});
    				})
    	 		}
    	   });
    	  	nav.navs({
    	  		useHash:true,
    	  		defHash:splashPage,
    	  		hoverIn:function(li){
    	  			if(animationState==false){	
    	  				if (!li.hasClass('sfHover')) {
    	  					$(".outText", li).stop(true).animate({left:"-320px"}, 400, "easeInBack");
    	  					$(".overText", li).stop(true).delay(350).animate({left:"0px"}, 400, "easeOutBack");
    	  					$(".overPart", li).stop(true).delay(350).animate({left:"-40px"}, 400, "easeOutBack");
 	  				}
   				}
    	 		},
    	  		hoverOut:function (li){
    	  			if(animationState==false){
 			 			if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
							$(".outText", li).stop(true).delay(300).animate({left:"0px"}, 400, "easeOutBack");
    	  					$(".overText", li).stop(true).animate({left:"-280px"}, 400, "easeInCubic");
    	  					$(".overPart", li).stop(true).animate({left:"-320px"}, 400, "easeInCubic");
 						}
    		 		}
    	 		},
    	 		hover:true
    	  	}) 	
    	  	//content switch
    	  	content.tabs({
    	  		show:0,
    	  		defHash:splashPage,
    	  		actFu:function(_){
    	  			$("section").stop(true).animate({"left":-565}, 500, "easeInOutCubic", function(){
    	  				_.li.css({display:'none'})
 	   	  			if(_.curr) {
 	  	  				_.curr.css({display:'block'});
 	 			   	}
    	  				$("section").stop(true).animate({"left":220}, 500, "easeOutCubic")
    	  			})
    	  		},
    	  		preFu:function(_){
    				_.li.css({display:'none'})
    	  		}
    	  	});
    	  	nav.navs(function(n){
     			content.tabs(n);
    	  	});

	 	setTimeout(hideSpinner, 0)
		function hideSpinner (){
			$("#spinner").animate({opacity:0}, 800, "easeInOutCubic", function(){$("#spinner").remove()});
	 			
		}	
   	});
})