//1. 문서객체선택 
const gnb = document.getElementById('gnb');
const mainnav = gnb.getElementsByClassName('mainnav');
const subnav = gnb.getElementsByClassName('subnav');

//2. subbg를 동적생성
const subbg = document.createElement('div');
subbg.setAttribute('id','subbg');

gnb.appendChild(subbg); //gnb의 마지막 자손으로 처리


//3. 이벤트로 받는 동일 명령이 많음 - 함수에 담기
activeFx = () => { //활성 함수
    //subbg보이게 처리 
    subbg.classList.add('active');

    for(let i=0; i<subnav.length; i++){
        subnav[i].classList.add('active');
    }
}

unactiveFx = () => { //비활성 함수
    //subbg보이게 처리 
    subbg.classList.remove('active');

    for(let i=0; i<subnav.length; i++){
        subnav[i].classList.remove('active');
    }

    //메인메뉴 활성 제거 
    mainnavDefault();
}

mainnavDefault = () => {
    for(let j=0; j<mainnav.length;j++){
        mainnav[j].classList.remove('active');
    }

}

//4. 마우스 이벤트
//4-1.mouseenter 
gnb.addEventListener('mouseenter',activeFx);
//4-2.mouseleave
gnb.addEventListener('mouseleave',unactiveFx);

//5.웹접근성 - 키보드 접근성 
//5-1.첫번째 메인메뉴에 초점받았을때
mainnav[0].addEventListener('focus',activeFx);

//5-2. 모든 메인메뉴에 초점을 받으면 해당 메뉴 활성
for(let i=0;i<mainnav.length; i++){
    mainnav[i].addEventListener('focus',function() {
        mainnavDefault(); //전부제거 후
        this.classList.add('active'); //이벤트대상만 active처리
    });
}

//5-3. 마지막 하위리스트의 a태그에서 탭키를 눌렀을 때 모든 것이 비활성화
const lastNum = subnav.length -1; // subnav의 수에서 마지막 인덱스 번호 
const lastLink = subnav[lastNum].lastElementChild.firstElementChild;

lastLink.addEventListener('keydown',function(e){    
    if(e.keyCode == 9){ //tab키를 눌렀을 때
        if(!e.shiftKey) { //shift키는 누르지않았다면
            unactiveFx(); //콜백함수자리에서 사용하는것아니기때문에 괄호꼭!해주기!
        }
    } 
});

//5-4. 첫번째 메인메뉴에서 shift+tab키를 눌렀을 때 모두 비활성화
mainnav[0].addEventListener('keydown',function(e){
    if(e.keyCode == 9){ //tab키를 눌렀을 때
        if(e.shiftKey) { //shift키는 누르지않았다면
            unactiveFx(); 
        }
    } 
})

//5-5. 각각 하위 메뉴의 마지막 a태그에 초점을 받았을 때 해당 메인 메뉴 활성
for(let i=0; i<subnav.length; i++){
    const a = subnav[i].lastElementChild.firstElementChild;
    a.addEventListener('focus', function(){
        mainnavDefault(); //모든 메인메뉴 active 제거 후 
        this.parentNode.parentNode.previousElementSibling.classList.add('active');
    });
}