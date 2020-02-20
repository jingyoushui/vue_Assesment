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


        <div style="text-align: center;padding-top: 20px;padding-bottom: 20px">
            <el-button type="primary" @click="publish()">确定投票</el-button>
        </div>
    </div>
</template>

<script>
    import html2canvas from "html2canvas";
    import qs from 'qs';
    export default {
        name: "TouPiao2",
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
            }
        },
        mounted(){
            // this.title = this.$route.query.title;
            // this.miaoshu = this.$route.query.miaoshu;
            // this.formrule = this.$route.query.formrule;
            // this.title = this.$store.state.muban.title
            this.title = "员工信息统计表"
            this.miaoshu = "用于统计员工的基本信息"
            this.formrule = [{"type":"input","field":"姓名","title":"姓名"},{"type":"radio","field":"性别","title":"性别","options":[{"value":"男","label":"男"},{"value":"女","label":"女"}]},{"type":"InputNumber","field":"年龄","title":"年龄"},{"type":"input","field":"民族","title":"民族"},{"type":"input","field":"籍贯","title":"籍贯"},{"type":"select","field":"政治面貌","title":"政治面貌","options":[{"value":"党员","label":"党员"},{"value":"预备党员","label":"预备党员"},{"value":"团员","label":"团员"},{"value":"群众","label":"群众"}]},{"type":"input","field":"家庭住址","title":"家庭住址"},{"type":"checkbox","field":"家庭成员","title":"家庭成员","options":[{"value":"父亲","label":"父亲"},{"value":"母亲","label":"母亲"},{"value":"兄弟","label":"兄弟"},{"value":"姐妹","label":"姐妹"}],"value":[]},{"type":"select","field":"学历","title":"学历","options":[{"value":"研究生","label":"研究生"},{"value":"本科生","label":"本科生"},{"value":"专科生","label":"专科生"}]},{"type":"input","field":"手机号码","title":"手机号码"},{"type":"input","field":"邮箱","title":"邮箱"}]
        },

        methods:{
            onSubmit1(formData){
                alert(JSON.stringify(formData));
            },
            publish(){

            }
        }
    }
</script>

<style scoped>

</style>
