// 滑动出现
$('.team-box .box').mouseenter(function(){
    $(this).find('.hover').css('opacity',1)
})
$('.team-box .box').mouseleave(function(){
    $(this).find('.hover').css('opacity',0)
})