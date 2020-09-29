import Axios from 'axios';
const TOKEN_URI = "TOKEN";
export function setToken(data){
    localStorage.setItem(TOKEN_URI,data);
}
export function getToken(){
    return localStorage.getItem(TOKEN_URI);
}
export function deleteToken(){
    localStorage.removeItem(TOKEN_URI);
    localStorage.clear();
}
export function initAxios(){
    Axios.defaults.baseURL = "http://157.245.242.243:4000/";
    /* Axios.defaults.baseURL = "http://localhost:4000/"; */
    Axios.interceptors.request.use((config)=>{
        if(getToken()){
            config.headers.Authorization = `Bearer ${getToken()}`;
        }
        return config
    })
}