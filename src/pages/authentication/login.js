import { useState } from "react";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const logUserIn = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={logUserIn}>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter Username"
              className="input"
              value={username}
              onChange={({ target: { value } }) => setUsername(value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Enter password"
              className="input"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
          </div>
          <div className="btn-container">
            <button className="btn">Send me in</button>
          </div>
        </form>
        <a href="#forgot-password">Forgot Password</a>
      </div>
    </div>
  );
};

export default LoginScreen;
