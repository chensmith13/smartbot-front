<template>
  <div id=change_password_01><div id=change_password_02>修改密码</div>
  <form class="form-inline">
    <div class=" form-group has-feedback" id="divnew">
      <div id=change_password_03><label class="control-label " for="inputpassword1" id="change_password_label01">请输入新密码</label></div>
      <div id=change_password_04><input type="password" class="form-control" name="password" id="inputpassword1" placeholder="请输入密码">
        <span id="status2" class="glyphicon form-control-feedback"></span>
        <span id="helpBlock2" class="help-block"></span></div></div></form>
  <form class="form-inline">
    <div class=" form-group has-feedback" id="divagain">
      <div id=change_password_05><label class="control-label" for="inputpassword2" id="change_password_label02">请再次输入</label></div>
      <div id=change_password_06><input type="password" class="form-control" id="inputpassword2" placeholder="再次输入密码">
        <span id="status3" class="glyphicon form-control-feedback"></span>
        <span id="helpBlock3" class="help-block"></span></div></div>
    <div id="regist_btn">
      <input  class="form-control col-xs-4 btn-primary" type="button" value="确认修改" @click="check_all()" id="reg_input" ></div>
  </form>
  </div>
</template>

<script>
import axios from "axios";
import {mapState} from "vuex";

export default {
  name: "management",
  computed:
  {
  ...mapState('usermanagement',['server','SAVE_OK','INSERT_OK','UPDATE_OK','DELETE_OK','Get_OK','SAVE_ERROR',
    'INSERT_ERROR','UPDATE_ERROR','DELETE_ERROR','Get_ERROR']),
  },
  methods:
      {
        check_password1() {
      var check= /^[a-z0-9_-]{6,18}$/;
      return check.test($("#inputpassword1").val());
          },
        check_password2() {
    return $("#inputpassword2").val()==$("#inputpassword1").val();
          },
        password1() {
  if(this.check_password1())
  {
    $("#divnew").addClass("has-success");
    $("#status2").prop("class","glyphicon glyphicon-ok form-control-feedback");
  }
  else
  {
    $("#divnew").addClass("has-error");
    $("#status2").prop("class","glyphicon glyphicon-remove form-control-feedback");
    $("#helpBlock2").html("请输入6-18位不包含特殊字符的密码");
    $("#helpBlock2").slideDown("fast");
  }
},
        password2() {
  if(this.check_password2())
  {
    $("#divagain").addClass("has-success");
    $("#status3").prop("class","glyphicon glyphicon-ok form-control-feedback");
  }
  else
  {
    $("#divagain").addClass("has-error");
    $("#status3").prop("class","glyphicon glyphicon-remove form-control-feedback");
    $("#helpBlock3").html("请输入相同的密码");
    $("#helpBlock3").slideDown("fast");
  }
},
        check_all() {
          this.password1();this.password2();
          if(this.check_password1()&&this.check_password2())
          {
            var password=$("#inputpassword1").val();
           axios.post(this.server+'/change',{
             password
           }).then(
               response=>{
                 alert("修改成功！")
                 $(location).attr("href","/#/login");
               }
           )
          }
        }
      }
}
</script>

<style scoped>

</style>
