const app = getApp();

const get = (api, data, success, error) => {
  wx.request({
    url: app.globalData.server + api,
    data: data,
    success: res => {
      if (res.statusCode === 200) {
        success && success(res.data)
      } else {
        console.log('请求出错, api:' + api);
      }
    },
    error: res => {
      console.log('请求挂掉, api:' + api);
      error && error(res);
    }
  })
}

const post = (api, data, success, error) => {
  console.log(app.globalData.server + api)
  wx.request({
    url: app.globalData.server + api,
    method: 'POST',
    data: data,
    success: res => {
      if (res.statusCode === 200) {
        success && success(res.data)
      } else {
        console.log('请求出错, api:' + api);
      }
    },
    error: res => {
      console.log('请求挂掉, api:' + api);
      error && error(res);
    }
  })
}


module.exports = { 
  get: get,
  post: post
}
