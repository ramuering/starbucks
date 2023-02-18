const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  //Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  //Logic..
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배지 숨기기
      //gsap.to( 요소, 지속시간(초단위), 옵션 );
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      //버튼 보이기
      gsap.to(toTopEl, 2, {
        x: 0,
      });
    } //배지 보여주기
    else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      //버튼 숨기기
      gsap.to(toTopEl, 2, {
        x: 100,
      });
    }
  }, 300)
);
//_.throttle(함수, 반복실행시간(ms단위))

toTopEl.addEventListener("click", function () {
  gsap.to(window, 1, {
    scrollTo: 0,
  });
});
//VISUAL

const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

//SWIPER
//new Swiper(css선택자(문자데이터형태), 옵션(객체) );
new Swiper(".notice-line .swiper-container", {
  direction: "vertical", //세로방향
  autoplay: true, //자동재생
  loop: true, //반복재생
});

new Swiper(".promotion .swiper-container", {
  //direction: 'horizontal', 기본값으로 가로모드 지정되어 있음
  slidesPerView: 3, //한번에 보여줄 슬라이스 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000, //ms단위=5s
  },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
    clickable: true, //사용자의 페이지 번호 요소 제어(클릭가능여부)
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  //direction: 'horizontal' 수평슬라이더로 지정, 기본값이므로 지정할 필요X
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

//toggle
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(" .toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion; //클릭시 False를 True값으로 변경
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

//범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  //`.toFixed()`를 통해 반환된 문자 데이터를,
  //`parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (min - max) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
  //gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    {
      //옵션
      y: size, //y축으로 움직이는 수치
      repeat: -1, //무한반복
      yoyo: true, //한번 재생 된 애니메이션을 다시 뒤로 재생
      ease: Power1.easeInOut, //움직임을 제어
      delay: random(0, delay), //지연시간(초단위)
    }
  );
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    //Scene:특정한 요소를 감시하는 역할 메소드(움직임)
    triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
    triggerHook: 0.8, //감시하고 있는 요소가 뷰포트의 어느 위치에서 감지 되었는지 판단
  })
    .setClassToggle(spyEl, "show") //화면에 보여진다고 판단될 시 실행
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
