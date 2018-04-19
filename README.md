# dsp
> A Vue.js projec

### 主要技术
  使用vue主要是因为Vue.js使用基于依赖追踪的观察并且使用异步队列更新，所有的数据都是独立触发的。同时Vue.js在模板中提供了指令，过滤器等，可以非常方便，快捷地操作DOM。
    主要用到的技术是：1.排版方面运用的是基于Vue开发的ui框架Element.ui，并且bug要比其他框架少
                  2.运用了es6语法，使代码看起来更加简洁
                  3.运用了vuex进行状态管理

### 路由
    # 引入vue-router
    import VueRouter from 'vue-router';
    
    # 使用路由
    Vue.use(VueRouter);
    
    # 引入需要的组件
    import Home from '../components/Home.vue';
    
    # 创建路由实例
    const router = new VueRouter({
        routes: [
            {path:'/home',component:Home},//path:路径 component:把你需要的组件挂载进来
            {path:'*',redirect:'/home'} //当路径错误或没有这个路径的时候我们会给予一个默认路径   
        ]
    });
    
    # 最后在main中挂在到vue实例上
    new Vue({
        router,
        el: '#app',
        render: h => h(App)
    })

### 接口
    使用node.js模拟接口，在requert.js里用axios里的axiso.create对请求和响应进行拦截，
    困难：axiso.create的方法不是很熟练，开发过程有些困难

### 数据
    使用vueX对数据进行管理，主要对登录的用户名以及新建的列表进行存储

### 具体功能介绍
    1.登录：利用post请求，判断是否登录，并且登录的用户名要求必须是邮箱格式
    2.首页：选择日期的时候对下面的ECharts数据进行改变
    3.广告：新建广告时候可选择多图和单图的上传图片，并且新建多个创意的时候，点击可以实现一个tab切换的效果。
    4.列表：将新建的广告数据渲染到列表中



![Image text](https://github.com/visionYY/my_dsp/blob/master/%E9%A1%B9%E7%9B%AE%E6%B5%81%E7%A8%8B%E5%9B%BE.png)
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).




