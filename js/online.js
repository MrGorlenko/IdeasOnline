$(document).ready(function(){

    var onlineOne = $("#online-one"),
    onlineTwo = $("#online-two"),
    onlineThree = $("#online-three");

    onlineOne.mouseover(function(){
        $("#online-one-tit").addClass('online-animation__title');
        $("#online-one-sub").addClass('online-animation__paragraph');
       }
    )

    onlineOne.mouseout(function(){
        $("#online-one-tit").removeClass('online-animation__title');
        $("#online-one-sub").removeClass('online-animation__paragraph');
       }
    )

    onlineTwo.mouseover(function(){
        $("#online-two-tit").addClass('online-animation__title');
        $("#online-two-sub").addClass('online-animation__paragraph');
       }
    )

    onlineTwo.mouseout(function(){
        $("#online-two-tit").removeClass('online-animation__title');
        $("#online-two-sub").removeClass('online-animation__paragraph');
       }
    )
    
    onlineThree.mouseover(function(){
        $("#online-three-tit").addClass('online-animation__title');
        $("#online-three-sub").addClass('online-animation__paragraph');
       }
    )

    onlineThree.mouseout(function(){
        $("#online-three-tit").removeClass('online-animation__title');
        $("#online-three-sub").removeClass('online-animation__paragraph');
       }
    )


})