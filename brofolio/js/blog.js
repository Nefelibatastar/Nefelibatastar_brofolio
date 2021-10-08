// hover放大
$('.content-left').mouseenter(function(){
    $(this).find('.pic img').css('transform','scale(1.1)')
})
$('.content-left').mouseleave(function(){
    $(this).find('.pic img').css('transform','scale(1)')
})

// hover 图标右移
$('.categories>.content>ul>li>a').mouseenter(function(){
    $(this).find('.iconfont').css('left','5px')
})
$('.categories>.content>ul>li>a').mouseleave(function(){
    $(this).find('.iconfont').css('left',0)
})