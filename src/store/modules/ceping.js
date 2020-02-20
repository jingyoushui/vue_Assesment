const ceping ={
    state:{
        //测评票模板类别，1-7
        ceping_type:null,
        //说明或备注
        note:'',
        //部门
        department:'',
        date:'',
        //测评人姓名数组
        namelist:[{
            name:'',
        },],
        //这是测评模板3的
        content:[{
            id:'',
            //被测评人所在部门
            dep:'',
            name:'',
            now_ji:'',
            next_ji: '',

        }],
        input_num:1,

    },
    getters:{
        ceping_type:state=>state.ceping_type,
        note:state=>state.note,
        department:state=>state.department,
        date:state=>state.date,
        namelist:state=>state.namelist,
        input_num: state=>state.input_num,
    },
    mutations:{
        SET_CEPING_TYPE:(state,type)=>{
            state.ceping_type = type
        },
        SET_NOTE:(state, note)=>{
            state.note = note

        },
        SET_DEPARTMENT:(state,department)=>{
            state.department = department
        },
        SET_DATE:(state,date)=>{
            state.date = date
        },
        SET_NAMELIST:(state,namelist)=>{
            state.namelist = namelist
        },
        SET_INPUT_NUM:(state,input_num)=>{
            state.input_num =  input_num
        }
    }
}

export default ceping;
