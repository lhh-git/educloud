<template>
     <div class='answer'>
         <div class='title'>
             <h1>答题情况</h1>
         </div>
        <ol class='grade'>
            <li v-for='(item, id) of gradeArr'
                :key='id'
            >
                <i></i>
                {{item}}
            </li>
        </ol>
        <ul class='count'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li class='active1'>2-3</li>
            <li>3</li>
            <li class='active3'>4-5</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
     </div>
</template>

<script>
    export default {
        name: "answer",
        data() {
            return {
               gradeArr: ['困难', '较难', '一般', '较易'],
               countIndex: 0,
               countArr: ['1', '2', '3', '4-5', '6', '7-9', '10', '11-13'] 
            }
        },
        components: {
            
        },
        methods: {
            
        }
    };
</script>


<style lang="stylus" scoped>
    .answer
        float: right
        margin-top: 14px
        padding: 0 10px
        width: 156px
        background: #fff
        border-radius: 6px
        box-shadow: 0 0 4px 0 #E9E9F2
        .title
            margin-top: 14px
            line-height: 22px
            height: 22px
            h1
                font-size: 16px
                color: #383B57
                font-weight: bold
        .grade
            overflow: hidden
            margin-top: 10px
            height: 17px
            li
                float: left
                margin-left: 4px
                line-height: 20px
                font-size: 12px
                color: #A2AFCD 
                i 
                    display: inline-block
                    margin-right: -2px
                    width: 10px
                    height: 10px
                    background: #4B70FF 
                    border-radius: 50%
            li:first-child 
                margin-left: 0
                i 
                    background: #F5535B
            li:nth-child(2)
                i 
                    background: #FF8937 
            li:nth-child(3)
                i 
                    background: #F8BD46
        .count
            overflow: hidden
            margin-top: 10px
            margin-bottom: 20px
            li
                float: left
                line-height: 17px
                padding: 4px 10px
                margin-right: 10px
                margin-top: 10px
                height: 17px
                font-size: 12px
                color: #F5535B 
                border: 1px solid
                border-radius: 6px
                cursor: pointer
            li.active
                color: #ffffff
                border-color: #F5535B
            li.active1
                color: #FF8937 
            li.active2
                color: #F8BD46
            li.active3
                color: #4B70FF    


         
</style>
