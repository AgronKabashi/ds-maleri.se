(function () {
  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll <= 0) {
      $(".navbar-area").removeClass("sticky");
    } else {
      $(".navbar-area").addClass("sticky");
    }
  });

  $(".testimonial-active").slick({
    dots: false,
    infinite: false,
    speed: 800,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 0,
    responsive: [
      {
        breakpoint: 1444,
        settings: {
          dots: true,
          slidesToShow: 2,
          centerMode: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          dots: true,

          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  });

  $("#services-slideshow").slick({
    dots: false,
    speed: 400,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "progressive",
  });

  const formLink = $("#request-form-link");
  const formBody = $("#request-form-body");
  const menuToggle = $("#menu-toggle");
  const subject = encodeURIComponent("Jag är intresserad av att veta mer!");

  $("#nav a").click(() => {
    menuToggle.prop("checked", false);
  });

  $("#request-form-link").click((event) => {
    if (formBody.val().length === 0) {
      event.preventDefault();
    }
  });

  formBody.on("input", (event) => {
    const body = encodeURIComponent(event.currentTarget.value);

    formLink.attr(
      "href",
      "mailto:info@ds-maleri.se?subject=" + subject + "&body=" + body
    );
  });
})();
