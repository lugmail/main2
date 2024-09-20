function shop(e){
  var e1 = e || window.event
  var span1 = document.querySelectorAll(".chose h2:nth-of-type(1) span")
  var span2 = document.querySelectorAll(".chose h2:nth-of-type(2) span")
  var span3 = document.querySelectorAll(".chose h2:nth-of-type(3) span")
  for(let i=0;i<span1.length;i++){
    span1[i].onclick = function(){
      for(var j=0;j<span1.length;j++){
        span1[j].id = ""
      }
      span1[i].id = "bg"
    }
  }
  for(let i=0;i<span2.length;i++){
    span2[i].onclick = function(){
      for(var j=0;j<span2.length;j++){
        span2[j].id = ""
      }
      span2[i].id = "bg"
    }
  }
  for(let i=0;i<span3.length;i++){
    span3[i].onclick = function(){
      for(var j=0;j<span3.length;j++){
        span3[j].id = ""
      }
      span3[i].id = "bg"
    }
  }
}
export{shop}