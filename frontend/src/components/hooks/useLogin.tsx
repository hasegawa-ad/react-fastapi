import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useLogin = () => {
  const navigate = useNavigate();
  const login = (user: { username: string; password: string }) => {
    console.log("ログイン処理開始");
    const endpoint = "http://0.0.0.0:8000/users";
    const queries = { name: user.username, password: user.password };
    axios
      .get(endpoint, { params: queries })
      .then((res) => {
        console.log(res.data);
        if (Object.keys(res.data).length > 0) {
          console.log("ログイン成功");
          navigate("/home");
        } else {
          console.log("ログイン失敗");
          navigate("/loginfailed");
        }
      })
      .catch((e) => {
        console.log(e);
        navigate("/loginfailed");
      });
  };
  return { login };
};
