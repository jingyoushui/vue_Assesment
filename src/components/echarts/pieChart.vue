<template>
    <div :id="id" class="orderArea"></div>
</template>

<script>
	import echarts from 'echarts'

    export default {
        data(){
            return {
				 id:'ordertype',
                 myChart:null,
            }
        },
		props: ['type'],
        mounted(){
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
			 loadChart(){
                this.$nextTick(() => {
                    this.myChart = echarts.init(document.getElementById(this.id),'westeros');
                    this.myChart.setOption(this.initOption(this.type));
                })
            },
         	initOption(type){
				let text,legend_data,series_data;
				if(type == "ordertype") {
                    text = "发布投票类型";
                    legend_data = ['干部考核', '拟晋升', '选调生', '评分表', '自定义'];
                    series_data = [
                        {value: 335, name: '干部考核'},
                        {value: 310, name: '拟晋升'},
                        {value: 234, name: '选调生'},
                        {value: 135, name: '评分表'},
                        {value: 1548, name: '自定义'}
                    ]
                }
				let data = {
					  title : {
						text: text,
						x:'center'
					},
					tooltip : {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						left: 'left',
						data: legend_data
					},
                    toolbox: {
                        feature: {
                            dataView: {show: true, readOnly: false},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        },
                        itemSize:10,
                    },
					series : [
						{
							name: '投票类型',
							type: 'pie',
							radius : '50%',
                            center: ['50%', '60%'],
							data:series_data,
							itemStyle: {
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							}
						}
					]
				}
				return data;
			},
        },
        watch: {
            type:(v)=>{
                this.initOption(v)
            }
        }
    }
</script>

<style lang="less">

</style>
