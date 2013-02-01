$(document).ready(function(){
	$.fn.overButtons = function(){
		$(this).each(function(e){
			var item =$(this),
				srcItem,
				widthItem,
				heightItem,
				imgItem = item.find("img"),
				idPage,
				MSIE = ($.browser.msie) && ($.browser.version <= 8);
				
			imgItem.load(init())	
		 	function init(){
				srcItem = imgItem.attr("src");
				widthItem = parseInt(item.parent().css("width"));
				heightItem = parseInt(item.parent().css("height"));
				imgItem.remove();
				item.css({"display": "block", width:widthItem, height:heightItem, overflow:"hidden", position:"absolute"});
				item.append("<div class='outIcon' style='position:absolute; display:block; width:"+widthItem+"px; height:"+heightItem+"px; background:transparent url("+srcItem+") no-repeat;'></div>");
				item.append("<div class='overIcon' style='position:absolute; display:block; width:"+widthItem+"px; height:"+heightItem+"px; background:transparent url("+srcItem+") 0 "+(-heightItem)+"px no-repeat;'></div>");
				item.parent().hover(overHandler, outHandler);
				item.find(".overIcon").animate({top:-64}, 0)
				
				function overHandler(){
					$(this).find(".overIcon").stop().animate({top:0}, 300, "easeOutCubic")
					$(this).find(".outIcon").stop().animate({top:-64}, 300, "easeOutCubic")
				}
				function outHandler(){
					$(this).find(".overIcon").stop().animate({top:-64}, 300, "easeOutCubic")
					$(this).find(".outIcon").stop().animate({top:0}, 300, "easeOutCubic")
				}
			}
		})
	
	}
})