<template>
  <div class="clearfloat">
  <div class="author-name">
    <small class="chat-date">{{time}}</small>
  </div>
  <div class="right">
    <div class="chat-message"> {{textContent}}</div>
    <div class="chat-avatars"><img :src="this.src" alt="头像" /></div>
  </div>
  </div>
</template>

<script>
export default {
  data()
      {
        return{
        }
      },
  name: "question",
  props:['time','textContent','src','path'],
  mounted() {
    if(this.src==='none')
      this.src=require('@/assets/img'+this.path)
    else
    this.src="http://localhost:80/api/gg/"+this.src
    console.log(this)
  }
}
</script>

<style scoped>

</style>
