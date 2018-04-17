<template>
  <div class="first" style="width:100%;height:100%;margin-top:20px;">
    <el-container style="width:100%;height:100%;">
        <el-main  style="background:#fff;">
            <h2>广告创意</h2>
            <h3>落地页</h3>
            <el-form>
                <el-form-item
                    label="着陆页地址:"
                    prop="name"
                >
                    <el-row>
                        <el-col :span="12">
                            <el-input v-model="address"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <el-button name='watch'>预览</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
            </el-form>
            <h3>上传创意</h3>
            <el-button type="text" v-for="(item,ind) in changeName" :key="ind">{{'创意' + (ind+1)}}</el-button>
            <el-button type="text" @click="dialogVisible = true">+添加创意</el-button>
            <el-dialog
                title="选择模版"
                :visible.sync="dialogVisible"
                width="30%">
                <div class="select">
                    <div @click="selectName('单图')">单图</div>
                    <div @click="selectName('多图')">多图</div>
                </div>
            </el-dialog>
            <hr>
            <others :style='isDisplay'></others>
            <el-button type="info" plain disabled class="submit">提交</el-button>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import others from "./other.vue";

export default {
  name: "first",
  data() {
    return {
        address:'',
        dialogVisible: false,
        changeName:[],
        isDisplay:{
            display:'none'
        }
    };
  },
  components:{
      others
  },
  methods:{
      selectName(name){
          this.dialogVisible = false;
          this.changeName.push(name)
          this.isDisplay.display = "block"
      }
  },
  mounted(){
      if (this.changeName.length) {
          this.isDisplay.display = "block"
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h2{
        font-weight: normal;
        font-size: 40px;
    }
    h3{
        line-height: 50px;
    }
    el-form{
        margin-bottom: 50px;
    }
    .submit{
        margin-top: 60px;
    }
    .select{
        display: flex;
    }
    .select div{
        flex :1;
        line-height: 100px;
        margin: 10px;
        border: 1px solid #ccc;
        text-align: center;
        user-select: none;
        cursor: pointer;
    }
</style>