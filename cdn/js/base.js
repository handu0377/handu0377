//左浮动
$(function(){	
	setTimeout(function(){$(".fr_bm").css("top","131px")},1000);
	$('.fr_closeBtn').click(function(){$(".fr").hide();});	
	$(window).scroll(function() {	
		if($(window).scrollTop() >= 50){
			$('.fr').css({"position":"fixed","top":"0"}); 
		}else{    
			$('.fr').css({"position":"absolute","top":"0"});    
		}  
	});
	
}); 
//返回顶部
$(function(){	
	$('.fr_goTop').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});	
}); 