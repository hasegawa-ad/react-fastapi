import { Link } from "react-router-dom";

const LoginFailed = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>ログイン失敗</h1>
      <Link to="/">ログイン画面へ戻る</Link>
    </div>
  );
};

export default LoginFailed;
