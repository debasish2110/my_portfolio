$(document).ready(function () {
  var scrollLink = $('.scroll');

  //Smooth Scrolling
  scrollLink.click(function (event) {
    event.preventDefault();
    $('body,html').animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      1000
    );
  });

  //Active Link Switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      if ($(this.hash).offset()) {
        var sectionOffset = $(this.hash).offset().top - 20;
      }
      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
});

window.onscroll = function () {
  stickToTop();
};

var navbar = document.getElementById('navbarNav');
var sticky = navbar.offsetTop;

function stickToTop() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
