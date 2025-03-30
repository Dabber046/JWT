import { jwtDecode, JwtPayload } from 'jwt-decode';

class AuthService {
  getProfile() {
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  loggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string): boolean {
    try {
      const { exp } = jwtDecode<JwtPayload>(token);
      if (!exp) return true;
      return Date.now() >= exp * 1000;
    } catch {
      return true;
    }
  }

  getToken(): string {
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string): void {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout(): void {
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();
export type UserLogin = {
  email: string;
  password: string;
};
export type UserRegister = {
  email: string;
  password: string;
  name: string;
  phone: string;
  address: string;
  birthday: string; // YYYY-MM-DD
};
export type UserInfo = {
  email: string;
  name: string;
  phone: string;
  address: string;
  birthday: string; // YYYY-MM-DD
  role: string; // 'admin' | 'user'
  createdAt: string; // YYYY-MM-DD
  updatedAt: string; // YYYY-MM-DD
    id: string; // user ID        
  };