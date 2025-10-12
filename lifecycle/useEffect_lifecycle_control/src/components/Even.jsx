import { useEffect } from "react";

// 3.Unmount
const Even = () => {
  useEffect(() => {
    // useEffect의 콜백함수가 반환하는 함수를 클린업, 정리함수라고 함.
    // 정리함수는 useEffect가 끝날 때 실행이 된다.
    return () => {
      console.log("unmout");
    };
  }, []);
  return <div>짝수입니다!</div>;
};

export default Even;
