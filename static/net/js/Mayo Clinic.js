$(function() {
	$(".content_left ul li").each(function() {
		$(this).mouseup(function() {
			$(".content_left ul li").css("background", "none")
			$(".content_left ul li").css("color", "black")
			$(this).css("background", "#1a598c")
			$(this).css("color", "white")
		})

	})
	$(".left_amc").click(function() {
		$(".AME,.library,.PE,.CME,.HLP,.science_top,.acme_top,.information").css("display", "none")
		$(".AMC").css("display", "block")
	})
	$(".left_library").click(function() {
		$(".AME,.AMC,.PE,.CME,.HLP,.science_top,.acme_top,.information").css("display", "none")
		$(".library").css("display", "block")
	})
	$(".left_ame").click(function() {
		$(".library,.AMC,.PE,.CME,.HLP,.science_top,.acme_top,.information").css("display", "none")
		$(".AME").css("display", "block")
	})
	$(".left_pe").click(function() {
		$(".library,.AMC,.AME,.CME,.HLP,.science_top,.acme_top,.information").css("display", "none")
		$(".PE").css("display", "block")
	})
	$(".left_cme").click(function() {
		$(".library,.AMC,.AME,.PE,.HLP,.science_top,.acme_top,.information").css("display", "none")
		$(".CME").css("display", "block")
	})
	$(".left_hlp").click(function() {
		$(".library,.AMC,.AME,.PE,.CME,.science_top,.acme_top,.information").css("display", "none")
		$(".HLP").css("display", "block")
	})
	$(".left_science").click(function() {
		$(".library,.AMC,.AME,.PE,.CME,.HLP,.acme_top,.information").css("display", "none")
		$(".science_top").css("display", "block")
	})
	$(".left_acme").click(function() {
		$(".library,.AMC,.AME,.PE,.CME,.HLP,.science_top,.information").css("display", "none")
		$(".acme_top").css("display", "block")
	})
	$(".left_information").click(function() {
		$(".library,.AMC,.AME,.PE,.CME,.HLP,.science_top,.acme_top").css("display", "none")
		$(".information").css("display", "block")
	})
	
})
