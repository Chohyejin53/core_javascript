//export 변수, 함수;

let num = 10;
let a = 20;
let b = 30;

export default a; //모듈당 하나밖에 사용이 불가능

export { b }; //위에서 a가 default를 사용했기 떄문에 default사용 불가

export { num }; //num이라는 값을 내보낼 값으로 지정 
                //위에서 선언한 것을 내보내기

export let str = '안녕하세요'; // 바로 export