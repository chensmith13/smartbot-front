import $ from '@/assets/js/jquery3.6.0.js'
import axios from "axios";

export default {
    check_password1() {
        var check = /^[a-z0-9_-]{6,18}$/;
        return check.test($("#inputpassword1").val());
    },

    check_password2() {
        return $("#inputpassword2").val() == $("#inputpassword1").val();
    },

     check_username() {
        var check = /^[a-z0-9_-]{3,16}$/;
        return check.test($("#inputusername").val());
    },

   check_name() {
        var check = /^[\u2E80-\u9FFF a-z0-9_-]{1,18}$/;
        return check.test($("#inputname").val());
    },

   check_email() {
        var check1 = /^([a-z0-9_\\.-]+)@([\da-z\\.-]+)\.([a-z\\.]{2,6})$/
        var check2 = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
        return check1.test($("#inputemail").val()) || check2.test($("#inputemail").val());
    },
   email() {
        if (this.check_email()) {
            $("#div4").addClass("has-success");
            $("#status4").prop("class", "glyphicon glyphicon-ok form-control-feedback");
        } else {
            $("#div4").addClass("has-error");
            $("#status4").prop("class", "glyphicon glyphicon-remove form-control-feedback");
            $("#helpBlock4").html("请输入正确的邮箱");
            $("#helpBlock4").slideDown("fast");
        }
    },

    username() {
        if (this.check_username()) {
            axios.post("http://localhost:80/api/register/registercheck",
                 {
                     account: $("#inputusername").val()
                 }
                 ).then(
                     response=>
                     {
                         if(response.data.code===20051)
                         {
                             $("#div1").addClass("has-error");
                             $("#status1").prop("class", "glyphicon glyphicon-remove form-control-feedback");
                             $("#helpBlock1").html("此用户名已注册");
                             $("#helpBlock1").slideDown("fast");
                         }
                         else {
                             $("#div1").addClass("has-success");
                             $("#status1").prop("class", "glyphicon glyphicon-ok form-control-feedback");
                         }
                     }
            )
        } else {
            $("#div1").addClass("has-error");
            $("#status1").prop("class", "glyphicon glyphicon-remove form-control-feedback");
            $("#helpBlock1").html("请输入3-16位不包含特殊字符和中文的用户名");
            $("#helpBlock1").slideDown("fast");
        }
    },

     name() {
        if (this.check_name()) {
            $("#div0").addClass("has-success");
            $("#status0").prop("class", "glyphicon glyphicon-ok form-control-feedback");
        } else {
            $("#div0").addClass("has-error");
            $("#status0").prop("class", "glyphicon glyphicon-remove form-control-feedback");
            $("#helpBlock0").html("请输入1-18位不包含特殊字符的昵称");
            $("#helpBlock0").slideDown("fast");
        }
    },

    password1() {
        if (this.check_password1()) {
            $("#div2").addClass("has-success");
            $("#status2").prop("class", "glyphicon glyphicon-ok form-control-feedback");
        } else {
            $("#div2").addClass("has-error");
            $("#status2").prop("class", "glyphicon glyphicon-remove form-control-feedback");
            $("#helpBlock2").html("请输入6-18位不包含特殊字符的密码");
            $("#helpBlock2").slideDown("fast");
        }
    },

    password2() {
        if (this.check_password2()) {
            $("#div3").addClass("has-success");
            $("#status3").prop("class", "glyphicon glyphicon-ok form-control-feedback");
        } else {
            $("#div3").addClass("has-error");
            $("#status3").prop("class", "glyphicon glyphicon-remove form-control-feedback");
            $("#helpBlock3").html("请输入相同的密码");
            $("#helpBlock3").slideDown("fast");
        }
    },

    check_all() {
        this.username()
        this.password1()
        this.password2()
        this.name()
        this.email()
        return this.check_password1() && this.check_password2() && this.check_username() && this.check_name() && this.check_email();
    },

     mount() {
        $("#inputusername").focus(()=> {
            $("#div1").removeClass("has-success has-error");
            $("#status1").prop("class", "glyphicon form-control-feedback");
            $("#helpBlock1").slideUp("fast");
        })
        $("#inputusername").blur(()=> {
            this.username()
        })
        $("#inputpassword1").focus(()=> {
            $("#div2").removeClass("has-success has-error");
            $("#status2").prop("class", "glyphicon form-control-feedback");
            $("#helpBlock2").slideUp("fast");
        })
        $("#inputpassword1").blur(()=> {
            this.password1()
        })
        $("#inputpassword2").focus(()=> {
            $("#div3").removeClass("has-success has-error");
            $("#status3").prop("class", "glyphicon form-control-feedback");
            $("#helpBlock3").slideUp("fast");
        })
        $("#inputpassword2").blur(()=> {
            this.password2()
        })
        $("#inputname").focus(()=> {
            $("#div0").removeClass("has-success has-error");
            $("#status0").prop("class", "glyphicon form-control-feedback");
            $("#helpBlock0").slideUp("fast");
        })
        $("#inputname").blur(()=>{
            this.name()
        })
        $("#inputemail").focus(()=> {
            $("#div4").removeClass("has-success has-error");
            $("#status4").prop("class", "glyphicon form-control-feedback");
            $("#helpBlock4").slideUp("fast");
        })
        $("#inputemail").blur(()=> {
            this.email()
        })
    }
}
