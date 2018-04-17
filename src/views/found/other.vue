<template>
  <div class="other">
    <el-upload
      class="avatar-uploader"
      action="http://localhost:9000/user/upload"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>

    <el-form>
        <el-form-item
            label="广告文案:"
            prop="name"
        >
            <el-row>
                <el-col :span="12">
                    <el-input v-model="wenan"></el-input>
                </el-col>
            </el-row>
        </el-form-item>
        <el-form-item
            label="监控链接:"
            prop="name"
        >
            <el-row>
                <el-col :span="12">
                    <el-input v-model="links"></el-input>
                </el-col>
            </el-row>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      wenan:'',
      links:''
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {//成功的回调
      console.log(res.data.value)
      this.imageUrl = "http://localhost:9000/"+res.data.value;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
