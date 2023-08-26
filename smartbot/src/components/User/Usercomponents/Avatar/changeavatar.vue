<template>
  <div id="change_picture01">
  <div id=change_picture02>更改头像</div>
            <el-upload
                ref="upload"
                :class="{uoloadSty:showBtnDealImg,disUoloadSty:noneBtnImg}"
                action="none"
                :auto-upload="false"
                list-type="picture-card"
                accept="image/*"
                :http-request="add_avatar"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :on-change="dealImgChange"
            >
              <i  class="el-icon-plus"></i>
            </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    <div id="change_picture04">
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapActions, mapState} from "vuex";

export default {
  name: "changeavatar",
  data () {
    return{
      showBtnDealImg:true,
      noneBtnImg:false,
      dialogImageUrl:'',
      dialogVisible:false,
      limitCountImg:1
    }
  },
  computed:
      {
        ...mapState('useravatar',['server','SAVE_OK','INSERT_OK','UPDATE_OK','DELETE_OK','Get_OK','SAVE_ERROR',
          'INSERT_ERROR','UPDATE_ERROR','DELETE_ERROR','Get_ERROR']),
        ...mapActions('user',{tochange:'change'}),
      },
  methods:{
    handleRemove(file, fileList) {
      this.noneBtnImg = fileList.length >= this.limitCountImg;
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    dealImgChange(file, fileList){
      this.noneBtnImg = fileList.length >= this.limitCountImg;
    },
    beforeProductUpload(file){
      var _this = this
      return new Promise(function(resolve, reject) {
        var reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function(event) {
          _this.Form.imageurl.push(event.target.result)
        }
      })
    },
    submit()
    {
      this.fileDataLoading = true;
      this.$refs.upload.submit();
    },
    add_avatar(file)
    {
      console.log(file.file)
      let formData = new FormData();
      formData.append('File', file.file)
      console.log(formData)
      axios.post(this.server+'/add_avatar',
            formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              processData: false,
            },
          }).then(
              response=>
              {
                alert(response.data.msg)
                this.tochange();
              }
      )
    }
  }
}
</script>

<style>
.uoloadSty .el-upload--picture-card{
  width:110px;
  height:110px;
  line-height:110px;
}
.disUoloadSty .el-upload--picture-card{
  display:none;   /* 上传按钮隐藏 */
}
.el-upload input{
  display: none !important;;
}
</style>
