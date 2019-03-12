<template>
    <div>
        <header-public :url_index=url_index></header-public>
        <div class='container'>
            <header-title></header-title>
            <div class='main'>
                <left-nav :active="active"></left-nav>
                <div class='right'>
                    <div class='course'>
                        <!-- <ul class='nav'>
                            <li v-for='(item, id) of nav'
                                :key='id'
                                :class='{active:id == navIndex}'
                                @click='handleToggleScore(id)'
                            >
                                <span class="txt">{{item}}</span><span class="mark" v-if="teachNavIdx==id">任课</span>
                            </li>
                        </ul> -->
                        <ul class='content'>
                            <li>
                                <p class="title">备课参考：班级薄弱知识点</p>
                                <p class="text">在历次考试所考察的知识点中，得分率低于50%的知识点为班级薄弱知识点。</p>
                            </li>
                            <li>
                                <p class="title">新增错题</p>
                                <p class="text">22</p>
                            </li>
                            <li>
                                <p class="title">累计薄弱知识点</p>
                                <p class="text">13</p>
                            </li>
                        </ul>
                    </div>
                    <div class="cbox">
                        <div class="item">
                            <div class="c_hd">
                                <div class="title">
                                    <span class="cleft">提高</span>
                                    <span class="cright"><i>13</i>个</span>
                                </div>
                                <div class="desc">最近一次考试，以下知识点的掌握提高了，请继续保持。</div>
                            </div>
                            <table class="list-table">
                                <thead>
                                <tr>
                                    <th style="width: 138px;">知识点</th>
                                    <th style="width: 238px;">班级得分率</th>
                                </tr>
                                </thead>
                                <tbody ref="tbody_height" >
                                <tr v-for="(item,index) in knowledge_list" :key="index" v-if="index < show_tr1">
                                    <td><span class="desc">{{item.knowledge_name}}</span></td>
                                    <td>
                                        <div class="info-box">
                                            <div class="skillbar" :class="item.scoring_average > 60 ? 'blue' : 'orange'">
                                                <div class="filled" LeftNav :style="{width: item.scoring_average+'%'}"></div>
                                            </div>
                                            <span class="percent" :class="item.scoring_average > 60 ? 'blue' : 'orange'">{{item.scoring_average}}%</span>
                                            <span class="rank orange">
                        <img :src="require('@/assets/images/ic_arrow_orange.png')" alt=""><i>3</i>
                      </span>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="showmore" @click="showMore1">展开更多<img
                                    :src="require('@/assets/images/ic_arrow_more_normal.png')"></div>
                        </div>
                        <div class="item">
                            <div class="c_hd">
                                <div class="title">
                                    <span class="cleft">提高</span>
                                    <span class="cright"><i>13</i>个</span>
                                </div>
                                <div class="desc">最近一次考试，以下知识点的掌握提高了，请继续保持。</div>
                            </div>
                            <table class="list-table">
                                <thead>
                                <tr>
                                    <th style="width: 138px;">知识点</th>
                                    <th style="width: 238px;">班级得分率</th>
                                </tr>
                                </thead>
                                <tbody ref="tbody_height" :style="{width:tbody_height+ 'px'}">
                                <tr v-for="(item,index) in knowledge_list" :key="index" v-if="index < show_tr2">
                                    <td><span class="desc">{{item.knowledge_name}}</span></td>
                                    <td>
                                        <div class="info-box">
                                            <div class="skillbar" :class="item.scoring_average > 60 ? 'blue' : 'orange'">
                                                <div class="filled" LeftNav :style="{width: item.scoring_average+'%'}"></div>
                                            </div>
                                            <span class="percent" :class="item.scoring_average > 60 ? 'blue' : 'orange'">{{item.scoring_average}}%</span>
                                            <span class="rank orange">
                        <img :src="require('@/assets/images/ic_arrow_orange.png')" alt=""><i>3</i>
                      </span>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="showmore" @click="showMore2">展开更多<img
                                    :src="require('@/assets/images/ic_arrow_more_normal.png')"></div>
                        </div>
                        <div class="item">
                            <div class="c_hd">
                                <div class="title">
                                    <span class="cleft">提高</span>
                                    <span class="cright"><i>13</i>个</span>
                                </div>
                                <div class="desc">最近一次考试，以下知识点的掌握提高了，请继续保持。</div>
                            </div>
                            <table class="list-table">
                                <thead>
                                <tr>
                                    <th style="width: 138px;">知识点</th>
                                    <th style="width: 238px;">班级得分率</th>
                                </tr>
                                </thead>
                                <tbody ref="tbody_height" :style="{width:tbody_height+ 'px'}">
                                <tr v-for="(item,index) in knowledge_list" :key="index" v-if="index < show_tr3">
                                    <td><span class="desc">{{item.knowledge_name}}</span></td>
                                    <td>
                                        <div class="info-box">
                                            <div class="skillbar" :class="item.scoring_average > 60 ? 'blue' : 'orange'">
                                                <div class="filled" LeftNav :style="{width: item.scoring_average+'%'}"></div>
                                            </div>
                                            <span class="percent" :class="item.scoring_average > 60 ? 'blue' : 'orange'">{{item.scoring_average}}%</span>
                                            <span class="rank orange">
                        <img :src="require('@/assets/images/ic_arrow_orange.png')" alt=""><i>3</i>
                      </span>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="showmore" @click="showMore3">展开更多<img
                                    :src="require('@/assets/images/ic_arrow_more_normal.png')"></div>
                        </div>
                        <div class="item">
                            <div class="c_hd">
                                <div class="title">
                                    <span class="cleft">提高</span>
                                    <span class="cright"><i>13</i>个</span>
                                </div>
                                <div class="desc">最近一次考试，以下知识点的掌握提高了，请继续保持。</div>
                            </div>
                            <table class="list-table">
                                <thead>
                                <tr>
                                    <th style="width: 138px;">知识点</th>
                                    <th style="width: 238px;">班级得分率</th>
                                </tr>
                                </thead>
                                <tbody ref="tbody_height" :style="{width:tbody_height+ 'px'}">
                                <tr v-for="(item,index) in knowledge_list" :key="index" v-if="index < show_tr4">
                                    <td><span class="desc">{{item.knowledge_name}}</span></td>
                                    <td>
                                        <div class="info-box">
                                            <div class="skillbar" :class="item.scoring_average > 60 ? 'blue' : 'orange'">
                                                <div class="filled" LeftNav :style="{width: item.scoring_average+'%'}"></div>
                                            </div>
                                            <span class="percent" :class="item.scoring_average > 60 ? 'blue' : 'orange'">{{item.scoring_average}}%</span>
                                            <span class="rank orange">
                        <img :src="require('@/assets/images/ic_arrow_orange.png')" alt=""><i>3</i>
                      </span>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="showmore" @click="showMore4">展开更多<img
                                    :src="require('@/assets/images/ic_arrow_more_normal.png')"></div>
                        </div>
                        <div class="item">
                            <div class="c_hd">
                                <div class="title">
                                    <span class="cleft">提高</span>
                                    <span class="cright"><i>13</i>个</span>
                                </div>
                                <div class="desc">最近一次考试，以下知识点的掌握提高了，请继续保持。</div>
                            </div>
                            <table class="list-table">
                                <thead>
                                <tr>
                                    <th style="width: 138px;">知识点</th>
                                    <th style="width: 238px;">班级得分率</th>
                                </tr>
                                </thead>
                                <tbody ref="tbody_height">
                                <tr v-for="(item,index) in knowledge_list" :key="index" v-if="index < show_tr5">
                                    <td><span class="desc">{{item.knowledge_name}}</span></td>
                                    <td>
                                        <div class="info-box">
                                            <div class="skillbar" :class="item.scoring_average > 60 ? 'blue' : 'orange'">
                                                <div class="filled" LeftNav :style="{width: item.scoring_average+'%'}"></div>
                                            </div>
                                            <span class="percent" :class="item.scoring_average > 60 ? 'blue' : 'orange'">{{item.scoring_average}}%</span>
                                            <span class="rank orange">
                        <img :src="require('@/assets/images/ic_arrow_orange.png')" alt=""><i>3</i>
                      </span>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="showmore" @click="showMore5">展开更多<img
                                    :src="require('@/assets/images/ic_arrow_more_normal.png')"></div>
                        </div>
                        <div class="item">
                            <div class="c_hd">
                                <div class="title">
                                    <span class="cleft">提高</span>
                                    <span class="cright"><i>13</i>个</span>
                                </div>
                                <div class="desc">最近一次考试，以下知识点的掌握提高了，请继续保持。</div>
                            </div>
                            <table class="list-table">
                                <thead>
                                    <tr>
                                    <th style="width: 138px;">知识点</th>
                                    <th style="width: 238px;">班级得分率</th>
                                </tr>
                                </thead>
                                <tbody ref="tbody_height">
                                    <tr v-for="(item,index) in knowledge_list" :key="index" v-if="index < show_tr6">
                                    <td><span class="desc">{{item.knowledge_name}}</span></td>
                                    <td>
                                        <div class="info-box">
                                            <div class="skillbar" :class="item.scoring_average > 60 ? 'blue' : 'orange'">
                                                <div class="filled" LeftNav :style="{width: item.scoring_average+'%'}"></div>
                                            </div>
                                            <span class="percent" :class="item.scoring_average > 60 ? 'blue' : 'orange'">{{item.scoring_average}}%</span>
                                            <span class="rank orange">
                        <img :src="require('@/assets/images/ic_arrow_orange.png')" alt=""><i>3</i>
                      </span>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="showmore" @click="showMore6">展开更多<img
                                    :src="require('@/assets/images/ic_arrow_more_normal.png')"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderPublic from "@/components/header"
    import HeaderTitle from '@/components/headerTitle'
    import LeftNav from './LeftNav'
    import ScoreEcharts from './echarts.vue'

    export default {
        name: "passRate",
        data() {
            return {
                url_index: 2,   //header
                tbody_height:184,
                active: 1,        //跳转页面
                navIndex: 0,      //科目下标
                nav: ['语文', '数学', '英语', '物理', '化学', '生物'],
                teachNavIdx: 0,
                passIndex: 0,     //上线波动分析
                passNav: ['流入7人', '流出2人', '新增上线2人', '稳定上线12人'],
                footfaultIndex: 0,//踩线生分析
                footfaultNav: ['比一本线高10分 7人', '比一本线低10分 3人'],
                knowledge_list:[
                    {knowledge_name:"文言文阅读文",scoring_average:"15",amount_of_increase_number:'3',amount_of_increase:0},
                    {knowledge_name:"文言文阅读文",scoring_average:"25",amount_of_increase_number:'3',amount_of_increase:0},
                    {knowledge_name:"文言文阅读文",scoring_average:"35",amount_of_increase_number:'3',amount_of_increase:0},
                    {knowledge_name:"文言文阅读文",scoring_average:"45",amount_of_increase_number:'3',amount_of_increase:0},
                    {knowledge_name:"文言文阅读文",scoring_average:"85",amount_of_increase_number:'3',amount_of_increase:0},
                    {knowledge_name:"文言文阅读文",scoring_average:"85",amount_of_increase_number:'3',amount_of_increase:0},
                    {knowledge_name:"文言文阅读文",scoring_average:"85",amount_of_increase_number:'3',amount_of_increase:0},
                ],
                show_tr1:5,
                show_tr2:5,
                show_tr3:5,
                show_tr4:5,
                show_tr5:5,
                show_tr6:5,

            }
        },
        components: {
            HeaderPublic,
            HeaderTitle,
            LeftNav,
            ScoreEcharts
        },
        methods: {
            handleToggleScore(id) {  //切换科目
                this.navIndex = id
            },
            handleTogglePassFluctuate(id) { //上线波动分析切换
                this.passIndex = id
            },
            handleToggleFootfaultAnalysis(id) { //踩线生分析切换
                this.footfaultIndex = id
            },
            // 点击展示更多
            showMore1() {
                if(this.show_tr1 == 5){
                    this.show_tr1 = this.knowledge_list.length;
                }else{
                    this.show_tr1 = 5;
                }

            },
            showMore2() {
                if(this.show_tr2 == 5){
                    this.show_tr2 = this.knowledge_list.length;
                }else{
                    this.show_tr2 = 5;
                }

            },
            showMore3() {
                if(this.show_tr3 == 5){
                    this.show_tr3 = this.knowledge_list.length;
                }else{
                    this.show_tr3 = 5;
                }

            },
            showMore4() {
                if(this.show_tr4 == 5){
                    this.show_tr4 = this.knowledge_list.length;
                }else{
                    this.show_tr4 = 5;
                }

            },
            showMore5() {
                if(this.show_tr5 == 5){
                    this.show_tr5 = this.knowledge_list.length;
                }else{
                    this.show_tr5 = 5;
                }

            },
            showMore6() {
                if(this.show_tr6 == 5){
                    this.show_tr6 = this.knowledge_list.length;
                }else{
                    this.show_tr6 = 5;
                }

            },
        }
    };
