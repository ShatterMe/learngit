function getHTTPObject() {
	if(typeof XMLHttpRequest == "undefined")
		XMLHttpRequest = function (){
			try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
			catch(e) {}
			try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
			catch(e) {}
			try { return new ActiveXObject("Msxml2.XMLHTTP"); }
			catch(e) {}
			return false;
		}
	return new XMLHttpRequest();
};
function getNewContent() {
	var request = getHTTPObject();
	if(request){
		request.open( "GET","list/show.txt","true");
		request.onreadystatechange = function (){
			if(request.readyState == 4){
				alert(1);
			}
		}
	}
};