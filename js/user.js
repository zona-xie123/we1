$(document).ready(function () {
  AOS.init();
  $('.scroll-down').click(function () {
    $("html,body").animate({
      scrollTop: $("#join").offset().top - 150
    }, 500);
  })


  //錨點
  $('.main-nav ul.anchor li a').click(function () {

    //Animate
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 90
    }, 400);
    return false;
  });

  //動態連結
  if ($(window).width() < 800) {
    $('.jq_btn').attr('href', 'https://esb.page.link/eFingo-web');
  } else {
    $('.jq_btn').attr('href', 'https://reurl.cc/E7dbZv');
  }

})

