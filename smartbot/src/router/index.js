import VueRouter from "vue-router";
import LoginView from "@/components/Login/LoginView";
import RegisterView from "@/components/Register/RegisterView";
import ForgetView from "@/components/Forget/ForgetView";
import UserView from "@/components/User/UserView";
import requesthome from "@/components/User/Usercomponents/Userhome/requesthome";
import changeavatar from "@/components/User/Usercomponents/Avatar/changeavatar";
import test from "@/components/test"
import email from "@/components/User/Usercomponents/Changeemail/email";
import auth from "@/components/User/Usercomponents/Auth/auth";
import community from "@/components/User/Usercomponents/Community/community";
import history from "@/components/User/Usercomponents/History/history";
import management from "@/components/User/Usercomponents/Management/management";
import mygame from "@/components/User/Usercomponents/mygame";
import AdminView from "@/components/Admin/AdminView";
import manageapply from "@/components/Admin/Admincomponents/Apply/manageapply";
import managecommunity from "@/components/Admin/Admincomponents/Community/managecommunity";
export default new VueRouter({
    routes:[
        {
            name:'login',
            path:'/login',
            component:LoginView,
            children:[],
            props({query:{}})
            {
                return
            }
        },
        {
            name:'register',
            path:'/register',
            component:RegisterView
        },
        {
            name:'forget',
            path:'/forget',
            component:ForgetView
        },
        {
            name:'user',
            path:'/user',
            component:UserView,
            children:[
                {
                    name:'requesthome',
                    path:'/requesthome',
                    component:requesthome
                },
                {
                    name:'changeavatar',
                    path:'/changeavatar',
                    component:changeavatar
                },
                {
                    name:'test',
                    path:'/test',
                    component:test
                },
                {
                    name:'auth',
                    path:'/auth',
                    component:auth
                },
                {
                    name:'email',
                    path:'/email',
                    component:email
                },
                {
                    name:'community',
                    path:'/community',
                    component:community
                },
                {
                    name:'history',
                    path:'/history',
                    component:history
                },
                {
                    name:'management',
                    path:'/management',
                    component:management
                },
                {
                    name:'mygame',
                    path:'/mygame',
                    component:mygame
                }

            ]
        },
        {
            name:'admin',
            path:'/admin',
            component:AdminView,
            children:
                [
                    {
                        name:'adminchangeavatar',
                        path:'/adminchangeavatar',
                        component:changeavatar
                    },
                    {
                    name:'adminemail',
                    path:'/adminemail',
                    component:email
                },
                    {
                        name:'adminmanagement',
                        path:'/adminmanagement',
                        component:management
                    },
                    {
                        name: 'apply',
                        path: '/apply',
                        component: manageapply
                    },
                    {
                        name:'managecommunity',
                        path: '/managecommunity',
                        component: managecommunity
                    }
                ]
        }
    ]
})
