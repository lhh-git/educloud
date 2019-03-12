import ClassAndSubjectTabs from '../common/classAndSubjectTabs.vue';

export default {
    components: {
      ClassAndSubjectTabs
    },
    data() {
      return {
        item:{},
        gridSitulation:[],
        tabs: [
          {
            label: '全科',
            value: '1',
            main: false,
            difficultyDegree:0.48,
            all_stable:8,
            stable_7_6:8,
            stable_5_4:8,
            stable_3_2:8,
            stable_1:8,
          },
          {
            label: '语文',
            value: '2',
            main: true,
            difficultyDegree:0.10,
            all_stable:7,
            stable_7_6:7,
            stable_5_4:7,
            stable_3_2:7,
            stable_1:7,
          },
          {
            label: '数学',
            value: '3',
            main: false,
            difficultyDegree:0.35,
            all_stable:6,
            stable_7_6:6,
            stable_5_4:6,
            stable_3_2:6,
            stable_1:6,
          }
        ],
        activeValue: '1',
        weakTableData: [
          {
            knowledge: '人大附中20181113',
            showTime: 13,
            classPoint: 8,
            gradePoint: 89
          },
          {
            knowledge: '人大附中20181113',
            showTime: 13,
            classPoint: 48,
            gradePoint: 89
          },
          {
            knowledge: '人大附中20181113',
            showTime: 13,
            classPoint: 64,
            gradePoint: 89
          },
          {
            knowledge: '人大附中20181113',
            showTime: 13,
            classPoint: 74,
            gradePoint: 89
          }
        ],
        echarData:[
          {
            name:'稳定上线',
            people:8
          },
          {
            name:'上线7~6次',
            people:8
          },
          {
            name:'上线5~4次',
            people:8
          },
          {
            name:'上线3~2次',
            people:8
          },
          {
            name:'只上线1次',
            people:8
          },
        ],
        counts:[{
          name:'上线7~6次',
          value:0
        },
        {
          name:'上线5~4次线',
          value:1
        }
        ],
        grid:[
          [
          {
            name:'张明',
            weakKnowledge:'文言文理解、文言文理解、文言文理解、文言文理解aaaaaaaaaaaaaaaaaa（20个）'
          },
          {
            name:'张明',
            weakKnowledge:'文言文理解、文言文理解、文言文理解、文言文理解aaaaaaaaaaaaaaaaaa（20个）'
          },
          {
            name:'张明',
            weakKnowledge:'文言文理解、文言文理解、文言文理解、文言文理解aaaaaaaaaaaaaaaaaa（20个）'
          },
          {
            name:'张明',
            weakKnowledge:'文言文理解、文言文理解、文言文理解、文言文理解aaaaaaaaaaaaaaaaaa（20个）'
          },
          {
            name:'张明',
            weakKnowledge:'文言文理解、文言文理解、文言文理解、文言文理解aaaaaaaaaaaaaaaaaa（20个）'
          },
          {
            name:'张明',
            weakKnowledge:'文言文理解、文言文理解、文言文理解、文言文理解aaaaaaaaaaaaaaaaaa（20个）'
          },
          {
            name:'张明',
            weakKnowledge:'文言文理解、文言文理解、文言文理解、文言文理解aaaaaaaaaaaaaaaaaa（20个）'
          }
        ],
        [
          {
            name:'小东',
            weakKnowledge:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊aaaaaaaaaaaaaaaaaa（20个）'
          },
          {
            name:'小东',
            weakKnowledge:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊aaaaaaaaaaaaaaaaaa（20个）'
          },
          {
            name:'小东',
            weakKnowledge:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊aaaaaaaaaaaaaaaaaa（20个）'
          },
          {
            name:'小东',
            weakKnowledge:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊aaaaaaaaaaaaaaaaaa（20个）'
          },
          {
            name:'小东',
            weakKnowledge:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊aaaaaaaaaaaaaaaaaa（20个）'
          },
          {
            name:'小东',
            weakKnowledge:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊aaaaaaaaaaaaaaaaaa（20个）'
          },
          {
            name:'小东',
            weakKnowledge:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊aaaaaaaaaaaaaaaaaa（20个）'
          }
        ]
        ]
        };
    },
    methods:{
      tabClick(ele, index){
        this.item = this.tabs[ele.value-1];
        // item
      },
      init(){
        if(!!this.tabs && this.tabs.length > 0){
          this.item = this.tabs[0];
        }
        this.allCount = this.echarData[0].people + this.echarData[1].people + this.echarData[2].people + this.echarData[3].people + this.echarData[4].people;
        this.grid.forEach((oneGrid)=>{
          oneGrid.forEach((ele) => {
            let count = ele.weakKnowledge.length - 23;
            ele.weakKnowledge = ele.weakKnowledge.substring(0,23).concat("...").concat("<span class='etable-count'>").concat("(").concat(count).concat("个)").concat("</span>");
            ele.weakKnowledge = '<div class="etable-column-content">'.concat(ele.weakKnowledge).concat('</div>').concat('<a class="etable-column-a" href="#">查看详细情况</a>')
          })
        })
        this.gridSitulation = this.grid[0];
      },
      initCircle(){
        var dom = document.querySelector(".echart-circle");
        var myChart = this.$echarts.init(dom);
        var app = {};
        let option = null;
        app.title = '环形图';

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                icon:'circle',
                orient: 'vertical',
	              itemGap: 15,
                x: '553px',
                y: 'center',
                textStyle:{
                  fontFamily: 'PingFangSC-Regular',
                  fontSize: 14,
                  color: '#A2AFCD',
                },
                data:[this.echarData[0].name,this.echarData[1].name,this.echarData[2].name,this.echarData[3].name,this.echarData[4].name]
            },
            graphic: [{
            type:'text',
            left:'center',
            top:'42%',
            style:{
                text:this.allCount,
                fill:'#5F6D91',
                fontSize:'24',
            }
        },{
            type:'text',
            left:'center',
            top:'55%',
            style:{
                text:'累计上线人数',
                fill:'#5F6D91',
                fontSize:'14',
            }
        }],
            series: [
                {
                    name:'上线分类',
                    type:'pie',
                    radius: ['57%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'left'
                        },
                        emphasis: {
                          show: false,
                            textStyle: {
                              fontFamily: 'PingFangSC-Regular',
                              fontSize: '24px',
                              color: '#383B57',
                              textAlign: 'center',
                                // fontSize: '30',
                                // fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:this.echarData[0].people, name:this.echarData[0].name,itemStyle:{color:"#4B70FF"}},
                        {value:this.echarData[1].people, name:this.echarData[1].name,itemStyle:{color:"#FFC95D"}},
                        {value:this.echarData[2].people, name:this.echarData[2].name,itemStyle:{color:"#FF8937"}},
                        {value:this.echarData[3].people, name:this.echarData[3].name,itemStyle:{color:"#4E65A0"}},
                        {value:this.echarData[4].people, name:this.echarData[4].name,itemStyle:{color:"#A2AFCD"}}
                    ]
                }
            ]
        };
        ;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
      },
      confirm(count){
        this.gridSitulation = this.grid[count];
      }
    },
    created(){
      this.init();
    },
    mounted(){
      this.initCircle();
    }
}