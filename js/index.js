 // 下拉菜单
$('.dropdown').mouseenter(function (event) {
    event.preventDefault()
    $(this).find('.dropdown-list').addClass('show')
})
$('.dropdown').mouseleave(function (event) {
    event.preventDefault()
    $(this).find('.dropdown-list').removeClass('show')
})

// 筛选
var $grid = $('.grid')
$('.allWorks').click(function(){
    $grid.isotope({ filter: '*' });
})
$('.branding').click(function(){
    $grid.isotope({ filter: '.branding' });
})
$('.agency').click(function(){
    $grid.isotope({ filter: '.agency' });
})
$('.design').click(function(){
    $grid.isotope({ filter: '.design' });
})
$('.photography').click(function(){
    $grid.isotope({ filter: '.photography' });
})


// 轮播图
var mySwiper = new Swiper ('.gallery-thumbs', {
    direction: 'horizontal', // 垂直切换选项
    loop: false, // 循环模式选项
    slidesPerView:3,
    spaceBetween:80,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      clickableClass : 'my-pagination-clickable',
    },
    // paginationClickable: true,
   
  }) 

// 轮播图展示
$('.swiper-slide .box').mouseenter(function(){
    $(this).find('.hover').css('opacity',1)
})
$('.swiper-slide .box').mouseleave(function(){
    $(this).find('.hover').css('opacity',0)
})

// 菜单栏出现消失
$('.ham>button').click(function(){
    $('.page').css('display','block')
    $('.menu').css('right','0')
})
$('.menu>.content>button').click(function(){
    $('.page').css('display','none')
    $('.menu').css('right','-100%')
})
//   wow 的 js
  new WOW().init(); 