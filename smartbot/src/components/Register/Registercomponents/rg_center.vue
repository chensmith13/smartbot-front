<template>
  <div class="rg_center">
    <form class="form-horizontal">
      <div class="form-group has-feedback" id="div0">
        <label class="col-sm-3 control-label" for="inputname">昵称：</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" id="inputname" v-model="name" name="name" placeholder="请输入昵称">
          <span id="status0" class="glyphicon form-control-feedback"></span>
          <span id="helpBlock0" class="help-block"></span>
        </div>
      </div>
      <div class=" form-group has-feedback" id="div1" ref="div1">
        <label class="control-label col-sm-3" for="inputusername">用户名</label>
        <div class="col-sm-9" >
          <input type="text"  class="form-control" name="username" v-model="username" id="inputusername" placeholder="请输入用户名">
          <span class="glyphicon form-control-feedback" id="status1" ></span>
          <span id="helpBlock1" class="help-block"></span>
        </div>
      </div>
      <div class=" form-group has-feedback" id="div2">
        <label class="control-label col-sm-3" for="inputpassword1">密码</label>
        <div class="col-sm-9">
          <input type="password" class="form-control" name="password" id="inputpassword1" v-model="password" placeholder="请输入密码">
          <span id="status2" class="glyphicon form-control-feedback"></span>
          <span id="helpBlock2" class="help-block"></span>
        </div>
      </div>
      <div class=" form-group has-feedback" id="div3">
        <label class="control-label col-sm-3" for="inputpassword2">确认密码</label>
        <div class="col-sm-9">
          <input type="password" class="form-control" id="inputpassword2" placeholder="再次输入密码">
          <span id="status3" class="glyphicon form-control-feedback"></span>
          <span id="helpBlock3" class="help-block"></span>
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
      <div class="col-sm-12" id="regist_btn"> <input  class="form-control btn-primary" type="button" @click="checkall()" value="注册" id="reg_input" ></div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import reg from "@/assets/js/register";
import {mapState} from "vuex";
export default {
  name: "rg_center",
  data()
  {
    return {
      name:'',
      username:'',
      password:'',
      email:''
    }
  },
  methods:{
    submit()
    {
      axios.post(this.server+'/register',{
        name:this.name,
        account:this.username,
        password:this.password,
        email:this.email
      }).then(
          response=>
          {
            if(response.data.code===this.INSERT_OK)
            {
              this.$router.push({
                name:"login",
                query:{
                  msg:response.data.msg
                }
              })
            }
            else {
              alert("注册失败！请联系维护人员或尝试重新注册！")
            }
          },
          error=>
          {
            console.log(error.message)
          }
      )
    },
     checkall()
    {
      let flag=reg.check_all()
      if(flag)
        this.submit()
    },
  },
  computed:{
    ...mapState('register',['server','SAVE_OK','INSERT_OK','UPDATE_OK','DELETE_OK','Get_OK','SAVE_ERROR',
      'INSERT_ERROR','UPDATE_ERROR','DELETE_ERROR','Get_ERROR'])
  },
  mounted() {
    reg.mount()
  },
}
</script>

<style scoped>

</style>
