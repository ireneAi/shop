$(function(){
	
	$(window).scroll( function() {
		/*商品例表tab浮动*/
		if($("#list_tab") && ($(window).scrollTop() > ($(".header").height() + $(".header-logo").height() + 16*2))){
			//如果list_tab存在，并且滚动超出头部的高度时
			$("#list_tab .list-group").addClass('fixed')	
			$("#list_tab .list-group").css('top',$(window).scrollTop()-($(".header").height() + $(".header-logo").height() + 16))		
			$("#list_tab .list-group").css('left',15)		
		}else{
			$("#list_tab .list-group").removeClass('fixed')	
			$("#list_tab .list-group").css('top',0)
		}
	});	
	// 滚动文字广告
	function activty(){		
		var ultop = parseInt($("#ad_actvity ul").css('margin-top'))
		if(-ultop >= $("#ad_actvity ul").height() - $("#ad_actvity ul li").height()){
			$("#ad_actvity ul").animate({'margin-top':0})
		}else{
			$("#ad_actvity ul").animate({'margin-top':-$("#ad_actvity ul li").height() + ultop})
		}
	}
	// 当广告html存在时 执行 
	if($("#ad_actvity")){
		var timer = setInterval(activty,2000)
		$("#ad_actvity").mouseout(function(){
			timer = setInterval(activty,2000)		
		})
		$("#ad_actvity").mouseover(function(){
			clearInterval(timer)
		})
		
	}
})