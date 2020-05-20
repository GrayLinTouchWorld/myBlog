'use strict'

/*
 * @name        Rem組件
 * @author      momo
 * @create      2018/08/30
 * @update      2019/12/26
 * @description 撤销自助调用，改为直接启用
 */

import { platform } from './utils'

;(function(doc, win) {

    // 仅作用于移动端
    if(!platform.isMobile) return

    const DE = doc.documentElement
    const EVENT = 'orientationchange' in win ? 'orientationchange' : 'resize'

    // 默认比较尺寸
    let baseSize = 750

    const setRem = () => {
        let clientWidth = DE.clientWidth,
            fontSize = '100px'

        // 获取不到屏幕宽度，不再向下执行
        if(!clientWidth) return

        if (clientWidth < baseSize) {
            // 当屏幕宽度小于对比宽度时，
            fontSize = (100 * (clientWidth / baseSize)).toFixed(2) + 'px'
        }

        // 设置根元素字体大小
        DE.style.fontSize = fontSize

    }

    // 事件绑定
    win.addEventListener(EVENT, setRem, false)

    // 初始化调用
    setRem()

})(document, window)