/**
 * PC端直播间页面common.js
 *
 * */
// 没有Flash插件，增加提示样式
let FlashTip = {
  show: function () {
    var tip = '<div class="flashtip" style="display: table;width: 100%;height: 100%"><p style="display: table-cell;text-align:center;vertical-align: middle;color: #eeeeee">您还没有安装flash播放器,请点击<a href="//www.adobe.com/go/getflash" target="_blank">这里</a>安装</p></div>'
    $('#callbackPlayer, #livePlayer, #drawPanel, #playbackPanel, #playbackPlayer').append(tip)
  },

  checkFlash: function () {
    var isIE = (navigator.appVersion.indexOf('MSIE') >= 0)
    var hasFlash = true

    if (isIE) {
      try {
        var objFlash = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
      } catch (e) {
        hasFlash = false
      }
    } else {
      if (!navigator.plugins['Shockwave Flash']) {
        hasFlash = false
      }
    }
    return hasFlash
  },

  init: function () {
    if (!FlashTip.checkFlash()) {
      FlashTip.show()
    }
  }
}

export default FlashTip
