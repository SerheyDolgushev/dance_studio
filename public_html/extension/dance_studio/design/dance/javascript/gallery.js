$(document).ready(function(){
	$.fn.gallerySplash = function(){
		var object = $(this),
			imageHolder = $("#imageHolder",object),
	 		image = $("#imageHolder > img",object),
	 		imageSRCLink = $("ul>li>a",object),
			imageDeltaX,
			imageDeltaY,
			imageK =image.height()/image.width(),
			holderK =imageHolder.height()/imageHolder.width(),
			imagePercent = (image.height()/image.width())*100,
			imgSRC,
			currImg = 0,
			prevImg = 0,
			allImg = imageSRCLink.length,
			autoPlayState = true,
			autoPlayTime = 8,
			loadComplete = true,
			doc=$(document);
			
		init()
		
		function init(){
			$("ul", object).css({display:"none"})
			$(window).resize(resizeImageHandler).trigger('resize');
			autoPlayHandler();
		}		
		function autoPlayHandler(){
			setTimeout(function(){
				if(autoPlayState){
					prevImg = currImg;
					currImg++
					if(currImg>=allImg){
						currImg = 0	
					}
					changeImageHandler()
				}
			}, autoPlayTime*1000)
		}
		function resizeImageHandler(){
			image = $("#imageHolder > img");
			imageK =image.height()/image.width()
			holderK =doc.height()/doc.width();
			if(holderK>imageK){
				imagePercent = (image.width()/image.height())*100;
				image.css({height:doc.height(), width:(doc.height()*imagePercent)/100});
			}else{
				imagePercent = (image.height()/image.width())*100;
				image.css({width:doc.width(), height:(doc.width()*imagePercent)/100});
			}
			imageDeltaX=-(image.width()-doc.width())/2;
			imageDeltaY=-(image.height()-doc.height())/2;
			image.css({left:imageDeltaX, top:imageDeltaY, position:"absolute"});
		}
		function changeImageHandler(){
			loadComplete = false;
			image.addClass("topImg");
			imgSRC = imageSRCLink.eq(currImg).attr("href");
			imageHolder.append("<div id='imgSpinner'></div><img class='bottomImg' src="+imgSRC+" alt=''>");
			$("#imgSpinner").css({opacity:0}).stop().animate({opacity:1}, 500, "easeInOutCubic");
			$(".bottomImg").bind("load", loadImageHandler)
		}
		function loadImageHandler(){
			setTimeout(function(){
				$(".bottomImg").unbind("load", loadImageHandler);
				$("#imgSpinner").stop().animate({opacity:"0"}, 1000, "easeInOutCubic")
				resizeImageHandler();
				$(".topImg").stop().animate({opacity:"0"}, 1000, "easeInOutCubic", function(){
					$("#imgSpinner").remove();
					$(".topImg").remove();
					image.removeClass("bottomImg");
					loadComplete = true;
					autoPlayHandler()
				})
			}, 1000)
		}
	}
})