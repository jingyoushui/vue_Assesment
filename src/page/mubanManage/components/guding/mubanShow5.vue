<template>
    <div class="fillcontain" ref="fillcontain">
        <div class="info_container" ref="info_container">
            <h1>派遣人员考核民主测评票</h1>

            <el-card class="box-card" style="width: 960px;margin: 2px auto;">
                <div style="width: 960px;height: 20px;padding-bottom: 10px;">
                    <span style="float: left">部门:<el-input v-model="department" placeholder="请输入部门" clearable style="width: 200px;"></el-input></span>
                    <span style="float:left;padding-left: 450px;" >
                    <div class="block">
                    <span class="demonstration">时间:</span>
                    <el-date-picker
                            v-model="date"
                            type="date"
                            style="width: 200px; "
                            placeholder="选择日期"
                            format="yyyy-MM-dd"
                            value-format="yyyy年MM月dd日">
                    </el-date-picker>
                    </div>
                </span>
                </div>
            </el-card>
            <el-card class="box-card set_padding"  style="width: 960px;margin: 0px auto;" >
                <div v-html="tableData1" class="table_show"></div>
            </el-card>
            <el-card class="box-card set_padding" v-for="i in input_num" style="width: 960px;min-height: 62px;margin: 0px auto;">
                <div class="card_style">
                    <el-input v-model="namelist[i-1].name" placeholder="请输入被测评人姓名" size="large" clearable style="width: 270px;float:left;padding-top:10px;" ></el-input>
                    <div style="padding-left:7px;width: 1px;height: 60px;border-right: 1px solid black; float:left;"></div>
                    <div style="float:right;width:200px;margin-left: 10%;">
                        <el-tooltip class="item" effect="light" content="添加一行" placement="left">
                            <el-button type="text" @click="adddiv(i)" style="font-size: 30px;"><i class="el-icon-circle-plus"></i>
                            </el-button>
                        </el-tooltip>

                        <el-tooltip class="item" effect="light" content="删除本行" placement="right">
                            <el-button type="text" @click="delectdiv(i)" style="font-size: 30px;"><i class="el-icon-remove"></i>
                            </el-button>
                        </el-tooltip>


                    </div>
                </div>

            </el-card>



            <el-card class="box-card" style="width: 960px;margin: 2px auto;">
                <el-input class="textarea"
                          type="textarea"
                          :rows="2"
                          placeholder="请输入说明或备注"
                          v-model="note"
                          style="width: 100%;font-size: 16px;margin-top: 10px;">
                </el-input>
            </el-card>
            <div style="text-align: center;padding-bottom: 20px;">
                <el-button type="primary" @click="submit()">预览发布</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import tableData from "@/assets/data/table.json";
    export default {
        name: "mubanShow5",
        data(){
            return{
                note:'',
                tableData1:tableData.table5,
                department:'',
                date:'',
                input_num:1,

                namelist:[{
                    name:'',
                },],

            }
        },
        mounted(){
            let type = this.$store.state.ceping.ceping_type;
            if(type==5){
                this.input_num = this.$store.state.ceping.input_num;
                this.note = this.$store.state.ceping.note;
                this.department = this.$store.state.ceping.department;
                this.date = this.$store.state.ceping.date;
                this.namelist = this.$store.state.ceping.namelist;
            }
        },



        methods:{
            adddiv(i){
                this.input_num+=1;
                this.namelist.splice(i,0,
                    {
                        name:'',
                    },
                )
                // console.log(JSON.stringify(this.namelist))
            },
            delectdiv(i){
                if(this.input_num>1){
                    this.input_num-=1;
                    this.namelist.splice(i-1,1);
                }

                // console.log(JSON.stringify(this.namelist))
            },
            save_store(){
                this.$store.commit('SET_CEPING_TYPE',5)
                this.$store.commit('SET_NOTE',this.note)
                this.$store.commit('SET_DEPARTMENT',this.department)
                this.$store.commit('SET_DATE',this.date)
                this.$store.commit('SET_NAMELIST',this.namelist)
                this.$store.commit('SET_INPUT_NUM',this.input_num)

            },
            submit(){
                this.save_store()
                this.$router.push({
                    path: '/mubanManage/mubanShow/mubanShow0',
                    query: {type:5}
                })


            }

        }
    }
</script>

<style lang="less" >
    .info_container{
        padding: 20px;
        background: #fff;
        box-sizing: border-box;
        overflow: auto;
        width: 1100px;
        margin: 0 auto;
        text-align: center;
    }


    .set_padding .el-card__body{
        padding: 0px 20px;

    }
    .set_padding{
        table{
            border-collapse:collapse;
        }
        table,tr,td{
            border:1px solid black;
        }
        td{
            width:100px;/*这里需要自己调整，根据自己的需求调整宽度*/
            height:70px;/*这里需要自己调整，根据自己的需求调整高度*/
            position: relative;
        }
        td[class=first]:before{
            content: "";
            position: absolute;
            width: 1px;
            height:310px;/*这里需要自己调整，根据td的宽度和高度*/
            top:0;
            left:0;
            background-color: black;
            display: block;
            transform: rotate(-63deg);/*这里需要自己调整，根据线的位置*/
            transform-origin: top;
        }
    }
    .card_style{
        border-bottom: 1px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
        width: 918px;
        min-height: 60px;
    }
    .el-card {
        border: 1px solid #EBEEF5;
        background-color: #FFF;
        color: #303133;
        -webkit-transition: .3s;
        transition: .3s;
    }




</style>
