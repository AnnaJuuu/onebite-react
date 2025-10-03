// 스코프
// -> 전역 스코프 / 지역 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);

  function funB() {} // 지역 스코프
}

funcA();
// console.log(b); // -> b is not defined

if (true) {
  let c = 1; // 지역 스코프 
}
// console.log(c); // -> c is not defined

for (let i = 0; i < 10; i++) { // (지역 스코프)
  let d = 1; // 지역 스코프 
}
// console.log(d); // -> d is not defined

// funcB(); // -> funcB is not defined

// 조건문 or 반복문 안에 있는 함수는 지역 스코프가 아니다. 