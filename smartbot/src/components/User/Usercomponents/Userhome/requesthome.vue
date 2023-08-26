<template>
  <div id="rg_center">
    <div id="rg_center_left" class="leaderboard">
      <h1> <svg class="ico-cup"> <use xlink:href="#cup"></use>
  </svg>用户常见问题：</h1><ol>
    <li v-for="(m,index) in this.message" :key="index" :id="'hot'+index"  @click="clickhot('hot'+index)">{{m.mcontent}}</li>
    </ol></div><div id="rg_center_right" class="chatContainer"><div class="chatBox" ref="chatBox">
    <div class="chatBox-head"><div class="chatBox-head-two"><div class="chat-people">
      <div class="ChatInfoHead"><img src="@/assets/img/robot.png" alt="头像"/></div>
      <div class="ChatInfoName">QAQ问答机器人</div></div></div></div><div class="chatBox-info">
    <div class="chatBox-kuang" ref="chatBoxkuang"><div class="chatBox-content">
    <div class="chatBox-content-demo" id="chatBox-content-demo"><div class="clearfloat"><div class="author-name">
    <small class="chat-date"></small></div><div class="left"><div class="chat-avatars"><img src="@/assets/img/robot.png" alt="头像"/></div>
    <div class="chat-message">您可以向我提问任何您想要问的问题=^_^=</div></div><br><div class="clear" style="clear:both;padding: 1%;"></div>
    <div class="left">
      </div></div></div><div id="msg_end" style="height:0px; overflow:hidden"></div></div>
    <div class="list-group" style="display: none;z-index: 2500;"><a href="#" class="list-group-item list-group-item-action">QAQ</a>
      <a href="#" class="list-group-item list-group-item-action">QBQ</a>
      <a href="#" class="list-group-item list-group-item-action">QCQ</a>
      <a href="#" class="list-group-item list-group-item-action">QDQ</a>
      <a href="#" class="list-group-item list-group-item-action">QEQ</a>
    </div>
      <div class="chatBox-send">
        <div ref="query" class="div-textarea" contenteditable="true"></div>
        <div style="margin-left: 1%;margin-top: 0.5%">
          <button id="chat-biaoqing" class="btn-default-styles">
            <i class="iconfont icon-biaoqing"></i> </button>
          <label id="chat-tuxiang" title="发送图片" for="inputImage" class="btn-default-styles">
            <input type="file"  accept="image/jpg,image/jpeg,image/png" name="file" id="inputImage" class="hidden">
            <i class="iconfont icon-tuxiang"></i> </label>
          <button @click="clickquery"  class="btn-default-styles"><i class="iconfont icon-fasong"></i> </button>
        </div>
        <div class="biaoqing-photo"> <ul> <li><span class="emoji-picker-image" style="background-position: -9px -18px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -40px -18px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -71px -18px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -102px -18px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -133px -18px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -164px -18px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -9px -52px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -40px -52px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -71px -52px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -102px -52px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -133px -52px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -164px -52px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -9px -86px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -40px -86px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -71px -86px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -102px -86px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -133px -86px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -164px -86px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -9px -120px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -40px -120px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -71px -120px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -102px -120px;"></span> </li>
          <li><span class="emoji-picker-image" style="background-position: -133px -120px;"></span> </li>
          <li><span class="emoji-picker-image" style="background-position: -164px -120px;"></span> </li>
          <li><span class="emoji-picker-image" style="background-position: -9px -154px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -40px -154px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -71px -154px;"></span></li>
          <li><span class="emoji-picker-image" style="background-position: -102px -154px;"></span> </li>
          <li><span class="emoji-picker-image" style="background-position: -133px -154px;"></span> </li>
          <li><span class="emoji-picker-image" style="background-position: -164px -154px;"></span> </li>
        </ul> </div> </div> </div> </div> </div> </div>
    <div id="question"></div>
    <div id="answer"></div>
  </div>
</template>

