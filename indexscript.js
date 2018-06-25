<!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-120228266-1"></script>
      
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-120228266-1');

      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <link href='https://fonts.googleapis.com/css?family=Amaranth' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Acme' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Andika' rel='stylesheet'>
      <link rel="Stylesheet" href="style.css" type="text/css">

      <script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>

    
    <!-- <script language="JavaScript" type="text/javascript"> -->

      $(document).ready(function(){
        $('a[href^="myPage.html#about"]').on('click',function (e) {
          e.preventDefault();

          var target = this.hash;
          var $target = $(target);

          $('html, body').stop().animate({
            'scrollTop': $target.offset().top
          }, 900, 'swing', function () {
            window.location.hash = target;
          });
        });
      });

  //     ===== Scroll to Top ==== 
      $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
          $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
          $('#return-to-top').fadeOut(100);   // Else fade out the arrow
        }
      });
      $('#return-to-top').click(function() {      // When arrow is clicked
        $('html,body').animate({
          scrollTop : 0                       // Scroll to top of body
        }, 500);
      });

      // title

      var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
      };

      TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }

        setTimeout(function() {
          that.tick();
        }, delta);
      };

      window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
      };
    
