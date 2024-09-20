function move(e){
  var e1 = e || window.event
  var trg = e1.target || e1.srcElement
  var show2 = document.querySelectorAll(".show2")
  var bannerdad = document.querySelector(".bannerdad")
  var banner = document.querySelector(".banner")
  
  var speed = banner.offsetWidth/40
  var dsq1,dsq2
  if(trg.classList == "left"){
    clearInterval(dsq1)
    dsq1 = setInterval(function(){
      var start = banner.scrollLeft
      var end = banner.offsetWidth
      if(start <= 0){
        clearInterval(dsq1)
      }else{
        banner.scrollLeft = start - speed
      }
    },10)
  }
  if(trg.classList == "right"){
    clearInterval(dsq2,dsq1)
    dsq2 = setInterval(function(){
      var start = banner.scrollLeft
      if(start == 204 ){
        clearInterval(dsq2)
      }else{
        banner.scrollLeft = start + speed
      }
    },10)
  }
}

export{move}