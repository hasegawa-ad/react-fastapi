import { useState } from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const { login } = useLogin();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onClickLogin = () => {
    login(user);
  };

  return (
    <>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">ログイン画面</Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            name="username"
            label="名前"
            id="username"
            onChange={handleChange}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={onClickLogin}
          >
            ログイン
          </Button>
          <Link to="/register">新規登録はこちら</Link>
        </Box>
      </Container>
    </>
  );
};

export default Login;
