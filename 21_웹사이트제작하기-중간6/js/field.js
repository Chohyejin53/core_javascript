//다른 프로그램과 겹치는 것을 막기위해 함수 선언 - 지역변수 처리
export const oncFieldSwiper = () => { //함수 선언 - 생각만하고 있는 상태
    const swiper = new Swiper("#field .swiper", {
        navigation: {
          nextEl: "#field .swiper-button-next",
          prevEl: "#field .swiper-button-prev",
        },
        loop: true, //무한반복
      });
}

// oncFieldSwiper(); //함수 실행