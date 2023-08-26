<template>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" onclick="" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">改绑邮箱</h4>
          </div>
          <div class="modal-body">
            <div><input name="email" type="email" id="inputemail" placeholder="请输入新邮箱地址">
              <div id="checkoemail01"> <button class="btn btn-default" @click="tochangeemail()">确认修改</button><button type="button" class="btn btn-default" @click="close1" id="checkoemail02">关闭</button>
              </div>
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
  name: "checkemail",
  mounted() {
    this.$on('toggle',this.toggle);
  },
  computed:
      {
        ...mapState('useremail',['server','SAVE_OK','INSERT_OK','UPDATE_OK','DELETE_OK','Get_OK','SAVE_ERROR',
          'INSERT_ERROR','UPDATE_ERROR','DELETE_ERROR','Get_ERROR']),
      },
  methods:
      {
        toggle()
        {
          $("#myModal").modal("show")
        },
        close1(id) {
          $("#myModal").modal('hide');
        },
        tochangeemail()
        {
          var check1=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
          var check2=/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
          if( check1.test($("#inputemail").val())&&check2.test($("#inputemail").val()))
          {
            var email=$("#inputemail").val();
            axios.post(this.server+'/changeemail',{
              email
            }).then(
                response=>
                {
                  setTimeout(function () {
                    $("#myModal").modal('hide');
                    alert("修改成功");
                  },1000);
                }
            )
          }
          else
          {
            alert("请输入正确的邮箱地址");
          }
        }
      }
}
</script>

<style scoped>

</style>
