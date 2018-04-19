//第三方node包用于加密
const jwt=require("jsonwebtoken")
const fs = require("fs")
const http=require("http")
const querystring=require("querystring")
const Mock=require("mockjs")
const _=require("lodash")//删除数组中一项的第三方插件
let multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './server/uploads')
    },
    filename: function (req, file, cb) {
        console.log(file)
        let filename = file.originalname.split('.')
        cb(null, filename[0] + '-' + Date.now() + "." + filename[filename.length-1])
    }
  })
   
var upload = multer({ storage: storage })



module.exports=function(app){
    //register注册接口
    app.post("/user/register", function (req, res) {
        console.log(req.body)
        let user = fs.readFileSync("server/user.json", { encoding: "utf-8" })//读取数据库数据
        console.log(user)
        user = JSON.parse(user)
        user.push(req.body)
        fs.writeFile('server/user.json', JSON.stringify(user), function () {
            res.end(JSON.stringify({
                "success": 1,
                "info": "register success"
            }))
        })//获取数据写入数据库中
    })

    //login登录接口
    app.post("/dsp-admin/user/login", function (req, res) {
        let user = fs.readFileSync("server/user.json", { encoding: "utf-8" })//读取数据库数据
        user = JSON.parse(user)//转成Json对象
        let login = req.body;
        let resInfo = {//默认信息
            data:"login failed",
            msg:"登录信息有误",
            status:1
        }
        user.forEach(usr => {
            if (usr.username == login.username && usr.password == login.password) {
                resInfo.success = 0;
                resInfo.info = "login success";//登录成功返回信息
                resInfo.user={//我的页面记录用户名时间昵称
                    name:usr.username,
                    time:new Date().toLocaleDateString(),
                    nickName:"mAyaN"
                }
            }
        });
        if (resInfo.success == 0) {
            resInfo.token = jwt.sign(login, "1511", {
                expiresIn: 60*60//设置tooken的超时
            })//进行加密设置token
        }
        res.end(JSON.stringify(resInfo))
    })

    //获取列表
    app.post('/dsp-admin/user/list',function(req,res){
        let list = fs.readFileSync('./server/planList.json',{encoding:"utf-8"});
        res.json(JSON.parse(list))
    })

    //上传图片接口
    app.post('/user/upload',upload.single('file'),function(req,res) {
        console.log(req.file)
        res.send({
            "data":{
                "size":req.file.size,
                "value":req.file.path,
                "key":"ABC123"
            },
            "status":0
        })
    })
}