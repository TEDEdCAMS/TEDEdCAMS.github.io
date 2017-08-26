      $(function() {
        var scroll = new SmoothScroll('a[href*="#"]');
        $(".button-collapse").sideNav();
        $( "a.email" ).hover(function() {
        	$(this).addClass( "animated bounceInRight" );
        });
      });
      $(document).ready(function(){
           $('.carousel').carousel({
                 dist:0,
                 shift:0,
                 padding:20
           });

         });
