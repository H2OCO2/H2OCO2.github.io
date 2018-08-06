//更换验证码
change();
function change(){
	var str="";
	for (var i = 0; i < 4; i++) {
		    var j = Math.floor(Math.random() * 10);
			str=str+j;
	}
	$('#getVerifyCode').html(str);
}
$(".refresh").click(function(){
	change();
})
/*到顶部*/
var scroll = document.getElementsByClassName('return_top')[0];
window.onscroll = function() {
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollT > 100) {
		scroll.style.display = 'block';
	} else {
		scroll.style.display = 'none';
	}
}
scroll.onclick = function() {
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
}



















