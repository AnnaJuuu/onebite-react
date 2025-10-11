import "./Main.css";

const Main = () => {
  const user = {
    name: "anna",
    isLogin: true,
  };

  // return <main>{user.isLogin ? <div>로그아웃</div> : <div>login</div>}</main>;

  if (user.isLogin) {
    return <div className="logout">logout</div>;
  } else {
    return <div>login</div>;
  }
};

export default Main;
