import { PostApi } from "../BaseApiMethods";

const LoginAPI = (loginForm:any) =>{
     return PostApi("user-auth/login",loginForm);
}

export {LoginAPI}