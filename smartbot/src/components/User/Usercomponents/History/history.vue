<template>
<solvedhistory v-if="!showwhich" :change="change">
</solvedhistory>
  <unsolvedhistory v-else :change="change">
  </unsolvedhistory>
</template>

<script>
import Solvedhistory from "@/components/User/Usercomponents/History/solvedhistory";
import Unsolvedhistory from "@/components/User/Usercomponents/History/unsolvedhistory";
export default {
  name: "history",
  components: {Unsolvedhistory, Solvedhistory},
  data()
  {
    return{
      showwhich:true,
      mythat:''
    }
  },
  mounted() {
    this.mythat=this.that
  },
  methods:{
    change()
    {
      this.showwhich=!this.showwhich
    },
  }
}
</script>

<style scoped>

</style>
