export const oncscrollTop = () => { //함수를 선언만 함 
    //문서객체 선택
    const btn = document.querySelector('#scrollTop a');

    //scroll이벤트에서 제거할 수 있게 처리 
    let upper;

    //스크롤이벤트
    window.addEventListener('scroll', function(){
        //윈도우의 스크롤 바 상단 좌표가 각각 타이틀이 보일 때를 지났을 때, 각각 타이틀에 active 클래스 추가

        const top = window.scrollY; //세로크스롤바의 상단좌표를 반환 
        // console.log(top);

        if(top == 0) {
            clearInterval(upper);
        }

        if(top > 200) {
            btn.parentNode.style.display = 'block';
        } else {
            btn.parentNode.style.display = 'none';
        }
    });

    //버튼 클릭 이벤트 
    btn.addEventListener('click', function(e){
        e.preventDefault(); //상단으로 올라가는 기본이벤트 제거 

        // 최신브라우저는 모두 사용 가능
        // window.scrollTo({
        //     top: 0,
        //     behavior: 'smooth'
        // });

        //천천히 이동되게 강제 발생
        upper = setInterval(function(){
            scrollBy(0,-45); //scrollTo는 절대적 이동 scrollBy는 상대적이동
        }, 10);
    });
}

// oncscrollTop(); //함수 실행