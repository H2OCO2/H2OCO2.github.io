//注册
function checkForm(){
	if(checkUsername()&&checkPassword()&&checkPwd()){
		var password_val = document.getElementById("password1").value;
		var username_val = document.getElementById("tel1").value;
		alert("注册完成");
		setCookie("username",username_val,1)
		setCookie("password",password_val,1)
		return true;
	}else{
		return false;
	}
}

function checkUsername(){
	var username = document.getElementById("tel1");
	var regexp = /^1[3|4|5|8][0-9]\d{8}$/;
		if(regexp.test(username.value)){
			username.nextSibling.innerHTML = "";
			return true;
		}else{
		username.nextSibling.nextSibling.innerHTML = "请输入你的手机号";
		return false;
	}
}

function checkPassword(o){
	var password = document.getElementById("password1");
	var regexp = /^[A-Za-z0-9]{6,16}$/;
	if(regexp.test(password.value)){
		password.nextSibling.nextSibling.innerHTML = "";
		return true;
	}else{
		password.nextSibling.nextSibling.innerHTML = "请输入6-16位登录密码";
		change();
		return false;
	}
}

function checkPwd(){
	var password = document.getElementById("password1");
	var cPwd = document.getElementById("password2");
	if(password.value===""){
		cPwd.nextSibling.nextSibling.innerHTML = "请先输入密码";
		return false;
	}else if(cPwd.value===password.value){
		cPwd.nextSibling.nextSibling.innerHTML = "";
		return true;
	}else{
		cPwd.nextSibling.nextSibling.innerHTML = "两次输入不一致,请重新输入";
		change();
		return false;
	}
}
