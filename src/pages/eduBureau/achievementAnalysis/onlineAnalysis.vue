<!--用户: Mr.wang     日期:2018/12/12    时间:10:39-->
<template>
    <div>
        <header-public :url_index=url_index></header-public>
        <div class="container">
            <el-row class="titleBox">
                <el-col :span="24" class="title">
                    <a href="javascript:history.back(-1)"><img src="@/assets/images/ic_back.png" alt="" class="goBack"></a>
                    <button><span>{{examInfo.grade_and_type == undefined ? "高二文科" : examInfo.grade_and_type}}</span></button>
                    <span class="grid-content exam_name">{{examInfo.batch_name  == undefined ? "人大附中摸底考试" : examInfo.batch_name}}</span>
                </el-col>
            </el-row>
            <div class="exam_content">
                <div class="left_select_list">
                    <left-nav></left-nav>
                </div>
                <div class="right_info_list">
                    <div class="info_list_first">
                        <div class="subject_list">
                        <span :span="2" v-for="(item,index) in subjectList" class="subject_list_style"
                              :class="{subject_list_active:subjectActive == index}"
                              @click="subjectChange(item,index)"><span>{{item}}</span></span>
                        </div>
                        <div class="score_info">
                            <div class="score_info_list">
                                <div class="info_score">
                                    <span>一本分数线</span><br>
                                    <b>508</b>
                                </div>
                            </div>
                            <div class="score_info_list">
                                <div class="info_score">
                                    <span>上线人数</span><br>
                                    <b>22<span></span>3</b>
                                </div>
                            </div>
                            <div class="score_info_list">
                                <div class="info_score" :class="{border_none:current_subject_index == 0}">
                                    <span>上线率</span><br>
                                    <b>34%</b>
                                </div>
                            </div>
                            <div class="score_info_list">
                                <div class="info_score" style="border:none;" v-if="current_subject_index > 0">
                                    <span>双上线人数</span><br>
                                    <b>12</b>
                                </div>
                            </div>
                        </div>
                        <div class="score_info" v-if="current_subject_index > 0">
                            <div class="score_info_list">
                                <div class="info_score" style="border:none !important;width: 186px">
                                    <span>双上线率</span><br>
                                    <b>12%</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--各学校一本上线情况分析-->
                    <!--全科-->
                    <div class="info_list_two bg_white" v-if="current_subject_index <= 0">
                        <span class="echartsTitle">各学校一本上线情况分析</span>
                        <table class="height_score_table">
                            <thead>
                            <tr>
                                <th v-for="item in online_analyze_title" style="background-color: #ECEFF5">{{item}}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item,index) in online_analyze">
                                <td style="background-color: #ECEFF5;width: 96px">{{item.school_name}}</td>
                                <td>{{item.target_online_number}}</td>
                                <td>{{item.online_number}}</td>
                                <td>{{item.online_rate}}</td>
                                <td>{{item.target_finished_rate}}</td>
                                <td>{{item.stabilization_rate}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--单科-->
                    <div class="info_list_two bg_white" v-if="current_subject_index > 0">
                        <span class="echartsTitle">各学校一本上线情况分析</span>
                        <table class="height_score_table">
                            <thead>
                            <tr>
                                <th v-for="item in online_analyze_title_subject" style="background-color: #ECEFF5">
                                    {{item}}
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item,index) in online_analyze_subject">
                                <td style="background-color: #ECEFF5;width: 96px">{{item.school_name}}</td>
                                <td>{{item.target_online_number}}</td>
                                <td>{{item.online_number}}</td>
                                <td>{{item.online_rate}}</td>
                                <td>{{item.two_online_number}}</td>
                                <td>{{item.two_online_rate}}</td>
                                <td>{{item.target_finished_rate}}</td>
                                <td>{{item.stabilization_rate}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--踩线生分析（一本线±10）-->
                    <div class="info_list_three bg_white">
                        <span class="echartsTitle">踩线生分析（一本线±10）</span>
                        <table class="height_score_table">
                            <thead>
                            <tr>
                                <th v-for="item in born_on_line_title" style="background-color: #ECEFF5">{{item}}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in born_on_line">
                                <td style="background-color: #ECEFF5;width: 96px">{{item.school_name}}</td>
                                <td>{{item.foot_fault_number}}</td>
                                <td>{{item.online_number}}</td>
                                <td>{{item.online_proportion}}</td>
                                <td>{{item.no_online_number}}</td>
                                <td>{{item.no_online_proportion}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--上线波动分析-->
                    <div class="info_list_four bg_white">
                        <span class="echartsTitle">上线波动分析</span>
                        <div class="online_fluctuate">
                        <span class="top20" v-for="(item,index) in online_fluctuate_analyze_tab"
                              :class="{border_active:border_active_index == index}" @click="border_active(item,index)">{{item}}</span>
                        </div>
                        <table class="height_score_table">
                            <thead>
                            <tr>
                                <th style="background-color: #ECEFF5">学校</th>
                                <th style="background-color: #ECEFF5">{{tab_name}}数</th>
                                <th style="background-color: #ECEFF5">占比</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item,index) in online_fluctuate_analyze_table">
                                <td style="background-color: #ECEFF5;width: 96px">{{item.school_name}}</td>
                                <td>{{item.number}}</td>
                                <td>{{item.proportion}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderPublic from "@/components/header";
    import leftNav from "@/components/sideNav/leftNav"
    export default {
        name: "onlineAnalysis",
        components: {
            HeaderPublic,
            leftNav
        },
        data() {
            return {
                url_index: 1,   //header下标
                examInfo: '',
                subjectList: ['全科', "语文", "数学", "英语", "物理", "化学", "生物"],
                current_subject: "总分",
                current_subject_index: 0,
                subjectActive: 0,
                //各学校一本上线情况分析
                online_analyze_title: ['学校', '目标上线人数', '上线人数', "上线率", "目标完成率", "稳定率"],
                online_analyze_title_subject: ['学校', '目标上线人数', '上线人数', "上线率", "双上线人数", "双上线率", "目标完成率", "稳定率"],
                online_analyze: [
                    {
                        school_name: '第一中学',
                        target_online_number: "567",
                        online_number: '455',
                        online_rate: '80%',
                        target_finished_rate: "98%",
                        stabilization_rate: "99%"
                    },
                    {
                        school_name: '第一中学',
                        target_online_number: "567",
                        online_number: '455',
                        online_rate: '80%',
                        target_finished_rate: "98%",
                        stabilization_rate: "99%"
                    },
                    {
                        school_name: '第一中学',
                        target_online_number: "567",
                        online_number: '455',
                        online_rate: '80%',
                        target_finished_rate: "98%",
                        stabilization_rate: "99%"
                    },
                    {
                        school_name: '第一中学',
                        target_online_number: "567",
                        online_number: '455',
                        online_rate: '80%',
                        target_finished_rate: "98%",
                        stabilization_rate: "99%"
                    },
                    {
                        school_name: '第一中学',
                        target_online_number: "567",
                        online_number: '455',
                        online_rate: '80%',
                        target_finished_rate: "98%",
                        stabilization_rate: "99%"
                    },
                    {
                        school_name: '第一中学',
                        target_online_number: "567",
                        online_number: '455',
                        online_rate: '80%',
                        target_finished_rate: "98%",
                        stabilization_rate: "99%"
                    },
                    {
                        school_name: '第一中学',
                        target_online_number: "567",
                        online_number: '455',
                        online_rate: '80%',
                        target_finished_rate: "98%",
                        stabilization_rate: "99%"
                    },
                ],
                online_analyze_subject: [
                    {
                        school_name: '第一中学',
                        target_online_number: "567",
                        online_number: '455',
                        online_rate: '80%',
                        two_online_number: "455",
                        two_online_rate: "80%",
                        target_finished_rate: "98%",
                        stabilization_rate: "99%"
                    },
                    {
                        school_name: '第一中学',
                        target_online_number: "567",
                        online_number: '455',
                        online_rate: '80%',
                        two_online_number: "455",
                        two_online_rate: "80%",
                        target_finished_rate: "98%",
                        stabilization_rate: "99%"
                    },
                    {
                        school_name: '第一中学',
                        target_online_number: "567",
                        online_number: '455',
                        online_rate: '80%',
                        two_online_number: "455",
                        two_online_rate: "80%",
                        target_finished_rate: "98%",
                        stabilization_rate: "99%"
                    },
                    {
                        school_name: '第一中学',
                        target_online_number: "567",
                        online_number: '455',
                        online_rate: '80%',
                        two_online_number: "455",
                        two_online_rate: "80%",
                        target_finished_rate: "98%",
                        stabilization_rate: "99%"
                    },
                    {
                        school_name: '第一中学',
                        target_online_number: "567",
                        online_number: '455',
                        online_rate: '80%',
                        two_online_number: "455",
                        two_online_rate: "80%",
                        target_finished_rate: "98%",
                        stabilization_rate: "99%"
                    },
                    {
                        school_name: '第一中学',
                        target_online_number: "567",
                        online_number: '455',
                        online_rate: '80%',
                        two_online_number: "455",
                        two_online_rate: "80%",
                        target_finished_rate: "98%",
                        stabilization_rate: "99%"
                    },
                    {
                        school_name: '第一中学',
                        target_online_number: "567",
                        online_number: '455',
                        online_rate: '80%',
                        two_online_number: "455",
                        two_online_rate: "80%",
                        target_finished_rate: "98%",
                        stabilization_rate: "99%"
                    },
                ],
                //踩线生分析（一本线±10）
                born_on_line_title: ["学校", "踩线生人数", "上线人数", "占比(上线/本校)", "未上线人数", "占比(未上线/本校)"],
                born_on_line: [
                    {
                        school_name: "第一学校",
                        foot_fault_number: "567",
                        online_number: "455",
                        online_proportion: "80%",
                        no_online_number: "98",
                        no_online_proportion: "99%"
                    },
                    {
                        school_name: "第一学校",
                        foot_fault_number: "567",
                        online_number: "455",
                        online_proportion: "80%",
                        no_online_number: "98",
                        no_online_proportion: "99%"
                    },
                    {
                        school_name: "第一学校",
                        foot_fault_number: "567",
                        online_number: "455",
                        online_proportion: "80%",
                        no_online_number: "98",
                        no_online_proportion: "99%"
                    },
                    {
                        school_name: "第一学校",
                        foot_fault_number: "567",
                        online_number: "455",
                        online_proportion: "80%",
                        no_online_number: "98",
                        no_online_proportion: "99%"
                    },
                    {
                        school_name: "第一学校",
                        foot_fault_number: "567",
                        online_number: "455",
                        online_proportion: "80%",
                        no_online_number: "98",
                        no_online_proportion: "99%"
                    },
                    {
                        school_name: "第一学校",
                        foot_fault_number: "567",
                        online_number: "455",
                        online_proportion: "80%",
                        no_online_number: "98",
                        no_online_proportion: "99%"
                    },
                    {
                        school_name: "第一学校",
                        foot_fault_number: "567",
                        online_number: "455",
                        online_proportion: "80%",
                        no_online_number: "98",
                        no_online_proportion: "99%"
                    },
                ],
                //上线波动分析
                online_fluctuate_analyze_tab: ['流入', "流出", "新增上线", "稳定上线"],
                online_fluctuate_analyze_table: [
                    {school_name: '第一中学', number: "62", proportion: "11%"},
                    {school_name: '第一中学', number: "62", proportion: "11%"},
                    {school_name: '第一中学', number: "62", proportion: "11%"},
                    {school_name: '第一中学', number: "62", proportion: "11%"},
                    {school_name: '第一中学', number: "62", proportion: "11%"},
                    {school_name: '第一中学', number: "62", proportion: "11%"},
                    {school_name: '第一中学', number: "62", proportion: "11%"},
                ],
                tab_name: '流入',
                border_active_index: 0
            }
        },
        mounted() {
            this.examInfo = this.$route.query;
        },
        methods: {
            // 学科切换
            subjectChange(item, index) {
                this.subjectActive = index;
                if (index == 0) {
                    this.current_subject = "总分"
                } else {
                    this.current_subject = item;
                }
                this.current_subject_index = index;
            },
            // 上线波动分析
            border_active(item, index) {
                this.tab_name = item;
                this.border_active_index = index;
            }
        }
    };
</script>

<style type="stylus" scoped>
    .online_fluctuate {
        display: inline-block;
        margin-left: 80px;
    }

    .border_active {
        border: 1px solid #4B70FF !important;
        color: #4B70FF;
    }

    .online_fluctuate span {
        display: inline-block;
        padding: 8px 20px 8px 20px;
        border: 1px solid #CCCCCC;
        cursor: pointer;
    }

    //two
    .info_list_two {

    }

    .bg_white {
        width: 744px;
        background-color: #ffffff;
        border-radius: 6px;
        margin-top: 20px;
        padding-bottom: 20px;
    }

    .echartsTitle {
        display: inline-block;
        margin-top: 20px;
        margin-left: 20px;
        font-family: PingFangSC-Semibold;
        font-size: 18px;
        color: #383B57;
    }

    .height_score_table {
        position: relative;
        width: 686px;
        height: 380px;
        border: 1px solid #A2AFCD;
        border-collapse: collapse;
        border-radius: 6px;
        margin: 20px auto;
        text-align: center;
    }

    .height_score_table th, td {
        border: 1px solid #ECEFF5;
    }

    .height_score_table th {
        line-height: 50px;
    }

    /*--------------------------------*/
    .border_none {
        border: none !important;
    }

    .score_info {
        height: 152px;
        display: flex;
        justify-content: space-between;
    }

    .score_info_list {
        width: 250px;
        text-align: center;
    }

    .info_score {
        height: 80px;
        margin-top: 35px;
        border-right: 2px dashed #EBEBEB;
    }

    .info_score span {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #A2AFCD;
        text-align: center;
        display: inline-block;
        margin: 15px 0px;
    }

    .info_score b {
        font-family: MicrosoftYaHei;
        font-size: 30px;
        color: #000000;
        text-align: center;
    }

    .subject_list_active {
        color: #4B70FF;
        border-bottom: 4px solid #4B70FF;
    }

    .subject_list {
        height: 50px;
        border-bottom: 1px solid #EBEBEB;
    }

    .subject_list span {
        cursor: pointer;
    }

    .subject_list_style {
        display: inline-block;
        line-height: 46px;
        text-align: center;
        font-weight: 600;
        margin-left: 30px;
        margin-right: 26px;
        font-size :18px;
    }

    .info_list_first {
        width: 744px;
        /*height :247px;*/
        background-color: #ffffff;
        border-radius: 6px;
    }

    .exam_content {
        display: flex;
        justify-content: space-between;
    }

    .left_select_list {
        width: 176px;
        border-radius: 6px;
    }

    .score_analysis {
        border-radius: 6px;
    }

    .right_info_list {
        width: 744px;
        border-radius: 6px;
    }

    .score_analysis_first {
        cursor: pointer;
        height: 41px;
        background-color: #ffffff;
    }

    .score_analysis_first img {
        margin: 5px 12px 0px 16px;
    }

    .score_analysis_first span {
        display: inline-block;
        vertical-align: middle;
        margin-top: 3px;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #383B57;
    }

    .score_analysis_two {
        margin-top: 5px;
        width: 176px;
        height: 41px;
        background-color: #ffffff;
        border-radius: 6px;
        cursor: pointer;
    }

    .score_analysis_two img {
        margin: 5px 12px 0px 16px;
    }

    .score_analysis_two span {
        display: inline-block;
        vertical-align: middle;
        margin-top: 3px;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #383B57;
    }


    .active {
        background-color: #4B70FF;
        color: #ffffff;
    }

    .exam_content {
        width :940px;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
    }

    .titleBox {
        width :940px;
        margin: 14px auto;
        line-height: 80px;
        &:last-child {
            margin-bottom: 0;
        }
    }

    .goBack {
        margin-left: 20px;
    }

    button {
        width: 72px;
        height: 28px;
        border: 1px solid #4B70FF;
        border-radius: 4px;
        margin-left: 20px;
    }

    button > span {
        display: inline-block;
        color: #4B70FF;
    }

    .exam_name {
        font-family: PingFangSC-Semibold;
        font-size: 18px;
        color: #383B57;
        vertical-align: middle;
        margin-left: 10px;
    }

    .title {
        height: 80px;
        border-radius: 4px;
        background: #ffffff;
    }

    .bg-purple-white {
        background: #ffffff;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .grid-content {
        border-radius: 4px;
    }

</style>
