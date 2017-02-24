$(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(window).scrollTop() > 780) { // check if user scrolled more than 50 from top of the browser window
          $("#nav").css({
            "background-color":"white",
            "opacity" : "0.9",
            "border-bottom" : "1px solid #CCCCCC"
          });
          $("a").css("color", "#008080");
          $("#blog").css("color", "#008080"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $("#nav").css({
            "background-color" : "transparent",
            "border-bottom" : "none"
          });
          $("li").css("color", "white");
          $("a").css("color", "white"); // if not, change it back to transparent
        }
      });


      $('.about').on('click',function(){
        $(".bannerPicture").hide();
      });
      



      $('.blog').on('click',function(){
        console.log('hi');
        $("#nav").css({
            "background-color":"white",
            "opacity" : "0.9",
            "border-bottom" : "1px solid #CCCCCC"
          });
        $(".bannerPicture").show();
        $("a").css("color", "#008080");
        // $("").css("color", "#008080");
      });
      $('.logo').on('click',function(){
        $(".bannerPicture").show();
      });


    });