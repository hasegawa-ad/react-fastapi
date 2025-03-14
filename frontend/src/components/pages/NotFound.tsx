import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - ページが見つかりません</h1>
      <p>申し訳ありませんが、お探しのページは存在しません。</p>
      <Link to="/">ログイン画面へ戻る</Link>
    </div>
  );
};

export default NotFound;
