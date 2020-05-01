$(document).ready(function(){



    var target = $('.team__rocket');
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    $(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem){
        target.addClass('rocker__animation');
  }
});



    var target1 = $('.footer__rocket');
    var targetPos1 = target1.offset().top;
    var winHeight1 = $(window).height();
    var scrollToElem1 = targetPos1 - winHeight1;
    $(window).scroll(function(){
    var winScrollTop1= $(this).scrollTop();
    if(winScrollTop1 > scrollToElem1){
        target1.addClass('rocket__animation_footer');
    }
    });

})