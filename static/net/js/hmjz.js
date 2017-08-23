$(function() {
	$(".content_left ul li").each(function() {
		$(this).mouseup(function() {
			$(".content_left ul li").css("background", "none")
			$(".content_left ul li").css("color", "black")
			$(this).css("background", "#1a598c")
			$(this).css("color", "white")
		})

	})
	$(".left_sciencea").click(function() {
		$(".science_b,.science_c,.science_d").css("display", "none")
		$(".science_a").css("display", "block")
	})
	$(".left_scienceb").click(function() {
		$(".science_a,.science_c,.science_d").css("display", "none")
		$(".science_b").css("display", "block")
	})
	$(".left_sciencec").click(function() {
		$(".science_a,.science_b,.science_d").css("display", "none")
		$(".science_c").css("display", "block")
	})
	$(".left_scienced").click(function() {
		$(".science_a,.science_b,.science_c").css("display", "none")
		$(".science_d").css("display", "block")
	})
})