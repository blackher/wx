var app = getApp()
Page( {
  data: {
    point:{
      
    },
    markers: {}
  },
  onLoad: function() {
    var that = this;
    wx.getLocation( {
      type: 'wgs84',
      success: function( res ) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy;
        wx.openLocation({
            //当前经纬度
            latitude: latitude,
            longitude:longitude,
            //缩放级别默认28
            scale: 28,
            //位置名
            name: '测试地址',
            //详细地址
            address: '测试地址',
            //成功打印信息
            success: function(res) {
              console.log(res)
            },
            //失败打印信息
            fail: function(err) {
              console.log(err)
           },
            //完成打印信息
            complete: function(info){
               console.log(info)
            },
        })


        var point={
             latitude: latitude,
             longitude: longitude
        }
        var markers = {
          latitude: latitude,
          longitude: longitude,
          name: '地图定位',
          desc: '我现在的位置'
        };
        console.log(res);
        that.setData( markers );
        that.setData( point );
      }
    })
  },
  getCenterLocation: function () {
    var that = this;
    that.onLoad();
  },
  
})