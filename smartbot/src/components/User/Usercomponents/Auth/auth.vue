<template>
  <div>
    <div id="rg_center_05"><div id="rg_center_top_05"> <div id="rg_center_top01_05">认证说明：</div>
      <div id="rg_center_top02_05">如果您在社区回答中的点赞数超过100赞，那么您就可以向管理员申请FIBO专家认证。</div> </div>
      <div id="rg_center_bottom_05"> <div id="rg_center_bottom01_05">
        您在社区一共回答了{{mydata.allnum}}个问题，其中超过100赞的回答有{{mydata.mynum}}个，{{is}}FIBO专家认证条件。
      </div><div id="rg_center_bottom02_05"><img src="@/assets/img/rg_center_bottom.png"></div>
        <div id="rg_center_bottom03_05"><input :disabled="this.mydata.isaccepted!==1&&this.mydata.mynum>=1 ?false:'disabled'" @click="apply_auth()" class="btn btn-primary" type="submit" value="申请专家认证" id="reg_input" ></div>
        <div id="rg_center_bottom04_05">认证进度：{{progress}}</div> </div></div>
  </div>

</template>

<script>
import axios from "axios";
import {mapState} from "vuex";

export default {
  name: "auth",
  data()
  {
    return{
      mydata:{},
      progress:'',
      is:'不符合'
    }
  },
  beforeMount() {
    this.findprogress();
  },
  computed:
      {
        ...mapState('userauth',['server','SAVE_OK','INSERT_OK','UPDATE_OK','DELETE_OK','Get_OK','SAVE_ERROR',
          'INSERT_ERROR','UPDATE_ERROR','DELETE_ERROR','Get_ERROR']),
      }
  ,
  methods:
      {
        findprogress()
        {
          axios.get(this.server+'/findprogress').then(
              response=>
              {
                console.log(response.data.data)
                this.mydata=response.data.data
                let isaccepted=this.mydata.isaccepted
                if(this.mydata.mynum>=1)
                  this.is="符合"
                if(isaccepted==-1)
                {
                  this.progress="尚未认证"
                }
                else if(isaccepted==1)
                {
                  this.progress="正在审核中"
                }
                else {
                  this.progress="认证未通过"
                }
              }
          )
        },
        apply_auth()
        {
          axios.put(this.server+"/apply",
              {
                isaccepted:this.mydata.isaccepted
              }).then(
              response=>
              {
                alert("申请成功!");
                this.findprogress();
              }
          )
        }
      }
}
</script>

<style scoped>

</style>
