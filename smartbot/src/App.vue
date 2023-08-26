<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    this.$router.push(
        {
          name:'login'
        }
    )
  }
}
</script>

<style>
</style>
