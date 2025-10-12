const Button = ({ children, text, color = "black" }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      // 실질적으로 처리하는 함수 -> 이벤트 핸들러
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
