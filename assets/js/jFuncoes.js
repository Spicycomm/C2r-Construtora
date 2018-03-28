$(function(){
    $.fn.extend({
    blueberry: function(options) {

      //default values for plugin options
      var defaults = {
        interval: 5000,
        duration: 500,
        lineheight: 1,
        height: 'auto', //reserved
        hoverpause: false,
        pager: true,
        nav: true, //reserved
        keynav: true
      }
      var options =  $.extend(defaults, options);
 
      return this.each(function() {
        var o = options;
        var obj = $(this);

        //store the slide and pager li
        var slides = $('.slides li', obj);
        var pager = $('.pager li', obj);

        //set initial current and next slide index values
        var current = 0;
        var next = current+1;

        //get height and width of initial slide image and calculate size ratio
        var imgHeight = slides.eq(current).find('img').height();
        var imgWidth = slides.eq(current).find('img').width();
        var imgRatio = imgWidth/imgHeight;

        //define vars for setsize function
        var sliderWidth = 0;
        var cropHeight = 0;

        //hide all slides, fade in the first, add active class to first slide
        slides.hide().eq(current).fadeIn(o.duration).addClass('active');
        

        //build pager if it doesn't already exist and if enabled
        if(pager.length) {
          pager.eq(current).addClass('active');
        } else if(o.pager){
          obj.append('<ul class="pager"></ul>');
          slides.each(function(index) {
            $('.pager', obj).append('<li><a href="#"><span>'+index+'</span></a></li>')
          });
          pager = $('.pager li', obj);
          pager.eq(current).addClass('active');
        }

        //rotate to selected slide on pager click
        if(pager){
          $('a', pager).click(function() {
            //stop the timer
            clearTimeout(obj.play);
            //set the slide index based on pager index
            next = $(this).parent().index();
            //rotate the slides
            rotate();
            return false;
          });
        }

        //primary function to change slides
        var rotate = function(){
          //fade out current slide and remove active class,
          //fade in next slide and add active class
          slides.eq(current).fadeOut(o.duration).removeClass('active')
            .end().eq(next).fadeIn(o.duration).addClass('active').queue(function(){
              //add rotateTimer function to end of animation queue
              //this prevents animation buildup caused by requestAnimationFrame
              //rotateTimer starts a timer for the next rotate
              rotateTimer();
              $(this).dequeue()
          });

          //update pager to reflect slide change
          if(pager){
            pager.eq(current).removeClass('active')
              .end().eq(next).addClass('active');
          }

          //update current and next vars to reflect slide change
          //set next as first slide if current is the last
          current = next;
          next = current >= slides.length-1 ? 0 : current+1;
        };
        //create a timer to control slide rotation interval
        var rotateTimer = function(){
          obj.play = setTimeout(function(){
            //trigger slide rotate function at end of timer
            rotate();
          }, o.interval);
        };
        //start the timer for the first time
        rotateTimer();

        //pause the slider on hover
        //disabled by default due to bug
        if(o.hoverpause){
          slides.hover(function(){
            //stop the timer in mousein
            clearTimeout(obj.play);
          }, function(){
            //start the timer on mouseout
            rotateTimer();
          });
        }

        //calculate and set height based on image width/height ratio and specified line height
        var setsize = function(){
          sliderWidth = $('.slides', obj).width();
          cropHeight = Math.floor(((sliderWidth/imgRatio)/o.lineheight))*o.lineheight;

          $('.slides', obj).css({height: cropHeight});
        };
        setsize();

        //bind setsize function to window resize event
        $(window).resize(function(){
          setsize();
        });
        
        

        //Add keyboard navigation

        if(o.keynav){
          $(document).keyup(function(e){

            switch (e.which) {

              case 39: case 32: //right arrow & space

                clearTimeout(obj.play);

                rotate();

                break;


              case 37: // left arrow
                clearTimeout(obj.play);
                next = current - 1;
                rotate();

                break;
            }

          });
        }


      });
    }
});


	 var block = 0;
      $(".slider-l-left").on("click", function(){
      if(block == 0)
        {
             block = 1; 
             var children = $(".slider-l ul li:last-child").detach(); //pega a ultima li
                     $(".slider-l ul li:first-child").before(children) //pega a ultima li e coloca antes da primeira
                     $(".slider-l ul").css("left","-=411");
                     $(".slider-l ul").animate({
              left: "+=411"
              }, 500,function(){
                block = 0; 
              });
              }       
          return false;
      });

      $(".slider-l-right").on("click", function(){
      if(block == 0)
        {
             block = 1; 
                     $(".slider-l ul").animate({
              left: "-=411"
              }, 500,function(){
              var children = $(".slider-l ul li:first-child").detach(); //pega a primeira li
              $(".slider-l ul li:last-child").after(children) // coloca primeira li depois da ultima
              $(".slider-l ul").css("left","+=411");
                block = 0; 
              });
              }       
          return false;
      });

      $(".slider-r-left").on("click", function(){
      if(block == 0)
        {
             block = 1; 
             var children = $(".slider-r ul li:last-child").detach(); //pega a ultima li
                     $(".slider-r ul li:first-child").before(children) //pega a ultima li e coloca antes da primeira
                     $(".slider-r ul").css("left","-=411");
                     $(".slider-r ul").animate({
              left: "+=411"
              }, 500,function(){
                block = 0; 
              });
              }       
          return false;
      });

      $(".slider-r-right").on("click", function(){
      if(block == 0)
        {
             block = 1; 
                     $(".slider-r ul").animate({
              left: "-=411"
              }, 500,function(){
              var children = $(".slider-r ul li:first-child").detach(); //pega a primeira li
              $(".slider-r ul li:last-child").after(children) // coloca primeira li depois da ultima
              $(".slider-r ul").css("left","+=411");
                block = 0; 
              });
              }       
          return false;
      });

      $(".seta-lan-left").on("click", function(){
      if(block == 0)
        {
             block = 1; 
             var children = $("#box-slider-lancamentos ul li:last-child").detach(); //pega a ultima li
                     $("#box-slider-lancamentos ul li:first-child").before(children) //pega a ultima li e coloca antes da primeira
                     $("#box-slider-lancamentos ul").css("left","-=1010");
                     $("#box-slider-lancamentos ul").animate({
              left: "+=1010"
              }, 500,function(){
                block = 0; 
              });
              }       
          return false;
      });

      $(".seta-lan-right").on("click", function(){
      if(block == 0)
        {
             block = 1; 
                     $("#box-slider-lancamentos ul").animate({
              left: "-=1010"
              }, 500,function(){
              var children = $("#box-slider-lancamentos ul li:first-child").detach(); //pega a primeira li
              $("#box-slider-lancamentos ul li:last-child").after(children) // coloca primeira li depois da ultima
              $("#box-slider-lancamentos ul").css("left","+=1010");
                block = 0; 
              });
              }       
          return false;
      });

	
	$('.btn_enviar').on('click', function(){
		var n, e, a, m;
		var msg = "";
		n = $('.status_nome').val();
		e = $('.status_email').val();
		a = $('.status_telefone').val();
		m = $('.status_msg').val();
		
		if(n == ""){ msg += 'Campo Nome vazio. \n'; }
		if(e == ""){ msg += 'Campo E-mail vazio. \n'; }
		if(a == ""){ msg += 'Campo Telefone vazio. \n'; }
		if(m == ""){ msg += 'Campo Mensagem vazio. \n'; }
		
		if(msg != ""){
			alerta = "Por favor, preencha o(s) campo(s) abaixo: \n\n"+msg;
			alert(alerta);
			return false;
		}
		
	});

});