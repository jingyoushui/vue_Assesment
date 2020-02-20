<template>
    <div>
        <el-button type="text" @click="backtonew()"><i class="el-icon-back" style="font-size: 28px;color: grey;"></i></el-button>
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


        <div style="text-align: center;padding-top: 20px;padding-bottom: 20px">

            <el-button type="primary" @click="publish()">立即发布</el-button>
            <el-button type="primary" @click="toImage()">保存模板</el-button>
        </div>
    </div>
</template>

<script>
    import html2canvas from "html2canvas";
    import qs from 'qs';
    export default {
        name: "Yulan",
        data(){
            return{
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
        mounted(){
            // this.title = this.$route.query.title;
            // this.miaoshu = this.$route.query.miaoshu;
            // this.formrule = this.$route.query.formrule;
            this.title = this.$store.state.muban.title
            this.miaoshu = this.$store.state.muban.miaoshu
            this.formrule = this.$store.state.muban.content;
            this.form = this.$store.state.form;
        },

        methods:{
            toImage() {

                html2canvas(this.$refs.imageWrapper,{
                    backgroundColor: "#eee"
                }).then((canvas) => {
                    let dataURL = canvas.toDataURL("image/png");
                    this.dataURL = dataURL;
                    this.saveform()

                });
                // this.index = msg;
                this.$message('模板保存成功,在已有模板中可以查看');



            },
            //保存表单信息
            saveform(){
                var parm = qs.stringify({
                    user:1,
                    title:this.title,
                    miaoshu: this.miaoshu,
                    content:JSON.stringify(this.formrule),
                    isshare:0,
                    imageurl:this.dataURL,
                    type:0,
                });
                this.$axios.post("/local/addmuban",parm).then(resp=>{
                    this.mubanid = resp.data.id
                    console.log(this.mubanid)
                    this.addform();
                })

            },
            //增加表单的内容
            addform(){
                // console.log(this.inputBT)
                var parm = qs.stringify({
                    title : this.title,
                    miaoshu:this.miaoshu,
                    id :this.mubanid,
                    num:this.form.num,
                    inputbt: (this.form.inputBT),
                    optiontype: (this.form.optiontype),
                    radionum:(this.form.radionum),
                    radioname: JSON.stringify(this.form.radioname),
                    checkboxnum: (this.form.checkboxnum),
                    checkboxname: JSON.stringify(this.form.checkboxname),
                    selectnum: (this.form.selectnum),
                    selectname: JSON.stringify(this.form.selectname),

                }, { indices: false });
                this.$axios.post("/local/addform",parm).then(res=>{

                })
            },
            onSubmit1(formData){
                alert(JSON.stringify(formData));
            },
            backtonew(){
                this.$router.push({path:'/mubanManage/NewForm',query:{where:0} })
            },
            publish(){
                this.$router.push({path:'/publish/selectpeople',query:{back:"/mubanManage/Yulan"} })
            }
        }
    }
</script>

<style scoped>

</style>
