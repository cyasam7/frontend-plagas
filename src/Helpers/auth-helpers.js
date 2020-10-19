import Axios from 'axios';
const TOKEN_URI = "TOKEN";
export function setToken(data){
    sessionStorage.setItem(TOKEN_URI,data);
}
export function getToken(){
    return sessionStorage.getItem(TOKEN_URI);
}
export function deleteToken(){
    sessionStorage.removeItem(TOKEN_URI);
    sessionStorage.clear();
}
export function initAxios(){
    /* Axios.defaults.baseURL = "https://157.245.242.243:4000/"; */
    Axios.defaults.baseURL = "https://control-plagas-laurel-api.vercel.app";
    Axios.interceptors.request.use((config)=>{
        if(getToken()){
            config.headers.Authorization = `Bearer ${getToken()}`;
        }
        return config
    })
}