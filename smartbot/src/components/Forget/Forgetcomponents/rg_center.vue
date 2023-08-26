<template>
  <div class="rg_layout">
    <div class="rg_left">
      <p class="left01">FIBO</p>
      <p class="left02">智能问答机器人</p>
      <div id="robot_img"><img src="@/assets/img/robot.png" width="100%" height="100%"></div>
    </div>
    <div class="rg_center">
      <form class="form-horizontal">
        <div class=" form-group has-feedback" id="div1">
          <label class="control-label col-sm-3" for="inputusername">用户名</label>
          <div class="col-sm-9" >
            <input type="text" class="form-control" name="username" id="inputusername" v-model="username" placeholder="请输入用户名">
            <span class="glyphicon form-control-feedback" id="status1" ></span>
            <span id="helpBlock1" class="help-block"></span>
          </div>
        </div>
        <div class=" form-group has-feedback" id="div4">
          <label class="control-label col-sm-3" for="inputemail">邮箱</label>
          <div class="col-sm-9">
            <input name="email" type="email" class="form-control" id="inputemail" v-model="email" placeholder="输入邮箱">
            <span id="status4" class="glyphicon form-control-feedback"></span>
            <span id="helpBlock4" class="help-block"></span>
          </div>
        </div>
        <div id="msg1" v-show="msg!==''">
          <div colspan="2" id="msg_1"><div ref="msg" class="alert alert-danger" role="alert" id="msg" >{{msg}}</div></div>
        </div>
        <div class="col-sm-12" id="regist_btn"> <input @click="check" class="form-control btn-primary" type="button" value="确认提交" id="reg_input" ></div>
      </form>
    </div>
  </div>
</template>

<script>
import  forget from '@/assets/js/forget.js'
import {mapState} from "vuex";
import axios from "axios";
export default {
  name: "rg_center",
  data()
  {
    return{
      username:'',
      email:'',
      msg:''
    }
  },
  mounted() {
  },
  computed:{
    ...mapState('forget',['server','SAVE_OK','INSERT_OK','UPDATE_OK','DELETE_OK','Get_OK','SAVE_ERROR',
      'INSERT_ERROR','UPDATE_ERROR','DELETE_ERROR','Get_ERROR'])
  },
  methods:
      {
        submit()
        {
          axios.post(this.server+'/querypassword',{
            account:this.username,
            email:this.email
          }).then(
              response=>
              {
                if(response.data.code===this.Get_OK)
                {
                  this.msg=response.data.msg
                  this.$refs.msg.className="alert alert-success"
                }
                else {
                  this.msg=response.data.msg
                  this.$refs.msg.className="alert alert-danger"
                }
              },
              error=>
              {
                console.log(error.message)
              }
          )
        },
        check()
        {
          let flag=forget.check()
          if(flag)
            this.submit()
        }
      }
}
</script>

<style scoped>

</style>
