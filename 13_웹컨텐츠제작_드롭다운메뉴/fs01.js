//버튼을 클릭하면 버튼 자신에게 active 클래스 추가 혹은 제거하시오.

// 1. 문서객체 선택
const fsBtn = document.getElementById('fsBtn');

// 2. 클릭이벤트 처리 
fsBtn.addEventListener('click',function(){
    this.classList.toggle('active');
});


//웹접근성 - 키보드 접근성 
//tab : 초점의 정방향 
//shift + tab키 : 초점의 역방향

//초점을 받는 태그 : a, button, select, input, textarea

// 3. 리스트의 마지막 a태그에서 키보드를 눌렀을 때, tab키일 때, active클래스 제거
// 버튼의 동생의 마지막자손의 첫번째 자손
const lastLink  = fsBtn.nextElementSibling.lastElementChild.firstElementChild;

// 4. 키보드 이벤트 - shift키 눌렸는지 확인해야 해서 keydown이벤트 처리
lastLink.addEventListener('keydown', function(e){
    // e : 이벤트 객체 - 눌린 키의 정보를 담는 객체
    //탭키의 키코드 : 9
    //shiftKey : shift키가 눌렸다면 true를 반환, 그렇지않으면 false를반환

    if(e.keyCode == 9){ //tab키를 눌렀을 때 
        if(!e.shiftKey){ //shift키는 안눌렸다면,
            fsBtn.classList.remove('active'); //버튼의 active클래스 제거
        }

    }
});


//ios에서 windowopen을 막고있어 select 태그말고 드롭다운 메뉴로 사용해야함 