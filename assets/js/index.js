;(function(){

    var defaultInd = 0;
    var list = $('#banner-show').children();
    var count = 0;
    var change = function(newInd, callback){
        if(count) return;
        count = 2;
        $(list[defaultInd]).fadeOut(300, function(){
            count--;
            if(count <= 0){
                if(start.timer) window.clearTimeout(start.timer);
                callback && callback();
            }
        });
        $(list[newInd]).fadeIn(300, function(){
            defaultInd = newInd;
            count--;
            if(count <= 0){
                if(start.timer) window.clearTimeout(start.timer);
                callback && callback();
            }
        });
    }

    var next = function(callback){
        var newInd = defaultInd + 1;
        if(newInd >= list.length){
            newInd = 0;
        }
        change(newInd, callback);
    }

    var start = function(){
        if(start.timer) window.clearTimeout(start.timer);
        start.timer = window.setTimeout(function(){
            next(function(){
                start();
            });
        }, 8000);
    }

    start();

    $('#js_ban_button_box').on('click', 'a', function(){
        var btn = $(this);
        if(btn.hasClass('right')){
            //next
            next(function(){
                start();
            });
        }
        else{
            //prev
            var newInd = defaultInd - 1;
            if(newInd < 0){
                newInd = list.length - 1;
            }
            change(newInd, function(){
                start();
            });
        }
        return false;
    });

})();

$('form').submit(function(event) {
    if($('#username').val() == "学号" || $('#username').val() == "账号")
        $('#username').val('')
});

// $(window).load(function() {
//     var theWindow        = $(window),
//         $bg              = $("#bg"),
//         aspectRatio      = $bg.width() / $bg.height();
//     function resizeBg() {
//         if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
//             $bg
//                 .removeClass()
//                 .addClass('bgheight');
//         } else {
//             $bg
//                 .removeClass()
//                 .addClass('bgwidth');
//         }
//     }
//     theWindow.resize(resizeBg).trigger("resize");
// });
