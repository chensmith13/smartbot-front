<template>
  <div class='clearfloat'>
    <div class='author-name'>
      <small class='chat-date'>{{time}}</small>
    </div>
    <div class='left'>
      <div class='chat-avatars'>
        <img src='@/assets/img/robot.png' alt='头像'/>
      </div>
      <div class='chat-message'>{{answer}}</div>
    </div>
    <button  class="mybutton" @click="satisfied">满意</button>
    <button  class="mybutton" @click="unsatisfied">不满意</button>
  </div>
</template>

<script>
export default {
  name: "answer",
  props:{
    'answer':{},
    'status':{},
    'time':{},
    'mcontent':{},
    'rid':{
      default:-1
    }
  }
  ,
  methods:
      {
        satisfied()
        {
          this.$emit('good',this.mcontent,this.answer,this.rid)
        },
        unsatisfied()
        {
          this.$emit('bad',this.mcontent,this.status,this.rid)
        }
      }
}
</script>

<style scoped>

</style>
