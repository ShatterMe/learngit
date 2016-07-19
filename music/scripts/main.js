window.onload = function (){
	var doc = document;
	var wrap = doc.getElementById("wrap");
	var oWidth = doc.documentElement.clientWidth;
	var oHeight = doc.documentElement.clientHeight;
	wrap.style.height = oHeight + 'px';
	var left = doc.getElementsByClassName("left")[0];
	var right = doc.getElementsByClassName("right")[0];
	var middle = doc.getElementsByClassName("center")[0];
	var lf = left.getElementsByClassName("fontFace")[0];
	var lb = left.getElementsByClassName("backFace")[0];
	var order = doc.getElementById("order");
	var oops = doc.getElementById("tel");
	var shadow = doc.getElementsByClassName("coverShadow")[0];
	//打开菜单
	order.onclick = function move(){
		left.style.transform = "rotateY(-180deg)";
		right.style.transform = "rotateY(180deg)";
		left.style.transition = "transform ease-in 0.8s ";
		right.style.transition = "transform ease-in 0.8s 500ms";
		setTimeout(function (){
			cuttle.style.opacity = 1;
			cuttle.style.boxShadow = "0 4px 0 rgb(96,2,2)";
			cuttle.style.transition = "opacity ease-in 0.3s,boxShadow ease-in 0.3s";
			oops.style.opacity = 1;
			oops.style.boxShadow = "0 4px 0 rgb(96,2,2)";
			oops.style.transition = "opacity ease-in 0.3s,boxShadow ease-in 0.3s";
		},1600);
	};
	var name = doc.getElementsByClassName("dishName");
	var flag = true;
	for(var i = 0; i<name.length; i++){
		name[i].onclick = function (){
			left.style.transform = "rotateY(-145deg)";
			right.style.transform = "rotateY(145deg)";
			left.style.transition = "transform ease-in 0.4s";
			right.style.transition = "transform ease-in 0.4s";
			create();
			var close = doc.getElementsByClassName("close")[0];
			var dital = doc.getElementsByClassName("dital")[0];
			close.onclick = function (){
				dital.style.top = "40%";
				dital.style.opacity = 0;
				setTimeout(function (){
					wrap.removeChild(dital);
					left.style.transform = "rotateY(-180deg)";
					right.style.transform = "rotateY(180deg)";
					left.style.transition = "transform ease-in 0.4s";
					right.style.transition = "transform ease-in 0.4s";
				},300);
				flag = true;
			};
		};
		name[i].addEventListener("click",getNewContent);
	};

	function create(){
		if(flag){
			var dital = doc.createElement("div");
			wrap.appendChild(dital);
			dital.className = "dital";
			var close = doc.createElement("span");
			close.className = "close";
			dital.appendChild(close);
			setTimeout(function (){
				dital.style.top = "50%";
				dital.style.opacity = 1;
			},1);
			flag = false;
		}else{
			return false;
		};
	};
	var cuttle = doc.getElementById("cuttle");
	cuttle.onmousedown = function (){
		down(cuttle,"bottom");
	};
	cuttle.onmouseup = function (){
		up(cuttle,"bottom");
	};
	oops.onmousedown = function (){
		down(oops,"bottom");
	};
	oops.onmouseup = function (){
		up(oops,"bottom");
	};
	//关闭菜单
	cuttle.onclick = function (){
		if(right.style.transform == "rotateY(0deg)"){
			left.style.transform = "rotateY(0deg)";
			left.style.transition = "transform ease-in 0.8s";
			setTimeout(function (){
				cuttle.style.opacity = 0;
				cuttle.style.transition = "opacity ease-in 0.3s";
				oops.style.opacity = 0;
				oops.style.transition = "opacity ease-in 0.3s";
			},800);
		}else{
			reset();
			setTimeout(function (){
				cuttle.style.opacity = 0;
				cuttle.style.transition = "opacity ease-in 0.3s";
				oops.style.opacity = 0;
				oops.style.transition = "opacity ease-in 0.3s";
			},1600);
		}
	};
	//查看地址及电话
	oops.onclick = function (){
		checkOut();
	}
	//立体按钮
	function down(obj,attr){
		obj.style.bottom = parseInt(getStyle(obj,attr)) - 2  + 'px';
		obj.style.boxShadow = "0 2px 0 rgb(96,2,2)";
	};
	function up(obj,attr){
		obj.style.bottom = parseInt(getStyle(obj,attr)) + 2 + 'px';
		obj.style.boxShadow = "0 4px 0 rgb(96,2,2)";
	}
	//返回原始状态
	function reset(){
		left.style.transform = "rotateY(0deg)";
		right.style.transform = "rotateY(0deg)";
		left.style.transition = "transform ease-in 0.8s 500ms";
		right.style.transition = "transform ease-in 0.8s";
	};
	function checkOut(){
		right.style.transform = "rotateY(0deg)";
		right.style.transition = "transform ease-in 0.8s";
	}
};
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
};
