<template>
  <div>
    <rg_border></rg_border>
    <div class="rg_layout">
      <rg_left></rg_left>
      <rg_center></rg_center>
    </div>
    <modal></modal>
    <rg_border></rg_border>
  </div>
</template>

<script>
import rg_left from "@/components/Register/Registercomponents/rg_left";
import rg_center from "@/components/Register/Registercomponents/rg_center";
import rg_border from "@/components/Register/Registercomponents/rg_border";
import modal from '@/components/Register/Registercomponents/modal'
import '../../assets/css/RegisterStyle.css'
export default {
  name: "RegisterView",
  components:{rg_left , rg_center, modal,rg_border}
}
</script>
<style scoped>

</style>
