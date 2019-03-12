import ClassAndSubjectTabs from '../common/classAndSubjectTabs.vue';
import Anchor from '@/components/anchor/anchor.vue';

const onlineRateTooltip = `
  <div class="onlineRate-tooltip classAnalysis-tooltip">
  <p class="classAnalysis-tooltip-title">{b0}</p>
  <p>班级上线率：{c0}%</p>
  <p>年级上线率：{c1}%</p>
  <p>未上线学科：物理、生物、化学</p>
  </div>
`;
export default {
  components: {
    ClassAndSubjectTabs,
    Anchor
  },
  data() {
    return {
      anchorActive: '',
      anchorTitle: '成绩总览',
      anchorList: [
        {
          label: '上线率趋势',
          value: 'classAnalysisTrend'
        },
        {
          label: '超均率趋势对比',
          value: 'classAnalysisCompair'
        },
        {
          label: '学科对比',
          value: 'classAnalysisSubjectsCompair'
        },
        {
          label: '班级薄弱知识点',
          value: 'classAnalysisWeakPoint'
        }
      ],
      tabs: [
        {
          label: '全科',
          value: '1',
          main: false
        },
        {
          label: '语文',
          value: '2',
          main: true
        },
        {
          label: '数学',
          value: '3',
          main: false
        }
      ],
      info: [
        {
          id: '1',
          label: '高于年级上线率次数',
          num: 4
        },
        {
          id: '2',
          label: '高于年级均分次数',
          num: 3
        },
        {
          id: '3',
          label: '累计上线人数',
          num: 24
        },
        {
          id: '4',
          label: '稳定上线人数',
          num: 13
        },
        {
          id: '5',
          label: '累计知识薄弱点',
          num: 81
        }
      ],
      activeValue: '1',
      examTime: 4,
      classmatesNum: 52,
      tableData: [
        {
          exam: '人大附中20181113',
          classRate: '13%',
          gradeRate: '22%',
          subjectsRate: [
            {
              label: '语文',
              highlight: false
            },
            {
              label: '数学',
              highlight: false
            },
            {
              label: '英语',
              highlight: false
            },
            {
              label: '物理',
              highlight: true
            },
            {
              label: '生物',
              highlight: false
            }
          ]
        },
        {
          exam: '人大附中20181113',
          classRate: '13%',
          gradeRate: '22%',
          subjectsRate: [
            {
              label: '语文',
              highlight: false
            },
            {
              label: '数学',
              highlight: false
            },
            {
              label: '英语',
              highlight: false
            },
            {
              label: '物理',
              highlight: true
            },
            {
              label: '生物',
              highlight: false
            }
          ]
        },
        {
          exam: '人大附中20181113',
          classRate: '13%',
          gradeRate: '22%',
          subjectsRate: [
            {
              label: '语文',
              highlight: false
            },
            {
              label: '数学',
              highlight: false
            },
            {
              label: '英语',
              highlight: false
            },
            {
              label: '物理',
              highlight: true
            },
            {
              label: '生物',
              highlight: false
            }
          ]
        },
        {
          exam: '人大附中20181113',
          classRate: '13%',
          gradeRate: '22%',
          subjectsRate: [
            {
              label: '语文',
              highlight: false
            },
            {
              label: '数学',
              highlight: false
            },
            {
              label: '英语',
              highlight: false
            },
            {
              label: '物理',
              highlight: true
            },
            {
              label: '生物',
              highlight: false
            }
          ]
        },
        {
          exam: '人大附中20181113',
          classRate: '13%',
          gradeRate: '22%',
          subjectsRate: [
            {
              label: '语文',
              highlight: false
            },
            {
              label: '数学',
              highlight: false
            },
            {
              label: '英语',
              highlight: false
            },
            {
              label: '物理',
              highlight: true
            },
            {
              label: '生物',
              highlight: false
            }
          ]
        },
        {
          exam: '人大附中20181113',
          classRate: '13%',
          gradeRate: '22%',
          subjectsRate: [
            {
              label: '语文',
              highlight: false
            },
            {
              label: '数学',
              highlight: false
            },
            {
              label: '英语',
              highlight: false
            },
            {
              label: '物理',
              highlight: true
            },
            {
              label: '生物',
              highlight: false
            }
          ]
        }
      ],
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
      weakResult: [
        {
          label: '本学期累计考试',
          value: 4,
          unit: '次'
        },
        {
          label: '累计错题',
          value: 26,
          unit: '道'
        },
        {
          label: '累计薄弱知识点',
          value: 81,
          unit: '个'
        },
        {
          label: '低于年级水平知识点',
          value: 24,
          unit: '个'
        }
      ],
      onlineRate: {
        tooltip : {
          formatter: onlineRateTooltip, 
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          backgroundColor: 'none'
        },
        legend: {
          data:['班级上线率趋势','年级上线率趋势'],
        },
        grid: {
          top: 49
        },
        xAxis: {
          type: 'category',
          name: '考试',
          nameTextStyle: {
            color: 'rgb(96,110,144)',
            fontSize: 14
          },
          data: ['人大附中期中\n20181113', '人大附中期中\n20181113', '人大附中期中\n20181113', '人大附中期中\n20181113', '人大附中期中\n20181113'],
          axisLine: {
            show: false,
            color: 'rgb(236,239,245)',
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: 'rgb(96,110,144)',
            fontSize: 14,
            rotate: 35,
            margin: 35,
            align: 'center'
          }
        },
        yAxis: {
          name: '上线率',
          nameTextStyle: {
            color: 'rgb(96,110,144)',
            fontSize: 14,
            padding: [0, 60, 0, 0],
            align: 'left'
          },
          nameGap: 32,
          type: 'value',
          min: 0,
          max: 100,
          interval: 25,
          axisLine: {
            show: false
          },
          axisLabel: {
            margin: 49,
            color: 'rgb(96,110,144)',
            fontSize: 14,
            align: 'left'
          }
        },
        animationEasing: 'quadraticOut',
        color: ['#4B70FF', '#FF8937', '#4E65A0', '#A2AFCD', '#F8BD46'],
        series: [
          {
            name:'班级上线率',
            type:'line',
            // stack: '总量',
            smooth: true,
            data: [8, 12, 14, 52, 6],
            lineStyle: { width: 4 }
          },
          {
            name:'年级上线率',
            type:'line',
            smooth: true,
            data:[10, 14, 16, 42, 6],
            lineStyle: { width: 4 }
          }
        ]
      },
      lowSubjects: [
        {
          label: '语文',
          value: 4
        },
        {
          label: '数学',
          value: 26
        },
        {
          label: '英语',
          value: 81
        },
        {
          label: '物理',
          value: 2
        },
        {
          label: '化学',
          value: 1
        }
      ]
    };
  },
  mounted() {
    this.$echarts.init(this.$refs.onlineRate).setOption(this.onlineRate);
    this.$echarts.init(this.$refs.overRate).setOption(this.onlineRate);
    this.$echarts.init(this.$refs.compairRate).setOption(this.onlineRate);
    const $classAnalysisTrend = this.$refs.classAnalysisTrend;
    const $classAnalysisCompair = this.$refs.classAnalysisCompair;
    const $classAnalysisSubjectsCompair = this.$refs.classAnalysisSubjectsCompair;
    const $classAnalysisWeakPoint = this.$refs.classAnalysisWeakPoint;

    window.addEventListener('scroll', e => {
      const scrollY = window.scrollY;
      const winHeight = window.innerHeight;
      const classAnalysisTrendHeight = $classAnalysisTrend.offsetTop + $classAnalysisTrend.offsetHeight;
      const classAnalysisCompairHeight = $classAnalysisCompair.offsetTop + $classAnalysisCompair.offsetHeight;
      const classAnalysisSubjectsCompairHeight = $classAnalysisSubjectsCompair.offsetTop + $classAnalysisSubjectsCompair.offsetHeight;
      const classAnalysisWeakPointHeight = $classAnalysisWeakPoint.offsetTop + $classAnalysisWeakPoint.offsetHeight;

      if (scrollY >= $classAnalysisTrend.offsetTop - 300 && scrollY < classAnalysisTrendHeight - 200) {
        this.anchorActive = 'classAnalysisTrend';
        return;
      }

      if (scrollY >= classAnalysisTrendHeight - 200 && scrollY < classAnalysisCompairHeight - 200) {
        this.anchorActive = 'classAnalysisCompair';
        return;
      }

      if (scrollY >= classAnalysisCompairHeight - 200 && scrollY < classAnalysisSubjectsCompairHeight - 500) {
        this.anchorActive = 'classAnalysisSubjectsCompair';
        return;
      }

      if (scrollY >= classAnalysisSubjectsCompairHeight - 500) {
        this.anchorActive = 'classAnalysisWeakPoint';
        return;
      }

      this.anchorActive = '';

    });
  },
  watch: {
    activeValue(val) {
      console.log(val);
    }
  },
  methods: {
    tabClick(tab) {
      console.log(tab);
    }
  }
}