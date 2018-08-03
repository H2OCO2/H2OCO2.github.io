//动画效果
$(function(){
	$('.company_introduceBox .transition').addClass('acitve');
	$('.company_condition .transition').addClass('acitve');
	$(window).scroll(function(){
		//产品介绍的动画效果
		if($(window).scrollTop() > 232&&$(window).scrollTop() < 810){
			$('.contant_usBox .transition').addClass('acitve');
		}
//		if($('.company_condition .transition').hasClass("active")){
////			$('.contant_usBox .transition').addClass('acitve');
//			alert(1)
//		}
	})
	function browserRedirect() {
	    var sUserAgent = navigator.userAgent.toLowerCase();
	    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	    var bIsAndroid = sUserAgent.match(/android/i) == "android";
	    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
	        console.log("phone");
	        setTimeout(function(){
		        $('.contant_usBox .transition').addClass('acitve');
	        },1800);
	    } 
	}
	browserRedirect();
})
