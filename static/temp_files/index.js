window._currentPage = 0;
var indexPage = function() {
	this.el = {
		body: $(".bodyBox"),
	};
	this._init();
};
indexPage.prototype = {
	_init: function() {
		window._currentPage = 0;
		var _commPage = new commonPage();
		this._eventBind();
	},
	_eventBind: function() { //事件绑定方法
		var _this = this;
		_this.el.body.on("mouseover", ".li-f2", function() {
			$(this).addClass("active");
		}).on("mouseout", ".li-f2", function() {
			$(this).removeClass("active");
		});
	}
};

var _indexPage = new indexPage();