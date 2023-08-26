<template>
  <div id="rg_left">
    <div class="list-group">
      <a href="#" @click="managecommunity" class="func list-group-item" id="community">FIBO社区管理</a>
      <a href="#" @click="management" class="func list-group-item" id="manage_account">账号管理</a>
      <a href="#" @click="manageapply" class="func list-group-item" id="super">专家认证管理</a>
      <a href="#" @click="changeemail"class="func list-group-item" id="change_email">更改邮箱</a>
      <a href="#" @click="changeavatar"class="func list-group-item" id="picture_change">更改头像</a>
      <div id="rg_left_bottom"><img src="@/assets/img/rg_left_bottom.png" id="rg_left_img_01"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rg_left",
  methods:
      {
        clean()
        {
          $("#super").prop("class","func list-group-item");
          $("#community").prop("class","func list-group-item");
          $("#manage_account").prop("class","func list-group-item");
          $("#picture_change").prop("class","func list-group-item");
          $("#change_email").prop("class","func list-group-item");
        },
        changeavatar()
        {
          this.$router.push({
            name:'adminchangeavatar',
            params:{
              path:this.path
            }
          })
          this.clean();
          $("#picture_change").prop("class","func list-group-item active");
        },
        management()
        {
          this.$router.push({
            name:'adminmanagement',
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
            name:'adminemail',
            params:{
              path:this.path
            }
          })
          this.clean();
          $("#change_email").prop("class","func list-group-item active");
        },
        manageapply()
        {
          this.$router.push(
              {
                name:'apply',
              }
          )
          this.clean();
          $("#super").prop("class","func list-group-item active");
        },
        managecommunity()
        {
          this.$router.push({
            name:'managecommunity'
          })
          this.clean();
          $("#community").prop("class","func list-group-item active");
        }
      }
}
</script>

<style scoped>

</style>
