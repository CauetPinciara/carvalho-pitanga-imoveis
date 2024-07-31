// src/utils/auth.ts
import axios from "axios";
import Cookies from "js-cookie";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post("http://localhost:1338/api/auth/local", {
      identifier: email,
      password: password,
    });

    const { jwt, user } = response.data;

    // Armazena o token JWT nos cookies
    Cookies.set("token", jwt, { expires: 7 });

    return user;
  } catch (error) {
    throw new Error("Invalid credentials");
  }
};

export const logout = () => {
  Cookies.remove("token");
};

export const getToken = () => {
  return Cookies.get("token");
};
