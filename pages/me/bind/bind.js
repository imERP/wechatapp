Page({
    data: {
        second: 59,
        wait_btn:false,
        send_btn:true,
    },

    getphone: function (e){
        this.setData({
            wait_btn:true,
            send_btn:false,
        });
        countdown(this);
    },
    bindSubmitBind: function (){
        console.log("submit request..");


    },
    onLoad: function () {

    }
});

function countdown(that) {
    var second = that.data.second;
    if (second == 0) {
        console.log("Time Out...");
        that.setData({
            wait_btn:false,
            send_btn:true,
            second: 59,
        });
        return;
    }

    var time = setTimeout(function () {
            that.setData({
                second: second - 1
            });
            countdown(that);
        }, 1000)
}