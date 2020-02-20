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
                        prop="from"
                        label="来自"
                        align='center'
                        width="80">
                    <template slot-scope="scope">
                        <el-icon name="user"></el-icon>
                        <span style="margin-left: 10px">{{ scope.row.from }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="level"
                        label="级别"
                        align='center'
                        >
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ JBtext[scope.row.level-1] }}</span>
                    </template>

                </el-table-column>
                <el-table-column
                        prop="FBdate"
                        label="发布时间"
                        align='center'
                        sortable
                        width="120">
                    <template slot-scope="scope">
                        <el-icon name="time"></el-icon>
                        <span style="margin-left: 10px">{{ scope.row.FBdate }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="TPdate"
                        label="投票时间"
                        align='center'
                        sortable
                        width="120">
                    <template slot-scope="scope">
                        <el-icon name="time"></el-icon>
                        <span style="margin-left: 10px">{{ scope.row.TPdate }}</span>
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
        name: "yitou",
        components:{Pagination},
        data() {
            const item = {
                id:2,
                FBdate: '2019-11-03',
                TPdate:'2019-11-04',
                from: '张三',
                name: '拟晋升职级人选部门民主测评票',
                level:5,


            };
            return {
                tableData: Array(4).fill(item),
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
        methods:{
            handleClick(msg){
                alert(msg.id)
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
            },
            // 上下分页
            handleCurrentChange(val){
                this.incomePayData.page = val;

            },
            // 每页显示多少条
            handleSizeChange(val){
                this.incomePayData.limit = val;

            },
        }
    }
</script>

<style scoped>

</style>
