<template>
    <div>
        <header-public :url_index=2></header-public>
        <div class='container'>
            <header-title></header-title>
            <div class='main'>
                <left-title :active="1"></left-title>
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
                    </div>
                    <!-- 各学校目标完成情况 -->
                    <div class='study'>
                        <div class='top1'>
                            <span>各学校目标完成情况</span>
                            <span>超均率：(本班均分-全区均分)➗全区均分</span>
                        </div>
                        <div class='main'>
                            <ul class='nav'>
                                <li>班级</li>
                                <li>1班</li>
                                <li>1班</li>
                                <li>1班</li>
                                <li>1班</li>
                                <li>1班</li>
                                <li>1班</li>
                                <li>1班</li>
                                <li>1班</li>
                            </ul>
                            <ul class='title'>
                                <li>总达标次数</li>
                                <li>期中考试</li>
                                <li>期末考试</li>
                                <li>期中考试</li>
                                <li>期末考试</li>
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderPublic from "@/components/header"
    import HeaderTitle from '@/components/headerTitle/schoolHeaderTitle';
    import LeftTitle from '../common/components/leftNav'
    export default {
        name: "average",
        components:{
            HeaderPublic,
            HeaderTitle,
            LeftTitle
        },
        data() {
            return {
                url_index:2,
                navIndex: 0,
                nav: ['全科', '语文', '数学', '英语', '物理', '化学', '生物'],
            }
        },
        mounted() {
        },
        methods: {
            handleToggleScore (id) {  //切换科目
                this.navIndex = id
            }
        }
    };
</script>

<style lang='stylus' scoped>
    @import url('../common/css/allCourse.css');
    @import url('../common/css/learningSituation.css');
    .main
        margin: 20px auto 0
        width: 940px
        .right
            float: right
            width: 744px

</style>
