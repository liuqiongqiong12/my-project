$(function(){
    var t1=$("#section1").offset().top;
    var t2=$("#section2").offset().top;
    var t3=$("#section3").offset().top;
    var t4=$("#section4").offset().top;
    var t5=$("#section5").offset().top;
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if (top >= t2 && top < t3) {
            $(".section2 a:first").addClass("section2-a-fir-animate");
            $(".section2-text2").addClass("section2-text2-animate");
            /*$(".section2 ul li:nth-child(1)").addClass("section2-li1-animate");
            $(".section2 ul li:nth-child(2)").addClass("section2-li2-animate");
            $(".section2 ul li:nth-child(3)").addClass("section2-li3-animate");
            $(".section2 ul li:nth-child(4)").addClass("section2-li4-animate");
            $(".section2 ul li:nth-child(5)").addClass("section2-li5-animate");
            $(".section2 ul li:nth-child(6)").addClass("section2-li6-animate");
            $(".section2 ul li:nth-child(7)").addClass("section2-li7-animate");
            $(".section2 ul li:nth-child(8)").addClass("section2-li8-animate");
            $(".section2 ul li:nth-child(9)").addClass("section2-li9-animate");*/
            var li2 = $(".section2 ul li");
            for(var i=0;i<=li2.length;i++){
                li2.eq(i).addClass("section2-li" + (i+1) + "-animate");
            }
        }
        if(top>=t3 && top < t4){
            $(".section3 a:first").addClass("section3-a1-animate");
            $(".section3-text2").addClass("section3-text2-animate");
            /*$(".section3 .game-feature li:eq(0)").addClass("section3-game1-animate");
            $(".section3 .game-feature li:eq(1)").addClass("section3-game2-animate");
            $(".section3 .game-feature li:eq(2)").addClass("section3-game3-animate");
            $(".section3 .game-feature li:eq(3)").addClass("section3-game4-animate");
            $(".section3 .game-feature li:eq(4)").addClass("section3-game5-animate");
            $(".section3 .game-feature li:eq(5)").addClass("section3-game6-animate");
            $(".section3 .game-feature li:eq(6)").addClass("section3-game7-animate");
            $(".section3 .game-feature li:eq(7)").addClass("section3-game8-animate");
            $(".section3 .game-feature li:eq(8)").addClass("section3-game9-animate");
            $(".section3 .game-feature li:eq(9)").addClass("section3-game10-animate");*/
            var li3 = $(".section3 .game-feature li");
            for(var i=0;i<=li3.length;i++){
                li3.eq(i).css("transform","translateY(0)");
                li3.eq(i).css("opacity","1");
            }

        }
        if(top>=t4 && top < t5){
            $(".section4 a:first span").addClass("section4-a1-span-animate");
            $(".section4 .section4-text2").addClass("section4-text2-animate");
            var li4 = $(".section4 ul li");
            for(var i=0;i<=li4.length;i++){
                li4.eq(i).addClass("section4-li" + (i+1) + "-animate");
            }
            $(".section4 ul").css("opacity","1");
        }
        if(top>=t5){
            $(".section5 a:first").addClass("section5-a1-animate");
            $(".section5-text2").addClass("section5-text2-animate");
            $(".section5 ul").css("opacity","1");
            var li5 = $(".section5 ul li");
            for(var i=0;i<=li5.length;i++){
                li5.eq(i).addClass("section5-li" + (i+1) + "-animate");
            }

        }
    })
})


