// pages/location/list.js
Page({
  data: {
    locations: []
  },
  onLoad: function () {
    this.setData({
      locations: (wx.getStorageSync('location_list') || [])
      })
    console.log("locations")
  } 
})