</script>

<style lang='stylus' scoped>
    .course
        background: #fff;
        .nav
            justify-content space-between
            border-bottom: 1px solid #EBEBEB;
            li
                display inline-block
                line-height: 49px;
                margin-left: 56px;
                font-size: 16px;
                color: #383B57;
                font-weight: bold;
                cursor: pointer;
                margin 0px 26px 0px 30px;
                height 49px;
                width 36px;

            li.active {
                .txt {
                    display inline-block
                    color: #4B70FF;
                    height: 45px;
                    border-bottom: 4px solid #4B70FF;
                }
            }
        .content {
            overflow: hidden;
            display: flex;
            li {
                text-align: center;
                height: 155px;
                min-width: 178px;
                position: relative;
                padding-top: 40px;
                box-sizing: border-box;
                .title {
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #A2AFCD;
                    text-align: center;
                }
                .text {
                    font-family: MicrosoftYaHei;
                    font-size: 30px;
                    color: #000000;
                    text-align: center;
                    padding-top: 15px;
                }
                &:after {
                    content: '';
                    position: absolute;
                    top: 42px;
                    right: 0px;
                    height: 60px;
                    border-right: 1px dashed #A2AFCD;
                }
                &:nth-child(1) {
                    padding-left: 26px;
                    padding-right: 20px;
                    .title {
                        font-family: PingFangSC-Semibold;
                        font-size: 22px;
                        color: #383B57;
                        text-align: left;
                    }
                    .text {
                        ont-family: PingFangSC-Regular;
                        font-size: 14px;
                        color: #5F6D91;
                        padding-top: 10px;
                        line-height: 1.5;
                        text-align: left;
                    }
                }
                &:nth-last-of-type(1) {
                    &:after {
                        content: none;
                    }
                }
            }
        }

    .skillbar
        width: 120px;
        position: relative;
        display: inline-block;
        overflow: hidden;
        height: 9px;
        background: #E7E7E7;
        border-radius: 6px;
        .filled {
            z-index: 8;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0, 80, 80, .3);
            height: 100%;
            width: 20px;
            border-radius: 5px;
        }

        &.orange {
            .filled {
                background-color: #ff8817
            }
        }

        &.blue {
            .filled {
                background-color: #0f5487
            }

        }

    .main
        overflow: hidden
        margin: 20px auto 0
        width: 940px
        display flex
        justify-content space-between
        .right
            overflow: hidden
            float: right
            width: 744px
        .nav li
            position relative;
            .mark
                display inline-block
                background: #FF8E2C;
                border-radius: 20px;
                height: 17px;
                font-size: 10px;
                line-height: 17px;
                padding: 1px 0px;
                font-weight: normal;
                font-family: PingFangSC-Semibold;
                font-size: 10px;
                color: #FFFFFF;
                position absolute
                top: 15px;
                right: -35px;
                width: 37px;
                text-align: center;

    .cbox
        display flex
        justify-content space-between;
        flex-wrap wrap;
        align-items start;
        .item {
            width 365px
            background: #FFFFFF;
            border: 1px solid rgba(162, 175, 205, 0.60);
            border-radius: 6px;
            margin-top 15px;
            .c_hd {
                background: #A2AFCD;
                box-sizing border-box;
                padding 20px;
                color white
                .title {
                    font-size: 18px;
                    display flex;
                    justify-content space-between;
                    padding-bottom 10px;
                    .cright {
                        margin-top: -10px;
                    }
                    i {
                        font-size 28px;
                    }
                }
                .desc {
                    opacity: 0.8;
                    font-family: PingFangSC-Regular;
                    font-size: 12px;
                    color: #FFFFFF;
                }
            }
        }
        .list-table {
            font-size 14px;
            th {
                height: 36px;
                color: #383B57;
                padding-left: 20px;
                border-bottom: 1px solid rgba(236, 239, 245, 0.51);
            }
            td {
                height: 36px;
                border-bottom: 1px solid rgba(236, 239, 245, 0.51);
                padding-left: 20px;
                .desc {
                    display inline-block
                    width 138px;
                    overflow hidden;
                    text-overflow ellipsis;
                    white-space nowrap
                }
                .percent {
                    display: inline-block
                    width 27px;
                    padding-left 3px;
                }
                .rank {
                    img {
                        margin-right 3px;
                    }
                }
                .percent, .rank {
                    &.orange {
                        color: #ff8817;
                    }
                    &.blue {
                        color: #4B70FF;
                    }
                }
            }
        }
        .showmore {
            height 37px;
            line-height: 37px;
            box-sizing border-box
            text-align center;
            color rgba(75, 112, 255, .8);
            cursor pointer;
            img {
                margin-left 6px;
            }
        }
</style>
