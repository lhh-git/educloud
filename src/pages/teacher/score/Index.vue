<template>
    <div>
        <header-public :url_index=url_index></header-public>
        <div class='container'>
            <header-title></header-title>
            <!-- <anchor-public :anchorTitle=anchorTitle></anchor-public> -->
            <div class='main'>
                <left-title :active="active"></left-title>
                <div class='right'>
                    <div class='course'>
                        <ul class='nav'>
                            <li v-for='(item, id) of subjects'
                                :key='id' 
                                :class='{active:id == subjectsIndex}'
                                @click='handleToggleScore(id)'
                            >
                                {{item}}
                            </li>
                        </ul>
                        <ul class='content'>
                            <li>
                                <p>班级均分</p>
                                <p>128</p>
                                <p>年级均分109</p>
                            </li>
                            <li>
                                <p>班级最高分</p>
                                <p>682</p>
                            </li>
                            <li>
                                <p>年级排名</p>
                                <p>2</p>
                            </li>
                            <li>
                                <p>上线率</p>
                                <p>38%</p>
                            </li>
                        </ul>
                        <p class='count'>本班参考人数: 50, 缺考人数0</p>
                    </div>
                    <!-- 全科均分统计 -->
                    <div id='allcourse' class='average_count' v-show='subjectsIndex==0'>
                        <div class='top'>
                            <span>全科均分统计</span>
                            <i></i>
                            <span>低于年级平均分</span>
                        </div>
                        <ul class='nav'>
                            <li>学科</li>
                            <li>语文</li>
                            <li>数学</li>
                            <li>英语</li>
                            <li>物理</li>
                            <li>化学</li>
                            <li>政治</li>
                            <li>历史</li>
                        </ul>
                        <ul class='title'>
                            <li>满分</li>
                            <li>班级均分</li>
                            <li>年级均分</li>
                            <li>年级名次</li>
                            <li>最高分</li>
                            <li>最低分</li>
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
                        <ul class='all_count'>
                            <li>总分</li>
                            <li>700</li>
                            <li>700</li>
                            <li>700</li>
                            <li>700</li>
                            <li>700</li>
                            <li>700</li>
                        </ul>
                    </div>
                    <div class="echarts_box">
                        <score-echarts></score-echarts>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderPublic from "@/components/header"
    import HeaderTitle from '@/components/headerTitle'
    import AnchorPublic from '@/components/anchor/anchor.vue'
    import LeftTitle from '@/pages/teacher/common/components/leftTitle'
    import ScoreEcharts from './echarts.vue'
    export default {
        name: "score",
        data () {
            return {
                url_index: 1,   //header下标
                // Height: null,   //左侧导航栏高度
                active: 0,
                navIndex: 0,
                subjects: ['全科','语文','数学','英语','物理','化学','生物'],   //科目列表
                subject_id: 0,  //科目id
                subjectsIndex: 0,
                anchorArr: ['全科均分统计', '分数分段统计', ],
                parentQuer: null
            }
        },
        components: {
            HeaderPublic,
            HeaderTitle,
            AnchorPublic,
            LeftTitle,
            ScoreEcharts
        },
        mounted () {
            this.parentQuer = this.$route.query
            //this.handleGetHeight()  //左侧导航栏高度
            // this.handleGetSubjectsInfo() //查询科目列表
            //this.handleGetScoreInfo() //老师-成绩总览

        },
        methods: {
            // handleGetHeight () { //左侧导航栏高度
            //     let Height = document.querySelector('.right')
            //     this.Height =  Height.offsetHeight
            // },
            // handleGetSubjectsInfo () { //查询科目列表
            //     this.$http.get('/get_subjects/batch/' + 100 + '?debug=true', {})
            //         .then(this.handleGetExamListInfoSucc.bind(this))
            // },
            // handleGetExamListInfoSucc (res) { //查询科目列表成功
            //     if(res.data.code == 0) {
            //         this.subjects = res.data.data
            //     }
            // },
            // handleGetScoreInfo () { //查询老师-成绩总览
            //     let class_id = sessionStorage.getItem('class_id')
            //     let batch_id = this.parentQuer.batch_id 
            //     this.$http.get('/class/' + class_id + '/batch/' + batch_id + '/subject/' + this.subject_id + '/class_score_info?debug=true', {})
            //         .then(this.handleGetScoreInfoSucc.bind(this))
            // },
            // handleGetScoreInfoSucc (res) { //查询老师-成绩总览成功
            //     console.log(res)
            // }, 
            handleToggleScore (id) {  //切换科目
                this.subjectsIndex = id
            }
        },

    };
</script>


<style lang='stylus' scoped>
    @import url('../common/css/allCourse.css');
    @import url('../common/css/someCourse.css');
    .main
        margin: 20px auto 0
        width: 940px
        .right
            float: right
            width: 744px
        .echarts_box
            width 744px
            background-color #F2F4F6

</style>
