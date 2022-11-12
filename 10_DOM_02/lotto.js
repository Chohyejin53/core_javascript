//1. 문서객체 선택 
var lottoNum = document.querySelectorAll('.winningNumber > span');
var bonusNum = document.querySelector('.bonus')

//로또번호를 담을 배열 변수 - 7자리 받기 
var lotto = [];
for(var i=0; i<7;i++) {
    var num = Math.floor(Math.random() * 44) + 1;

    
    //같은 번호면 다시 나오게 처리 
    for( var j in lotto) {
        while(num == lotto[j]) {
            var num = Math.floor(Math.random() * 44) + 1;
        }
    }

   //베열에 숫자를 마지막 값으로 추가  //push 위치 주의하기!!! 
    lotto.push(num);
}



//보너스 번호 빼기 
var bonus = lotto.pop(); //마지막 값 빼서 담기 
bonusNum.textContent = bonus; //문서 객체의 텍스트 컨텐츠에 넣기 

//나머지 로또 번호를 오름차순으로 정렬 
lotto.sort(function(left, right){
    return left - right;
});





//숫자에 따라서 색상이 달라짐 
var bgColor = ['#fbc400','#69c8f2','#ff7272','#aaa','#b0d840',];

//색상변화는 보너스번호에도, 각각숫자에도 들어가야함. => 2번코드실행
function colorChange(number, obj){ //함수선언 - 생각만하고있는 상태
    if(number >= 1 && number<= 10) {
        obj.style.background = bgColor[0];
    }   else if(number >= 11 && number <=20) {
        obj.style.background = bgColor[1];
    }   else if(number >= 11 && number <=30) {
        obj.style.background = bgColor[2];
    }   else if(number >= 11 && number <=40) {
        obj.style.background = bgColor[3];
    }   else {
        obj.style.background = bgColor[4];
    }
}


//초기실행 호출 - 보너스 번호색상 지정 
colorChange(bonus,bonusNum);


//for in 문 쓰면 노드 관련으로 에러발생 - for문으로 작성 
for( var i=0; i<lottoNum.length;i++) {
    lottoNum[i].textContent = lotto[i];

    //색상지정함수 호출 
    colorChange(lotto[i],lottoNum[i]);
}