//logs.js
const app = getApp()
const REST = require('../../utils/rest.js')
// Page({
//   data: {
//     logs: []
//   },
//   onLoad: function () {
//     this.setData({
//       logs: (wx.getStorageSync('logs') || []).map(function (log) {
//         return util.formatTime(new Date(log))
//       })
//     })
//   }
// })

Page({


  data: {
    scale: 18,
    latitude: 0,
    longitude: 0
  },
  // 页面加载
  onLoad: function (options) {

    // let api = '/wechat/users/update.json';
    // // let value = e.detail.value;

    // let data = { 
    // };

    // REST.post(api, data, res => {
    //   console.log(res)
    //   }
    //  )

    // 2.获取并设置当前位置经纬度
    wx.getLocation({
      type: "gcj02",
      success: (res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })

        this.setCurrentLocation();
      }
    });

    // 3.设置地图控件的位置及大小，通过设备宽高定位
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          controls: [{
            id: 1,
            iconPath: '/images/location.png',
            position: {
              left: 20,
              top: res.windowHeight - 80,
              width: 50,
              height: 50
            },
            clickable: true
          },
          {
            id: 2,
            iconPath: '/images/marker.png',
            position: {
              left: res.windowWidth / 2 - 11,
              top: res.windowHeight / 2 - 45,
              width: 31,
              height: 48
            },
            clickable: true
            },
            {
              id: 3,
              iconPath: '/images/icon_nav_form.png',
              position: { 
                left: res.windowWidth - 60,
                top: res.windowHeight - 80,
                width: 35,
                height: 35
              },
              clickable: true
            }]
        })
      }
    });

  },
  // 页面显示
  onShow: function () {
    // 1.创建地图上下文，移动当前位置到地图中心
    this.mapCtx = wx.createMapContext("ofoMap");
    this.movetoPosition();
  },
  // 地图控件点击事件
  bindcontroltap: function (e) {
    // 判断点击的是哪个控件 e.controlId代表控件的id 
    switch (e.controlId) {
      // 点击定位控件
      case 1: this.movetoPosition();
        console.log("click 1")
        break;
      // 点击定位控件
      case 2: this.showLocation();

        break;
      case 3:
      //  wx.navigateTo({
      //     url: '/pages/location/list'
      //   }); 
        // console.log("click 3")
        wx.getStorage({
          key: 'current_location',
          success: function (res) {
            console.log(res.data)
            
            let result = res.data.location
            let time = res.data.time
            let remark = res.data.remark

            console.log(result)
            wx.showModal({
              content: "时间:" + time + 
              "坐标：" + result + 
              "备注：" + remark,
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            });
            // this.setData({
            //   locationInfo: res.data
            // })
          }
        })
        break;
      default: break;
    }
  },
  // 地图视野改变事件
  bindregionchange: function (e) {
    // 拖动地图，获取附件位置
    if (e.type == "begin") {
      console.log("begin") 
      // 停止拖动，显示位置
    } else if (e.type == "end") {
      console.log("end")
      this.setCurrentLocation()
    }

  },
  // 地图标记点击事件 
  bindmarkertap: function (e) {
    console.log(e);
    let _markers = this.data.markers;
    let markerId = e.markerId;
    let currMaker = _markers[markerId];
    this.setData({
      polyline: [{
        points: [{
          longitude: this.data.longitude,
          latitude: this.data.latitude
        }, {
          longitude: currMaker.longitude,
          latitude: currMaker.latitude
        }],
        color: "#FF0000DD",
        width: 1,
        dottedLine: true
      }],
      scale: 18
    }) 
  },
  showLocation: function () {
    wx.navigateTo({
      url: '../location/detail/detail'
    }); 
    // wx.redirectTo({
    //   url: '../index/index'
    // })
  },
  // 定位函数，移动位置到地图中心
  movetoPosition: function () {
    this.mapCtx.moveToLocation();
  },
  setCurrentLocation: function() {
    app.globalData.currentLocation.latitude = this.data.latitude
    app.globalData.currentLocation.longitude = this.data.longitude
  },
})