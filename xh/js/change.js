function fdj(e) {
  var e1 = e || window.event
  var tupian = document.querySelector(".tupian")
  var mark = document.querySelector(".mark")
  var fdj = document.querySelector(".fdj")
  var fdjImg = document.querySelector(".fdjImg")
  var left = e1.pageX - tupian.offsetLeft - mark.offsetWidth / 2
  var top = e1.pageY - tupian.offsetTop - mark.offsetHeight / 2
  var maxX = tupian.offsetWidth - mark.offsetWidth
  var maxY = tupian.offsetHeight - mark.offsetHeight
  var x1,y1
  if (left <= 0) {
    mark.style.left = "0px"
    x1 = 0
  } else if (left > maxX) {
    mark.style.left = maxX + 'px'
    x1 = maxX
  } else {
    mark.style.left = left + 'px'
    x1 = left
  }

  if (top <= 0) {
    mark.style.top = "0px"
    y1 = 0
  } else if (top > maxY) {
    mark.style.top = maxY + 'px'
    y1 = maxY
  } else {
    mark.style.top = top + 'px'
    y1 = top
  }
  var sX,sY
  sX = x1/maxX
  sY = y1/maxY

  fdjImg.style.left = -(fdjImg.offsetWidth - fdj.offsetWidth) * sX + "px"
  fdjImg.style.top = -(fdjImg.offsetHeight - fdj.offsetHeight) * sY + "px"
}
export {fdj}