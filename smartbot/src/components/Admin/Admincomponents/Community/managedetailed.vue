<template>
  <div class="modal fade"  id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" @click="close1('myModal')" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <img :src="mssrc" class="img-circle" width="30" height="30" alt="头像"/>
        <h4 class="modal-title" id="myModalLabel">{{mcontent}}</h4>
        </div>
      <div class="modal-body">
          <div  v-for="(mydata,index) in alldata.list" :key="index">
            <div v-if="index==0&&mydata.rcontent==='暂无回答'">
              {{mydata.rcontent}}
            </div>
            <div v-else="" >
              <img v-if="mydata.user.address==='none'" :src="mydata.status=='expert'?require('@/assets/img/ellin.png'):require('@/assets/img/img.png')" class="img-circle" width="30" height="30" alt="头像"/>
              <img v-else="" :src='"http://localhost:80/api/gg/"+mydata.user.address' class="img-circle" width="30" height="30" alt="头像"/>
              <span>{{mydata.user.name}}    </span>
              <span v-show="mydata.user.status=='expert'" class="label label-success">专家</span>
              <span>{{mydata.rtime}}</span>
              <div> <p class="fs-4" id="community_detail_content01">{{mydata.rcontent}}</p></div>
              <div class="community_detail01"> <div class="thumb-a"> <label class="dianzanlabel" > <input  @click="bad(mydata.rid,index)" :disabled="mydata.isevaluated===1?'disabled':false" :checked="mydata.isevaluated===2?'checked':false" type="checkbox" class="mycheckbox" id="'+id2+'" hidden> <svg  t="1648040495290" class="icon dianzansvg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5400" height="50" width="300"><path class="heartclass" d="M320 189.6v343.2c0 10.4 5.6 20 14.4 25.6 80 48 220.8 168.8 220.8 271.2 0 4.8-5.6 66.4 40.8 66.4 0 0 118.4-28 44.8-320h208s48 4 48-48.8c0 0 2.4-66.4-68-324.8 0 0-21.6-74.4-48.8-74.4 0 0-340 32-430.4 32-16.8 0-29.6 12.8-29.6 29.6zM146.4 155.2l96 4c8 1.6 13.6 8 13.6 16v355.2c0 8-5.6 14.4-13.6 16l-96 3.2c-9.6 1.6-18.4-5.6-18.4-16V171.2c0-10.4 8.8-17.6 18.4-16z" p-id="5401"></path></svg> <span class="thumbclass"></span></label></div>
                <div class="thumb-b"> <label class="dianzanlabel" > <input @click="good(mydata.rid,index)"  :disabled="mydata.isevaluated===2?'disabled':false" :checked="mydata.isevaluated===1?'checked':false" type="checkbox"  class="mycheckbox" hidden> <svg t="1639041971928" class="icon dianzansvg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3128"><path  class="heartclass" d="M512 896a42.666667 42.666667 0 0 1-30.293333-12.373333l-331.52-331.946667a224.426667 224.426667 0 0 1 0-315.733333 223.573333 223.573333 0 0 1 315.733333 0L512 282.026667l46.08-46.08a223.573333 223.573333 0 0 1 315.733333 0 224.426667 224.426667 0 0 1 0 315.733333l-331.52 331.946667A42.666667 42.666667 0 0 1 512 896z" p-id="3129" ></path></svg> <span class="thumbclass"></span> </label><div class="community_detail02"><span >{{mydata.rrank}}</span></div> </div> </div>
              <button @click="deletetheans(mydata.rid)" class="btn btn-danger" id="delete_community_detail">删除</button>
            </div>
            <hr>
          </div>
        </div>
      <div class="modal-footer" id="community_detail06">
        <hr/>
        <div>
          <button type="button" class="btn btn-default" @click="close1('myModal')" >关闭</button>
        </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapState} from "vuex";

