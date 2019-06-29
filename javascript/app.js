// Card Popup
function openNav() {
    document.getElementById('myNav').style.width = "100%";
}
function closeNav() {
    document.getElementById('myNav').style.width = "0%";
}

$(".listS").hover(function(){
    $(this).find(".in-overlay").css({"visibility":"visible"});
}, function(){
    $(this).find(".in-overlay").css({"visibility":"hidden"});
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 5){
            $(".logo").css({"opacity" : "0"})
        }
        else {
            $(".logo").css({"opacity" : "1"})
        }
    })
})

function myFunctionY (y) {
    if (y.matches) {
        $(".nav-wrapper").css({"opacity" : "1"})
        return false
    } else {
        return true
    }
}
var y = window.matchMedia("(max-width: 864px)")

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 5 && myFunctionY(y)){
            $(".nav-wrapper").css({"opacity" : "0"})
        }
        else {
            $(".nav-wrapper").css({"opacity" : "1"})
        }
    })
})
