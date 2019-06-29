$(".listS").hover(function(){
    $(this).find(".in-overlay").css({"visibility":"visible"});
}, function(){
    $(this).find(".in-overlay").css({"visibility":"hidden"});
});
