declare const process: {
  env: {
    SECRET_KEY: string;
    PORT: number;
  };
};


declare module "express-session" {
  interface Session {
    isAuthorized?: boolean;
    isLoggedin?: boolean;
  }
}
export {};