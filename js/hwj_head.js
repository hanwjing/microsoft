$(function () {
    var isOpen = false;
    var isLoad = false;
    var isNav = false;
    var isCustom=false;
    var isChoose=false;
    var $child1 = $('<input type="text" name="" placeholder="Surface Pro 6"><i class="fa fa-search"></i>');
    if (isOpen == false) {
        $(".hwj_headBox2 .hwj_headSearch").append($child1);
    }

    $(".hwj_headPartRight .fa-search").click(function () {
        if (isOpen == true) {
            $(".hwj_headBox2 .hwj_headSearch").fadeOut(200);
            isOpen = false;
        }
        else if (isOpen == false) {
            $(".hwj_headBox2 .hwj_headSearch").fadeIn(1000);
            $(".hwj_headBox2 .hwj_headLoad").css("display", "none");
            $(".hwj_headPartRight .fa-user-o").css({
                "background-color": "transparent",
                "border": "none",
                "z-index": 999
            });
            isLoad = false;
            isOpen = true;
        }
    });

    $(".hwj_headPartRight .fa-user-o").click(function () {
        if (isLoad == true) {
            $(".hwj_headBox2 .hwj_headLoad").fadeOut(200);
            $(this).css({
                "background-color": "transparent",
                "border-left": "1px solid #EEEEEE",
                "border-right": "1px solid #EEEEEE",
                "borderTop": "1px solid #EEEEEE"
            });
            isLoad = false;
        }
        else if (isLoad == false) {
            $(".hwj_headBox2 .hwj_headLoad").fadeIn(500);
            $(".hwj_headBox2 .hwj_headSearch").css("display", "none");
            $(this).css({
                "backgroundColor": "#fff",
                "border-left": "1px solid #ccc",
                "border-right": "1px solid #ccc",
                "borderTop": "1px solid #ccc"
            });
            isLoad = true;
        }
    });

    $(".hwj_headBox3 .hwj_headNav1>a:last-child").click(function () {
        $.ajax({
            url: "http://192.168.24.7:8888/php/headNav.php",
            type: "GET",

            dataType: 'jsonp',
            success: function (res) {
                var html = "<li class='hwj_headActive'>硬件</li>";
                for (var i = 1; i < res.length; i++) {
                    var p = res[i];
                    html += "<li>" + p.content + "</li>";
                }
                $("#hwj_headul").html(html);
            }
        });

        if (isNav == true) {
            $(".hwj_headBox3 .hwj_headNav").fadeOut(200);
            $(this).css({
                "border-left": "1px solid white",
                "border-top": "1px solid white",
            })
            isNav = false;
        }
        else if (isNav == false) {
            $(".hwj_headBox3 .hwj_headNav").fadeIn(500);
            $(this).css({
                "border-left": "1px solid #ccc",
                "border-top": "1px solid #ccc",
            })
            isNav = true;
        }
    });

    $(document).scroll(function () {
        var winHeight = $(window).scrollTop();
        if ((isOpen == true && winHeight >= 136) || (isOpen == false && winHeight >= 96)) {
            $(".hwj_head .hwj_headBox3").css({
                "position": "fixed",
                "top": 0,
                "backgroundColor": "#fff",
                "maxWidth": "640px",
                "minWidth": "320px"
            });
            $(".GLJ-banner").css({
                "marginTop": "50px"
            })
        }
        if ((isOpen == true && winHeight <= 136) || (isOpen == false && winHeight <= 96)) {
            $(".hwj_head .hwj_headBox3").css({
                "position": "relative",
                "top": 0,
                "backgroundColor": "#fff",
                "zIndex": 555
            });
            $(".GLJ-banner").css({
                "marginTop": "0px"
            })
        }
    });

    $(".button").click(function () {
        var $arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'd', 'H', 'B', 'W', 'C', 's', 'M', 'Q', 'k', 'r', 'o', 'P', 'g', 'e', 'X', 'Z', 'n'];
        var $code = "";
        for (var i = 0; i < 5; i++) {
            var $index = parseInt(Math.random() * $arr.length);
            $code += $arr[$index];
        }
        $(this).css({
            "border": "1px solid #555",
            "color": "#555"
        })
        $(this).val($code);
    });

    $("#hwj_submit").click(function(){
        var hwj_tel=$("#tel").val(),
            hwj_pwd=$("#pwd").val(),
            hwj_actPwd=$("#actPwd").val();
        // console.log(hwj_pwd);
        $.ajax({
            url:"http://192.168.24.7:8888/php/load.php",
            type:"GET",
            dataType:"jsonp",
            success:function(res){
                for(var i=0;i<res.length;i++){
                    var p=res[i];
                    console.log(p.telephone);
                    if(($("#tel").val()=="")||($("#tel").val()==" ! 请输入手机号")){
                        $(".hwj_centerCh2_2").css("color","#f40");
                        $(".hwj_centerCh2_2").html(" ! 请输入手机号");
                        // console.log($("#tel").val());
                    }
                    else{
                        if(($("#pwd").val()=="") || ($("#pwd").val()==" ! 请输入密码")){
                            if($("#actPwd").val() != ""){
                                if((hwj_tel==p['telephone'])&&(hwj_actPwd==$("#actPwd").val())){
                                    window.location.href="microsoft.html";
                                }
                            }
                            else{
                                $(".hwj_centerCh2_2").css("color","#f40");
                                $(".hwj_centerCh2_2").html(" ! 请输入密码");
                            }
                        }
                        else{
                            if((hwj_tel==p['telephone'])&&(hwj_pwd==p['password'])){
                                window.location.href="microsoft.html";
                            }
                        }
                    }
                }
            }
        })
    });

    $("#hwj_button").click(function(){
        var hwj_phone=$("#telephone").val(),
            hwj_password=$("#password").val(),
            hwj_password1=$("#password_1").val(),
            hwj_actPwd=$("#actPwdOther").val();
        $.ajax({
            url:"http://192.168.24.7:8888/php/addUserInfo.php",
            type:"GET",
            data:{"telephone":hwj_phone,"password":hwj_password},
            dataType:"jsonp",
            error:function(){
                console.log("hhh");
                if(   ($("#telephone").val()=="") ||($("#telephone").val()==" ! 请输入账号名")    ){
                    $(".hwj_centerCh3_first").css("color","#f40");
                    $(".hwj_centerCh3_first").html(" ! 请输入账号名");
                }
                else{
                    if(   ($("#password").val()=="") ||($("#password").val()==" ! 请输入密码")    ){
                        $(".hwj_centerCh3_first").css("color","#f40");
                        $(".hwj_centerCh3_first").html(" ! 请输入密码");
                    }
                    else{
                        if( ($("#password_1").val()=="")){
                            $(".hwj_centerCh3_first").css("color","#f40");
                            $("#password").val("");
                            $(".hwj_centerCh3_first").html(" ! 请重复输入密码");
                        }
                        else{
                            if( hwj_actPwd == $("#buttonOther").val() ){
                                console.log("ggg");
                                $(".hwj_centerChild3").fadeOut(100);
                                $(".hwj_centerChild2").fadeIn(500);
                                $("#tel").val(hwj_phone);
                                $("#pwd").val("");
                                $("#actPwd").val("");
                            }
                            else{
                                console.log("kk");
                                $(".hwj_centerCh3_first").css("color","#f40");
                                $(".hwj_centerCh3_first").html(" ! 验证码错误");
                                $(".button").click();
                                $("#password").val("");
                                $("#password_1").val("");
                            }
                        }
                    }
                }
            }
        })
    });

    $(".hwj_LoadPhone").click(function () {
        $(".hwj_centerChild1").fadeOut(100);
        $(".hwj_centerChild2").fadeIn(500);
    });

    $("#hwj_centerCreate").click(function () {
        console.log("hhhh");
        $(".hwj_centerChild2").fadeOut(100);
        $(".hwj_centerChild3").fadeIn(500);
    });


    $("#hwj_custom").click(function () {
        if(isCustom==false){
            $(".content .hwj_fixCustom").fadeIn(300);
            isCustom=true;
        }
        else if(isCustom==true){
            $(".content .hwj_fixCustom").fadeOut(200);
            isCustom=false;
        }
    });
    $(".hwj_fixPart1 .fa-remove").click(function () {
        $(".content .hwj_fixCustom").fadeOut(200);
        isCustom=false;
    });

    $("#hwj_chatNow").click(function () {
        $(".hwj_bottomFix").css("display","block");
    });

    $(".hwj_bottomInput").click(function () {
        if(isChoose==false){
            $(".hwj_bottomChoose").css("display","block");
            $(".hwj_bottomInput").css("outline","1px dashed red");
            isChoose=true;
        }
        else if(isChoose==true){
            $(".hwj_bottomChoose").css("display","none");
            $(".hwj_bottomInput").css("outline","none");
            isChoose=false;
        }
    });

    $("#hwj_btspan1>i,#hwj_btspan2>i,#hwj_bottomquxiao").click(function () {
        $(".hwj_bottomFix").css("display","none");
    });
    
    $("#hwj_bottomsubmit").click(function () {
        $(this).css("backgroundColor","#0ae");
        window.location.href="microsoft.html";
    });

});





