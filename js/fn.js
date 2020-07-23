;(function () {
    flexible()
    // 封装一个 自适应的 rem 方法
    function flexible() {
        try {
            // 设计图 为750， 设置自适应
            // 设置根节点的 font-size
            document.documentElement.style.fontSize = window.innerWidth * 100 / 750 + 'px'
            // body 上把字体还原
            document.body.style.fontSize = '14px'
        } catch(e) {
            console.log(e)
        }
    }
})()