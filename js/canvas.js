
// canvas 画布
// 加载动画 canvas
let loadingCanvas =  document.querySelector('.loadingCanvas')
loadingCanvas.width = window.innerWidth / 750 * 260
loadingCanvas.height = window.innerWidth / 750 * 360
let loadingContext = loadingCanvas.getContext('2d') // 获取2d的画布环境
let loadingX = loadingCanvas.clientWidth / 2  //canvas 画布中心点的x坐标
let loadingY = loadingCanvas.clientHeight / 2  // 中心点y坐标
let rad = Math.PI * 2 / 100 // 将360度分成100 份 一份为rad度
let speed = 0.1 // 加载的速度
let img = new Image()
img.src = "../image/logo-1.png";

/**
 * 绘制内圈
 * @param n {Number}
 */
function inCircle(n) {
    loadingContext.save(); // 保存当前的环境状态
    loadingContext.beginPath(); // 起始一条路径，或者重置当前的路径
    loadingContext.strokeStyle = '#fefefe'; // 设置或者返回 用于笔触的颜色， 渐变，或者模式
    loadingContext.lineWidth = 11 // 设置或者返回当前 线条的宽度
    // context.arc(x,y,r,sAngle,eAngle,counterclockwise); （圆的中心x坐标， 圆中心y坐标， 圆的半径， 起始角弧度计， 结束角弧度计， 绘图方向false顺时针true逆时针）
    loadingContext.arc(loadingX, loadingY, 140, -Math.PI / 4, -Math.PI / 4 + rad * n, false)
    loadingContext.stroke() // 绘制定义路径
    loadingContext.restore() // 返回之前保存过的状态 和属性
}
/**
 * 绘制白色外圈
 */
function outCircle() {

    loadingContext.save()
    // canvas 中加入图片
// 绘制图片
    loadingContext.drawImage(img, loadingX/2 - 25, loadingY/2 + 10, 220, 220)
    loadingContext.beginPath()
    loadingContext.strokeStyle = '#949494'
    loadingContext.lineWidth = 9
    loadingContext.arc(loadingX, loadingY, 140, 0, Math.PI * 2, false)
    loadingContext.stroke()
    loadingContext.closePath() // 创建从当前点回到起始点的路径
    loadingContext.restore()
}

/**
 * 绘制文字
 * @param n
 */
function text(n) {
    loadingContext.save()
    loadingContext.fillStyle = '#949494' // 设置或返回用于填充绘画的颜色，渐变或模式
    loadingContext.font = " 60px LiSu" // 设置字体样式
    loadingContext.textAlign = "center" // 字体对齐样式
    loadingContext.textBaseline = 'middle' // 字体基线对齐方式
    loadingContext.fillText(10 - n.toFixed(0), loadingX, loadingY + 200)
    loadingContext.restore()
}


// 动画循环
;(function drawFrame() {
    window.requestAnimationFrame(drawFrame, loadingCanvas)
    loadingContext.clearRect(0, 0, loadingCanvas.width, loadingCanvas.height) // 在给定矩形内清空一个矩形
    outCircle()
    text(speed)
    inCircle(speed*10)
    if(speed > 10) {
        document.querySelector('.loading-box').style.display = 'none'
    }
    speed += 0.1
})()
// window.requestAnimationFrame(drawFrame, loadingCanvas)

