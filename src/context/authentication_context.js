import { createContext } from "react";
import { getAuthEndPoint } from "../helper/variables";
import axios from "axios";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const login = async (data) => {
    const url = getAuthEndPoint("login");
    console.log(url);
    try {
      const login = await axios.post(
        "http://localhost:8080/api/5words/v1/auth/login",
        data
      );
      console.log(login.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <authContext.Provider value={{ login }}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
