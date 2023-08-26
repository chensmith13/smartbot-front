<template>
  <div>
    <rg_top :name="name"></rg_top>
    <rg_left></rg_left>
    <rg_div :name="this.$route.params.name"></rg_div>
  </div>
</template>

<script>
import "../../assets/css/buttons.css"
import "../../assets/css/chat.css"
import "../../assets/css/dianzan.css"
import "../../assets/css/font-awesome.min.css"
import "../../assets/css/iconfont.css"
import "../../assets/css/jq22-demo.css"
import "../../assets/css/liststyle.css"
import "../../assets/css/reset.css"
import "../../assets/css/style.min.css"
import "../../assets/css/AdministerStyle.css"
import rg_div from "@/components/Admin/Admincomponents/rg_div";
import rg_top from "@/components/Admin/Admincomponents/rg_top";
import rg_left from "@/components/Admin/Admincomponents/rg_left";
export default {
  name: "AdminView",
  components: {rg_div,rg_top,rg_left},
  computed:
      {
        name()
        {
          return this.$route.params.name
        }
      }
}
</script>

<style scoped>

</style>
