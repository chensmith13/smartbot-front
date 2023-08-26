import vuexEsm from "vuex";
import Vue from "vue";
import login from "@/store/login";
import register from "@/store/register";
import forget from "@/store/forget";
import user from "@/store/user";
import userhome from "@/store/userhome";
import useravatar from "@/store/useravatar";
import usercommunity from "@/store/usercommunity";
import usermanagement from "@/store/usermanagement";
import useremail from "@/store/useremail";
import userauth from "@/store/userauth";
import userhistory from "@/store/userhistory";
import adminapply from "@/store/adminapply";
Vue.use(vuexEsm)

export default new vuexEsm.Store({
    modules:
        {
            login,
            register,
            forget,
            user,
            userhome,
            useravatar,
            usercommunity,
            usermanagement,
            useremail,
            userauth,
                userhistory,
            adminapply
        }

})
