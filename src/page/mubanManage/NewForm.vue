<template>
    <div>

        <div>
            <el-card class="box-card" style="width: 80%;margin-left: 10%;min-height: 150px;margin-top: 10px;">
                <div>

                </div>
                <el-input class="radio1"
                          placeholder="请输入表单主题"
                          v-model="title"
                          clearable
                          style="width: 100%;font-size: 28px;">
                </el-input>
                <el-input class="textarea"
                          type="textarea"
                          :rows="2"
                          placeholder="请输入表单描述"
                          v-model="miaoshu"
                          style="width: 100%;font-size: 16px;margin-top: 10px;">
                </el-input>
            </el-card>

            <el-card class="box-card" style="width: 80%;margin-left: 10%;min-height: 150px;margin-top: 10px;"
                     v-for="i in form.num"
                     :id="i" :key="i">
                <div>
                    <el-tag>{{i}}</el-tag>
                    <el-input
                            placeholder="请输入内容"
                            v-model="form.inputBT[i-1]"
                            clearable
                            style="width: 75%;">
                    </el-input>

                    <el-select v-model="form.optiontype[i-1]" placeholder="请选择" style="width: 18%;float:right;">
                        <el-option
                                v-for="item in options"
                                :key="item.val"
                                :label="item.label"
                                :value="item.val">
                        </el-option>
                    </el-select>
                </div>
                <div style="width: 100%;height: 0;margin-top:5px;border: solid 0.5px lightgrey"></div>
                <div v-if="form.optiontype[i-1]=='input'" style="color: grey;margin-top: 20px;">
                    待填写者写入文本
                </div>

                <div v-if="form.optiontype[i-1]=='InputNumber'" style="color: grey;margin-top: 20px;">
                    待填写者写入数字
                </div>
                <div class="radio" v-if="form.optiontype[i-1]=='radio'" style="color: grey;margin-top: 20px;">

                    <div v-for="j in form.radionum[i-1]" :id="j">
                        ○
                        <el-input
                                placeholder="请输入选项名"
                                v-model="form.radioname[i-1][j-1]"
                                clearable
                                style="width: 80%;">
                        </el-input>

                    </div>
                    <div>
                        <el-button type="text" @click="addradio(i-1)"><i class="el-icon-circle-plus-outline"
                                                                         style="font-size: 20px;margin-top: 10px"></i>
                        </el-button>
                        <el-button type="text" @click="deleteradio(i-1)"><i class="el-icon-remove-outline"
                                                                            style="font-size: 20px;margin-top: 10px"></i>
                        </el-button>
                    </div>

                </div>

                <div class="radio" v-if="form.optiontype[i-1]=='checkbox'" style="color: grey;margin-top: 20px;">

                    <div v-for="j in form.checkboxnum[i-1]" :id="j">
                        □
                        <el-input
                                placeholder="请输入选项名"
                                v-model="form.checkboxname[i-1][j-1]"
                                clearable
                                style="width: 80%;">
                        </el-input>

                    </div>
                    <div>
                        <el-button type="text" @click="addcheckbox(i-1)"><i class="el-icon-circle-plus-outline"
                                                                            style="font-size: 20px;margin-top: 10px"></i>
                        </el-button>
                        <el-button type="text" @click="deletecheckbox(i-1)"><i class="el-icon-remove-outline"
                                                                               style="font-size: 20px;margin-top: 10px"></i>
                        </el-button>
                    </div>

                </div>
                <div class="radio" v-if="form.optiontype[i-1]=='select'" style="color: grey;margin-top: 20px;">

                    <div v-for="j in form.selectnum[i-1]" :id="j">
                        {{j}}、
                        <el-input
                                placeholder="请输入选项名"
                                v-model="form.selectname[i-1][j-1]"
                                clearable
                                style="width: 80%;">
                        </el-input>

                    </div>
                    <div>
                        <el-button type="text" @click="addselect(i-1)"><i class="el-icon-circle-plus-outline"
                                                                          style="font-size: 20px;margin-top: 10px"></i>
                        </el-button>
                        <el-button type="text" @click="deleteselect(i-1)"><i class="el-icon-remove-outline"
                                                                             style="font-size: 20px;margin-top: 10px"></i>
                        </el-button>
                    </div>

                </div>


            </el-card>
            <div style="text-align: right;width:80%;margin-left: 10%;margin-top: 10px;">
                <el-tooltip class="item" effect="light" content="添加新组件" placement="top">
                    <el-button type="text" @click="adddiv" style="font-size: 30px;"><i class="el-icon-circle-plus"></i>
                    </el-button>
                </el-tooltip>

                <el-tooltip class="item" effect="light" content="删除组件" placement="top">
                    <el-button type="text" @click="delectdiv" style="font-size: 30px;"><i class="el-icon-remove"></i>
                    </el-button>
                </el-tooltip>


            </div>
            <div style="text-align: center;padding-bottom: 20px;">
                <el-button type="primary" @click="tijiao()">预览发布</el-button>
            </div>
        </div>


    </div>
