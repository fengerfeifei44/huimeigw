$(function() {
	$('.tabs li.open').hover(function() {
		var _self = $(this);
		var i = _self.index();
		$('.tabpanel,.tabs li').removeClass('active');
		_self.addClass('active');
		$('.tabpanel').eq(i).addClass('active');
		$('.tabs .arrow').css({ 'left': 12.5 + (i * 25) + '%' })
	})
	//
	$('.aside a').click(function() {
		var _self = $(this);
		var handler = '#panel' + _self.data('target');
		$('.tabpanel,.aside a').removeClass('active current');
		_self.addClass('current')
		$(handler).addClass('active');
	})
	//
	$('.loginbtn,.forlogin').click(function() {
		$('.regpanel').fadeOut();
		$('.loginpanel').fadeIn();
	})
	$('.regbtn,.forreg').click(function() {
		$('.regpanel').fadeIn();
		$('.loginpanel').fadeOut();
	})
	$('.closebtn').click(function() {
		$('.window').fadeOut();
	})
	$(".quick").click(function() {
		$(".quick").css("display", "none")
		window.sessionStorage.removeItem("data");
		window.location.reload()
	})
	$('#regForm').validator({
		fields: {
			phone: 'required; mobile',
			securityCode: 'required;digits;length[6]',
			password: 'required;password',
			repwd: {
				rule: 'required;password;match(password)',
				msg: '两次输入的密码不一致'
			},
			realName: 'required;',
			email: 'required; email'
		},
		focusInvalid: false,
		msgMaker: function(opt) {
			return '<span class="' + opt.type + '">' + opt.msg + '</span>';
		},
		//invalid:function(form){
		//    $(form).find('button').removeClass('submit');
		//},
		valid: function(form) {
			//$(form).find('button').addClass('submit');
			$.ajax({
				url: '/login/register.do',
				data: $(form).serialize(),
				type: "POST",
				success: function(data) {
					var data = $.parseJSON(data);
					if(data.code != 1) {
						alert(data.msg);
					} else {
						window.location.reload()
					}

				}
			});
		}
	});
	$('#pwdForm').validator({
		fields: {
			originalPassword: 'required;password',
			password: 'required;password',
			confirmPassword: {
				rule: 'required;password;match(password)',
				msg: '两次输入的密码不一致'
			},
		},
		focusInvalid: false,
		msgMaker: function(opt) {
			return '<span class="' + opt.type + '">' + opt.msg + '</span>';
		},
		valid: function(form) {
			$.ajax({
				url: '/login/register.do',
				data: $(form).serialize(),
				type: "POST",
				success: function(data) {
					var data = $.parseJSON(data);
					if(data.code != 1) {
						alert(data.msg);
					} else {
						$('.tip').show();
						$('#pwdForm').get(0).reset();
						setTimeout(function() {
							$('.tip').hide();
						}, 3000)
					}

				}
			});
		}
	});
	//
	var during = 60;
	$('.getcode').bind('click', function() {
		var self = $(this);
		if(during < 60) return false;
		var delay = 1000;
		var down = null;
		var timer = function() {
			during--;
			self.addClass('later');
			if(during > 0) {
				self.text('重新发送' + during).addClass('during');
				down = setTimeout(timer, delay)
			} else {
				during = 60;
				self.text('重新发送').removeClass('during');
				clearTimeout(down);
			}
		};

		var tel = $('#regForm input[name="phone"]').val();
		if(tel.length === 11 && /^1[3-9]\d{9}$/.test(tel)) {
			$.get('/login/sendSms.do?phone=' + tel, function(data) {
				setTimeout(timer, 0);
				var data = $.parseJSON(data);
				if(data.code != 1) {
					alert(data.msg)
				}

			})
		} else {
			alert('手机号码格式错误!');
		}

	});
	$('.submiter').click(function() {
		$.ajax({
			url: "/login/login.do",
			data: $('#loginForm').serialize(),
			type: "POST",
			success: function(e) {
				var e = $.parseJSON(e);
				console.log(e);
				window.sessionStorage.setItem("data", e.userName),
					1 == e.code ? ($(".loginbtn").html(e.userName),
						$(".regbtn").css("display", "none"),
						$(".quick").css("display", "block"),
						$(".window").css("display", "none")) : alert(e.msg)
			}
		})
	});
})
