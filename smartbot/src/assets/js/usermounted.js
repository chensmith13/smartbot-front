import $ from './jquery3.6.0'
export default {


     screenFuc()
{
    var topHeight = $(".chatBox-head").innerHeight();
    var winWidth = $(window).innerWidth();
    if (winWidth <= 768) {
        var totalHeight = $(window).height();
        $(".chatBox-info").css("height", totalHeight - topHeight);
        var infoHeight = $(".chatBox-info").innerHeight();
        $(".chatBox-content").css("height", infoHeight - 46);
        $(".chatBox-content-demo").css("height", infoHeight - 46);

        $(".chatBox-list").css("height", totalHeight - topHeight);
        $(".chatBox-kuang").css("height", totalHeight - topHeight);
        $(".div-textarea").css("width", winWidth - 106);
        $(".chat-message").css("width", $(".chatBox-content").width() * (500 / 646));
        $(".div-textarea").css("width", $(".chatBox-send").width() * (275 / 397))
    } else {
        $(".chatBox-info").css("height", "87%");
        $(".chatBox-content").css("height", "92%");
        $(".chatBox-content-demo").css("height", "98%");
        $(".chatBox-list").css("height", 495);
        $(".chatBox-kuang").css("height", "100%");
        $(".div-textarea").css("width", "85%");
        $(".chat-message").css("width", $(".chatBox-content").width() * (500 / 646));
        $(".div-textarea").css("width", $(".chatBox-send").width() * (275 / 397))
    }

},

mount(){
    var winWidth = $(window).innerWidth();
    var winHeight = $(window).innerHeight();
    $(".leaderboard").find("li").css("padding-top", (28 / 653) * winHeight)
    $(".leaderboard").find("li").css("padding-bottom", (20 / 653) * winHeight)
    $(".leaderboard").find("li").css("padding-right", (10 / 1280) * winWidth)
    $(".leaderboard").find("li").css("padding-left", (50 / 1280) * winWidth)
    $(".leaderboard").css("top", (200 / 653) * winHeight)

    var sendboxWidth = $(".chatBox-send").width()
    var sendboxHeight = $(".chatBox-send").height()
    $(".div-textarea").css("width", sendboxWidth - 95)
    $(".div-textarea").css("height", sendboxHeight)
    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }
    this.screenFuc();
    window.onresize = this.screenFuc();

}
}
