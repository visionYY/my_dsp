<template>
  <div class="login-wrap">
      <el-row type="flex" justify="center">
        <el-col :span="6"> 
          <el-form :model="fromData" ref='loginBox'>
            <el-form-item label='用户名' prop='username'  :rules="userRules">
                <el-input v-model='fromData.username'></el-input>
            </el-form-item>
            <el-form-item label='密码' prop='password' :rules="passRules">
                <el-input v-model='fromData.password'></el-input>
            </el-form-item>
            <el-button @click='Login'>登陆</el-button>
          </el-form>
        </el-col> 
      </el-row>
  </div>
</template>   

<script>
import {login} from './../../utils/request'
export default {
  name:"login",
  data(){
    return{
      fromData:{
        username:"",
        password:""
      },
      userRules:[{
        required:true,
        message:"用户名不可省略"
      },{
        type:"email",
        message:"请输入正确的格式"
      }],
      passRules:[{
        required:true,
        message:"密码不可省略"
      }]
    }
  },
  methods:{
    Login(){
      this.$refs.loginBox.validate((isvalid,options)=>{
        if(isvalid){
          this.$store.dispatch("getToken",{
            data:this.fromData,
            notify:this.$notify,
            router:this.$router
          })
          /* login(this.username,this.password,'111').then(res=>{
            console.log(res)
          }) */
        }else{
          this.$notify({
            title: '错误',
            message: '请填写正确的用户名和密码',
            type: 'warning'
          })
        }
      }) 
    }
  }
}
</script>

<style>
</style>
