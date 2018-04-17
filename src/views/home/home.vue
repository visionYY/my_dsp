<template>
  <div>
      home
      <el-row>
        <el-col :span='24'>
            <el-row>
              <el-col :span='12'><h3>整体情况</h3></el-col>
              <el-col :span='12'>
                <el-date-picker
                  v-model="days"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :picker-options="pickerOptions2">
                </el-date-picker>
              </el-col>
            </el-row>
            <el-row :gutter='20'>
              <el-col :span="6">
                <el-card shadow="always" v-on:click.native="test">
                  总是显示
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card shadow="always">
                  总是显示
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card shadow="always">
                  总是显示
                </el-card>
              </el-col>
              <el-col :span="6">
                <el-card shadow="always">
                  总是显示
                </el-card>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span='12'>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <el-row>
              <div ref="graph" class="graph"></div>
            </el-row>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import Echarts,{init} from "echarts"
import axios from 'axios'
console.log(Echarts)
export default {
  name:"home",
  data(){
    return{
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value:"",
      days:null,
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      option1: {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
      },
      echarts:null
    }
  },
  watch:{
    days(){
        this.days && this.initDate();
    }
  },
  computed:{},
  methods:{
    initDate () {
      let startY = new Date(this.days[0]).getFullYear(),
          startM = new Date(this.days[0]).getMonth() + 1,
          endY = new Date(this.days[1]).getFullYear(),
          endM = new Date(this.days[1]).getMonth() + 1;
      let mArr = [];
      if (startY == endY) {
      for (let i = startM;i <= endM;i++) {
          mArr.push(startY + '/' + i);
      }
      } else {
          for (let i = 0; i <= endY - startY; i++) {
          if (i == 0) {
              for (let j = startM; j <= 12; j++) {
              mArr.push(startY + i + '/' + j);
              }
          } else {
              for (let j = 1; j <= 12; j++) {
              mArr.push(startY + i + '/' + j);
              }
          }
          }
      }
      this.option1.xAxis.data = mArr;
      this.echarts.setOption(this.option1)
    },
    test(){
      console.log(this)
      //两种请求方式
      this.$http.get('./static/test.json').then(res=>{
        console.log(res)
      })
      axios.get('./static/test.json').then(res=>{
        console.log(res)
      })
    }
  },
  created(){   
  },
  mounted(){
    this.echarts = Echarts.init(this.$refs.graph);
    this.echarts.setOption(this.option1);
    window.onresize = () => {
        this.echarts.resize();
    }
  }
}
</script>

<style>
  .el-row{
    margin-bottom:20px;
  }
  .graph{
    width:100%;
    height:300px;
  }
</style>