<template>
  <div class="rg_center">
    <!--
    <form ref='loginform' :action="server+'/logincheck'" method="post">
    -->
    <form ref='loginform'>
      <div class="form-group">
        <table>
          <tr>
            <td class="td_left"><label for="username">用户名</label></td>
            <td class="td_right"><input class="form-control" v-model="username" type="text" name="username" id="username" placeholder="请输入用户名"></td>
          </tr>
          <tr>
            <td class="td_left"><label for="password">密码</label></td>
            <td class="td_right"><input class="form-control" v-model="password" type="password" name="password" id="password" placeholder="请输入密码"></td>
          </tr>
          <tr>
            <td class="td_left"><label for="code">验证码</label></td>
            <td class="td_right"><input type="text" name="checkcode"  v-model="checkcode" id="code"><img id="img" @click='checkcodeclick' :src="checkcodeserver" width="100px" height="35px"></td>
          </tr>
          <tr id="msg1" v-show="login_msg!==''">
            <td colspan="2" id="msg_1"><div  ref="msg" class="alert alert-danger" role="alert" id="msg">{{login_msg}}</div></td>
          </tr>
          <tr>
            <td colspan="2" id="regist"><input  class="btn btn-primary" @click="submit()" value="登录" id="reg_input" ></td>
          </tr>
          <table>
            <tr>
              <td class="td_left01"><a @click="changereg" id="register">注册新账号</a></td>
              <td class="td_right01"><a @click="changeforget">找回密码</a></td>
            </tr>
          </table>
        </table>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from "vuex"
export default {
  data () {
        return{
          checkcodeserver:'',
          username:'',
          password:'',
          checkcode:'',
          login_msg:''
        }
      },
  name: "rg_center",
  computed:{
    ...mapState('login',['server','SAVE_OK','INSERT_OK','UPDATE_OK','DELETE_OK','Get_OK','SAVE_ERROR',
      'INSERT_ERROR','UPDATE_ERROR','DELETE_ERROR','Get_ERROR'])
  },
  beforeMount() {
    this.checkcodeserver=this.server+'/checkcode'
  },
  mounted() {
    if(this.$route.query.msg!==undefined)
    {
      this.login_msg=this.$route.query.msg
      this.$refs.msg.className="alert alert-success"
    }
    else {
      this.login_msg=''
    }
  },
  methods:{
    submit()
    {
      axios.post(this.server+'/logincheck',{
        account:this.username,
        password:this.password,
        checkcode:this.checkcode
      }).then(
          response=>
          {
            if(response.data.code===this.Get_OK)
            {
              if(response.data.data.status=="user")
              this.$router.push({
                name:"user",
                params:
                    {
                      status:'user',
                      name:response.data.data.name
                    }
              })
              else if(response.data.data.status=='expert')
              {
                this.$router.push({
                  name:"user",
                  params:
                      {
                        status:'expert',
                        name:response.data.data.name
                      }
                })
              }
              else {
                this.$router.push({
                  name:"admin",
                  params:
                      {
                        name:response.data.data.name
                      }
                })
              }
            }
            else
            {
              this.$refs.msg.className="alert alert-danger"
              this.login_msg=response.data.msg
            }
          },
          error=>
          {
            console.log(error.message)
          }
      )
    },
    checkcodeclick()
    {
      let date=this.server+"/checkcode"+"?"+new Date().getTime();
      this.checkcodeserver=date
    },
      changereg()
      {
        this.$router.push({
          name:'register'
        })
      },
      changeforget()
      {
        this.$router.push({name:'forget'})
      }
    }
}
</script>

<style scoped>

</style>
