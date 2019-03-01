function toggleImage(){
    var ul=document.querySelector(".GLJ-bannerImg");
    var banner=document.querySelector(".GLJ-banner");
    var bannerWidth=banner.offsetWidth;
    var lis=document.querySelectorAll(".GLJ-bannerIndicator li");
    var bannerImages=document.querySelectorAll(".GLJ-bannerImg li");
    var count =bannerImages.length;
    //实现图片的轮播动画
    var index=1;
    var timerId=null;
    var startTime=function(){
        timerId=setInterval(function(){
            index++;
            ul.style.transition="all 0.5s";
            ul.style.left=-index*bannerWidth+"px";
        },2000)
    };
    startTime();

    //改变点的样式
    function changeIndicator(index){
        for(var i=0;i<lis.length;i++){
            lis[i].classList.remove("active");
        }
        lis[index-1].classList.add("active");
    }

    //在transition动画结束时给ul绑定事件
    addEventListener(ul,"webkitTransitionEnd",function(){
        if(index>=count-1){
            index=1;
            ul.style.transition="none";
            ul.style.left=-index*bannerWidth+"px";
        }
          else if(index<=0){
            index=count-2;
            ul.style.transition = "none";
            ul.style.left = -index*bannerWidth + "px";
        }
        changeIndicator(index);
        setTimeout(function(){
            isEnd = true;
            clearInterval(timerId);
            startTime();
        },100)
    });

    //当窗口大小改变时，同步改变轮播图的大小
    window.onresize=function(){
        bannerWidth=banner.offsetWidth;
        ul.style.width=bannerWidth*count+"px";
        ul.style.left=-bannerWidth*index+"px";
    };

    //移动端触摸滑动事件
    var startX=0;
    var moveX=0;
    var distanceX=0;
    var isEnd=true;
    addEventListener(ul,"touchstart",function(e){
        clearInterval(timerId);
        var touch=e.targetTouches[0];
        startX=touch.clientX;
    });
    addEventListener(ul,"touchmove",function(e){
        if(isEnd==true){
            var touch=e.targetTouches[0];
            moveX=touch.clientX;
            distanceX=moveX-startX;
            ul.style.transition="none";
            ul.style.left=-index*bannerWidth+distanceX+"px";
        }
    });
    addEventListener(ul,"touchend",function(e){
         isEnd=false;
        if(Math.abs(distanceX)>100){
            if(distanceX>0){
                index--;
                ul.style.transition="all 0.5s";
                ul.style.left=-index*bannerWidth+"px";
            }
            else{
                index++;
                ul.style.transition="all 0.5s";
                ul.style.left=-index*bannerWidth+"px";
            }
        }else{
            ul.style.transition="all 0.5s";
            ul.style.left=-index*bannerWidth+"px";
        }
        startX=0;
        moveX=0;
        distanceX=0;
    })
}


window.onload=function(){
    toggleImage();
};
