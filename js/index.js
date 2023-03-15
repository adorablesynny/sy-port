/* 1 이름 한글자씩 나타나게 하기*/
let $name = $("#page1 .middle-content .name");

$name.each(function(){
    let text = $(this).text();
    let split = text.split('').join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>"
    $(this).html(split).attr("aria-label", text);
});

$("#page1 .middle-content").each(function(index){
    $(this).find(".name span").each((index)=>{
        setTimeout(() => {
            $(this).find(".name span").eq(index).addClass("show");
        },200 * index)
    });
});

/* 팝업 띄우기 */
let popupbotton = $(".alarm"),
    popuplayer = $(".popup");

popupbotton.mouseover(function(){
    popuplayer.addClass("pop");
    $("html, body").css({"overflow":"hidden"});
});
popupbotton.mouseleave(function(){
    popuplayer.removeClass("pop");
    $("html, body").css({"overflow":"visible"});
});

/* 위로 가기 버튼 */
let gotoTopbtn = $(".gotoTop");

gotoTopbtn.click(function(){
    $("html, body").animate({"scrollTop":"0"})
})

/* 각 컨텐츠 타이틀 한 글자씩 split */
let $h2 = $("h2");

$h2.each(function(){
    let text = $(this).text();
    let split = text.split('').join("</span><span aria-hidden='true'>");
    split = "<span aria-hidden='true'>" + split + "</span>"
    $(this).html(split).attr("aria-label", text);
});

/* 스크롤 이펙트 */
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop(),
        page1 = $("#page1").offset().top,
        page2 = $("#page2").offset().top,
        page3 = $("#page3").offset().top,
        page4 = $("#page4").offset().top,
        page5 = $("#page5").offset().top,
        page6 = $("#page6").offset().top;

    /* 1 스크롤 효과 주기 */
    let scrollcolor = scrollTop;

    $("#page1 .green").css({transform:"translateX("+ scrollcolor +"px"});

    /* 타이틀 나타나게 하기 */
    $("section").each(function(index){
        if( scrollTop >= $(this).offset().top-200 ){
            $(this).find("h2 span").each((index)=>{
                setTimeout(() => {
                    $(this).find("h2 span").eq(index).addClass("show");
                },200 * index)
            });
            $(this).find("h2").addClass("blink");
        };
    });

    /* 스크롤 시 각 컨텐츠 효과주기, 효과 빼기 */

    if( scrollTop >= 100){
        $("#page1 .name span").addClass("namecolor");
    }else{
        $("#page1 .name span").removeClass("namecolor");
    }

    if( scrollTop >= page2-200){
        $("#page2 .wrap > div").addClass("on");
        $("#page2 .wrap .skills p").addClass("textup");
    }
    if( scrollTop >= page3 || scrollTop <= 150){
        $("#page2 .wrap > div").removeClass("on");
        $("#page2 .wrap .skills p").removeClass("textup");
    }

    if(scrollTop >= page3-350){
        $("#page3 .left").addClass("now");
    }

    /* 3 각 div에 맞춰 textbox 나타나게 하기 */
    let div2 = $("#page3 > .right > div:nth-child(2)").offset().top,
        div3 = $("#page3 > .right > div:nth-child(3)").offset().top,
        textbox = $("#page3 .left .portfoliot");

    textbox.removeClass("appear");
    textbox.eq(0).addClass("appear");

    if( scrollTop >= div2-180){
        textbox.removeClass("appear");
        textbox.eq(1).addClass("appear");
    }
    if( scrollTop >= div3-180 ){
        textbox.removeClass("appear");
        textbox.eq(2).addClass("appear");
    }

    /* 4 효과 주기 */
    if( scrollTop >= page4-250){
        $("#page4 .effect").addClass("coveron");
        $("#page4 > h2").addClass("colorchange");
        $("#page4 .intro-left").addClass("appear");
        $("#page4 .intro-right").addClass("appear");
        $("#page4 .img-deco").addClass("appear");
    }else if( scrollTop < page2-250){
        $("#page4 > h2").css({"color":"transparent"});
        $("#page4 > h2").removeClass("blink");
        $("#page4 .effect").removeClass("coveron");
        $("#page4 > h2").removeClass("colorchange");
        $("#page4 .intro-left").removeClass("appear");
        $("#page4 .intro-right").removeClass("appear");
        $("#page4 .img-deco").removeClass("appear");
    }

    /* 5 텍스트 움직이기 */
    if( scrollTop >= page5-1000){
        let textmove = scrollTop/-5;

        $("#page5 .mytext").css({transform:"translateX("+ textmove +"px"});
    }

    /* 6 */
    if( scrollTop >= page6 - 200){
        $("#page6 .contact-wrap").addClass("appear");
        $("#page6 .deco-circle").addClass("appear");
    }else if( scrollTop < page4){
        $("#page6 .contact-wrap").removeClass("appear");
        $("#page6 .deco-circle").removeClass("appear");
    }
});

/* 4 마우스 이펙트 */
$("#page4 .intro-left").mousemove(function(e){

    let pageX = e.pageX;
    let pageY = e.pageY;

    //기준점을 가운데로 맞추기 위함
    let standardX = $(window).width()/2 - pageX;
    let standardY = $(window).height()/2 - pageY;

    //이미지 움직이기
    $(".intro-left img").attr({"style": "Transform: translate("+standardX/-50+"px, "+standardY/100+"px"})
});

$("#page4 .intro-left").mouseleave(function(e){
    $(".intro-left img").attr({"style": "Transform: translate("+0+"px, "+0+"px"})
})
