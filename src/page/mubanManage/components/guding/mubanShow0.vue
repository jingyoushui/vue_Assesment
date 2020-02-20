<template>
    <div class="fillcontain" ref="fillcontain">
        <div class="info_container" ref="info_container">
            <h1>{{this.title[this.type-1]}}</h1>
            <el-card v-if="note" class="box-card " style="width: 960px;margin: 5px auto;font-size: 15px;color:gray " >
                {{this.note}}
            </el-card>
            <el-card class="box-card" style="width: 960px;margin: 5px auto;">
                <div style="width: 960px;height: 20px;margin: 0 auto">
                    <span style="float: left">部门:{{this.department}}</span>
                    <span style="float:right;padding-right: 30px;" >
                    <div class="block">
                    <span class="demonstration">时间:</span>
                    {{this.date}}
                    </div>
                </span>
                </div>
            </el-card>
            <el-card class="box-card set_padding" style="width: 960px;margin: 0px auto;">
<!--                <img style="width: 900px;height: 150px;padding-top: 10px;" :src="muban_Img[type-1]" />-->
                <div v-html="tableData[type-1]"></div>
            </el-card>

            <el-card v-if="type===1" class="box-card set_padding" v-for="(o,i) in namelist" style="width: 960px;min-height: 50px;margin: 0px auto;">
                <div class="card_style2">
                <div  style="float:left;width:277px;padding-top: 10px;">{{o.name}}</div>
                <div class="line"></div>
                <div style="float:left; width:550px; padding-top: 5px;">
                    <el-input-number  :min="0" :max="20" v-model="num1[i]"></el-input-number>
                </div>
                </div>
            </el-card>

            <el-card v-if="type===3" class="box-card set_padding" v-for="(o,i) in namelist" style="width: 960px;min-height: 50px;margin: 0px auto;">
                <div class="card_style2" style="float: left">

                    <div style="width: 47px;padding-left:10px;float:left;padding-top: 10px;">{{o.xuhao}}</div>
                    <div style="padding-left:7px;width: 1px;height: 50px;border-right: 1px solid black; float:left;"></div>
                    <div  style="width: 111px;float:left;padding-top:10px;">{{o.bumen}}</div>
                    <div style="padding-left:0px;width: 1px;height: 50px;border-right: 1px solid black; float:left;"></div>
                    <div style="width: 127px;float:left;padding-top:10px;">{{o.name}}</div>
                    <div style="padding-left:0px;width: 1px;height: 50px;border-right: 1px solid black; float:left;"></div>

                   <div style="width: 147px;float:left;padding-top:10px;">{{o.now_ji}}</div>
                    <div style="padding-left:0px;width: 1px;height: 50px;border-right: 1px solid black; float:left;"></div>

                    <div style="width: 144px;float:left;padding-top:10px;">{{o.next_ji}}</div>
                    <div style="padding-left:0px;width: 1px;height: 50px;border-right: 1px solid black; float:left;"></div>


                <div style="float:left; width:210px;padding-top: 10px;">
                    <el-radio-group v-model="radio1[i-1]" size="small">
                        <el-radio-button label="优秀"></el-radio-button>
                        <el-radio-button label="良好"></el-radio-button>
                        <el-radio-button label="一般"></el-radio-button>
                        <el-radio-button label="差"></el-radio-button>
                    </el-radio-group>

                </div>
                <div style="padding-left:0px;width: 1px;height: 50px;border-right: 1px solid black; float:left;"></div>
                <div style="float: left;width: 103px;padding-top: 10px;">
                    <el-radio-group v-model="radio2[i-1]" size="small">
                        <el-radio-button label="是"></el-radio-button>
                        <el-radio-button label="否"></el-radio-button>
                    </el-radio-group>
                </div>
                </div>
            </el-card>

            <el-card v-if="type===4||type===2" class="box-card set_padding" v-for="(o,i) in namelist" style="width: 960px;min-height: 50px;margin: 0px auto;">
                <div class="card_style2">
                <div  style="float:left; width:58px;padding-top: 10px;">
                    {{o.name}}
                </div>
                <div class="line"></div>
                <div style="float:left;padding-top: 5px;">
                    <el-select v-model="de[i-1]" placeholder="请选择" style="width: 127px;">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="line"></div>
                <div style="float:left;padding-top: 5px;">
                    <el-select v-model="neng[i-1]" placeholder="请选择" style="width: 134px;">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="line"></div>
                <div style="float:left;padding-top: 5px;">
                    <el-select v-model="qin[i-1]" placeholder="请选择" style="width: 134px;">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="line"></div>
                <div style="float:left;padding-top: 5px;">
                    <el-select v-model="ji[i-1]" placeholder="请选择" style="width: 142px;">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="line"></div>
                <div style="float:left;padding-top: 5px;">
                    <el-select v-model="lian[i-1]" placeholder="请选择" style="width: 147px;">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="line"></div>
                <div style="float:left;padding-top: 5px;">
                    <el-select v-model="zong[i-1]" placeholder="请选择" style="width: 160px;">
                        <el-option
                                v-for="item in options2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                </div>
            </el-card>
            <el-card v-if="type===5||type===6" class="box-card set_padding" v-for="(o,i) in namelist" style="width: 960px;min-height: 50px;margin: 0px auto;">
                <div class="card_style2">
                    <div  style="float:left;width:277px;padding-top: 10px;">{{o.name}}</div>
                    <div class="line"></div>
                    <div style="float:left; width:550px; padding-top: 5px;">
                        <el-input-number  :min="0" :max="30" v-model="num1[i]"></el-input-number>
                    </div>
                </div>
            </el-card>


            <div style="text-align: center;padding-top: 20px;">
                <el-button type="primary" @click="toback()">返回修改</el-button>
                <el-button type="primary" @click="publish()">立即发布</el-button>
            </div>


        </div>
    </div>
