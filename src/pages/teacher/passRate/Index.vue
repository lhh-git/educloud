<template>
    <div>
        <header-public :url_index=url_index></header-public>
        <div class='container'>
            <header-title></header-title>
            <div class='main'>
                <left-title :active="active"></left-title>
                <div class='right'>
                    <div class='course'>
                        <ul class='nav'>
                            <li v-for='(item, id) of nav'
                                :key='id'
                                :class='{active:id == navIndex}'
                                @click='handleToggleScore(id)'
                            >
                                {{item}}
                            </li>
                        </ul>
                        <ul class='content'>
                            <li>
                                <p>一本分数线</p>
                                <p>508</p>
                            </li>
                            <li>
                                <p>上线人数</p>
                                <p>22</p>
                            </li>
                            <li>
                                <p>上线率</p>
                                <p>38%</p>
                            </li>
                            <li>
                                <p>目标完成率</p>
                                <p>120%</p>
                                <p>目标上线人数30</p>
                            </li>
                        </ul>
                        <p class='count'>本班参考人数: 50, 缺考人数0</p>
                    </div>
                    <!-- 上线情况 -->
                    <div class='pass_rate'>
                        <div class='top1'>
                            <span>上线情况</span>
                        </div>
                        <div class='main'>
                            <ul class='nav'>
                                <li>姓名</li>
                                <li>语文</li>
                                <li>数学</li>
                                <li>英语</li>
                                <li>物理</li>
                                <li>化学</li>
                                <li>政治</li>
                                <li>历史</li>
                                <li>历史</li>
                            </ul>
                            <ul class='title'>
                                <li>总分</li>
                                <li>班级排名</li>
                                <li>年级排名</li>
                                <li>薄弱知识点</li>
                            </ul>
                            <ul class='content'>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                            </ul>
                        </div>
                    </div>
                    <!-- 上线率趋势 -->
                    <score-echarts></score-echarts>
                    <!-- 上线波动分析 -->
                    <div class='pass_rate'>
                        <div class='top2'>
                            <div class='title_nav'>
                                <span class='title'>上线波动分析</span>
                                <ul>
                                    <li v-for='(item, id) of passNav'
                                        :key='id'
                                        :class='{active:id == passIndex}'
                                        @click='handleTogglePassFluctuate(id)'
                                    >
                                        {{item}}
                                    </li>
                                </ul>
                            </div>
                            <p>相比上次考试本次考试新上线为流入；上次上线本次未上线为流出；本学期第一次上线为新增上线；本学期未流出为稳定上线。</p>
                        </div>
                        <div class='main'>
                            <ul class='nav'>
                                <li>姓名</li>
                                <li>语文</li>
                                <li>数学</li>
                                <li>英语</li>
                                <li>物理</li>
                                <li>化学</li>
                                <li>政治</li>
                                <li>历史</li>
                                <li>历史</li>
                            </ul>
                            <ul class='title'>
                                <li>总分</li>
                                <li>班级排名</li>
                                <li>年级排名</li>
                                <li>薄弱知识点</li>
                            </ul>
                            <ul class='content'>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                            </ul>
                        </div>
                    </div>
                    <!-- 踩线生分析 -->
                    <div class='pass_rate'>
                        <div class='top2'>
                            <div class='title_nav'>
                                <span class='title'>踩线生分析</span>
                                <ul>
                                    <li v-for='(item, id) of footfaultNav'
                                        :key='id'
                                        :class='{active:id == footfaultIndex}'
                                        @click='handleToggleFootfaultAnalysis(id)'
                                    >
                                        {{item}}
                                    </li>
                                </ul>
                            </div>
                            <p>在一本线附近的学生具有稳定上线的潜力，可以关注他们的薄弱学科。</p>
                        </div>
                        <div class='main main2'>
                            <ul class='nav'>
                                <li>姓名</li>
                                <li>语文</li>
                                <li>数学</li>
                                <li>英语</li>
                                <li>物理</li>
                                <li>化学</li>
                                <li>政治</li>
                                <li>历史</li>
                                <li>历史</li>
                            </ul>
                            <ul class='title'>
                                <li>总分</li>
                                <li>班级排名</li>
                                <li>年级排名</li>
                                <li>薄弱知识点</li>
                            </ul>
                            <ul class='content'>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                                <li>3</li>
                            </ul>
                        </div>
                        <p class='common'>
                            <span>共同薄弱知识点：</span>
                            <span>文言文理解、文言文理解</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderPublic from "@/components/header"
    import HeaderTitle from '@/components/headerTitle'
    import LeftTitle from '@/pages/teacher/common/components/leftTitle'
    import ScoreEcharts from './echarts.vue'
    export default {
        name: "passRate",
        data () {
            return {
                url_index: 1,   //header下标
                active: 1,        //跳转页面
                navIndex: 0,      //科目下标
                nav: ['全科', '语文', '数学', '英语', '物理', '化学', '生物'],
                passIndex: 0,     //上线波动分析
                passNav: ['流入7人', '流出2人', '新增上线2人', '稳定上线12人'],
                footfaultIndex: 0,//踩线生分析
                footfaultNav: ['比一本线高10分 7人', '比一本线低10分 3人']

            }
        },
        components: {
            HeaderPublic,
            HeaderTitle,
            LeftTitle,
            ScoreEcharts
        },
        methods: {
            handleToggleScore (id) {  //切换科目
               this.navIndex = id
            },
            handleTogglePassFluctuate (id) { //上线波动分析切换
                this.passIndex = id
            },
            handleToggleFootfaultAnalysis (id) { //踩线生分析切换
                this.footfaultIndex = id
            }
        }
    };
</script>


<style lang='stylus' scoped>
    @import url('../common/css/allCourse.css');
    @import url('../common/css/passRate.css');
    .main
        overflow: hidden
        margin: 20px auto 0
        width: 940px
        .right
            overflow: hidden
            float: right
            width: 744px
</style>
