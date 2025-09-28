// 1. 변수 : 초기화 되지 않은 변수도 선언가능. (undefined)
let age = 27;
console.log(age);

age = 30;
console.log(age);

// 2. 상수 : 초기화 필수. 한번 저장하면 변경할 수 없음. 
const birth = "1999.10.10";
console.log(birth);

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. 변수 명은 $,_ 재외한 기호는 사용할 수 없음.
let $_name = "$_사용 가능"
console.log($_name);

// 3-2. 숫자로 시작할 수 없음. 
let name2 = "숫자로 시작할 수 없다."
console.log(name2);

// 3-3. 예약어를 사용할 수 없음. 
// let let = "12"
 
// 4. 변수 명명 가이드 (누가봐도 이해가능한 변수명으로 명명)
let a = 1; // a -> salesCount 
let b = 1; // b -> refundCount 
let c = a - b; // c -> totalSalesCount 