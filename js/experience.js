$(document).ready(function(){


    var scrollorama_exp = $.scrollorama({
        blocks:'.experience__container_1'
    });

      var scrollorama_exp_2 = $.scrollorama({
        blocks:'.experience__container_2'
    });


      function myFunctionCircle(y) {
        if (y.matches) { 

            scrollorama_exp.animate('.experience__item_left', {
                duration: 500, property: 'left', start: -1000 + 'px', end: 0 + 'px', baseline: "bottom"
              })
        
            scrollorama_exp.animate('.experience__item_right', {
                duration: 500, property: 'right', start: -1000 + 'px', end: 0 + 'px', baseline: "bottom"
              })

            scrollorama_exp_2.animate('.experience__item_left_2', {
                duration: 500, property: 'left', start: -1000 + 'px', end: 0 + 'px', baseline: "bottom"
              })
        
            scrollorama_exp_2.animate('.experience__item_right_2', {
                duration: 500, property: 'right', start: -1000 + 'px', end: 0 + 'px', baseline: "bottom"
              })
        
        } else {

            scrollorama_exp.animate('.experience__item_left', {
                delay: 90,
                duration: 500, property: 'left', start: -1000 + 'px', end: 0 + 'px', baseline: "bottom"
              })

            scrollorama_exp.animate('.experience__item_left', {
                delay: 140,
                duration: 500, property: 'opacity', start: 0, end: 1, baseline: "bottom"
              })
        
            scrollorama_exp.animate('.experience__item_right', {
                delay: 350,
                duration: 500, property: 'right', start: -1000 + 'px', end: 0 + 'px', baseline: "bottom"
              })
            scrollorama_exp.animate('.experience__item_right', {
                delay: 350,
                duration: 500, property: 'opacity', start: 0, end: 1, baseline: "bottom"
              })

            scrollorama_exp_2.animate('.experience__item_left_2', {
                // delay: -450,
                duration: 500, property: 'left', start: -1000 + 'px', end: 0 + 'px', baseline: "bottom"
              })

            // scrollorama_exp_2.animate('.experience__item_left_2', {
            //     delay: 350,
            //     duration: 500, property: 'opacity', start: 0, end: 1, baseline: "bottom"
            //   })
        
            scrollorama_exp_2.animate('.experience__item_right_2', {
                delay: 350,
                duration: 500, property: 'right', start: -1000 + 'px', end: 0 + 'px', baseline: "bottom"
              })

              // scrollorama_exp_2.animate('.experience__item_right_2', {
              //   delay: 400,
              //   duration: 500, property: 'opacity', start: 0, end: 1, baseline: "bottom"
              // })
          
    
        }
      }
    
      var y = window.matchMedia("(min-width: 992px)")
      myFunctionCircle(y)
      y.addListener(myFunctionCircle)

})