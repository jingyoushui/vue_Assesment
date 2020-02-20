<template>
    <div>
        <el-card class="box-card"  style="width: 80%;margin-left: 10%;" >
            <div style="font-size: 25px;text-align: center">
                {{title}}
            </div>

            <div style="color: grey;">
                {{miaoshu}}
            </div>
        </el-card>
        <el-card class="box-card" style="margin-top: 5px;width: 80%;margin-left: 10%;"  >
            <div class="imageWrapper" ref="imageWrapper">
                <slot>
                    <form-create v-model="yulanform" :rule="formrule" :option="option" @on-submit="onSubmit1" style="width: 80%;margin-top: 20px;"></form-create>
                </slot>
            </div>
        </el-card>
        <el-card class="box-card"  style="width: 80%;margin-left: 10%;" >
            <div style="font-size: 15px;">接收者： {{peoplename}}</div>
            <div style="font-size: 15px;">接收者id： {{peopleid}}</div>
            <div style="font-size: 15px;" >级别：{{JBtext[parseInt(jibie)-1]}}</div>
            <div style="font-size: 15px"> 前置条件：{{value}}%</div>
        </el-card>

    <div style="text-align: center;padding-top: 20px;padding-bottom: 20px;">
        <el-button type="primary" @click="to_grade()">返回修改</el-button>
        <el-button type="primary" @click="publish()">确定发布</el-button>
    </div>
    </div>
</template>

<script>
    import html2canvas from "html2canvas";
    import qs from 'qs';
    export default {
        name: "publish",
        data(){
            return{
                //选择接收的人员
                peoplename:[],
                peopleid:[],
                //设置投票级别
                jibie:0,
                JBtext:[],
                value:'',

                yulanform:{},
                formrule:[],
                title:'',
                miaoshu:'',
                option:{
                    submitBtn: {
                        show: false,
                    },

                },
                form:{},

            }
        },
        mounted() {
            this.peoplename = this.$store.state.people.peoplename
            this.peopleid = this.$store.state.people.peopleid
            this.jibie = this.$store.state.people.jibie
            this.value = this.$store.state.people.value
            this.JBtext = this.$store.state.people.JBtext

            this.title = this.$store.state.muban.title
            this.miaoshu = this.$store.state.muban.miaoshu
            this.formrule = this.$store.state.muban.content;
            this.form = this.$store.state.form;

        },
        methods:{
            to_grade(){
                this.$router.push({path:'/publish/selectgrade',query:{} })
            },
            publish(){

            },
        }
    }
</script>

<style scoped>

</style>
