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
        name:'dataShow1',
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
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                crossStyle: {
                                    color: '#999'
                                }
                            }
                        },
                        title:{
                            show:true,
                            text:'张三',
                            textStyle:{
                                // color:'#FFA3A1',
                                fontSize:15,
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
                            data:['好','较好','一般','较差']
                        },
                        xAxis: [
                            {
                                type: 'category',
                                data:['德','能','勤','绩','廉'],
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
                                name:'好',
                                type:'bar',
                                data:[11,55,25,22,36]
                            },
                            {
                                name:'较好',
                                type:'bar',
                                data:[56,14,44,55,28]
                            },
                            {
                                name:'一般',
                                type:'bar',
                                data:[32,25,67,19,99]
                            },
                            {
                                name:'较差',
                                type:'bar',
                                data:[23,31,11,26,11]
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


