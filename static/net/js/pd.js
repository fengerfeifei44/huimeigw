$(function(){
	var text = window.sessionStorage.getItem("data");
	if(text){
		$(".regbtn").css("display", "none");
		$(".quick").css("display", "block");
		$(".window").css("display", "none");
		$(".loginbtn").html(text)
	}
})
