<template>
  <div>
 <div id=div_community_01>
  <div id="myimg"><img src="@/assets/img/community.png" id="community_img"></div>
   <div id="div_community_02">
 <div v-if="totalnum==0" >
    <h1>社区中暂无未解答问题</h1>
</div>

  <table>
    <div v-for="(mydata,index) in datadetail" :key="index">
      <tr>
        <td>
          <a @click="detailedcommunity(mydata.mid,mydata.mcontent)" href='#' style='color: dodgerblue'>
            <h3>{{mydata.mcontent}} </h3>
          </a>
        </td>
      </tr>
      <tr v-if="mydata.answers.length==0"><td> <p class='fs-3' id="community_content1">暂无回答</p></td></tr>
      <tr v-else=""><td> <p class='fs-3' id="community_content2">{{mydata.answers[0].rcontent}}</p></td></tr>
      <tr><td> <p class='fs-5'> 共{{mydata.ansnum}}条回复</p></td></tr>
    </div>
    </table>
   </div>
   <detailedcommunity ref="detailed"></detailedcommunity>
   <div>
     <nav aria-label="Page navigation example"><ul class="pagination"><li @click="querycommunity(currentpage-1)" class="page-item" ><a class="page-link" >上一页</a></li>
       <li v-for="i in totalpage" @click="querycommunity(i)" class="page-item" aria-current="page"><a class="page-link" href="#">{{i}}</a></li>
       <li @click="querycommunity(currentpage+1)" class="page-item"><a class="page-link" >下一页</a></li></ul></nav>
   </div>
</div>
</div>

</template>

<script>
import axios from "axios";
import {mapState} from "vuex";
import Detailedcommunity from "@/components/User/Usercomponents/Community/detailedcommunity";

export default {
  name: "community",
  components: {Detailedcommunity},
  data()
  {
    return{
      totalpage:1,
      totalnum:0,
      datadetail:'',
      currentpage:1
    }
  },
  mounted() {
    this.querycommunity(1)
  },
  methods:
  {
    querycommunity(num)
    {
      this.currentpage=num
      if(num>this.totalpage)
        num=this.totalpage
      else if(num<=0)
        num=1
      axios.post(this.server+'/query',{
        currentpage:num,
        row:5
      }).then(
          response=>
          {
            this.totalpage=response.data.data.totalpage
            this.totalnum=response.data.data.totalcount
            this.datadetail=response.data.data.list
            console.log(response.data)
          }
      )
    },
    detailedcommunity(mid,mcontent)
    {
      let detailed=this.$refs.detailed
      detailed.mid=mid;
      detailed.from='community'
      detailed.mcontent=mcontent;
      detailed.$emit('toggle');
    }
  },
  computed:
      {
        ...mapState('usercommunity',['server','SAVE_OK','INSERT_OK','UPDATE_OK','DELETE_OK','Get_OK','SAVE_ERROR',
          'INSERT_ERROR','UPDATE_ERROR','DELETE_ERROR','Get_ERROR']),
      }
}
</script>

<style scoped>
#div_community_01{
  margin-left: calc(8vw);
  padding: calc(1vh);
  width: calc(75vw);
  height: calc(60vh);
}
#myimg{
  text-align: center;
}
#community_img{
  width: calc(70vw);
  height: calc(8vh);
  display:inline-block
}
nav
{
  flex: border-box;
}
#div_community_02{
  margin-top: calc(2vh);
  padding: calc(5vh);
  border: calc(0.15vw) solid dodgerblue;
  width: calc(70vw);
  height: calc(70vh);
  overflow-y: auto;
}
</style>
