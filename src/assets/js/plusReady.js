export const plusReady = (fn) => {
  if (window.plus) {
    setTimeout(fn, 0)
  } else {
    document.addEventListener("plusready", fn, false)
  }
}


/*重写返回按钮事件*/
plusReady(() => {

})
