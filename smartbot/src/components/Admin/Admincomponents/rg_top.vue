<template>
  <div id="rg_top" class="col-lg-12">
    <div id="rg_top_01" >
      <img src="@/assets/img/rg_top_01.png" id="rg_top_img_01">
    </div>
    <div id="rg_top_02" >
      <img src="@/assets/img/rg_top_02.png" id="rg_top_img_02">
    </div>
    <div id="rg_top_03" >
      <div id="user_profile">
        <img :src='this.src' class="img-circle" width="30" height="30" alt="头像"/>
      </div>
      <div id="user_name">
        欢迎您,{{this.myname}}
       <a id="quit" href="">退出登录</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rg_top",
  data()
  {
    return{
      myname:''
    }
  },
  mounted() {
    this.myname=this.name
  },
  computed:
      {
        src()
        {
          let msrc=this.$store.state.user.src;
          if(msrc==="none"||msrc==='@/assets/img/img.png')
            msrc=require("@/assets/img/ava.png");
          else
            msrc="http://localhost:80/api/gg/"+msrc
          return msrc
        }
      },
  props:['name']
}
</script>

<style scoped>

</style>
