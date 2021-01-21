"use strict";

function delay(atr,atr2){
  $(atr).each(function(){
    console.log(atr,atr2)
    var delay = 100;
    $(atr2).each(function(){
        console.log(delay,this)
        $(this).attr("data-aos-delay",delay);
        delay += 100;
    })
  })
}

$(".dev-item").attr("data-aos","zoom-in")
delay("ul",".dev-item")
$(".design-item").attr("data-aos","zoom-in")
delay("ul",".design-item")
$(".used-item").attr("data-aos","zoom-in")
delay("ul",".used-item")
$(".code-item").attr("data-aos","zoom-in")
delay("ul",".code-item")
$(".list-item").attr("data-aos","zoom-in")
delay("ul",".list-item")
$(".soc-item").attr("data-aos","zoom-in")
delay("ul",".soc-item")


$(".section-heading").attr("data-aos","fade-up")
$(".skills-heading").attr("data-aos","fade-down")

$(".screenshots img").attr({"data-aos":"zoom-in","data-aos-anchor-placement":"center-bottom"})
$(".description-title").attr({"data-aos":"fade-right"})
$(".description-buttons").attr({"data-aos":"zoom-in"})
$(".portfolio-description").attr({"data-aos":"fade-down"})
$(".experience-description").attr({"data-aos":"fade-down"})

function init_experience(){
  if( $(window).width() < 1000){
    $(".timeline-content").removeAttr("data-aos");
    $(".timeline-content").attr({"data-aos":"fade-right","data-aos-anchor-placement":"center-bottom"});
    $(".date").attr({"data-aos":"fade-right","data-aos-anchor-placement":"center-bottom"});
    $(".timeline-img").attr({"data-aos":"zoom-in"});
  }
  else{
    $(".timeline-content").removeAttr("data-aos data-aos-anchor-placement");
    $(".timeline-block:nth-child(odd) .timeline-content").attr({"data-aos":"fade-left"});
    $(".timeline-block:nth-child(odd) .date").attr({"data-aos":"fade-right","data-aos-duration":"500"});
    $(".timeline-block:nth-child(even) .timeline-content").attr({"data-aos":"fade-right"});
    $(".timeline-block:nth-child(even) .date").attr({"data-aos":"fade-left","data-aos-duration":"500"});
    $(".timeline-img").attr({"data-aos":"zoom-in"});
  }
}

init_experience();

$(window).resize(function(){
  init_experience();
  AOS.refreshHard();
})

AOS.init({
  duration: 1200,
})

$(document).ready(function() {

  function t() {
    $(".section").each(function() {
      var t = $('#dot-nav a[href="#' + $(this).attr("id") + '"]').data("number"),
        e = $(this).offset().top,
        n = $(window).height() / 2,
        o = $(window).scrollTop(),
        i = e - n < o,
        r = e + $(this).height() - n > o;
      i && r ? $("#dot-nav a").eq(t).addClass("is-selected") : $("#dot-nav a").eq(t).removeClass("is-selected")
    })
  }

  function e(t) {
    $("body, html").animate({
      scrollTop: t.offset().top + 50
    }, 500)
  }

  function n() {
    var t = window.innerWidth > 768,
      e = s.offsetTop - s.offsetTop / 4,
      n = window.scrollY > e,
      i = d.classList.contains("open");
    t && n ? a.classList.add("active") : t && i ? o() : a.classList.remove("active")
  }

  function o() {
    l.classList.toggle("active"), d.classList.toggle("open"), document.body.classList.toggle("noScroll")
  }

  function i() {
    this.parentElement.classList.add("is-active", "is-completed")
  }

  function r() {
    this.parentElement.classList.remove("is-active", "is-completed")
  }

  function c() {
    f.style.height = "", f.style.height = Math.min(f.scrollHeight, v) + "px"
  }
  t(), window.addEventListener("scroll", t), $(".scroll-down").on("click", function(t) {
    t.preventDefault(), e($(this.hash))
  }), $("#dot-nav a").on("click", function(t) {
    t.preventDefault(), e($(this.hash))
  }), $("#overlay a").on("click", function(t) {
    t.preventDefault(), e($(this.hash)), $("#toggle").click()
  });
  var a = document.querySelector("#dot-nav"),
    s = document.querySelector("#about-section"),
    l = document.querySelector("#toggle"),
    d = document.querySelector("#overlay");
  window.addEventListener("scroll", n), window.addEventListener("resize", n), l.addEventListener("click", o);
  var u = {
    Android: function() {
      return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i)
    },
    any: function() {
      return u.Android() || u.BlackBerry() || u.iOS() || u.Opera() || u.Windows()
    }
  };
  u.any() || skrollr.init({
    render: function(t) {},
    smoothScrolling: !1,
    forceHeight: !1
  });
  var h = document.querySelectorAll(".contact-input");
  h.forEach(function(t) {
    return t.addEventListener("focus", i)
  }), h.forEach(function(t) {
    return t.addEventListener("blur", r)
  });
  var f = document.querySelector("#message"),
    v = 300;
  f.addEventListener("input", c)
});
