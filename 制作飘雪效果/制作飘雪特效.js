var flakeColor = "#fff";//雪片的颜色
var newOn = 200;//间隔多长时间产生一个雪片，单位是毫秒
var flake = $("<div></div>").css("position","absolute").html("❉ ");
$(function(){
    var dwidth = $(document).width();//获取网页的宽度
    var dheight = $(document).height();//获取网页的宽度
    setInterval(function(){
        var statLeft = Math.random()*dwidth;//获取雪片一开始的距离左边的距离
        var enfLeft =  Math.random()*dwidth;//获取雪片下落后距离浏览器左边的距离
        var flakeSize = 5 + 50*Math.random(); //获取雪片大小
        var durationTime = 4000 + 700*Math.random();//雪片从最上面飘到最下面的时间
        var startOpacity = 0.7+0.3*Math.random();//雪片一开始的透明度
        var endOpacity = 0.4-0.3*Math.random();//雪片下落后的透明度
        flake.clone().appendTo($("body")).css({
            "left":statLeft,
            "top":"-55px",
            "opacity":startOpacity,
            "color":flakeColor,
            "font-size":flakeSize
        }).animate({
            "left":enfLeft,
            "opacity":endOpacity,
            "top":dheight
        },durationTime,function(){
            $(this).remove();
        })
    },newOn);
})
