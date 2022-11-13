//버튼을 클릭하면 버튼 자신에게 active 클래스 추가 혹은 제거하시오.

// 1. 문서객체 선택
const fsBtn = document.getElementById('fsBtn');

// 2. 클릭이벤트 처리 
fsBtn.addEventListener('click',function(){
    this.classList.toggle('active');


    //active클래스를 받았다면, a태그가 초점을 받고, 그렇지않다면 초점받지않게 처리

    //setAttribute('속성명',값) : 문서객체의 태그속성을 변경
    //contains('클래스명') : 해당 클래스를 갖고 있으면 true반환, 그렇지않으면 false반환

    //a태그를 문서객체로 선택 - 복수로 전부 선택
    const activeLink = this.nextElementSibling.getElementsByTagName('a');
    
    //클래스 유무여부 
    const has = this.classList.contains('active');

    // console.log(has);

    if(has) { //active클래스를 갖고 있다면,
        for(let i=0;i<activeLink.length;i++){ //for in 문은 여백도 모두 포함시켜 for문으로 작성!!
            activeLink[i].setAttribute('tabindex',0);
        } 
    } else {
        for(let i=0;i<activeLink.length;i++){ //for in 문은 여백도 모두 포함시켜 for문으로 작성!!
            activeLink[i].setAttribute('tabindex',-1);
        } 
    }
});

// 3. 키보드 이벤트 (웹접근성)
// 리스트의 마지막 a태그에서 키보드를 눌렀을 때, tab키일 때, active클래스 제거

let lastLink = fsBtn.nextElementSibling.lastElementChild.firstElementChild;

lastLink.addEventListener('keydown', function(e){
    if(e.keyCode == 9){ //tab키를 눌렀을 때 
        if(!e.shiftKey){ //shift키는 안눌렸다면,
            fsBtn.classList.remove('active'); //버튼의 active클래스 제거

            //모든 a태그를 다시 선택 

            const activeLink = this.parentNode.parentNode.getElementById('a');

            for(let i=0;i<activeLink.length;i++){ 
                activeLink[i].setAttribute('tabindex',-1);
            } 
        }

    }
});

