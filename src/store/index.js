import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const type = {
    LOGIN:'login',
    LOGOUT:'logout',
    TITLE:'title',
    LOGS:'logs',
    DELETELOGS:'dellogs',
    MENUSTATE:'menustate',
}

const store = new Vuex.Store({
    state:{
        user:{},
        token:null,
        title:'',
        logs:[],
        menustate:false,
    },
    mutations:{
        [type.LOGIN]: (state, data) => {
            localStorage.token = data;
            state.token = data;
        },
        [type.LOGOUT]: (state) => {
            localStorage.removeItem('token');
            state.token = null;
        },
        [type.TITLE]: (state, data) => {
            state.title = data;
        },
        [type.LOGS]: (state, data)=> {
            state.logs.push(data);
        },
        [type.DELETELOGS]: (state, path)=>{
            
            for(let i=0; i<state.logs.length; i++){
                if(state.logs[i].path==path){
                    state.logs.splice(i, 1);
                    return;
                }
            }

            
        },
        [type.MENUSTATE]: (state, status)=>{
            state.menustate  = status
        }
    }

})

export default store