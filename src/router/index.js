import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

let route = new VueRouter({
    routes:router.routes
})

route.beforeEach((to,from,next) => {
    let tk = getItem()
    console.log(to)
    console.log(from)
    if (to.name == 'login'){
        next()
    } else {
        if(!tk){
            next({
                name:"login"
            })
        } else {
            next()
        }
    }
    next()
})
function getItem(){
    let token = sessionStorage.getItem('token')
    return !!token;
}
export default route