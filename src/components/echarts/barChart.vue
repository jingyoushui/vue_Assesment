<template>
    <div :id="id" class="orderArea orderbarArea"></div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        name: 'barChat',
        data() {
            return {
                id: 'barChart',
                myChart: null,
            }
        },
        mounted() {
            this.loadChart();
        },
        beforeDestroy() {
            if (!this.myChart) {
                return
            }
            this.myChart.dispose();
            this.myChart = null;
        },
        methods: {
            loadChart() {
                this.$nextTick(() => {
                    this.myChart = echarts.init(document.getElementById(this.id),'westeros');
                    this.myChart.setOption(this.initOption());
                })
            },
            initOption() {
                let option =
                    {
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                crossStyle: {
                                    color: '#999'
                                }
                            }
                        },
                        title: {
                            show: true,
                            text: '张三',
                            textStyle: {
                                // color:'#FFA3A1',
                                fontSize: 15,
                            },
                        },
                        toolbox: {
                            feature: {
                                dataView: {show: true, readOnly: false},
                                magicType: {show: true, type: ['line', 'bar']},
                                restore: {show: true},
                                saveAsImage: {show: true}
                            }
                        },
                        legend: {
                            data: ['好', '较好', '一般', '较差']
                        },
                        xAxis: [
                            {
                                type: 'category',
                                data: ['德', '能', '勤', '绩', '廉'],
                                axisPointer: {
                                    type: 'shadow'
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                name: '票数',
                                min: 0,
                                max: 250,
                                interval: 50,
                                axisLabel: {
                                    formatter: '{value} 票'
                                }
                            },
                        ],
                        series: [
                            {
                                name: '好',
                                type: 'bar',
                                data: [111, 155, 125, 222, 136]
                            },
                            {
                                name: '较好',
                                type: 'bar',
                                data: [256, 114, 144, 55, 128]
                            },
                            {
                                name: '一般',
                                type: 'bar',
                                data: [132, 125, 267, 219, 99]
                            },
                            {
                                name: '较差',
                                type: 'bar',
                                data: [23, 231, 111, 126, 111]
                            },

                        ]
                    };
                return option;
            },
        },
        watch: {}
    }
</script>

<style lang="less">

</style>