</template>

<script>
    import qs from 'qs'
    export default {
        name: "NewForm",

        data() {
            return {
                list:{},
                //新保存模板id
                mubanid: null,
                title: '',
                miaoshu: '',
                form: {
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

                },

                //下拉选择框
                options: [],
                //生成的表单规则
                formrule: [],
                //表单实例对象
                yulanform: {},
                dataURL: "",
                //用来判断是否来自返回修改
                where:null,
            }
        },
        mounted() {
            this.options = this.$store.state.form.options
            this.where = this.$route.query.where
            if(this.where!=null){
                this.getForm();
            }

        },
        methods: {
            getForm() {

                this.title = this.$store.state.muban.title
                this.miaoshu = this.$store.state.muban.miaoshu
                this.form.num = this.$store.state.form.num
                this.form.inputBT = this.$store.state.form.inputBT
                this.form.optiontype = this.$store.state.form.optiontype
                this.form.radionum = (this.$store.state.form.radionum)
                this.form.radioname = this.$store.state.form.radioname
                // console.log(this.form.radioname)
                this.form.checkboxnum =(this.$store.state.form.checkboxnum)
                this.form.checkboxname = this.$store.state.form.checkboxname
                this.form.selectnum = (this.$store.state.form.selectnum)
                this.form.selectname = this.$store.state.form.selectname


                this.$store.commit('SET_USERID', 2);
                console.log((this.form))
            },
            //根据id查找出表单的内容
            findform(id) {
                var parm = qs.stringify({
                    id: id,

                });
                this.$axios.post("/local/findform", parm).then(res => {
                    var list = res.data.list;
                    // console.log(JSON.stringify(list))
                    this.title = list.title
                    this.miaoshu = list.miaoshu
                    this.form.num = list.num
                    this.form.inputBT = list.inputbt
                    this.form.optiontype = list.optiontype
                    this.form.radionum = (list.radionum).map(Number)
                    this.form.radioname = JSON.parse(list.radioname)
                    this.form.checkboxnum = (list.checkboxnum).map(Number)
                    this.form.checkboxname = JSON.parse(list.checkboxname)
                    this.form.selectnum = (list.selectnum).map(Number)
                    this.form.selectname = JSON.parse(list.selectname)


                })
            },
            //增加组件
            adddiv() {
                this.form.num += 1;
                this.form.inputBT.push()
                this.form.radionum.push(2);
                this.form.radioname.push([])
                this.form.checkboxnum.push(2);
                this.form.checkboxname.push([])
                this.form.selectnum.push(2);
                this.form.selectname.push([]);


            },
            //删除组件
            delectdiv() {
                if(this.form.num>1){
                    this.form.num -= 1;
                    this.form.inputBT.pop();
                    this.form.radionum.pop();
                    this.form.radioname.pop();
                    this.form.checkboxnum.pop();
                    this.form.checkboxname.pop()
                    this.form.selectnum.pop();
                    this.form.selectname.pop();
                }

            },
            //增加单选按钮选项，实时更新数组用$set
            addradio(i) {
                this.$set(this.form.radionum, i, this.form.radionum[i] + 1)
                // this.radionum[i] +=1;

            },
            deleteradio(i) {
                this.$set(this.form.radionum, i, this.form.radionum[i] - 1)
            },

            //增加多选按钮选项
            addcheckbox(i) {
                this.$set(this.form.checkboxnum, i, this.form.checkboxnum[i] + 1)
                // this.radionum[i] +=1;

            },
            deletecheckbox(i) {
                this.$set(this.form.checkboxnum, i, this.form.checkboxnum[i] - 1)
            },

            //增加下拉框选项
            addselect(i) {
                this.$set(this.form.selectnum, i, this.form.selectnum[i] + 1)
                // this.radionum[i] +=1;

            },
            deleteselect(i) {
                this.$set(this.form.selectnum, i, this.form.selectnum[i] - 1)
            },

            tijiao() {
                this.formrule = [];
                for (let i = 0; i < this.form.inputBT.length; i++) {

                    if (this.form.optiontype[i] == 'radio') {

                        var h = (this.form.radioname[i].length)

                        var options = [];
                        for (var j = 0; j < h; j++) {
                            options.push(
                                {value: this.form.radioname[i][j], label: this.form.radioname[i][j]},
                            )


                        }


                        this.formrule.push({
                            type: this.form.optiontype[i],
                            field: this.form.inputBT[i],
                            title: this.form.inputBT[i],
                            options: options,

                        },)


                    } else if (this.form.optiontype[i] == 'checkbox') {
                        var h = (this.form.checkboxname[i].length)

                        var options = [];
                        for (var j = 0; j < h; j++) {
                            options.push(
                                {value: this.form.checkboxname[i][j], label: this.form.checkboxname[i][j]},
                            )


                        }


                        this.formrule.push({
                            type: this.form.optiontype[i],
                            field: this.form.inputBT[i],
                            title: this.form.inputBT[i],
                            options: options,
                            value: [],

                        },)

                    } else if (this.form.optiontype[i] == 'select') {
                        let h = (this.form.selectname[i].length)//3

                        let options = [];
                        for (let j = 0; j < h; j++) {
                            options.push(
                                {value: this.form.selectname[i][j], label: this.form.selectname[i][j]},
                            )


                        }


                        this.formrule.push({
                            type: this.form.optiontype[i],
                            field: this.form.inputBT[i],
                            title: this.form.inputBT[i],
                            options: options,

                        },)

                    } else {
                        this.formrule.push({
                            type: this.form.optiontype[i],
                            field: this.form.inputBT[i],
                            title: this.form.inputBT[i],
                        },)

                    }
                }
                this.toYulan()


            },
            tostore() {
                this.$store.commit('SET_USERID', 2);
                this.$store.commit('SET_TITLE', this.title);
                this.$store.commit('SET_MIAOSHU', this.miaoshu);
                this.$store.commit('SET_CONTENT', this.formrule);
                this.$store.commit('SET_FORM', this.form)


            },
            toYulan() {
                this.tostore()
                this.$router.push({
                    path: '/h_mubanManage/Yulan',
                    query: {}
                })
            }

        }
    }
</script>

<style>
    .radio .el-input__inner {
        width: 220px;
        border-top-width: 0px;
        border-left-width: 0px;
        border-right-width: 0px;
        border-bottom-width: 1px;
        /*outline: medium;*/
    }

    .radio1 .el-input__inner {
        width: 100%;
        border-top-width: 0px;
        border-left-width: 0px;
        border-right-width: 0px;
        border-bottom-width: 1px;
        /*outline: medium;*/
    }

    .textarea .el-textarea__inner {
        width: 100%;
        border-top-width: 0px;
        border-left-width: 0px;
        border-right-width: 0px;
        border-bottom-width: 1px;
        /*outline: medium;*/
    }
</style>
