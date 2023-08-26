<template>
  <div>
    <div id=findsolvedhistory_01>
      <div><img src="@/assets/img/expert_regulate.png" id="history_img"></div>
      <div id=findsolvedhistory_02>
        <div v-if="totalnum==0">
          <h1>暂无专家认证申请</h1>
        </div>
        <div v-else="">
          <div>共{{totalnum}}条待处理的专家认证申请</div>
          <div id=findsolvedhistory_03>
            <table class="table table-hover">
              <tr><td>序号</td><td>姓名</td><td>超过100赞的回答数目</td><td></td><td></td></tr>
              <tr v-for="(mydata,index) in datadetail" :key="index">
                  <td>{{index+1}}</td>
                  <td>{{mydata.name}}</td>
                  <td>{{mydata.num}}</td>
                  <td><button @click="accept(mydata.account)" class="btn-primary">同意</button></td>
                  <td><button class="btn-danger" @click="refuse(mydata.account)">拒绝</button></td>
              </tr>
            </table>
          </div>
          <nav aria-label="Page navigation example"><ul class="pagination"><li @click=queryapply(currentpage-1) class="page-item" ><a class="page-link" >上一页</a></li>
            <li v-for="i in totalpage" @click="queryapply(i)" class="page-item" aria-current="page"><a class="page-link" href="#">{{i}}</a></li>
            <li @click=queryapply(currentpage+1) class="page-item"><a class="page-link" href="#">下一页</a></li></ul></nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapState} from "vuex";

export default {
  name: "manageapply",
  mounted() {
    this.queryapply(1)
  },
  data()
  {
    return{
      totalpage:1,
      totalnum:0,
      datadetail:'',
      currentpage:1
    }
  },
  methods:
      {
        queryapply( num)
        {
          this.currentpage=num
          if(num>this.totalpage)
            num=this.totalpage
          else if(num<=0)
            num=1
          axios.post(this.server+'/query',{
            currentpage:num,
            row:10
          }).then(
              response=>
              {
                this.totalpage=response.data.data.totalpage
                this.totalnum=response.data.data.totalcount
                this.datadetail=response.data.data.list
              }
          )
        },
        accept(account){
          axios.post(this.server+'/accept',{
            account
          }).then(
              response=>
              {
                alert("操作成功！");
                this.queryapply(this.currentpage);
              }
          )
        },
        refuse(account)
        {
          axios.post(this.server+'/refuse',{
            account
          }).then(
              response=>
              {
                alert("操作成功！");
                this.queryapply(this.currentpage);
              }
          )
        },
      },
  computed:
      {
        ...mapState('adminapply',['server','SAVE_OK','INSERT_OK','UPDATE_OK','DELETE_OK','Get_OK','SAVE_ERROR',
          'INSERT_ERROR','UPDATE_ERROR','DELETE_ERROR','Get_ERROR']),
      }
}
</script>

<style scoped>
#findsolvedhistory_01{
  margin-left: calc(8vw);
  padding: calc(1vh);
  width: calc(75vw);
  height: calc(60vh);
}
#myimg{
  text-align: center;
}
#history_img{
  width: calc(70vw);
  height: calc(8vh);
  display:inline-block
}
nav
{
  flex: border-box;
}
#findsolvedhistory_02{
  margin-top: calc(2vh);
  padding: calc(5vh);
  border: calc(0.15vw) solid dodgerblue;
  width: calc(70vw);
  height: calc(70vh);
  overflow-y: auto;
}
</style>
