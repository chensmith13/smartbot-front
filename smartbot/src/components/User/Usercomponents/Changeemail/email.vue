<template>
  <div id='change_email01'>
 <div id=change_email02>更改邮箱</div>
  <div id="change_email03">请用原邮箱发送一封主题为："改绑邮箱"到663994476@qq.com</div>
  <div id="change_email04"><button class="btn btn-default" @click="checkemail()">我已发送</button></div>
    <checkemail ref="check" v-show="canshow"></checkemail>
  </div>
</template>
<script>
import Checkemail from "@/components/User/Usercomponents/Changeemail/checkemail";
import axios from "axios";
import {mapState} from "vuex";
export default {
  name: "email",
  components: {Checkemail},
  data()
      {
        return{
          canshow:false
        }
      }
      ,
  computed:
      {
        ...mapState('useremail',['server','SAVE_OK','INSERT_OK','UPDATE_OK','DELETE_OK','Get_OK','SAVE_ERROR',
          'INSERT_ERROR','UPDATE_ERROR','DELETE_ERROR','Get_ERROR']),
      },
  methods:
      {
        checkemail()
        {
          axios.post(this.server+'/check').then(
              response=>
              {
                if(response.data.code===this.Get_OK)
                {
                  this.$refs.check.$emit("toggle");
                }
                else {
                  alert(response.data.msg)
                }
              }
          )
        }
      }
}
</script>

<style scoped>

</style>
