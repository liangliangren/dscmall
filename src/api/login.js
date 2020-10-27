import ajax from "./ajax"

//定义一个全局变量--全局路径
const Base_URL = "http://192.168.0.161:3000/api"

export const loginuser = (user_name, pass, captcha) => ajax(Base_URL + "/v1/users/login", { user_name, login_password: pass, captcha }, "post")
