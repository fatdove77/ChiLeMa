import axios from 'axios';


let baseUrl = "https://api.iyk0.com/shipu"

//获取菜品信息，默认选取第一页面
export function getCook(name,page=1){
    return axios.get(`${baseUrl}/?key=${name}&p=${page}`)
}