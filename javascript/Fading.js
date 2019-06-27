function myFunctionX (x) {
    if (x.matches) {
        $(".logo").css({"opacity" : "1"})
        return false
    } else {
        return true
    }
}
var x = window.matchMedia("(max-width: 864px)")

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 50 && myFunctionX(x)){
            $(".logo").css({"opacity" : "0"})
        }
        else {
            $(".logo").css({"opacity" : "1"})
        }
    })
})

function myFunctionY (y) {
    if (x.matches) {
        $(".nav-wrapper").css({"opacity" : "1"})
        return false
    } else {
        return true
    }
}
var y = window.matchMedia("(max-width: 864px)")

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 50 && myFunctionY(y)){
            $(".nav-wrapper").css({"opacity" : "0"})
        }
        else {
            $(".nav-wrapper").css({"opacity" : "1"})
        }
    })
})

// $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(this).scrollTop() > 50 ){
//             $(".nav-wrapper").css({"opacity" : "0"})
//         }
//         else {
//             $(".nav-wrapper").css({"opacity" : "1"})
//         }
//     })
// })
