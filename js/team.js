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

})