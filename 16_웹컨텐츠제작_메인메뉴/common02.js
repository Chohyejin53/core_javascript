//1. 문서객체선택 
const mainnav = document.querySelectorAll('#gnb .mainnav');
const subnav = document.querySelectorAll('#gnb .subnav');

//2. 마우스이벤트 - 메인메뉴에 마우스를 올렸을 때 활성
for(let i=0; i<mainnav.length; i++){
    mainnav[i].addEventListener('mouseenter',function(){
        this.nextElementSibling.classList.add('active');

        //부모인 li태그에서 마우스가 벗어났을 때 비활성 
        this.parentNode.addEventListener('mouseleave',function(){
            //this : 부모인 li태그
            this.firstElementChild.classList.remove('active');
            this.lastElementChild.classList.remove('active');
        });
    });


    //3.웹접근성
    //3-1. 각각의 메인메뉴에 초점받으면, 활성화 
    mainnav[i].addEventListener('focus',function(){
        //모든 것은 비활성화 후 
        //모든 하위메뉴의 a태그에 초점 비활성화
        for(let j=0; j<mainnav.length; j++){
            mainnav[j].classList.remove('active');
            subnav[j].classList.remove('active');

            const a = subnav[j].getElementsByTagName('a');
            for(let k=0; k<a.length; k++){
                a[k].setAttribute('tabindex','-1'); //초점받지못하게 처리
            }
        }

        //초첨받은 대상만 활성
        this.classList.add('active');
        this.nextElementSibling.classList.add('active');


        //초점받은 메인메뉴의 하위메뉴 a만 초점 활성
        const activeLink = this.nextElementSibling.getElementsByTagName('a');
        for(let j=0; j<activeLink.length; j++){
            activeLink[j].setAttribute('tabindex',0); //초점 활성
        }
    });
}

//3-2. 첫번째 메인메뉴에서 shift+tab 누르면 비활성화
mainnav[0].addEventListener('keydown',function(e){
    if(e.keyCode == 9) {
        if(e.shiftKey){
            this.classList.remove('active');
            this.nextElementSibling.classList.remove('active');
        }
    }
});

//3-3. 마지막 하위메뉴 a태그에서 tab키를 눌렀을 때 비활성
const lastNum = subnav.length -1;
const subnavLast = subnav[lastNum].lastElementChild.firstElementChild;
subnavLast.addEventListener('keydown',function(e){
    if(e.keyCode == 9) {
        if(!e.shiftKey){
            mainnav[lastNum].classList.remove('active');
            subnav[lastNum].classList.remove('active');
        }
    }
});