export default {
  name: "managedetailed",
  mounted() {
    this.$on('toggle',this.toggle);
  },
  data()
  {
    return{
      mid:'',
      mcontent:'',
      alldata:{
        address:'',
        list:[],
        mid:'',
        myanswer:{}
      },
      newcontent:'',
      show:false
    }
  },
  computed:
      {
        ...mapState('usercommunity',['server','SAVE_OK','INSERT_OK','UPDATE_OK','DELETE_OK','Get_OK','SAVE_ERROR',
          'INSERT_ERROR','UPDATE_ERROR','DELETE_ERROR','Get_ERROR']),
        mssrc()
        {
          var msrc=this.alldata.address
          if(msrc==="none"||msrc==='@/assets/img/img.png')
            msrc=require("@/assets/img/img.png");
          else
            msrc="http://localhost:80/api/gg/"+msrc
          return msrc
        }
      },
  methods:{
    toggle()
    {
      axios.post(this.server+'/querydetail',{
        mid:parseInt(this.mid)
      }).then(
          response=>
          {
            this.alldata.address=response.data.data.address
            this.alldata.mid=response.data.data.mid
            this.alldata.list=response.data.data.list
            this.alldata.myanswer=response.data.data.myanswer
            this.newcontent=this.alldata.myanswer.rcontent
            this.show=false
            $("#myModal").modal("show")
          }
      )
    },
    close1(id) {
      $("#myModal").modal('hide');
  },
    toreply()
    {
      $(".myans").slideToggle("fast");
    },
    good(rid,i)
    {
      if(i==-1)
      {
        if(this.alldata.myanswer.isevaluated==0)
        {
          this.alldata.myanswer.isevaluated=1;
          this.alldata.myanswer.rrank+=1;
          axios.post(this.server+'/mygood',
              {
                rid:rid,
                isevaluated:1
              })
        }
        else {
          this.alldata.myanswer.isevaluated=0;
          this.alldata.myanswer.rrank-=1;
          axios.post(this.server+'/mybad',
              {
                rid:rid,
                isevaluated:0
              })
        }
      }
      else if(this.alldata.list[i].isevaluated==0)
      {
        this.alldata.list[i].isevaluated=1;
        this.alldata.list[i].rrank+=1;
        axios.post(this.server+'/mygood',
            {
              rid:rid,
              isevaluated:1
            })
      }
      else {
        this.alldata.list[i].isevaluated=0;
        this.alldata.list[i].rrank-=1;
        axios.post(this.server+'/mybad',
            {
              rid:rid,
              isevaluated:0
            })
      }
    },
    bad(rid,i)
    {
      if(i==-1)
      {
        if(this.alldata.myanswer.isevaluated==0)
        {
          this.alldata.myanswer.isevaluated=2;
          this.alldata.myanswer.rrank-=1;
          axios.post(this.server+'/mybad',
              {
                rid:rid,
                isevaluated:2
              })
        }
        else {
          this.alldata.myanswer.isevaluated=0;
          this.alldata.myanswer.rrank+=1;
          axios.post(this.server+'/mygood',
              {
                rid:rid,
                isevaluated:0
              })
        }
      }
      else if(this.alldata.list[i].isevaluated==0)
      {
        this.alldata.list[i].isevaluated=2;
        this.alldata.list[i].rrank-=1;
        axios.post(this.server+'/mybad',
            {
              rid:rid,
              isevaluated:2
            })
      }
      else {
        this.alldata.list[i].isevaluated=0;
        this.alldata.list[i].rrank+=1;
        axios.post(this.server+'/mygood',
            {
              rid:rid,
              isevaluated:0
            })
      }
    },
    newreply(mid)
    {
      if(this.newcontent==='')
      {
        alert("请不要输入空内容")
      }
      else {
        axios.post(this.server+'/newreply',{
          mid,
          rcontent:this.newcontent
        }).then(
            response=>
            {
              $("#myModal").modal('hide');
              alert("回答成功")
              this.toggle();
            }
        )
      }
    },
    reviseans()
    {
      this.show=false
      $(".myans").slideDown("fast");
    },
    cancle()
    {
      this.show=true
      $(".myans").slideUp("fast");
    },
    tosubmit() {
      axios.post(this.server+'/updatereply',
          {
            rid:this.alldata.myanswer.rid,
            rcontent:this.newcontent
          }).then(
              response=>
              {
                $("#myModal").modal('hide');
                alert("修改成功");
                this.toggle();
              }
      )
    },
    deleteans() {
      axios.post(this.server+"/delete",{rid:this.alldata.myanswer.rid}
      ).then(
          response=>
          {
            $("#myModal").modal('hide');
              alert("删除成功");
              this.toggle()
          }
      )
    },
    deletetheans(rid)
    {
      axios.post(this.server+"/delete",{rid}
      ).then(
          response=>
          {
            $("#myModal").modal('hide');
            alert("删除成功");
            this.toggle()
          }
      )
    },
  }
}
</script>

<style scoped>

</style>
