// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// math 모듈을 대표하는 단 하나의 기본 값이 됨. 
// 동일 경로로부터 값을 불러오는 여러 개의 임포트문은 한 줄에
export default function multiply(a, b) {
  return a * b;
}