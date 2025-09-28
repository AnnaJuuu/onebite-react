// 1. Number Type : 정수, 실수, 음수 등 모두 포함. 사치연산 모두 지원. 
let inf = Infinity;
let mInf = -Infinity;
let nan = NaN;

// 2. String Type : "" or ''. (사용하지 않으면 변수명으로 인식) 문장열 값도 덧셈연산 지원 가능. 
let myname = "anna";
let myLocation = "목동";
let myinfo = myname + myLocation; 

let introduceText = `${myname}은 ${myLocation}`; //템플릿 리터럴 문법 
console.log(introduceText)

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type 아무것도 없음. 현재 이 변수는 아무값도 없다는 걸 개발자가 직접 입력함. 
let empty = null; 

// 5. Undefined Type : 초기화 하지 않았거나, 존재하지 않는 값을 호출할 때 나타남. 
