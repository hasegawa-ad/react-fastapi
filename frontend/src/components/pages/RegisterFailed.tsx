import { Link } from "react-router-dom";

const RegisterFailed = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>登録失敗</h1>
      <p>既にアカウントが登録されています。</p>
      <Link to="/">ログイン画面へ戻る</Link>
    </div>
  );
};

export default RegisterFailed;
