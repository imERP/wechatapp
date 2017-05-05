Page({
    openConfirm: function () {
        wx.showModal({
            title: '清除缓存',
            // content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
            confirmText: "确定",
            cancelText: "取消",
            success: function (res) {
                console.log(res);
                if (res.confirm) {
                    console.log('用户点击确定')
                    wx.clearStorage()
                }else{
                    console.log('用户点击取消操作')
                }
            }
        });
    },
});