<template>
    <div class="fillcontain" ref="fillcontain">
        <div class="info_container1" ref="info_container">
            <div style="width: 80%;padding-top: 20px;padding-left: 10%">
                <span style="font-size: 20px;">设置该投票级别</span>
                <div style="font-size: 14px;padding-top: 5px;color: gray;padding-bottom: 20px;">数值越大级别越高，</div>
                <el-rate
                        v-model="jibie"
                        show-text
                        :texts=JBtext
                        @change="jibiechange()">
                </el-rate>


            </div>
            <div style="width: 80%;padding-top: 20px;padding-left: 10%">
                <span style="font-size: 20px;">设置前置条件</span>
                <div style="font-size: 14px;padding-top: 5px;color: gray;padding-bottom: 20px;">
                    设定启动“汇总测评情况”的前置条件，明确X%用户完成投票任务方可汇总情况。
                </div>
                <el-slider v-model="value" :format-tooltip="formatTooltip"></el-slider>
            </div>
            <div style="text-align: center;width: 80%;padding-top: 50px;padding-left: 10%">
                <el-button type="primary" @click="toback()">上一步</el-button>
                <el-button type="primary" @click="tonext()">下一步</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "selectgrade",
        data() {
            return {
                jibie: 0,
                value: 50,
                JBtext: [],
            }
        },
        mounted() {
            this.jibie = this.$store.state.people.jibie
            this.value = this.$store.state.people.value
            this.JBtext = this.$store.state.people.JBtext

        },
        methods: {
            //推动条的值
            formatTooltip(val) {
                // alert(this.value2)
                // console.log(this.value)
                return val / 100 + "%";

            },
            jibiechange() {
                // console.log(this.jibie)

            },
            tostore_grade() {
                this.$store.commit('SET_JIBIE', this.jibie)
                this.$store.commit('SET_VALUE', this.value)
            },

            tonext() {
                this.tostore_grade()
                this.$router.push({path: '/publish/_publish', query: {}})
            },
            toback() {
                this.$router.push({path: '/publish/selectpeople', query: {}})
            },
        }
    }
</script>

<style scoped>
    .info_container1{
        padding: 20px;
        background: #fff;
        box-sizing: border-box;
        overflow: auto;
        width: 1100px;
        margin: 0 auto;
    }
</style>
