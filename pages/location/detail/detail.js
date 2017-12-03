// pages/location/detail/detail.js

const utils = require('../../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    let currentLocation = app.globalData.currentLocation
    // 调用函数时，传入new Date()参数，返回值是日期和时间  
    var time = utils.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据  

    let location = {
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
      time: time,
      address: null,
      remark: null,
    };
    this.setData({
      locationInfo: location
    });
  },


  formSubmit: function (e) {
    // // console.log(e.detail.value)
    // wx.setStorage({
    //   key: "current_location",
    //   data: e.detail.value
    // })

    // 展示本地存储能力
    var locations = wx.getStorageSync('location_list') || []
    locations.unshift(e.detail.value)
    wx.setStorageSync('location_list', locations)

    // console.log(locations)
    this.moveToLocation()
    wx.showToast({
      title: "上传成功!",
      icon: "success",
      duration: 2000
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

    let currentLocation = app.globalData.currentLocation
  
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
  
  },

  moveToLocation: function() {
    // wx.navigateTo({
    //   url: '/pages/location/location',
    // })
    console.log("moveToLocation")


    wx.switchTab({
      url: '/pages/location/location',
    })

    // wx.redirectTo({
    //   url: '../location'
    // })
  }
})