<script>
import axios from "axios";
import user from "../../../../assets/js/usermounted.js"
import {mapState} from "vuex";
import $ from '@/assets/js/jquery3.6.0.js'
import question from "@/components/User/Usercomponents/Userhome/question";
import answer from "@/components/User/Usercomponents/Userhome/answer";
import Vue from "vue";
export default {
  name: "requesthome",
  mounted() {
    user.mount();
    this.hotest();
    let that=this;
    console.log(that.$store.state.user.src)
  },
  data()
      {
        return{
          clickflag:true,
          message:[],
          gptreply:'undefined'
        }
      },
  components:{question,answer},
  methods:
      {
        addhot(mcontent)
        {
          axios.patch(this.server+'/addhot',
              {
                mcontent
              })
        },
        askgpt(content)
        {
          const engine="gpt-3.5-turbo"
           prompt=content
          var messages=[{'role':'user','content':prompt}]
          axios.post(
              'https://chatgptproxyapi-65a.pages.dev/api/v1/chat/completions',
              {
                messages,
                model: engine,
                max_tokens:1000
              },
              {
                headers:
                    {
                      'Content-Type':'application/json',
                      'Authorization':'Bearer '+'此处填你的bearer'
                    }
              }
          ).then(
              response=>
              {
                let answer=response.data.choices[0].message.content
                answer=answer.replaceAll('\n','')
                this.gptreply=answer
              }
          )
        },
        mytest(event)
        {
          event.preventDefault()
        },
        good(mcontent,answer,rid=-1)
        {
          axios.patch(this.server+'/satisfied',{
            question:
                {
                  mcontent,
                },
            answer:
                {
                  rid,
                  rcontent:answer,
                }
          }).then(
              response=>
              {
                this.addhot(mcontent)
                  }
          )
          this.unlock();
        },
        bad(mcontent,status,rid=-1)
        {
          if(rid!==-1)
          {
            axios.patch(this.server+'/unsatisfied',
                {rid})
          }
          this.buttondel();
          this.query(mcontent,status)
        },
        unlock()
        {
          this.clickflag=true
          $(".mybutton").slideUp("fast");
          $(".div-textarea").html("");
          $(".div-textarea").removeClass("notclick");
          $("#chat-fasong").removeClass("notclick");
        },
        buttondel()
        {
          $(".mybutton").slideUp("fast");
        },
        hotest()
        {
          axios.get(this.server+'/hotest').then(
              response=>
              {
                this.message=response.data.data
              },
          )
        },
        create_ans(mcontent,myanswer,status,time,rid)
        {
          var answer1=Vue.extend(answer)
          var instance=new (answer1)({propsData:{
              mcontent:mcontent,
              answer:myanswer,
              status,
              time,
              rid
            }}).$mount("#answer")
          instance.$on('good',this.good)
          instance.$on('bad',this.bad)
          document.getElementById("chatBox-content-demo").appendChild(instance.$el);
          $(document).ready(function () {
                $("#chatBox-content-demo").scrollTop($("#chatBox-content-demo")[0].scrollHeight);
              }
          )
        },
         query(mcontent,status)
        {
          if(status==='gpt')
          {
            let status='community'
            let time = new Date().format("yyyy-MM-dd hh:mm:ss")
            var tid=setInterval(()=>
            {
              if(this.gptreply!=='undefined')
              {
                this.create_ans(mcontent,this.gptreply,status,time)
                this.gptreply='undefined'
                clearInterval(tid)
              }

            },1000)
          }
          else if(status==='community')
          {
            this.submitcommunity(mcontent);
          }
          else if(status==='sql')
          {
            this.askgpt(mcontent)
            axios.post(this.server+'/query',{
              mcontent,
              status
            }).then(
                response=>
                {
                  let rid=-1
                  let myanswer=response.data.data.rcontent;
                  let status=response.data.data.status;
                  if(status==='spider')
                     rid=response.data.data.rid;
                  var time = new Date().format("yyyy-MM-dd hh:mm:ss")
                  this.create_ans(mcontent,myanswer,status,time,rid)
                }
            )
          }
          else if(status==='spider') {
            axios.post(this.server+'/query',{
              mcontent,
              status
            }).then(
                response=>
                {
                  let myanswer=response.data.data.rcontent;
                  let status=response.data.data.status;
                  var time = new Date().format("yyyy-MM-dd hh:mm:ss")
                  this.create_ans(mcontent,myanswer,status,time)
                }
            )
          }
        },
        clickquery()
        {
          var question1=Vue.extend(question)
          var textContent = $(".div-textarea").html().replace(/[\n\r]/g, '')
          var time = new Date().format("yyyy-MM-dd hh:mm:ss");
          var instance=new( question1)(
              {
              propsData:
                  {
                    time,
                    textContent,
                    path:this.path,
                    src:this.$store.state.user.src
                  }}).$mount("#question")
          if (textContent != "") {
            document.getElementById("chatBox-content-demo").appendChild(instance.$el)
            $(".div-textarea").html("")
            $(".div-textarea").html("请评价后输入");
            $(".div-textarea").addClass("notclick");
            $("#chat-fasong").addClass("notclick");
            this.query(textContent,"sql")
            this.clickflag=false
        }
      },
        clickhot(index)
        {
          if(this.clickflag)
          {
            var mcontent=$("#"+index).html().replace(/[\n\r]/g, '')
            var time = new Date().format("yyyy-MM-dd hh:mm:ss");
            var question1=Vue.extend(question)
            var instance=new( question1)({propsData:{
                time,
                textContent:mcontent,
                path:this.path,
                src:this.$store.state.user.src
              }}).$mount("#question")
            document.getElementById("chatBox-content-demo").appendChild(instance.$el)
            $(".div-textarea").html("")
            $(".div-textarea").html("请评价后输入");
            $(".div-textarea").addClass("notclick");
            $("#chat-fasong").addClass("notclick");
            this.clickflag=false
            this.query(mcontent,'sql')
          }
        },
        submitcommunity(mcontent)
        {
          axios.put(this.server+'/submit',{
            question:
                {
                  mcontent
                }
          }).then(
              response=>
              {
                this.addhot(mcontent)
                this.unlock()
                alert(response.data.msg)
              }
          )
        },
        },
  computed:
      {
        ...mapState('userhome',['server','SAVE_OK','INSERT_OK','UPDATE_OK','DELETE_OK','Get_OK','SAVE_ERROR',
          'INSERT_ERROR','UPDATE_ERROR','DELETE_ERROR','Get_ERROR']),
        path()
        {
          return this.$route.params.status=='user'?'/img.png':'/ellin.png';
        }
      }
}
</script>

<style scoped>

</style>
