// types.ts

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
  