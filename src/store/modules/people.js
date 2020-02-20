
const people = {
    state:{
        //用于保存所选的用户名称
        peoplename:[],
        //用于保存所选的用户id
        peopleid:[],

        //选择投票级别的信息
        jibie:0,
        value: 50,
        JBtext:["一级(所有人都能看到其他人投票结果)","二级(除发布者可以看到所有人投票结果和汇总结果，其他人只能看到自己投票结果和汇总结果)",
            "三级(除发布者可以看到所有人投票结果和汇总结果，其他人只能看到自己投票结果)","四级(发布者只能看到汇总结果，其他人只能看到自己投票结果)",
            "五级(发布者只能看汇总结果，其他人阅后即焚)"],
    },
    getters:{
        peoplename:state=>state.peoplename,
        peopleid:state=>state.peopleid,
        jibie: state=>state.jibie,
        value:state=>state.value,
        JBtext: state=>state.JBtext,
    },
    mutations:{
        SET_PEOPLENAME:(state,peoplename)=>{
            state.peoplename = peoplename
        },
        SET_PEOPLEID:(state,peopleid) =>{
            state.peopleid = peopleid
        },
        SET_JIBIE:(state,jibie)=>{
            state.jibie = jibie
        },
        SET_VALUE:(state,value)=>{
            state.value= value
        }
    }
}

export default people
