$(function(){
	var isOpen=false;
	var isLoad=false;
	var isNav=false;
	var $child1=$('<input type="text" name="" placeholder="Surface Pro 6"><i class="fa fa-search"></i>');
	if(isOpen==false){
		$(".hwj_headBox2 .hwj_headSearch").append($child1);
	}

	$(".hwj_headPartRight .fa-search").click(function(){
		if(isOpen==true){
			$(".hwj_headBox2 .hwj_headSearch").fadeOut(200);
			isOpen=false;
		}
		else if(isOpen==false){
			$(".hwj_headBox2 .hwj_headSearch").fadeIn(1000);
			$(".hwj_headBox2 .hwj_headLoad").css("display","none");
			$(".hwj_headPartRight .fa-user-o").css({
				"background-color":"transparent",
				"border":"none",
                "z-index":999
			});
			isLoad=false;
			isOpen=true;
		}
	});

	$(".hwj_headPartRight .fa-user-o").click(function(){
		if(isLoad==true){
			$(".hwj_headBox2 .hwj_headLoad").fadeOut(200);
			$(this).css({
				"background-color":"transparent",
				"border-left":"1px solid #EEEEEE",
				"border-right":"1px solid #EEEEEE",
				"borderTop":"1px solid #EEEEEE"
			});
			isLoad=false;
		}
		else if(isLoad==false){
			$(".hwj_headBox2 .hwj_headLoad").fadeIn(500);
			$(".hwj_headBox2 .hwj_headSearch").css("display","none");
			$(this).css({
				"backgroundColor":"#fff",
				"border-left":"1px solid #ccc",
				"border-right":"1px solid #ccc",
				"borderTop":"1px solid #ccc"
			});
			isLoad=true;
		}
	});

	$(".hwj_headBox3 .hwj_headNav1>a:last-child").click(function(){
		$.ajax({
			url:"http://192.168.24.7:8888/php/headNav.php",
			type:"GET",

			dataType:'jsonp',
			success:function(res){
				var html="<li class='hwj_headActive'>硬件</li>";
				for(var i=1;i<res.length;i++){
					var p=res[i];
					html+="<li>"+p.content+"</li>";
				}
				$("#hwj_headul").html(html);
			}
		});

		if(isNav==true){
			$(".hwj_headBox3 .hwj_headNav").fadeOut(200);
			$(this).css({
				"border-left":"1px solid white",
				"border-top":"1px solid white",
			})
			isNav=false;
		}
		else if(isNav==false){
			$(".hwj_headBox3 .hwj_headNav").fadeIn(500);
			$(this).css({
				"border-left":"1px solid #ccc",
				"border-top":"1px solid #ccc",
			})
			isNav=true;
		}
	});

    $(document).scroll(function () {
        var  winHeight = $(window).scrollTop();
        if((isOpen==true&&winHeight>=136)||(isOpen==false&&winHeight>=96)){
            $(".hwj_head .hwj_headBox3").css({
                "position":"fixed",
                "top":0,
                "backgroundColor":"#fff",
				"maxWidth":"640px",
				"minWidth":"320px"
            });
			$(".GLJ-banner").css({
				"marginTop":"50px"
			})
        }
        if((isOpen==true&&winHeight<=136)||(isOpen==false&&winHeight<=96)){
            $(".hwj_head .hwj_headBox3").css({
                "position":"relative",
                "top":0,
                "backgroundColor":"#fff",
                "zIndex":555
            });
			$(".GLJ-banner").css({
				"marginTop":"0px"
			})
        }
    });
});





