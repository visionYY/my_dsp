import axios from "axios";
import Vue from "vue";

//创建一个新的实例
let instance = axios.create({
    headers:{
        // "planform":"PC",
        //"browser":"google"
    },
    baseURL:"http://localhost:9000"
})

//请求拦截
instance.interceptors.request.use((config)=>{
    //console.log(config)
    return config
},(err)=>{
    return Promise.reject(err)
})

//响应拦截
instance.interceptors.response.use((response)=>{
    if(response.status==200){
        return response.data
    }else{
        //console.log(response)
        return Promise.reject({
            status:response.status
        })
    }
},(err)=>{
    return Promise.reject(err)
})

//挂载
//Vue.prototype.$http = instance 
Object.defineProperty(Vue.prototype,"$http",{
    value:instance
    /* value:1511,
    enumerable:true //不可枚举的变为可枚举的 */
})
//console.log(Object.keys(O))

export default instance

//接口请求
export function login(loginInfo){
    return new Promise((resolve,reject)=>{
        instance.post("/dsp-admin/user/login",loginInfo).then(res=>{
            resolve(res)
        })
    })
}