<template>
  <div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import axios from "axios";
import {mapState} from "vuex";

export default {
  name: "rg_div",
  computed:
      {
        ...mapState('user',['server','SAVE_OK','INSERT_OK','UPDATE_OK','DELETE_OK','Get_OK','SAVE_ERROR',
          'INSERT_ERROR','UPDATE_ERROR','DELETE_ERROR','Get_ERROR'])
      },
  mounted() {
    this.$router.push({
      name:'requesthome',
      params:{
        status:this.status,
        name:this.name
      }
    })
  },
  props:["status",'name']
}
</script>

<style scoped>

</style>
