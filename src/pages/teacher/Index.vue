<template>
<div class="eduTermList">
    <header-public :url_index=url_index></header-public>
    <div class="container">
        <div class="termListTitle">
            <div class='row'>
                <label>学年</label>
                <span v-for="(item,index) in academic_year" 
                    :key='index'
                    :class="{academic_year_active:current_academic_year == index}" 
                    @click="hangChangeAcademicYear(index)">{{item}}
                </span>
            </div>
            <div class='row'>
                <label>年级</label>
                <span v-for="(item,index) in academic_grade" 
                    :key='index'
                    :class="{academic_year_active:current_academic_grade == index}" 
                    @click="hangChangeAcademicGrade(index)">{{item}}
                </span>
            </div>
            <div class='row'>
                <label>考试</label>
                <span v-for="(item,index) in academic_info" 
                    :key='index'
                    :class="{academic_year_active:current_academic_info == index}" 
                    @click="hangChangeAcademicInfo(index)">{{item}}
                </span>
            </div>
        </div>
        <div class="termListContent">
            <div v-for="(exam, index) in examList" 
                :key='index'
                class="terms_list"
            >
                <el-col :span="24">
                    <div class="grid-content bg-purple-white el-list-edu">
                        <el-col class="exam_left" :span="18">
                            <div class="exam_title">
                                <button :class="{border_pink:font_color == exam.art_sci}"><span :class="{pink:font_color == exam.subject_type}">{{exam.grade_and_type}}</span></button>
                                <span class="grid-content exam_name">{{exam.batch_name}}</span>
                            </div>
                            <div class="exam_time">
                                <div class='col'>
                                    <img src="@/assets/images/ic_time.png" alt="">
                                    <span>考试时间：</span>
                                    <span>{{exam.exam_date}}</span>
                                </div>
                                <div class='col'>
                                    <img src="@/assets/images/ic_xueke.png" alt="">
                                    <span>考试学科：</span>
                                    <span>{{exam.subjects}}</span>
                                </div>
                            </div>
                        </el-col>
                        <el-col class="exam_right" :span="6">
                            <a @click="goToExamInfo(exam)" style="cursor: pointer">
                                <div class="el-btn-info" 
                                    :data-id="index" 
                                    :data-info="exam.examName"
                                    :data-batch='exam.batch_id'
                                >
                                    查看详细分析报告
                                </div>
                            </a>
                        </el-col>
                    </div>
                    <div></div>
                </el-col>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import HeaderPublic from "@/components/header";
    export default {
        name: "termList",
        components:{
            HeaderPublic
        },
        data() {
            return {
                url_index: 1,   //header下标
                current_academic_year: 0,
                current_academic_grade: 0,
                current_academic_info: 0,
                academic_year: ["2018-2019学年","2017-2018学年","2016-2017学年"],
                academic_grade: ["全部年级", "高二", "高三"],
                academic_info: ["全部考试", "周考", "月考", "期中", "期末", "会考"],
                font_color: 2,
                examList: []
            }
        },
        mounted () {
            this.handleGetExamListInfo()
        },
        methods: {
            handleGetExamListInfo () {
                let class_id = sessionStorage.getItem('class_id')
                this.$http.get('/class/' + 34220000942201600 + '/exam_list/?debug=true', {})
                    .then(this.handleGetExamListInfoSucc.bind(this))
            },
            handleGetExamListInfoSucc (res) {
                if(res.data.code == 0) {
                    console.log(res.data.data)
                    this.examList = res.data.data
                }
                
            },
            hangChangeAcademicYear(index){
                this.current_academic_year = index
            },
            hangChangeAcademicGrade(index){
                this.current_academic_grade = index
            },
            hangChangeAcademicInfo(index){
                this.current_academic_info = index
            },
            goToExamInfo(item){
                this.$router.push({
                    path: "/teacher/score?",
                    query: {
                        batch_id: item.batch_id
                    }
                });
            }
        }
    };
</script>

<style lang='stylus' scoped>
    .border_pink
        border 1px solid #F5535B !important
        span 
            color #F5535B !important
    .academic_year_active
        background-color #4B70FF
        color: #ffffff
    .termListTitle
        width 940px
        overflow hidden
        background-color #FFFFFF
        border-radius 6px
        margin 0px auto
        margin-top 30px
        padding-bottom 22px 
        .row 
            margin-top 16px
            label
                font-family PingFangSC-Regular
                font-size 14px
                color #A2AFCD
                margin-left 20px
            span
                margin-left 20px
                display inline-block
                padding 6px
                cursor pointer
                vertical-align middle
    .termListContent
        width 940px
        border-radius 6px
        margin 14px auto
        .terms_list
            height 120px
            width 100%
            background-color #FFFFFF
            margin-top 14px
            border-radius 6px
        .exam_name
            font-family PingFangSC-Semibold
            font-size 18px
            color #383B57
            display inline-block
            line-height 26px
            margin-left 10px
        .el-btn-info
            width 150px
            height 40px
            background #4B70FF
            box-shadow 0 16px 10px -12px rgba(255, 137, 55, 0.20)
            border-radius 100px
            line-height 40px
            text-align center
            font-family PingFangSC-Medium
            font-size 14px
            color #FFFFFF

        .exam_right
            display flex
            justify-content center
            margin-top 40px
        .el-col
            border-radius 4px
        .bg-purple-white
            background #ffffff
        .bg-purple
            background #d3dce6
        .grid-content
            border-radius 4px
        .el-nav-edu
            height 140px
        .el-list-edu
            min-height 120px
            background url('../../assets/images/list_bg.png')
            background-repeat no-repeat
            background-size 100%
        .el-row
            margin-bottom 20px
            margin-top 14px
            &:last-child
                margin-bottom 0
        .exam_title
            padding 20px 15px
        button
            border 1px solid #4B70FF
            border-radius: 4px
        button > span
            display inline-block
            color #4B70FF
            padding 6px 10px !important
        .exam_time
            padding 10px 15px
            font-family PingFangSC-Regular
            font-size 14px
            color #A2AFCD
            .col
                float: left
            .col:nth-child(2)
                margin-left 30px
        
</style>

