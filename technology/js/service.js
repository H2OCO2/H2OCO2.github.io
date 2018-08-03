//动画效果
$(function(){
	$('.transform').addClass('acitve');
	$(window).scroll(function(){
		//产品介绍的动画效果
		if($(window).scrollTop() > 305){
			$('.service_advantage .transition').addClass('acitve');
		}
	})
})
