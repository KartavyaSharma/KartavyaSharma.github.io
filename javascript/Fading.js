$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $(".logo").css({"opacity" : "0"})
        }
        else {
            $(".logo").css({"opacity" : "1"})
        }
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $(".nav-wrapper").css({"opacity" : "0"})
        }
        else {
            $(".nav-wrapper").css({"opacity" : "1"})
        }
    })
})
