<template>
     <div>
        <div id="count" style="width: 686px;height: 400px" class="echarts"></div>
        <div id="ranking" style="width: 686px;height: 400px" class="echarts"></div>
     </div>
</template>

<script>
    export default {
        name: "score_echarts",
        data () {
            return {
                fractional_statistics:{
                    tooltip: {
                        trigger: 'axis',
                        tooltip: {
                            crossStyle: {
                                opacity: 1
                            },
                            backgroundColor: "#ffffff",
                            borderColor: "#ffffff"
                        },
                        label: {
                            backgroundColor: "#583636"
                        },
                        formatter: function (params) {
                            let result = '<div style="border-radius:4px 4px 0px 0px;width:120px;height:30px;background-color:#ECEFF5;color:#5F6D91;margin:-4px -4px -4px -4px;line-height: 30px">' + "【" + params[0].axisValue + "】" + "分段" + '</div>';
                            for (let i = 0; i < params.length; i++) {
                                result += '<div style="border-radius:0px 0px 4px 4px;color:#667395;background-color: #ffffff;margin:-4px -4px -4px -4px;line-height: 30px">' +
                                    '<span style="margin-left: 10px">' + params[i].seriesName + '</span>' +
                                    ':' +
                                    '<span style="margin-left: 10px">' + params[i].data + '</span>' +
                                    "</div>";
                            }
                            return result;
                        }
                    },
                    color:["#4B70FF","#FF8937"],
                    title: {
                        text: '分数分段统计'
                    },
                    legend: {
                        left: 'right',
                        data:['本班占比','年级占比']
                    },
                    toolbox: {
                        show : true,
                    },
                    calculable : true,
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['0-50','50-100','100-150','150-200','200-250','250-300','300-350'],
                            axisLabel: {
                                interval: 0,
                                rotate: 40
                            }
                        }
                    ],
                    yAxis : [
                    {
                        type : 'value',
                        axisLine: {show:false},
                        axisTick: {show:false},
                    }
                ],
                    series : [
                    {
                        symbol:'circle',
                        showSymbol: false,
                        smooth: true,
                        name:'本班占比',
                        type:'line',
                        data:[120, 132, 101, 134, 90, 230, 210],
                        areaStyle: {},
                        markLine: {
                            symbol:'none',
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        },

                    },
                    {
                        symbol:'circle',
                        showSymbol: false,
                        smooth: true,
                        name:'年级占比',
                        type:'line',
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                ]
                },
                ranking_section_statistics:{
                    title: {
                        text: '排名分段统计'
                    },
                    color: ['#4B70FF'],
                    tooltip: {
                        trigger: 'axis',
                        show:true,
                        axisPointer: {
                            type: 'none'        // 默认为直线
                        },
                        tooltip: {
                            crossStyle: {
                                opacity: 1
                            },
                            backgroundColor: "#ffffff",
                            borderColor: "red",
                            borderRadius:4,
                            borderWidth:1,
                            padding: 0
                        },
                        label: {
                            backgroundColor: "#583636"
                        },
                        formatter: function (params) {
                            console.log(params);
                            let result = '<div style=""><div style="border-radius:4px 4px 0px 0px;width:120px;height:30px;background-color:#ECEFF5;color:#5F6D91;margin:-4px -4px -4px -4px;padding-left: 10px;line-height: 30px">' +
                                params[0].axisValue +"排名段"+
                                '</div>';
                            for (let i = 0; i < params.length; i++) {
                                result += '<div style="border-radius:0px 0px 4px 4px;color:#667395;background-color: #ffffff;margin:-4px -4px -4px -4px;line-height: 30px">' +
                                    '<span style="margin-left: 10px;border-radius:0px 0px 4px 4px;">' + params[i].seriesName + '</span>' +
                                    ':' +
                                    '<span style="margin-left: 10px;border-radius:0px 0px 4px 4px;">' + params[i].data+ "%" + '</span>' +
                                    "</div></div>";
                            }
                            return result;
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            nameTextStyle:{
                                padding: [30,0,0,-35]
                            },
                            position:'bottom',
                            type: 'category',
                            data: ['前20%', '20-40%', '40-60%', '60-80%',"80-100%"],
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                interval: 0,
                                rotate: 40
                            }
                        }
                    ],
                    yAxis: [
                        {
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            name: "占比：%",
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '本班占比:',
                            type: 'bar',
                            data: [45, 48, 43, 40,49],
                            barWidth:"44px",
                            itemStyle: {
                                normal:{
                                    barBorderRadius:[4, 4, 4, 4],
                                }
                            }
                        }
                    ]
                }
            }
        },
        components: {

        },
        mounted(){
            this.drawLine();
            this.drawLine1();
        },
        methods: {
            drawLine(){
                let myChart = this.$echarts.init(document.getElementById('count'));
                let option = this.fractional_statistics;
                myChart.setOption(option);
            },

            drawLine1(){
                let myChart = this.$echarts.init(document.getElementById('ranking'));
                let option = this.ranking_section_statistics;
                    myChart.setOption(option);
            }
        }
    };
</script>


<style lang='stylus' scoped>
    .echarts
        width 744px
        height 447px
        background #fff
        margin 14px auto
        border-radius 6px
        padding 30px 29px





</style>
