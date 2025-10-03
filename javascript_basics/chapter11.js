// 함수
let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅 -> 끌어올리다 라는 뜻
// 그래서 먼저 호출하고 후 선언해도 가능 
function getArea(width, height) {
  function another() { // 중첩 함수
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}