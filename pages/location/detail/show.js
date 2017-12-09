// pages/location/detail/show.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */

  data: {
    scale: 18,
    latitude: 0,
    longitude: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    console.log(options.location.split(",")[0])
    console.log(options.location.split(",")[1])
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          controls: [
          {
            id: 1,
            iconPath: '/images/marker.png',
            position: {
              left: res.windowWidth / 2 - 18,
              top: res.windowHeight / 2 - 150,
              width: 31,
              height: 48
            },
            clickable: true
          } ]
        })
      }
    });

    this.setData({
      longitude: options.location.split(",")[1],
      latitude: options.location.split(",")[0],
      time: options.time,
      remark: options.remark, 
      markers: [
        {
          id: 0
          , iconPath: '/images/marker.png'
          , longitude: options.location.split(",")[0]
          , latitude: options.location.split(",")[1]
          , width: 30
          , height: 30
        } ]
       
    })
 
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})