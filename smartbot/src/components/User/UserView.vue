<template>
<div>
  <rg_top :status="this.$route.params.status" :name="this.$route.params.name"></rg_top>
  <rg_left :status="this.$route.params.status" ></rg_left>
  <rg_div :status="this.$route.params.status" :name="this.$route.params.name"></rg_div>
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
import "../../assets/css/UserStyle.css"
import rg_div from "@/components/User/Usercomponents/rg_div";
import rg_left from "@/components/User/Usercomponents/rg_left";
import rg_top from "@/components/User/Usercomponents/rg_top";
import axios from "axios";
import {mapActions, mapMutations} from "vuex";
export default {
  name: "UserView",
  components:{rg_top,rg_left,rg_div},
  data()
  {
    return{
    }
  },
  computed:
  {
  },
  mounted() {
    this.findavatar()
  },
  methods:
      {
        findavatar()
        {
          this.change()
        },
        ...mapActions('user',{change:'change'}),
      }
}

</script>

<style scoped>

</style>
