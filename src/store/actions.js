import {login,list} from "../utils/request"
let actions = {
    getToken({commit},{data,notify,router}){
        login(data).then((data)=>{
            console.log(data)
            if(data.success==0){
                commit('saveToken',data.token)
                commit('saveUser',data.user.name)
                sessionStorage.setItem('token',data.token)
                notify({
                    title:"登录成功",
                    message: '用户名和密码匹配',
                    type: 'success'
                })
                router.push({
                    path:"/home"
                })
            }else{
                notify({
                    title:"登录出错",
                    message: '用户名和密码错误',
                    type: 'error'
                })
            }
           
        })

    },
    getList({commit}){
        list().then((data) => {
            commit('xttList',data.list)
        })
    }
}

export default actions