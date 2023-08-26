<template>
  <div>
    <rg_border></rg_border>
    <rg_center></rg_center>
    <rg_border></rg_border>
  </div>
</template>

<script>
import '@/assets/css/ForgetStyle.css'
import rg_border from "@/components/Forget/Forgetcomponents/rg_border";
import rg_center from "@/components/Forget/Forgetcomponents/rg_center";
export default {
  name: "ForgetView",
  components:{rg_border,rg_center}
}
</script>

<style scoped>

</style>
