//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    currentUserInfo: {}
  },
  //事件处理函数
  bindToBind: function() {
    wx.navigateTo({
      url: 'bind/bind'
    })
  },
  loginOut: function() {
    wx.setStorageSync('authentication_token', "")
    wx.setStorageSync('currentUserInfo', "")
    wx.redirectTo({
      url: 'bind/bind'
    })
    
  },
  onLoad: function () {
    console.log('onLoad')
    this.setData({
      currentUserInfo: (wx.getStorageSync('currentUserInfo') || {}),
      authentication_token: (wx.getStorageSync('authentication_token'))
    })

    console.log(this)
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
