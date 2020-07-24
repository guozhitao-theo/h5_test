
// 需要定义一个数组存放正确的答案 5道题 左滑为1，右滑为2， 下标 对应 题目顺序
// 设定题目的正确答案
let answer = [1, 2, 1, 2, 2]
// 定义空数组 存用户选择
let userAnswer = ['']
// 分页
// 获取每个页的 节点
let page1 = document.querySelector('.page1')
let page2 = document.querySelector('.page2')
let page3 = document.querySelector('.page3')
let page4 = document.querySelector('.page4')
let page5 = document.querySelector('.page5')
let page6 = document.querySelector('.page6')
let wraper = document.querySelector('.wraper')
let container = document.querySelector('.container')
// 定义滑动的高度
let itemWidth = wraper.offsetWidth;
let index = 0 // 滑动的次数
let moveX, // 滑动的距离
    endX, // 滑动停止的 x的坐标
    startX; // 滑动开始的 x 的坐标

// 触摸事件 触摸开始
function boxTouchStart(e) {
    var touch = e.touches[0]
    startX = touch.pageX // 水平滚动偏移
    endX = container.style.webkitTransform;
    if(!endX) { // 如果endX 不存在
        endX = 0
    } else {
        endX = -parseInt(endX.replace('translateX(',''))
    }
}
// 触摸事件 结束
function boxTouchEnd(e) {
    document.querySelector(`.page${index + 1}_content`).style.display = "block"
    // if(document.querySelector(`.page${index }_content`)) {
    //     // document.querySelector(`.page${index}_content`).classList.add('animate__zoomOutRight')
    //     document.querySelector(`.page${index}_content`).style.display = "none"
    // }
}
// 触摸移动
function boxTouchMove(e) {
    var touch = e.touches[0]
    console.log(e)
    moveX = touch.pageX - startX // 移动之后的偏移量 - 开始的位置
    index = Number(e.target.id.split('page')[1])
    //下一页
    // 手指向右边滑动
    // 实现元素滑动
    if(moveX > 0) {
        if(index == 5) {
            return false;
        }
        //
        userAnswer[index] = 2
        // document.querySelector(`.page${index}_content`).style.display = "none"
        container.style.webkitTransform = 'translateX(-'+(itemWidth+endX)+'px)'
        // container.style.webkitTransform = 'translateX(-'+(itemWidth*index)+'px)'
    }
    // 手指向左边滑动
    else if(moveX < 0) {
        if(index == 5) {
            return false;
        }
       userAnswer[index] = 1
        container.style.webkitTransform = 'translateX(-'+(itemWidth+endX)+'px)'
        // container.style.webkitTransform = 'translateX('+(itemWidth+endX)+'px)'
    }
}
container.addEventListener('touchstart', boxTouchStart, false ) // 父级节点添加事件监听 事件捕获绑定到子节点
container.addEventListener('touchmove', boxTouchMove, false)
container.addEventListener('touchend', boxTouchEnd, false)

// 点击开始答题
document.querySelector('.begin_box').onclick = function (e) {
    container.style.webkitTransform = 'translateX(-'+(itemWidth+endX)+'px)'
}
