import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./pages/authentication/login";
import Signup from "./pages/authentication/signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" Component={() => <LoginScreen />} />
          <Route path="/signup" Component={() => <Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
