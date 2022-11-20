//1. 문서객체 선택
const list = document.querySelectorAll('#gallery #photo li');
const pagination = document.getElementById('pagination');

//2. button 동적생성
let btnTag = '';  // btnTag 생성하기
for(let i=0; i<list.length; i++){
    btnTag += '<button>'+ (i + 1) +'</button>';
}

pagination.innerHTML = btnTag;

const btn = pagination.getElementsByTagName('button');

//3. ul태그의 폭을 설정 : li개수 * li 한 개의 폭
const ul = list[0].parentNode;

//ClientWidth : 폭 + 패딩 
ul.style.width = ( list.length * list[0].clientWidth ) + 'px';


//4. 초기실행 - 첫번째 버튼 활성 
btn[0].classList.add('active');

//5. 버튼클릭이벤트 
for(let i =0; i<btn.length; i++){
    btn[i].addEventListener('click',function(){
        //모든 버튼 활성 제거 
        for(j=0; j<btn.length; j++){
            btn[j].classList.remove('active');
        }
        this.classList.add('active');

        //첫번째 li가 보이는 것은 - left : -li의 폭 * 0  = 0
        //두번째 li가 보이는 것은 - left : -li의 폭 * 1  = -500
        //세번째 li가 보이는 것은 - left : -li의 폭 * 2  =  -1000

        ul.style.left = -(list[0].clientWidth * i) + 'px';
    });
}