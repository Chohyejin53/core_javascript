// 1. 문서객체 선택 - 움직일 객체 - ul
const noticeList = document.querySelector('#noticeList');

//2. 초기실행 나타나게 처리 + 첫번째 a태그가 초점 받게 처리
noticeList.classList.add('active');
noticeList.firstElementChild.firstElementChild.setAttribute('tabindex',0);

//3. 3초마다 다음 순번으로 변경
setInterval(function(){
    //다시 안보이게 처리 - active클래스제거
    noticeList.classList.remove('active');

    //초점 받는 것을 모두 제거 
    const activeLink = noticeList.getElementsByTagName('a');

    for(let i=0;i<activeLink.length;i++){
        activeLink[i].setAttribute('tabindex','-1');
    }

    //다시 보이게 처리
    setTimeout(function(){
        //.appendChild() - 문서객체의 마지막 자손으로 추가(이동 - 미리 정적 생성이 되어있는 객체는 이동처리)
        noticeList.appendChild(noticeList.firstElementChild);
        noticeList.firstElementChild.firstElementChild.setAttribute('tabindex','0');
        noticeList.classList.add('active');
    },100);
}, 3000);