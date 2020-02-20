

const muban = {
    state:{
        mubanid:null,
        userid:null,
        title:'',
        miaoshu:'',
        content:'',//对应formrule
        isshare:null,
        imageurl:'',
        type:null,

    },
    getters:{
        mubanid: state => state.mubanid,
        userid: state => state.userid,
        title: state => state.title,
        miaoshu: state=> state.miaoshu,
        content: state=> state.content,
        isshare: state => state.isshare,
        imageurl:state => state.imageurl,
        type: state => state.type,
    },
    mutations:{
        SET_MUBANID:(state, mubanid)=>{
            state.mubanid = mubanid
        },
        SET_USERID:(state, userid) =>{
            state.userid = userid
        },
        SET_TITLE:(state, title) =>{
            state.title= title
        },
        SET_MIAOSHU:(state, miaoshu)=>{
            state.miaoshu = miaoshu
        },
        SET_CONTENT:(state, content)=>{
            state.content= content
        },
        SET_ISSHARE:(state, isshare) =>{
            state.isshare = isshare
        },
        SET_IMAGEURL:(state, imageurl) =>{
            state.imageurl = imageurl
        },
        SET_TYPE:(state, type)=>{
          state.type = type
        }






    }
}

export default muban;
