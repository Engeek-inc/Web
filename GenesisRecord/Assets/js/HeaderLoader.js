  $(function () {
      $.ajax("Header.html")
          .done(function (data) {
              var header = $("header");
              header[0].innerHTML = data;
          });
      $.ajax("Sidebar.html")
          .done(function (data) {
              var header = $("article.SideBar");
              header[0].innerHTML = data;
              var URL = location.href;
              URL = URL.substring(URL.lastIndexOf("/") + 1);
              URL = URL.substring(0, URL.length - ".html".length);
              var targets = $(".sidebar");
              for (var i = 0; i < targets.length; i++) {
                  if (URL == targets[i].getAttribute("id")) {
                      targets[i].classList.add("SideButtonSelected");
                  } else {
                      targets[i].classList.add("SideButtonDeSelected");
                  }
                  console.log(targets[i].classList.length);
              }
          });
  });
