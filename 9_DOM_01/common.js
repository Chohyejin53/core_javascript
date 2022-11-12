// 시계가 표시되는 함수 선언 - 생각만 하고 있는 상태
function clock(){
    //문서객체선택 
    var time = document.querySelectorAll('.clock > h2');
    var date = document.querySelectorAll('.clock > h3');
    var weekday = document.querySelector('.clock > .weekday');
    

    //오늘을 담는 변수
    var today = new Date();

    //각각의 값을 담는 변수 
    var timeData = [today.getHours(), today.getMinutes(), today.getSeconds()];
    var dateData = [today.getFullYear(), today.getMonth()+1, today.getDate()];
    var day = today.getDay();

    //요일을 배열에 담기 
    var week = ['sun','mon','tues','wed','thurs','fri','satur'];


    //반복
    for(var i in timeData){

        //데이터가 10보다 작으면 앞에 0붙이기 
        if(timeData[i] < 10) {
            timeData[i] = '0' + timeData[i];
        }

        if(dateData[i] < 10) {
            dateData[i] = '0' + dateData[i];
        }

        time[i].textContent = timeData[i];
        date[i].textContent = dateData[i];
    }

    //요일 
    weekday.textContent = week[day] + 'day';
}
//초기실행 - 모든 데이터가 보이게 처리
clock();

//1초마다 - 데이터 변경되서 보이게 처리 
setInterval(clock,1000);