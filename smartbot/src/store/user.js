import axios from "axios";

export default
{
    namespaced:true,
    actions:{
        change(context,value)
        {
            axios.get('/api/user'+'/avatar',{
            }).then(
                response=>
                {
                    var src=response.data.data.address
                    context.commit('Change',src)
                }
            )
        },
        changenum(context,value)
        {
            context.commit('Changenum',value)
        }
    },
    mutations:{
        Change(state,value)
        {
            state.src=value
        },
        Changenum(state,value)
        {
            state.num=value
        }
    },
    state:{
        num:'',
        src:'@/assets/img/img.png',
        server:'http://localhost:80/api/user',
        SAVE_OK:20011,
        INSERT_OK:20021,
        UPDATE_OK:20031,
        DELETE_OK:20041,
        Get_OK:20051,
        SAVE_ERROR:20010,
        INSERT_ERROR:20020,
        UPDATE_ERROR:20030,
        DELETE_ERROR:20040,
        Get_ERROR:20050
    },
    getters:{
        staticrescomlev(state)
        {
            return '../../..'+state.staticres
        }
    },
}
