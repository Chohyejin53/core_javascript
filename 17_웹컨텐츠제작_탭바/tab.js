//1. 문서객체 선택 
const btn = document.querySelectorAll('.tabbox .tabbtn a');
const contents = document.querySelectorAll('.tabbox .contents_wrap > div');

//2. 초기실행 - 첫번째 버튼과 컨텐츠가 활성/보이게 처리 
btn[0].classList.add('active');
contents[0].style.display = 'block';
//3.클릭이벤트 
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click', function(e){
        //a링크 클릭시 페이지 최상단으로 가는 것 방지
        //e : 이벤트 객체 - 이벤트 발생시 생기는 정보를 담는 객체
        e.preventDefault(); //기본메서드제거 - #임시링크 클릭시 페이지 상단으로 가는 기본 이벤트 제거

        //모든 버튼의 클래스 제거 
        for(let j=0; j<btn.length; j++){
            btn[j].classList.remove('active');
            contents[j].style.display = 'none'; //컨텐츠 모두 안보이게 처리
        }

        //클릭한 버튼에  active 클래스 추기
        this.classList.add('active');

        //클릭한 버튼과 배열과 배열번호가 같은 컨텐츠만 보이게 처리
        contents[i].style.display = 'block';
    });
}