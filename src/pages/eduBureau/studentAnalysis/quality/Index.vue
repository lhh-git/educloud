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
                                :key='id' @click='handleToggleScore(id)'
                                :class='{active:id == navIndex}'
                            >
                                {{item}}
                            </li>
                        </ul>
                    </div>
                    <div class="edu_knowledge">
                        <div class="edu_tab">
                            <h1>知识点选择</h1>
                            <ul class='left_nav'>
                                <li v-for='(item, id) of leftNav'
                                    :key='id' @click='handleKnowledge(id)'
                                    :class='{active1:id == leftNavIndex}'
                                >
                                    {{item}}
                                </li>
                            </ul>
                        </div>
                        <div class="edu_info">
                            <h2>知识点：三角函数</h2>
                            <div>
                                <p>题型：选择题 | 考察次数：<span>4</span> | 分值占比：<span>12</span>% </p>
                                <div>
                                    <div class="edu_answer"><span>1</span>试题来源：2018-2019学年上学期期中考试</div>
                                    <div class="edu_test">这里是试题截图</div>
                                </div>
                                <div>
                                    <div class="edu_answer"><span>2</span>试题来源：2018-2019学年上学期期中考试</div>
                                    <div class="edu_test">这里是试题截图</div>
                                </div>
                            </div>
                            <div>
                                <p>题型：选择题 | 考察次数：<span>4</span> | 分值占比：<span>12</span>% </p>
                                <div>
                                    <!-- <div class="edu_answer"><span>1</span>试题来源：2018-2019学年上学期期中考试</div> -->
                                    <div class="edu_test">这里是试题截图</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderPublic from "@/components/header";
    import HeaderTitle from '@/components/headerTitle'
    import LeftTitle from '../common/components/leftTitle'
    export default {
        name: "comment",
        data() {
            return {
                url_index: 2,   //header下标
                active: 3,
                navIndex: 0,
                nav: ['全科', '语文', '数学', '英语', '物理', '化学', '生物'],
                leftNavIndex: 0,
                leftNav: ['三角函数','圆锥曲线','三角函数','圆锥曲线','三角函数','圆锥曲线','三角函数','圆锥曲线','三角函数','圆锥曲线','三角函数','圆锥曲线','三角函数','圆锥曲线',]
            }
        },
        components: {
            HeaderPublic,
            HeaderTitle,
            LeftTitle
        },
        methods: {
            handleToggleScore(id) {  //切换科目
                this.navIndex = id
            },
             handleKnowledge(id) {  //切换科目
                this.leftNavIndex = id
            }
        }
    };
</script>


<style lang="stylus" scoped>
    @import url('../common/css/allCourse.css');
    @import url('../common/css/someCourse.css');
    .main
        overflow: hidden
        margin: 20px auto 0
        width: 940px
        .right
            overflow: hidden
            float: right
            width: 744px
            .knowledge
                width 524px
                height 352px
                margin-top 14px
                background #FFFFFF
                box-shadow 0 0 4px 0 #E9E9F2
                border-radius 6px
                padding-top 20px
                padding-left 30px
                p
                    line-height 22px
                    font-size 16px
                    color #383B57
                    font-weight bold
            .edu_knowledge
                width 744px
                height 1011px
                background #fff
                margin-top 14px
                .edu_tab
                    float left
                    margin-right 32px
                    h1
                        padding-top 32px
                        margin-left 18px
                        font-size 16px
                        color #383B57
                        font-weight bold
                    .left_nav
                        width 176px
                        height 903px
                        border 1px solid rgba(162,175,205,0.20)
                        margin-left 18px
                        margin-top 11px
                        padding-top 18px
                        li
                            width 176px
                            height 45px
                            line-height 45px
                            padding-left 25px
                            cursor pointer
                        .active1
                            width 152px
                            height 45px
                            border-left 3.6px solid #3388FF
                            padding-left 21.4px
                            background #F6F7FB
                            color #3388FF
                            font-weight bold
                .edu_info
                    padding-top 30px
                    h2
                      font-size 18px
                      color #383B57
                      font-weight bold
                    p
                        margin-top 20px
                        font-size 14px
                        color #5F6D91
                        span
                            font-size 16px
                            color #3388FF
                    .edu_answer
                        margin-top 20px
                        font-size 13px
                        color #5F6D91
                        span
                            display inline-block
                            width 24px
                            font-size 14px
                            color #383B57
                            height 24px
                            background #F6F7FB
                            line-height 24px
                            text-align center
                            margin-right 9px
                    .edu_test
                        display inline-block
                        width 488px
                        height 243px
                        font-size 12px 
                        color #A2AFCD
                        letter-spacing 1px
                        background #F2F4F6
                        margin-top 13px
                        line-height 243px
                        text-align center
</style>

