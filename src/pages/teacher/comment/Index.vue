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
                    <answer></answer>
                    <div class="knowledge">
                        <p>题型：选择题 | 知识点：文言文</p>
                        <p>难度：0.3 | 区分度：0.6</p>
                    </div>
                    <score-echarts></score-echarts>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderPublic from "@/components/header";
    import HeaderTitle from '@/components/headerTitle'
    import LeftTitle from '@/pages/teacher/common/components/leftTitle'
    import ScoreEcharts from './echarts.vue'
    import Answer from './Answer.vue'

    export default {
        name: "comment",
        data() {
            return {
                url_index: 1,   //header下标
                navIndex: 0,
                nav: ['全科', '语文', '数学', '英语', '物理', '化学', '生物'],
                active: 3
            }
        },
        components: {
            HeaderPublic,
            LeftTitle,
            HeaderTitle,
            ScoreEcharts,
            Answer
        },
        methods: {
            handleToggleScore(id) {  //切换科目
                this.navIndex = id
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
</style>
