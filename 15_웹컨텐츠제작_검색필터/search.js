//1. 문서객체선택
const input = document.getElementById('coffeeSearch');
const ul = document.getElementById('coffeeMenu');
const li = ul.getElementsByTagName('li'); // 복수로 모든 li 태그
const coffeeName = document.getElementById('coffeeName');
const coffeePrice = document.getElementById('coffeePrice');


//2. 키보드 이벤트 - input에서 검색한 리스트가 보이게 처리
input.addEventListener('keyup',function(){
    //6개의 a태그의 글자를 검색 
    for(let i=0;i<li.length;i++){
        const a = li[i].firstElementChild;

        //공백이 없을 때만 처리, 공백이 있을 때는 모두 안보이게 처리 
        if(input.value !=''){
            //indexOf() : 문자열 객체의 지정한 값이 처음 나타나는 인덱스번호 반환
            //            만약 일치하는 겂이 없으면 -1을 반환
            
            //a태그의 문자열 중 입력사아즈이 문자와 일치하는 값이 있다면
            if(a.textContent.indexOf(input.value) > -1){
                li[i].style.display = 'block';
            } else {
                li[i].style.display = 'none';
            }
        } else { //공백일 때
            li[i].style.display = 'none';
        }
    }
});


// 3. 클릭이벤트 - li태그 다 안보이게 처리, 커피명과 금액을 반환
for(let i=0;i<li.length;i++){
    const a = li[i].firstElementChild;
    a.addEventListener('click', function(){
        //dataset속성: 태그의 사용자 정의속성값을 반환

        coffeeName.textContent = this.textContent;
        coffeePrice.textContent = this.dataset.price;


        //리스트 안보이게 처리 - 모두 안보이게 처리하기 위해 반복문 작성
        for(let j=0;j<li.length;j++) {
            li[j].style.display = 'none';
        }

        //입력상자의 값을 공백으로 비워두게 처리
        input.value = '';
    });


}

