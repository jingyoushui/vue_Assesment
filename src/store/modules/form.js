
const form = {
    state:{
        //卡片的个数
        num: 1,
        //输入框
        inputBT: [],
        //组件的类型
        optiontype: [],

        //下面待优化
        //单选按钮的选项个数
        radionum: [2],
        //单选按钮名字
        radioname: [[]],

        //多选按钮的选项个数
        checkboxnum: [2],
        //多选按钮名字
        checkboxname: [[]],

        //下拉框的选项个数
        selectnum: [2],
        //下拉框名字
        selectname: [[]],
        //下拉选择框
        options: [{
            val: 'input',
            label: '文本'
        }, {
            val: 'InputNumber',
            label: '数字'
        }, {
            val: 'radio',
            label: '单选按钮'
        }, {
            val: 'checkbox',
            label: '多选按钮'
        }, {
            val: 'select',
            label: '下拉选择'
        }, {
            val: 'rate',
            label: '评分'
        }],
    },
    getters:{
        num:state=>state.num,
        inputBT:state => state.inputBT,
        optiontype:state => state.optiontype,
        radionum:state=> state.radionum,
        radioname:state=>state.radioname,
        checkboxnum:state=>state.checkboxnum,
        checkboxname:state=>state.checkboxname,
        selectnum:state=>state.selectnum,
        selectname:state=>state.selectname,
        options: state=>state.options,

    },
    mutations:{
        SET_NUM:(state,num)  =>{
            state.num = num
        },
        SET_INPUTBT:(state,inputBT) =>{
            state.inputBT = inputBT
        },
        SET_OPTIONTYPE:(state,optiontype) =>{
            state.optiontype = optiontype
        },
        SET_RADIONUM:(state,radionum) =>{
            state.radionum = radionum
        },
        SET_RADIONAME:(state,radioname) =>{
            state.radioname = radioname
        },
        SET_CHECKBOXNUM:(state,checkboxnum)=>{
            state.checkboxnum = checkboxnum
        },
        SET_CHECKBOXNAME:(state,checkboxname) =>{
            state.checkboxname = checkboxname
        },
        SET_SELECTNUM:(state,selectnum)=>{
            state.selectnum = selectnum
        },
        SET_SELECTNAME:(state,selectname)=>{
            state.selectname = selectname
        },
        SET_FORM:(state,form) =>{
            state.num = form.num
            state.inputBT = form.inputBT
            state.optiontype = form.optiontype
            state.radionum = form.radionum
            state.radioname = form.radioname
            console.log((form))
            state.checkboxnum = form.checkboxnum
            state.checkboxname = form.checkboxname
            state.selectnum = form.selectnum
            state.selectname = form.selectname
        }

    },

}

export default form;
