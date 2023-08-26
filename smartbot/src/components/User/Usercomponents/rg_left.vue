<template>
  <div id="rg_left">
    <div class="list-group">
      <a href="#" @click="requesthome" class="func list-group-item active" id="query">问答首页</a>
      <a href="#" @click="community" class="func list-group-item" id="community">FIBO社区</a>
      <a href="#"  @click="history" class="func list-group-item dropdown-item" id="history">问答历史<span class="badge">{{num}}</span></a>
      <a href="#" @click="management" class="func list-group-item" id="manage_account">账号管理</a>
      <a href="#" @click="changeemail" class="func list-group-item" id="change_email">更改邮箱</a>
      <a href="#" v-show="this.mystatus=='user'" @click="auth" class="func list-group-item" id="super">认证专家</a>
      <a href="#" @click="changeavatar" class="func list-group-item" id="picture_change">更改头像</a>
      <a href="#" @click="playgames" class="func list-group-item" id="play">fibo小游戏</a>
      <div id="rg_left_bottom"><img src="@/assets/img/rg_left_bottom.png" id="rg_left_img_01"></div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import axios from "axios";

export default {
  name: "rg_left",
  data()
  {
    return{
      mystatus:'',
    }
  },
  mounted() {
    this.mystatus=this.status
    axios.post(this.server+'/unsolved',{
      currentpage:1,
      row:5
    }).then(
        response=>
        {
          this.changenum(response.data.data.totalcount)
        }
    )
  },
  methods:
      {
        ...mapActions('user',['changenum']),
        playgames()
        {
          this.$router.push({
            name:'mygame',
            params:this.path
          })
          this.clean();
          $("#play").prop("class","func list-group-item active");
        },
        clean()
        {
          $("#super").prop("class","func list-group-item");
          $("#query").prop("class","func list-group-item");
          $("#community").prop("class","func list-group-item");
          $("#history").prop("class","func list-group-item");
          $("#manage_account").prop("class","func list-group-item");
          $("#picture_change").prop("class","func list-group-item");
          $("#change_email").prop("class","func list-group-item");
          $("#play").prop("class","func list-group-item");
        },
        changeavatar()
        {
          this.$router.push({
            name:'changeavatar',
            params:{
              path:this.path
            }
          })
          this.clean();
          $("#picture_change").prop("class","func list-group-item active");
        },
        requesthome()
        {
          this.$router.push(
              {
                name:'requesthome',
                params:{
                  path:this.path
                }
              }
          )
          this.clean();
          $("#query").prop("class","func list-group-item active");
        },
        community()
        {
          this.$router.push({
            name:'community',
            params:{
              path:this.path
            }
          })
          this.clean();
          $("#community").prop("class","func list-group-item active");
        },
        history()
        {
          this.$router.push({
            name:'history',
            params:{
              path:this.path,
              that:this
            }
          })
          this.clean();
          $("#history").prop("class","func list-group-item active");
        },
        management()
        {
          this.$router.push({
            name:'management',
            params:{
              path:this.path
            }
          })
          this.clean();
          $("#manage_account").prop("class","func list-group-item active");
        },
        changeemail()
        {
          this.$router.push({
            name:'email',
            params:{
              path:this.path
            }
          })
          this.clean();
          $("#change_email").prop("class","func list-group-item active");
        },
        auth()
        {
          this.$router.push({
            name:'auth',
            params:{
              path:this.path
            }
          })
          this.clean();
          $("#super").prop("class","func list-group-item active");
        },
      },
  computed:
      {
        ...mapState('user',['num']),
        ...mapState('userhistory',['server','SAVE_OK','INSERT_OK','UPDATE_OK','DELETE_OK','Get_OK','SAVE_ERROR',
          'INSERT_ERROR','UPDATE_ERROR','DELETE_ERROR','Get_ERROR']),
      },
  props:['status','path']
}
</script>

<style scoped>

</style>
