var linksContent = $('.links');
var links = linksContent.find('a');
var item = $('.item');
links.eq(0).add(item.eq(0)).addClass('active');
linksContent.on('click','a',function(){
    var t= $(this);
    var i = t.index();
    t.add(item.eq(i))
            .addClass('active')
            .siblings().removeClass('active');
});
