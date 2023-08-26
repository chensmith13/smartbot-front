import $ from '@/assets/js/jquery3.6.0.js'
export default {
     check_email() {
    var check1=/^([a-z0-9_\\.-]+)@([\da-z\\.-]+)\.([a-z\\.]{2,6})$/
    var check2=/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
    return check1.test($("#inputemail").val())||check2.test($("#inputemail").val());
},
check_username() {
    var check=/^[a-z0-9_-]{3,16}$/;
    return check.test($("#inputusername").val());
},
 email() {
    if(this.check_email())
    {
        $("#div4").addClass("has-success");
        $("#status4").prop("class","glyphicon glyphicon-ok form-control-feedback");
    }
    else
    {
        $("#divs4").addClass("has-error");
        $("#status4").prop("class","glyphicon glyphicon-remove form-control-feedback");
        $("#helpBlock4").html("请输入正确的邮箱");
        $("#helpBlock4").slideDown("fast");
    }
},
 username() {
    if(this.check_username())
    {
        $("#div1").addClass("has-success");
        $("#status1").prop("class","glyphicon glyphicon-ok form-control-feedback");
    }
    else
    {
        $("#div1").addClass("has-error");
        $("#status1").prop("class","glyphicon glyphicon-remove form-control-feedback");
        $("#helpBlock1").html("请输入3-16位不包含特殊字符和中文的用户名");
        $("#helpBlock1").slideDown("fast");
    }
},
mount () {
    $("#inputemail").focus(()=>  {
        console.log('123')
        $("#div4").removeClass("has-success has-error");
        $("#status4").prop("class","glyphicon form-control-feedback");
        $("#helpBlock4").slideUp("fast");
    })
    $("#inputemail").blur(()=> {
        this.email();
    })
    $("#inputusername").focus(function () {
        $("#div1").removeClass("has-success has-error");
        $("#status1").prop("class","glyphicon form-control-feedback");
        $("#helpBlock1").slideUp("fast");
    })
    $("#inputusername").blur(()=> {
        this.username();
    })
},
 check() {
     this.email();this.username();
    return this.check_email()&&this.check_username();
}
}
