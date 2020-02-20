<template>
    <div class="fillcontain">
        <div class="fillcontainer" ref="fillcontainer">
            <div id="dataShow" class="echartsPosition"></div>
        </div>
    </div>
</template>

<script>
    import echarts from 'echarts';

    export default {
        name:'dataShow2',
        data() {
            return {
                chart: null
            };
        },
        mounted() {
            this.setInit();
            // 保证页面在放大或缩小时，也能够动态的显示数据
            window.onresize = () => {
                this.setInit();
            }
        },
        beforeDestroy() {
            if (!this.chart) {
                return
            }
            this.chart.dispose();
            this.chart = null;
        },
        methods: {
            setInit(){
                this.$nextTick(() => {
                    this.$refs.fillcontainer.style.height = (document.body.clientHeight - 160)+'px'
                    this.initChart();
                    this.chart = null;
                });
            },
            initChart() {
                this.chart = echarts.init(document.getElementById('dataShow'));
                this.chart.setOption(
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
                            itemSize:15,
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
                    }
                )
            }
        }
    }

</script>


<style lang="less" scoped>

</style>


