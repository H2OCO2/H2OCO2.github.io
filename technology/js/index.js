//轮播图代码
$(function(){
	//1.获取窗口的宽度
	var w = $(window).width();
	if(w<=1200){
		w=1200;
	}
	//获取的宽度给每一个li
	$('.banner ul li').width(w);
	//轮播点
	$('.banner ol li').click(function(){
		//点击哪一个。就是给哪一个添加active 其它兄弟类删除
		$(this).addClass('acitve').siblings().removeClass('acitve');
		//第1个图  0* w
		//第2个图  1* w
		//第3个图  2* w
		var i = $(this).index(); 
		$('.banner ul').animate({left:-i*w},1000);
		//把当前点击的编号给num,让num沿着当前点击的继续往下播放
		num = i;
		
	});
	//定时器
	var timer = null;
	//类加器.
	var num = 0;
	var length=$('.banner ol li').length;
	//整个功能就是播放下一张
	var autoPlay = function(){
		num++;
		//如果播放到最后一张。再往下播，回到第一张（看不见），从第一张播放到第二张
		if(num>length){
			num=0;
			$('.banner ul').css('left','0').stop().animate({left:-w},1000);
			//播放过来之后。告诉系统。我当前已经的到了第二张
			num = 1;
			//播放到第二张的时候。让轮播点在第二个上
			$('.banner ol li').eq(1).addClass('acitve').siblings().removeClass('acitve');
		}
		else{
			//否则其它的情况只能自动播放
			$('.banner ul').stop().animate({left:-num*w},1000)
			//通过编号。来找对应的轮播点
			$('.banner ol li').eq(num).addClass('acitve').siblings().removeClass('acitve');
		}
//		console.log(num);
		if(num==length){
			$('.banner ol li').eq(0).addClass('acitve').siblings().removeClass('acitve');
		}
	};
	
	//播放上一张
	var prevPlay = function(){
		num--;
		if(num<0){
			num=length;
			$('.banner ul').css({left:-3*w}).stop().animate({left:-(length-1)*w},1000);
			//播放过来之后。告诉系统。我当前已经的到了第3张
			num = length-1;
			//播放到第二张的时候。让轮播点在第二个上
			$('.banner ol li').eq(length-1).addClass('acitve').siblings().removeClass('acitve');
		}
		else{
			//否则其它的情况只能自动播放
			$('.banner ul').stop().animate({left:-num*w},1000)
			//通过编号。来找对应的轮播点
			$('.banner ol li').eq(num).addClass('acitve').siblings().removeClass('acitve');
		}
//		console.log(num);
		if(num==length){
			$('.banner ol li').eq(0).addClass('acitve').siblings().removeClass('acitve');
		}
	};
	//开启定时器
	timer = setInterval(autoPlay,3000);
	//鼠标经过。停止(消除定时器)
	$('.banner').mouseenter(function(){
		//消除定时器)
		clearInterval(timer);
		//显示
	}).mouseleave(function(){
		timer = setInterval(autoPlay,3000);
		//淡出
	});
	//向右播放
	$('.banner .btn_right').click(function(){
		autoPlay();
	});
	//向左播放
	$('.banner .btn_left').click(function(){
		prevPlay();
	});
});


//动画效果
$(function(){
	$('.introduce h1').addClass('acitve');
	$('.introduce p').addClass('acitve');
	$('.introduce .introduce_img').addClass('acitve');
	$(window).scroll(function(){
		//产品介绍的动画效果
//		if($(window).scrollTop() > 100&&$(window).scrollTop() < 882){
//		}
//		else{
//			$('.introduce h1').removeClass('acitve');
//			$('.introduce p').removeClass('acitve');
//			$('.introduce .introduce_img').removeClass('acitve');
//		}
		//优势介绍的动画效果
		if($(window).scrollTop() > 882&&$(window).scrollTop() < 1905){
			$('.advantage h1').addClass('acitve');
			$('.advantage>p').addClass('acitve');
			$('.advantage .advantage_content>img').addClass('acitve');
			$('.advantage .advantage_content ul').addClass('acitve');
		}
		if($(window).scrollTop() > 1905&&$(window).scrollTop() < 2600){
			$('.product_show h1').addClass('acitve');
			$('.product_show .product_showname').addClass('acitve');
			$('#product_showcontain').addClass('acitve');
		}
		if($(window).scrollTop() > 2600){
//			console.log($(window).scrollTop());
			$('.a').addClass('acitve');
		}
		
	})
})
$(window).on('touchmove', function(){
     setTimeout(function () {
       if ($(window).scrollTop() + 5 > $(document).height()-window.innerHeight) {
         console.log('滚动到底部');
         setTimeout(function(){
	        $('.a').addClass('acitve');
        },2000);
       }
     },0);
});
//$(function(){
//	$(window).scroll(function() {
//  if ($(document).scrollTop() >= $(document).height() - $(window).height()-400) {
//    $('.a').addClass('acitve');
//  }
//});
//})

