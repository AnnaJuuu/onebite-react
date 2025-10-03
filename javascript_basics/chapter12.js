// 1. 함수 표현식
function funcA() {
    console.log("funcA");
}

let varA = funcA; 
console.log(varA); // funcA 함수 자체가 출력이 됨 
varA(); // 변수의 이름으로 호출가능

// 함수를 만들자마자 변수에 담기 가능 
// 변수 이름으로 호출 : 익명함수라고 함
// 값으로 구현된것기 때문에 호이스팅의 대상이 아님 
let varB = function () { 
    console.log("funcB");
};

varB();

// 2. 화살표 함수 : function 지우고 () => {}
let varD = (value) => value + 1; // return 생략 

let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));