import { UserLogin } from '../utils/types';

// Removed unused import for UserRegister
const login = async (userInfo: UserLogin) => {
  const response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};
const register = async (userInfo: UserRegister) => {
  const response = await fetch("/api/register", {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};
const logout = async () => {
  const response = await fetch("/api/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
}
const getUserInfo = async () => {
  const response = await fetch("/api/user", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
}
const authAPI = {
  login,
  register,
  logout,
  getUserInfo,
};
export default authAPI;
export type UserRegister = {
  email: string;
  password: string;
  name: string;
  phone: string;
  address: string;
  birthday: string; // YYYY-MM-DD
};