var animateConfig = {
	fadeInDownSmall: 'animated fadeInDownSmall',
	fadeInLeftSmall: 'animated fadeInLeftSmall',
	fadeInRightSmall: 'animated fadeInRightSmall',
	fadeInUpSmall: 'animated fadeInUpSmall',
	bounce: 'animated bounce'
};

/*
 * 添加animate 动画效果
 * opts 两个参数 
 * classArray:需要添加效果的元素数组集合【key代表元素ID，value代表元素需要添加的样式名称】
 * el:效果数组集合，key:名称 value:对应的animation效果类名
 */
var scrollPoint = function(opts) {
	var _this = this;
	$.each(opts.classArray, function(i, item) {
		var _scrollPoint = item.id
		var _animateName = item.classname;
		_scrollPoint = new Waypoint({
			element: document.getElementById(item.id),
			handler: function(direction) {
				$("#" + item.id).toggleClass(_this.animateConfig[_animateName]);
			},
			offset: '100%'
		});
	});
};
window._currentPage = 0; //当前页面导航下标
window._productNavIdx = 0; //产品页产品导航下标
window._productChildIndex = -1; //产品页临床决策辅助系统下标
//设置当前导航样式
var showActive = function() {
	$(".header").find(".h-nav li").eq(window._currentPage).addClass("active").siblings().removeClass("active");
};
//设置产品页导航显示样式
var showProNav = function() {
	$(".product").find(".p-nav li.p").eq(window._productNavIdx).addClass("active").siblings().removeClass("active");
};
//弹框传值
var boxData = function() {
	var dataNum = $(".bombBox").attr("data-num");
	$("#bombBox").find(".bombBox p strong").html(dataNum);
	$(document).on("click", function() {
		$("#bombBox").remove();
	});
	$("#bombBox").find(".bombBox").on("click", function(e) {
		e.stopPropagation();
	});
};
//判断IE 
var getBrowerVersion = function() {
	var browser = navigator.appName
	var b_version = navigator.appVersion
	var version = b_version.split(";");
	var trim_Version = version[1].replace(/[ ]/g, "");
	if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
		return 6;
	} else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") {
		return 7;
	} else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
		return 8;
	} else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0") {
		return 9;
	}
};
var renderTemplate = function(dom, tplName, data) {
	var _tpl = template(tplName, data);
	dom.innerHTML = _tpl;
};

function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if (r != null) return unescape(r[2]);
	return null; //返回参数值
};

/*
 * CommonPage
 */
var commonPage = function() {
	this.el = {
		footer: $(".footer"),
		header: $(".header"),
		product: $(".product"),
		bombBox: $(".bombBox")
	};
	this._init();
};
commonPage.prototype = {
	_init: function() {
		window._pageLink = $("body").attr("data-url");
		if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
			if (window._pageLink) {
				window.location.href = window._pageLink;
			}
		}
		/*this._eventLoad();*/
		this._backTop();
		this._clickBackBtn();

	},
	/*_eventLoad: function() { //公用footer与header
		var _this = this;
		_this.el.footer.load("/tpl/footer.htm", "#footer", function() {
			_this._addFooterAnimate();
		});
		_this.el.header.load("/tpl/header.htm", "#header", function() {
			showActive();
		});

		_this.el.product.load("/tpl/product.htm", function() {
			showProNav();
			if (window._productChildIndex == -1) {
				$(".product").find(".p-child li").removeClass("active");
			} else {
				$(".product").find(".p-child li").removeClass("active").eq(window._productChildIndex).addClass("active");
			}
			$(".product").on("mouseenter", ".p-parent", function() {
				$(this).find(".p-child").fadeIn();
			}).on("mouseleave", ".p-parent", function() {
				$(this).find(".p-child").fadeOut();
			});
		});
	},*/
	_addFooterAnimate: function() {
		var _this = this;
		//声明页面中需要添加animation动画的对象数组
		var classArray = [{
			id: 'footerLeft',
			classname: 'fadeInLeftSmall'
		}, {
			id: 'footerRight',
			classname: 'fadeInRightSmall'
		}, {
			id: 'copyRight',
			classname: 'fadeInDownSmall'
		}];
		//调用方法
		scrollPoint({
			classArray: classArray
		});
	},
	_clickBackBtn: function() { //回到顶部点击方法
        console.log(222)
		/*var _this = this;*/
		$(".bds_wechat").mousemove(function() {
			console.log(111)
			$(".backToTop").find(".QRcode").addClass("wechat");
		}).mouseleave(function() {
			$(".backToTop").find(".wechat").removeClass("wechat");
		});
		$(".backToTop").find(".bds_tqq").mousemove(function() {
			$(".backToTop").find(".QRcode").addClass("QQcode");
		}).mouseleave(function() {
			$(".backToTop").find(".QQcode").removeClass("QQcode");
		});
	},
	_backTop: function() { //回到顶部滑动
		var _this = this;
		var $backToTopTxt = "",
			$backToTopEle = "",
			$backToTopBox = "";
		$backToTopBox = '<div class="backToTop">' + '<a href="javascript:;" class="bds_top"></a>' + '<a href="javascript:;" class="bds_advisory" onclick="ysf.open();return false;"></a>' + '<a href="javascript:;" class="bds_wechat"></a>' + '<a href="javascript:;" class="bds_tqq"></a>' + '<div class="QRcode"></div>' + '</div>';
		$("body").append($backToTopBox);
		$backToTopEle = $(".backToTop").find(".bds_top").click(function() {
			$("html, body").animate({
				scrollTop: 0
			}, 120)
		});
		//检测滑动条
		$(window).bind("scroll", function() {
			var st = $(document).scrollTop(),
				winh = $(window).height();
			(st > 0) ? $(".backToTop").show(): $(".backToTop").hide();
			//IE6下的定位
			if (!window.XMLHttpRequest) {
				$backToTopEle.css("top", st + winh - 166)
			}
			if ($(document).scrollTop() > 0) {
				$(".header").css("border-bottom", "1px solid #ccc");
			} else {
				$(".header").css("border-bottom", "none");
			}

		});
	}
};