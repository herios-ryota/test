$(function () {
  var bgHeight = $('main').height();
  var imgHeight = $('.main').height();
  var imageHeight = $('.form').height();

  var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 3000,
      autoHeight: true,
      stopOnLastSlide: false,
      disableOnInteraction: false,
      reverseDirection: true
    },
    slidesPerView: 'auto',
    centeredSlides : true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  });

/* ハンバーガーボタンクリック時の操作 */
  /* index.html */
  $(".hamburger-btn").click(function () {
    if ($(window).scrollTop() < bgHeight - 50) {
      $(".bar").toggleClass("cross");
      $(".bar").toggleClass("black");
      $('.hamburger-btn__musk').fadeToggle(300);
      $(".header-list").toggleClass("slide");
      $("body").toggleClass("stop");
    } else {
      $(".bar").toggleClass("cross");
      $('.hamburger-btn__musk').fadeToggle(300);
      $(".header-list").toggleClass("slide");
      $("body").toggleClass("stop");
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() < imgHeight - 50) {
      $("#header").removeClass("bg");
    } else {
      $("#header").addClass("bg");
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() < imageHeight - 50) {
      $("#header-form").removeClass("bg");
    } else {
      $("#header-form").addClass("bg");
    }
  });

  AOS.init();

  /*入力アラート*/
  $(".alert").hide();
  $(".alert--maile").hide();
  $(".alert--text").hide();
  $(".alert--checkbox").hide();
  $(".message__inner--button").click(function () {
    if (!$(".hoge").val()) {
      $(".alert").show();
      sendFlag = false;
    } else {
      $(".alert").hide();
    }
    if (!$(".hoge2").val()) {
      $(".alert--maile").show();
      sendFlag = false;
    } else {
      $(".alert--maile").hide();
    }
    if (!$("textarea").val()) {
      $(".alert--text").show();
      sendFlag = false;
    } else {
      $(".alert--text").hide();
    }
    var chekboxChk = $('input[name="checkbox[]"]:checked').length;
    var sendFlag = true;
    if (chekboxChk < 1) {
      $(".alert--checkbox").show();
      sendFlag = false;
    } else {
      $(".alert--checkbox").hide();
    }
    if (sendFlag == false) {
      return false;
    }
  });

  /*スムーススクロール*/
  $('a').click(function () {
    var speed = 2000;
    var adjust= -94;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top+adjust;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

const mediaQuery = matchMedia('(min-width: 768px)');

