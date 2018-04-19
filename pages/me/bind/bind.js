const app = getApp()
 
const REST = require('../../../utils/rest.js')

Page({
    data: {
        second: 59,
        wait_btn:false,
        send_btn:true,
    },
    
    getphone: function (e){
      wx.request({
        url: 'localhost:3000/v1/***', //仅为示例，并非真实的接口地址
        method: 'POST',
        data: {
          x: '',
          y: ''
        },
        success: function (res) {
          console.log(res.data)
        }
      })

        this.setData({
            wait_btn:true,
            send_btn:false,
        });
        countdown(this);
    },

    /**
     * 页面的初始数据
     */
    data: {
      user: null,
      userUsername: null,
      userPassword: null,
      currentUser: {}
    },
    // /**
    //  * 生命周期函数--监听页面加载
    //  */
    // onLoad: function (options) {
    //   let currentUser = app.globalData.currentUser
    //   let user = {
    //     username: currentUser.username,
    //     password: currentUser.password
    //   };
    //   console.log(user);
    //   // 再通过setData更改Page()里面的data，动态更新页面的数据  

    //   this.setData({
    //     userInfo: user
    //   });
 
    // },


    passwordInput: function (e) {
      this.setData({
        userPassword: e.detail.value
      })
    },
    
    usernameInput: function (e) {
      this.setData({
        userUsername: e.detail.value
      })
    },

    formSubmit: function (e) { 
      let data = {
        username: this.data.userUsername,
        password: this.data.userPassword,
      }
      let currentUserInfo = app.globalData.currentUserInfo
      let authentication_token = app.globalData.authentication_token
      var that = this
      let res = REST.post('/api/wechat/login', data, res => {
        console.log(res.error_code)
          switch (res.error_code) {
            // 点击定位控件
            case 200: wx.showToast({
                title: "登陆成功!",
                icon: "success",
                duration: 2000
            }), 
              currentUserInfo = res.data
              authentication_token = res.data.authentication_token
              wx.setStorageSync('authentication_token', authentication_token)
              wx.setStorageSync('currentUserInfo', currentUserInfo)
              console.log(currentUserInfo)
              
              wx.redirectTo({
                url: '/pages/me/me'
              })
              break;
            case 404: wx.showToast({
                title: "账号不存在!",
                icon: "fail",
                duration: 2000
              })
              break;
            case 501:  wx.showToast({
                title: "密码错误!",
                icon: "fail",
                duration: 2000
              })
              break;
            default: break;
          }

        }
      )
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