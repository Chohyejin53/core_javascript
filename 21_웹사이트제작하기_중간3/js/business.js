//변수가 겹치지않도록 지역변수 활용
oncBusinessTab = () => {
    //1. 문서객체선택
    const btn = document.querySelectorAll('.tabArea .btn li');
    const contents = document.querySelectorAll('.tabArea .contentsWrap > div');
    //2.초기실행 - 첫번째 버튼과 첫번째 컨텐츠 보이게 처리
    btn[0].classList.add('active');
    contents[0].style.display = 'block';

    //클릭이벤트
    for(let i=0;i<btn.length;i++){
        btn[i].addEventListener('click', function(e){
            e.preventDefault(); 

            for(let j=0; j<btn.length; j++){
                btn[j].classList.remove('active');
                contents[j].style.display = 'none'; 
            }

            this.classList.add('active');
            contents[i].style.display = 'block';
        });
    }
}

oncBusinessTab();