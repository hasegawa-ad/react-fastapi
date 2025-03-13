import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/auth/token";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        API_URL,
        new URLSearchParams({ username, password }),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );
      setToken(response.data.access_token);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Login failed", error.response || error.message);
      } else {
        console.error("Login failed", error);
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {token && <p>Token: {token}</p>}
    </div>
  );
}

export default App;
