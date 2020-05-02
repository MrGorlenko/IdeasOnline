$(document).ready(function(){


    $('#go').on('click', function(){
        $('.modal').css('display', 'flex');
        $('#body').css('overflow', 'hidden');
    })

    $('.modal__close').on('click', function(){
        $('.modal').css('display', 'none');
        $('#body').css('overflow', 'visible');
    })

})