<template>
  <div class="classAnalysis">
    <div class="classAnalysisInfo">
      <ClassAndSubjectTabs v-model="activeValue" :tabs="tabs" @tabClick="tabClick"></ClassAndSubjectTabs>
      <div class="classAnalysisInfo-info-wrapper">
        <div class="classAnalysisInfo-info-item" :key="item.id" v-for="item in info">
          <div class="classAnalysisInfo-info-item-text">{{item.label}}</div>
          <div class="classAnalysisInfo-info-item-title">{{item.num}}</div>
          <div class="classAnalysisInfo-info-item-line"></div>
        </div>
      </div>
      <div class="classAnalysisInfo-brief">本学期累计考试次数：{{examTime}}， 本班人数：{{classmatesNum}}</div>
    </div>
    <div id="classAnalysisTrend" ref="classAnalysisTrend" class="classAnalysisOnlineRate classAnalysisPanel">
      <div class="classAnalysisPanelTitle">上线率趋势</div>
      <div class="classAnalysisKindWrapper">
        <div class="classAnalysisKind">
          <div class="classAnalysisKind-circle"></div>
          <span class="classAnalysisKind-text">班级上线率趋势</span>
        </div>
        <div class="classAnalysisKind">
          <div class="classAnalysisKind-circle"></div>
          <span class="classAnalysisKind-text">年级上线率趋势</span>
        </div>
      </div>
      <div class="classAnalysisOnlineRate-charts classAnalysisPanel-charts" ref="onlineRate"></div>
    </div>
    <div id="classAnalysisCompair" ref="classAnalysisCompair" class="classAnalysisOverRate classAnalysisPanel">
      <div class="classAnalysisPanelTitle">超均率趋势对比</div>
      <div class="classAnalysisKindWrapper">
        <div class="classAnalysisKind">
          <div class="classAnalysisKind-circle"></div>
          <span class="classAnalysisKind-text">班级上线率趋势</span>
        </div>
        <div class="classAnalysisKind">
          <div class="classAnalysisKind-circle"></div>
          <span class="classAnalysisKind-text">年级上线率趋势</span>
        </div>
      </div>
      <div class="classAnalysisOverRate-charts classAnalysisPanel-charts" ref="overRate"></div>
    </div>
    <div id="classAnalysisSubjectsCompair" ref="classAnalysisSubjectsCompair" class="classAnalysisCompairRate classAnalysisPanel">
      <div class="classAnalysisPanelTitle">学科对比</div>
      <div class="classAnalysisKindWrapper">
        <div class="classAnalysisKind">
          <div class="classAnalysisKind-circle"></div>
          <span class="classAnalysisKind-text">班级上线率趋势</span>
        </div>
        <div class="classAnalysisKind">
          <div class="classAnalysisKind-circle"></div>
          <span class="classAnalysisKind-text">年级上线率趋势</span>
        </div>
      </div>
      <div class="classAnalysisCompairRate-charts classAnalysisPanel-charts" ref="compairRate"></div>
      <div class="classAnalysisKindWrapper " style="position: static;">
        <div class="classAnalysisKind">
          <div class="classAnalysisKind-circle"></div>
          <span class="classAnalysisKind-text">低于年级上线率</span>
        </div>
      </div>
      <div class="classAnalysisCompairRate-table">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="exam"
            label="考试"
            align="center"
            width="140">
          </el-table-column>
          <el-table-column
            prop="classRate"
            label="班级上线率"
            align="center"
            width="116">
          </el-table-column>
          <el-table-column
            prop="gradeRate"
            label="年级上线率"
            align="center"
            width="116">
          </el-table-column>
          <el-table-column
            prop="subjectsRate"
            label="各学科上线情况">
            <template slot-scope="scope">
              <span v-for="(item, index) in scope.row.subjectsRate" :key="index"><template v-if="index !== 0">、</template><span :class="{classAnalysisCompairRateHight: item.highlight}">{{item.label}}</span></span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="classAnalysis-result">
        <span>上线率低于年级水平的学科</span>
        <span v-for="(item, index) in lowSubjects" :key="index"> <template v-if="index !== 0"> | </template>{{item.label}}：<span class="classAnalysis-result-highlight">{{item.value}}</span>次</span>
      </div>
    </div>
    <div id="classAnalysisWeakPoint" ref="classAnalysisWeakPoint" class="classAnalysisWeakPoint">
      <div class="classAnalysisWeakPoint-header">
        <span class="classAnalysisWeakPoint-header-title">班级薄弱知识点</span>
        <div class="classAnalysisWeakPoint-header-tabs">
          <div class="classAnalysisWeakPoint-header-tab active">所有薄弱知识点</div><div class="classAnalysisWeakPoint-header-tab">低于年级水平知识点</div>
        </div>
      </div>
      <div class="classAnalysisWeakPoint-table">
        <el-table
          :data="weakTableData"
          border
          style="width: 100%">
          <el-table-column
            prop="knowledge"
            label="知识点"
            align="center"
            width="140">
          </el-table-column>
          <el-table-column
            prop="showTime"
            label="出现次数"
            align="center"
            width="116">
          </el-table-column>
          <el-table-column
            prop="classPoint"
            label="班级得分率"
            width="203">
            <template slot-scope="scope">
              <el-progress color="#FF8E2C" v-if="scope.row.classPoint < 40" :percentage="scope.row.classPoint" status="text"><span style="color: #FF8E2C;">{{scope.row.classPoint}}%</span></el-progress>
              <el-progress color="#4B70FF" v-else :percentage="scope.row.classPoint" status="text"><span style="color: #4B70FF;">{{scope.row.classPoint}}%</span></el-progress>
            </template>
          </el-table-column>
          <el-table-column
            prop="gradePoint"
            align="center"
            label="年级得分率">
          </el-table-column>
        </el-table>
      </div>
      <div style="font-size: 12px;" class="classAnalysis-result">
        <span v-for="(item, index) in weakResult" :key="index"> <template v-if="index !== 0"> | </template>{{item.label}}：<span class="classAnalysis-result-highlight">{{item.value}}</span>{{item.unit}}</span>
      </div>
    </div>
    <Anchor :anchorActive="anchorActive" :anchorTitle="anchorTitle" :anchorList="anchorList" ref="anchor"></Anchor>
  </div>
</template>
<style lang="stylus" src="./index.stylus"></style>
<script src="./index.js"></script>
