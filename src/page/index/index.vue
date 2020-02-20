<template>
    <section class="data_section" ref="data_section">

        <el-row :gutter="10" class="row_list">
            <el-col :span="8">
                <div class="row_left row_base">

                    <el-col :span="12">

                        <div class="pay saleBgcolor data_list rflex">
                            <router-link :to="{path: '/toupiao/weitou'}">
                                <el-button type="text" style="color: white">
                                    <div class="leftItem cflex wflex">
                                        <p class="investor">{{ $t('index.weitou') }}</p>
                                        <div style="height: 15px;"></div>
                                        <p class="number">68<span class="perTitle">({{ $t('index.unit') }})</span></p>
                                    </div>
                                </el-button>
                            </router-link>
                            <div class="rightItem">
                                <el-icon style="font-size: 25px;" name="document"></el-icon>
                            </div>
                        </div>

                    </el-col>

                    <el-col :span="12">
                        <div class="pay taxBgcolor data_list rflex">
                            <router-link :to="{path: '/toupiao/yitou'}">
                                <el-button type="text" style="color: white">
                                    <div class="leftItem cflex wflex">
                                        <p class="investor">{{ $t('index.yitou') }}</p>
                                        <div style="height: 15px;"></div>
                                        <p class="number">120<span class="perTitle">({{ $t('index.unit') }})</span></p>
                                    </div>
                                </el-button>
                            </router-link>
                            <div class="rightItem">
                                <el-icon style="font-size: 25px;" name="document-checked"></el-icon>
                            </div>
                        </div>
                    </el-col>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="row_right row_base">
                    <el-col :span="12">
                        <div class="pay extenedBgcolor data_list rflex">
                            <router-link :to="{path: '/dataShow/myfabu'}">
                                <el-button type="text" style="color: white">
                                    <div class="leftItem cflex wflex">
                                        <p class="investor">{{ $t('index.publish') }}</p>
                                        <div style="height: 15px;"></div>
                                        <p class="number">22<span class="perTitle">({{ $t('index.unit') }})</span></p>
                                    </div>
                                </el-button>
                            </router-link>
                            <div class="rightItem">
                                <el-icon style="font-size: 25px;" name="folder-checked"></el-icon>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="pay likeBgcolor data_list rflex">
                            <div class="leftItem cflex wflex">
                                <p class="investor">{{ $t('index.people') }}</p>
                                <p class="number">1276<span class="perTitle">({{ $t('index.unit') }})</span></p>
                            </div>
                            <div class="rightItem">
                                <el-icon style="font-size: 25px;" name="user"></el-icon>
                            </div>
                        </div>
                    </el-col>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="row_right row_base">
                    <el-col :span="12">
                        <div class="pay linkBgColor data_list rflex">
                            <router-link :to="{path: '/mubanManage/existmuban'}">
                                <el-button type="text" style="color: white">
                                    <div class="leftItem cflex wflex">
                                        <p class="investor">{{ $t('index.share') }}</p>
                                        <div style="height: 15px;"></div>
                                        <p class="number">367<span class="perTitle">({{ $t('index.unit') }})</span></p>
                                    </div>
                                </el-button>
                            </router-link>
                            <div class="rightItem">
                                <el-icon style="font-size: 25px;" name="unlock"></el-icon>

                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="pay keleBgColor data_list rflex">
                            <router-link :to="{path: '/mubanManage/existmuban'}">
                                <el-button type="text" style="color: white">
                                    <div class="leftItem cflex wflex">
                                        <p class="investor">{{ $t('index.owned') }}</p>
                                        <div style="height: 15px;"></div>
                                        <p class="number">12<span class="perTitle">({{ $t('index.unit') }})</span></p>
                                    </div>
                                </el-button>
                            </router-link>
                            <div class="rightItem">
                                <el-icon style="font-size: 25px;" name="lock"></el-icon>
                            </div>
                        </div>
                    </el-col>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="10" class="row_list order_list">
            <el-col :span="7">
                <log-list></log-list>
            </el-col>
            <el-col :span="17">
                <bar-chart type="barChart"></bar-chart>
            </el-col>
        </el-row>
        <el-row :gutter="10" class="row_list order_list">
            <el-col :span="7">
                <pie-chart type="ordertype"></pie-chart>
            </el-col>
            <el-col :span="10">
                <line-chart></line-chart>
            </el-col>
            <el-col :span="7">
                <radar-chart></radar-chart>
            </el-col>
        </el-row>

    </section>
</template>

<script>
    import echarts from 'echarts'
    import cardList from "./components/cardList";  // card列表
    import logList from "./components/logList";  // 日志列表
    import barChart from 'cps/echarts/barChart' // 用户投资类型 柱状图
    import pieChart from 'cps/echarts/pieChart' // 用户投资类型 饼状图
    import radarChart from 'cps/echarts/radarChart' // 用户投资类型 雷达图
    import lineChart from 'cps/echarts/lineChart' // 用户投资类型 折线图


    export default {
        data() {
            return {}
        },
        components: {
            cardList,
            logList,
            barChart,
            pieChart,
            radarChart,
            lineChart
        },
        created() {
        },
        mounted() {
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    .data_section {
        margin: 20px;
        border-radius: 2px;

        .row_list {
            margin-bottom: 20px;

            .row_base {
                padding: 10px;
                box-sizing: border-box;
                background: #fff;
                border-radius: 6px;
                height: 120px;
            }
        }

        .order_list {
            .orderArea {
                width: 100%;
                height: 300px;
                background: #fff !important;
                border-radius: 6px;
                box-sizing: border-box;
                padding: 10px;
                padding-top: 40px;
                overflow: hidden;
            }

            .orderbarArea {
                height: 370px;
            }
        }

        .data_list {
            text-align: center;
            font-size: 14px;
            border-radius: 6px;
            padding: 10px;
            color: #fff;
            height: 80px;

            .leftItem {
                align-items: start;
                justify-content: space-between;
                text-align: left;
            }

            .rightItem {
                width: 62px;
                display: flex;
                align-items: center;
                justify-content: center;

                .svg-icon {
                    font-size: 30px;
                }
            }

            .number {
                font-size: 22px;
                font-weight: bold;

                .perTitle {
                    font-size: 13px;
                    margin-left: 5px;
                }
            }
        }

        .pay {
            .leftItem {
                justify-content: space-around;
            }
        }

    }

</style>
