//main 함수선언 - 다른 프로그램과 변수가 겹치는 것을 방지하기 위해
oncMainSwiper = () => {
    //1. 문서객체 선택
    const main = document.querySelector('#mainSlider');


    //2. 풀페이지 처리
    fullPage = () => { //초기실행과 resize시 명령이 2번 발생
        const h = window.innerHeight;
        main.style.height = h + 'px';
    }

    fullPage(); // 초기실행 
    window.addEventListener('resize', fullPage); //


    const swiper = new Swiper("#mainSlider .swiper", {
        navigation: {
            nextEl: "#mainSlider .swiper-button-next",
            prevEl: "#mainSlider .swiper-button-prev",
        },
        loop: true, //무한 루프
        autoplay: {
            delay: 8000, //슬라이드가 보여지는 시간
            disableOnInteraction: false,
          },
          pagination: {
            el: "#mainSlider .swiper-pagination",
            clickable: true,
          },
          effect: "fade",
    });
}

oncMainSwiper();

