function loading(){
    $.ajax({
        method:'GET',
        url:'../static/tpl/header.html'
    }).success(function(data) {
        $('.header').prepend(data);
    });

}
loading();

/*
$(".h-nav a").click(function(){
    $(this).parent("li").addClass("active")
});*/
