import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useRegister = () => {
  const navigate = useNavigate();
  const register = (user: { username: string; password: string; }) => {
    console.log("登録処理開始");
    const endpoint = "http://0.0.0.0:8000/users";
    const queries = { name: user.username, password: user.password };
    axios
      .post(endpoint, queries)
      .then((res) => {
        console.log(res.data);
        if (Object.keys(res.data).length > 0) {
          console.log("登録成功");
          navigate("/registersucceeded", { state: user });
        } else {
          console.log("登録失敗");
          navigate("/registerfailed", { state: user });
        }
      })
      .catch((e) => {
        console.log(e);
        navigate("/registerfailed", { state: user });
      });
  };
  return { register };
};
