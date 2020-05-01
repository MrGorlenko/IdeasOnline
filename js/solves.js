$(document).ready(function(){


    $(function() {
        $('.marquee').marquee({
          duration: 14000,
          startVisible: true,
          duplicated: true
        });
      });

      $(function() {
        $('.marquee_r').marquee({
          duration: 14000,
          startVisible: true,
          duplicated: true,
          direction: 'right'
        });
      });


})