<template>
	<div class="header_title" :style="`width: ${width}`">
		<div class='arrow' @click="$router.go(-1)">
			<img src="../../assets/images/h_ter_list_arrow.png" alt=""/>
		</div>
		<span class='subject'>高二理科</span>
		<span class='title'>2008年-2019学年一年级期中考试</span>
		<div class='toggle_class'>
			<span>切换班级</span>
			<select name="" id="">
				<option value="">高一2班</option>
				<option value="">高二3班</option>
				<option value="">高三4班</option>
			</select>
		</div>
	</div>
</template>

<script>
	export default {
	  	name: 'header_title',
	  	created () {

	  	},
	  	methods: {

		},
		props: {
			width: {
				type: String,
				default: '940px'
			}
		}
	}
</script>


<style lang='stylus' scoped>
	.header_title
		margin: 20px auto 0
		height: 80px
		background: #fff
		.arrow
			float: left
			margin: 20px 22px
      img{
        cursor pointer
      }
		.subject
			display: inline-block
			margin-top: 26px
			padding: 6px 5px
			border: 1px solid #4B70FF
			border-radius: 4px
			font-size: 14px
			color: #4B70FF
			letter-spacing: 1px
		.title
			margin-left: 7px
			font-size: 18px
			color: #383B57
			font-weight: bold
		.toggle_class
			float: right
			margin-top: 18px
			margin-right: 20px
			line-height: 44px
			height: 44px
			font-size: 14px
			color: #A2AFCD
			select
				margin-left: 10px
				padding-left: 17px
				line-height: 44px
				width: 100px
				height: 44px
				font-size: 14px
				color: #606382
				background: url('../../assets/images/ic_triangle.png') 78px center no-repeat
				border: 1px solid #A2AFCD
				border-radius: 6px
				box-shadow: 0 0 4px 0 #E9E9F2;
				cursor: pointer


</style>