</template>

<script>
    import tableData from "@/assets/data/table.json";
    export default {
        name: "mubanShow0",
        data(){
            return{
                // ceping_type:'',
                type:null,//测评票类别
                title:["民主测评评分表","选调生基层锻炼期满考核测评票（勾选）","拟晋升职级人选部门民主测评票（勾选）","中层领导干部考核民主测评表",
                    "派遣人员考核民主测评票","法官助理、书记员工作完成情况综合评价表",""],
                tableData:[tableData.table1,tableData.table2,tableData.table3,tableData.table2,tableData.table5,tableData.table6,],
                note:'',//备注说明
                department:'',
                date:'',
                namelist:[],//姓名列表

                num1:[],//保存评分的列表
                radio1:[],
                radio2:[],
                de:[],//德
                neng:[],
                qin:[],
                ji:[],
                lian:[],
                zong:[],

                options: [{
                    value: '1',
                    label: '好'
                }, {
                    value: '2',
                    label: '较好'
                }, {
                    value: '3',
                    label: '一般'
                }, {
                    value: '4',
                    label: '较差'
                }],
                options2: [{
                    value: '1',
                    label: '优秀'
                }, {
                    value: '2',
                    label: '称职'
                }, {
                    value: '3',
                    label: '基本称职'
                }, {
                    value: '4',
                    label: '不称职'
                }]

            }
        },
        mounted() {
            // this.ceping_type = this.$store.state.ceping.ceping_type
            this.type = this.$route.query.type
            this.note = this.$store.state.ceping.note;
            this.department = this.$store.state.ceping.department;
            this.date = this.$store.state.ceping.date;
            this.namelist = this.$store.state.ceping.namelist;
            // console.log(this.ceping_type)


        },
        methods:{
            toback(){
                this.$router.push({path:'/mubanManage/mubanShow/mubanShow'+this.type,query:{}})
            },
            publish(){
                this.$router.push({path:'/publish/selectpeople',query:{back:"/mubanManage/mubanShow/mubanShow0?type="+this.type,type:this.type} })
            }
        }
    }
</script>

<style>
    .info_container{
        padding: 20px;
        background: #fff;
        box-sizing: border-box;
        overflow: auto;
        width: 1100px;
        margin: 0 auto;
        text-align: center;
    }
    .el-radio-button--mini .el-radio-button__inner {
        padding: 8px 5px;
        font-size: 10px;
        border-radius: 0;
    }

    .set_padding .el-card__body{
        padding: 0px 20px;

    }
    .card_style2{
        border-bottom: 1px solid black;
        border-left: 1px solid black;
        border-right: 1px solid black;
        min-height: 50px;

    }
    .line{
        padding-left:0px;
        width: 1px;
        height: 50px;
        border-right: 1px solid black;
        float:left;
    }

</style>
