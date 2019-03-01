$(function(){
	/*轮播图*/
	var gtt_banner = document.querySelector(".gtt_banner");
	/*var gtt_lis_length = document.querySelector(".gtt_banner_ul li") */
	var gtt_ul = document.querySelector(".gtt_banner_ul");
	var gtt_banner_width = $(".gtt_banner").width();
	var gtt_ul_width = $(".gtt_banner_ul").width();
	var gtt_li_width = $(".gtt_banner_ul li").width();
	var gtt_lis_length = $(".gtt_banner_ul li").length-2;
	var index = 0;
	var lunbo = null;

	window.onresize = function(){
	    //获取的banner让宽度
	    gtt_banner_width = gtt_banner.offsetWidth;
	    //调整ul的大小
	    gtt_ul.style.width = gtt_banner_width*(gtt_lis_length+2) + "px";
	    //调整ul的左边偏移
	    gtt_ul.style.left = -gtt_banner_width*index + "px";
    }

	var startTime = function(){		
			 lunbo = setInterval(function(){
			/*console.log(gtt_banner_width);
			console.log($(".gtt_banner_ul").width());*/
			if(index >= gtt_lis_length){
					index = 0;
					$(".gtt_banner_ul").css("left","0px");
				}
				$(".gtt_dot li:eq("+(index-1)+")").addClass('active').siblings().removeClass("active");
				index++;
				$(".gtt_banner_ul").animate({left: -index*gtt_banner_width}, 500);
				
		},2000);
	}
	startTime();

	/*移动端拖拽*/
	var gtt_startX = 0;
	var gtt_move = 0;
	var gtt_distanceX = 0;
	addEventListener(gtt_ul,"touchstart",function(e){
		clearInterval(lunbo);
		var touch = e.targetTouches[0];
		/*获取手指的位置*/
		gtt_startX = touch.clientX;
	}) 
	addEventListener(gtt_ul,"touchmove",function(e){
		var touch = e.targetTouches[0];
		gtt_move = touch.clientX;
		gtt_distanceX = gtt_move - gtt_startX;
		/*console.log(gtt_distanceX);*/
		gtt_ul.style.left = -index*gtt_banner_width+gtt_distanceX+"px";

	})
	addEventListener(gtt_ul,"touchend",function(e){
		if(Math.abs(gtt_distanceX)>100){
			if(gtt_distanceX<0){
				if(index >= gtt_lis_length){
					index = 0;
					$(".gtt_banner_ul").css("left","0px");
				}
				index++;
			}else if(gtt_distanceX>0){
				if(index <= 0){
					index = gtt_lis_length;
					/*console.log(gtt_lis_length);*/
					$(".gtt_banner_ul").css("left",-index*gtt_banner_width+"px");
				}
				index--;
			}
			$(".gtt_banner_ul").stop().animate({left:-index*gtt_banner_width+"px"},500);
			startTime();
		}
		
	})



})