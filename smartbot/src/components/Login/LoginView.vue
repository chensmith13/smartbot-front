<template>
  <div id="logindiv">
    <div class="rg_layout">
      <rg_border></rg_border>
      <rg_left></rg_left>
      <rg_center></rg_center>
      <rg_border></rg_border>
    </div>
  </div>
</template>
<script>
import '../../assets/css/LoginSytle.css'
import rg_left from "@/components/Login/Logincomponents/rg_left";
import rg_center from "@/components/Login/Logincomponents/rg_center";
import rg_border from "@/components/Login/Logincomponents/rg_border";
export default {

  mounted() {
    console.log(this)
  },
  components: {rg_border, rg_center, rg_left},
  data(){
    return {

    }
  },

}
</script>
<style>

</style>
