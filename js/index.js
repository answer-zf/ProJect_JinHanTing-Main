//首页 ==>产品部分轮播
window.onload = function () {
  jQuery("#feature_silder").slide({
    mainCell: ".bd ul",
    effect: "topLoop",
    autoPlay: true,
    triggerTime: 0,
    interTime: 5000,
    delayTime: 1000
  });
// 手机兼容的产品轮播
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });
};


//首页导航效果
$(document).on("mousewheel DOMMouseScroll", function (e) {
  var delta =
    (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
    (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
  s = $(window).scrollTop();
  if (s != 0) {
    $(".nav-zf").addClass("nav_box"); //滚动条样式
  }
  if (delta > 0) {
    // 向上滚
    $(".nav-zf").fadeIn(400); //导航条显示
    $(".nav-zf").addClass("nav_box");
    if (s == 0) {
      $(".nav-zf").removeClass("nav_box");
    }
  } else if (delta < 0) {
    // 向下滚
    $(".nav-zf").fadeOut(700); //导航条隐藏
  }
});


