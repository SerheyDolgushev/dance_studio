
$(document).ready(function(){
	$(window).load(function(){
		window.is_map_loaded = false;
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
 	  	  				if( _.curr.attr( 'id' ) === 'contacts' && window.is_map_loaded === false ) {
							var l   = new google.maps.LatLng(34.3112663,-118.2526623);
							var map = new google.maps.Map(
								document.getElementById( 'map_container' ), {
									center: l,
									zoom: 8,
									mapTypeId: google.maps.MapTypeId.ROADMAP
								}
							);
							new google.maps.Marker( {
							      position: l,
							      map: map
							} );
							window.is_map_loaded = true;
 	  	  				}
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
});

//frontpage gallery
;(function( $, undefined ){
    var resizeHandelEvent,
        billboardInnerItem = '#frontpage-slider .frontpage-slider-item',
        itemLength = 0,
        currItem = 0,
    _init = function() {
        if ($(billboardInnerItem).length > 1) {
            billboardInnerItem = $(billboardInnerItem);
            itemLength = $(billboardInnerItem).length;
            $(billboardInnerItem).first().css('display', 'block');
        } else {
            $(billboardInnerItem).css('display', 'block');
        }
    },
    turnBanner = function() {
        $(billboardInnerItem[currItem]).removeClass('is-current');
        $(billboardInnerItem[currItem + 1 >= itemLength ? 0 : currItem + 1]).addClass('is-current');
        $(billboardInnerItem[currItem]).fadeOut(1000).removeClass('is-current');
        currItem = currItem + 1 >= itemLength ? 0 : currItem +1;
        $(billboardInnerItem[currItem]).fadeIn(1000).addClass('is-current');
    };

    $(document).ready( _init() );
    $(window).load( function(){
        _init();
        if (itemLength > 1) {
            setInterval( turnBanner, 7000);
        }
    });

})(jQuery);