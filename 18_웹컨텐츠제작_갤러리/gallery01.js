//1. 문서객체 선택
const list = document.querySelectorAll('#gallery #photo li');
const pagination = document.getElementById('pagination');

//2. button 태그를 문자열로 담을 변수 선언
let btnTag = '';

//3. li태그 개수만큼 반복해서 담기 
for(let i=0;i<list.length;i++){
    btnTag += '<button>' + (i + 1) + '</button>';
}


//4. pagination - 문자열로 처리 
pagination.innerHTML = btnTag;

// const btn = document.querySelectorAll('#pagination button'); //동적생성된 pagination으로부터 선택 
const btn = pagination.getElementsByTagName('button'); //객체생성한 곳으로부터 선택

//5. 초기실행 - 첫번째 버튼/사진 활성
btn[0].classList.add('active');
list[0].classList.add('active');


//6. 클릭이벤트
for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click',function(){
        //모든버튼 활성 제거, 모든 li태그 비활성
        for(let j=0; j<btn.length; j++){
            btn[j].classList.remove('active');
            list[j].classList.remove('active');
        }
        this.classList.add('active');
        list[i].classList.add('active');
    });
}