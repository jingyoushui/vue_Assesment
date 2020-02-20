<template>
    <div :id="id" class="orderArea"></div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {
                id: "lineChart",
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
                    this.myChart = echarts.init(document.getElementById(this.id), 'westeros');
                    this.myChart.setOption(this.initOption());
                })
            },
            initOption() {
                let data =
                    {
                        title: {
                            text: '2019-测评票',
                            textStyle: {
                                // color:'#FFA3A1',
                                fontSize: 12,
                            },
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                crossStyle: {
                                    color: '#999'
                                }
                            }
                        },
                        legend: {
                            data: ['张三', '李四', '王五']
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        toolbox: {
                            feature: {
                                dataView: {show: true, readOnly: false},
                                magicType: {show: true, type: ['line', 'bar']},
                                restore: {show: true},
                                saveAsImage: {show: true}
                            },
                            itemSize:10,
                        },
                        xAxis: {
                            type: 'category',
                            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '得分',
                            min: 0,
                            max: 850,
                            interval: 100,
                            axisLabel: {
                                formatter: '{value} 分'
                            }
                        },
                        series: [
                            {
                                name: '张三',
                                type: 'line',
                                data: [120, 132, 101, 134, 90, 230, 210, 221, 442, 551, 234, 321]
                            },
                            {
                                name: '李四',
                                type: 'line',
                                data: [120, 182, 191, 234, 290, 330, 310,225,331,224,135,225,228]
                            },
                            {
                                name: '王五',
                                type: 'line',
                                data: [120, 232, 201, 154, 190, 330, 410,231,321,234,113,228,310]
                            },
                        ]
                    };
                return data;
            },
        },
        watch: {
            // id:()=>{
            //     this.initOption()
            // }
        }
    }
</script>

<style lang="less">

</style>
