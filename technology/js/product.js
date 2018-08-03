//动画效果
$(function(){
	$('.product_innovate .transition').addClass('acitve');
	$(window).scroll(function(){
		//产品介绍的动画效果
		if($(window).scrollTop() > 200&&$(window).scrollTop() <1098){
			$('.product_advantage .transition').addClass('acitve');
		}
		if($(window).scrollTop() > 998){
			$('.talents_technology .transition').addClass('acitve');
		}
	})
})
