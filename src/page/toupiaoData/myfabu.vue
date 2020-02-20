<template>
    <div class="fillcontain">
        <div class="table_container">
            <el-table

                    :data="tableData"
                    style="width: 100%"
                    align='center'
                    @select="selectTable"
                    @select-all="selectAll"
            >
                <el-table-column
                        v-if="idFlag"
                        prop="id"
                        label="id"
                        align='center'
                        width="180">
                </el-table-column>
                <el-table-column
                        type="selection"
                        align='center'
                        width="60">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="标题"
                        align='center'>
                    <template slot-scope="scope">
                        <el-icon name="document"></el-icon>
                        <span style="margin-left: 10px">{{ scope.row.name }}</span>
                    </template>

                </el-table-column>
                <el-table-column
                        prop=""
                        label="级别"
                        align='center'
                        width="230">
                    <template slot-scope="scope">
                        <span>{{ JBtext[scope.row.level-1]}}</span>
                    </template>

                </el-table-column>
                <el-table-column
                        prop="FBdate"
                        label="发布时间"
                        align='center'
                        sortable
                        width="150">
                    <template slot-scope="scope">
                        <el-icon name="time"></el-icon>
                        <span style="margin-left: 10px">{{ scope.row.FBdate }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop=""
                        label="投票情况"
                        align='center'
                        width="150">
                    <el-progress slot-scope="scope" :text-inside="true" :stroke-width="13" :percentage=" scope.row.percentage*100" status="exception"></el-progress>

                </el-table-column>
                <el-table-column
                        prop="qian"
                        label="前置条件"
                        align='center'
                        width="50">
                    <template slot-scope="scope">
                        <span style="color:#f56767">{{ scope.row.qian*100+'%' }}</span>
                    </template>

                </el-table-column>
                <el-table-column
                        prop="operation"
                        align='center'
                        label="操作"
                        width="180">
                    <template slot-scope='scope'>
                        <el-button
                                type="warning"
                                icon='edit'
                                size="mini"
                                v-bind:disabled="scope.row.percentage >= scope.row.qian? false:true"
                                @click="handleClick(scope.row.id,scope.row.type)"
                        >查看</el-button>
                        <el-button
                                type="danger"
                                icon='delete'
                                size="mini"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <pagination :pageTotal="pageTotal" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange"></pagination>
        </div>
    </div>
</template>

<script>
    import Pagination from "@/components/pagination";
    export default {
        name: "myfabu",
        components:{Pagination},
        data() {

            return {
                tableData: [],
                idFlag:false,
                pageTotal:0,
                JBtext:["一级(所有人都能看到其他人投票结果)","二级(除发布者可以看到所有人投票结果和汇总结果，其他人只能看到自己投票结果和汇总结果)",
                    "三级(除发布者可以看到所有人投票结果和汇总结果，其他人只能看到自己投票结果)","四级(发布者只能看到汇总结果，其他人只能看到自己投票结果)",
                    "五级(发布者只能看汇总结果，其他人阅后即焚)"],
                incomePayData:{
                    page:1,
                    limit:20,
                    name:''
                },

            }
        },
        mounted() {
            // this.JBtext = this.$store.state.people.JBtext
            this.tableData.push({
                id:1,
                FBdate: '2019-10-22',
                percentage:0.45,
                name: '民主测评评分表',
                level:3,
                qian:0.7,
                type:1,



            },
                {
                    id:2,
                    FBdate: '2019-10-22',
                    percentage:0.85,
                    name: '选调生基层锻炼期满考核测评票',
                    level:5,
                    qian:0.8,
                    type:2,



                },
                {
                    id:3,
                    FBdate: '2019-11-11',
                    percentage:0.8,
                    name: '派遣人员考核民主测评票',
                    level:5,
                    qian:0.6,
                    type:5,



                },)
        },
        methods:{
            handleClick(id,type){
                if(type==2||type==3||type==4){
                    this.$router.push({path: '/h_dataShow/dataShow1', query: {id:id}})
                }else if(type==1||type==5||type==6){
                    this.$router.push({path: '/h_dataShow/dataShow2', query: {id:id}})
                }
                // alert(id)

            },
            // 当用户手动勾选数据行的 Checkbox 时触发的事件
            selectTable(val, row){
                this.setSearchBtn(val);
            },
            // 用户全选checkbox时触发该事件
            selectAll(val){
                val.forEach((item) => {
                    this.rowIds.push(item.id);
                });
                this.setSearchBtn(val);
            },
            // 上下分页
            handleCurrentChange(val){
                this.incomePayData.page = val;
                this.getMoneyList()
            },
            // 每页显示多少条
            handleSizeChange(val){
                this.incomePayData.limit = val;
                this.getMoneyList()
            },
        }
    }
</script>

<style scoped>
    /*.pagination{*/
    /*    text-align: left;*/
    /*    margin-top: 10px;*/
    /*}*/
</style>
