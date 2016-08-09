
export function apiurl(){
	return "http://test.jiuqu1688.com";
	/*return "http://192.168.1.10:8080/jiuqu-server";*/
}
export function imgurl(){
	return "http://restest.jiuqu1688.com";
}
export function toast(message){
	var html = '<div class="toast" style="position:fixed;bottom:100px;width:100%;text-align:center;display:none"><span style="display:inline-block;padding:4px 10px;background:rgba(0,0,0,0.6);color:#fff;border-radius:4px">'+message+'</span></div>';
	$("body").append(html);
	$(".toast").fadeIn();
	setTimeout(function(){
		$(".toast").fadeOut();
	},1500)
}