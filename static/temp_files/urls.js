(function() {
	window.isDevelop = false;
	var path = "http://admin.huimeionline.com/node";
	// var path = "http://192.168.2.26:3001";

	window.Urls = {
		"newsTopQuery": {
			develop: "/mockdata/news.top.json",
			online: path + "/blueNew/queryblueNewList"
		},
		"newsListQuery": {
			develop: "/mockdata/news.list.json",
			online: path + "/blueNew/queryblueNewList"
		},
		"newsDetailQuery": {
			develop: "/mockdata/news.10010.json",
			online: path + "/blueNew/blueNewDetail"
		}
	};
})();