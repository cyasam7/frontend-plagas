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
}
export function initAxios(){
    Axios.interceptors.request.use((config)=>{
        if(getToken()){
            config.headers.Authorization = `Bearer ${getToken()}`;
        }
        return config
    })
}