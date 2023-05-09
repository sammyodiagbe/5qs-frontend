import { createContext } from "react";
import { getAuthEndPoint } from "../helper/variables";
import axios from "axios";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const login = async (data) => {
    const url = getAuthEndPoint("login");
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

  const createAccount = async (data) => {
    const url = getAuthEndPoint("create-account");
    try {
      const createAcc = await axios.post(url, data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <authContext.Provider value={{ login }}>{children}</authContext.Provider>
  );
};

export default AuthContextProvider;
