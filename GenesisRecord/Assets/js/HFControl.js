  $(function () {
      window.onload = function () {
          if (window.pageYOffset > 150) {
              $("header").fadeIn('fast');
          } else {
              $("header").hide();
              $("#nav-drawer").hide();
          }
      }
      window.onscroll = function () {
          if (window.pageYOffset > 150) {
              $("header").fadeIn('fast');
              $(".Footer").fadeOut('fast');
              $(".ScrollUp").fadeIn('fast');
          } else {
              $("header").fadeOut('fast');
              $(".Footer").fadeIn('fast');
              $(".ScrollUp").fadeOut('fast');
          }

          if (window.innerWidth > 600) {
              console.log(window.innerWidth);
              $("#nav-drawer").hide();
              $("header p").show();
          } else {
              $("#nav-drawer").show();
              $("header p").hide();
          }
      }
  });
