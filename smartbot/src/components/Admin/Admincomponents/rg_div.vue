<template>
  <div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "rg_div",
  mounted() {
     this.$router.push({
      name:'managecommunity'
    }),
    $("#community").prop("class","func list-group-item active")
  }
}
</script>

<style scoped>

</style>
