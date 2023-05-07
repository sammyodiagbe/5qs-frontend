import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const createUserAccount = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Create Account</h2>
        <form onSubmit={createUserAccount}>
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
              type="email"
              placeholder="Enter email"
              className="input"
              value={email}
              onChange={({ target: { value } }) => setEmail(value)}
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

export default Signup;
