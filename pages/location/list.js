const utils = require('../../utils/util.js')

// pages/location/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    locationInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({
      // locationInfo: (wx.getStorage('current_location') || [])
    })
    // console.log(wx.getStorage({ key: 'current_location'}))
    wx.getStorage({
      key: 'current_location',
      success: function (res) {
        console.log(res.data)
        // this.setData({
        //   locationInfo: res.data
        // })
      }
    })
  }

  //   wx.getStorage({
  //   key: 'current_location',
  //   success: function (res) {
  //     // locationInfo: res.data
  //     this.setData(res.data)
  //   }
  // });
})