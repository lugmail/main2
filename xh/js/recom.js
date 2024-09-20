function recom(e) {
  var e1 = e || window.event
  var trg = e1.target || e1.srcElement

  var recommend = document.querySelector(".recommend")
  var lis = document.querySelectorAll(".recom li")
  if (trg.innerHTML == "人气配件") {
    for(var i=0;i<lis.length;i++){
      lis[i].id = ""
    }
    trg.id = "tabbg"
    recommend.innerHTML = `
            <li><img src="img/rq/rq1.jpg" alt=""></li>
            <li><img src="img/rq/rq2.jpg" alt=""></li>
            <li><img src="img/rq/rq3.jpg" alt=""></li>
            <li><img src="img/rq/rq4.jpg" alt=""></li>
            <li><img src="img/rq/rq5.jpg" alt=""></li>
    `
    
  }
  if (trg.innerHTML == "手机壳") {
    for(var i=0;i<lis.length;i++){
      lis[i].id = ""
    }
    trg.id = "tabbg"
    recommend.innerHTML = `
    <li><img src="img/sjk/sjk1.jpg" alt=""></li>
         <li><img src="img/sjk/sjk2.jpg" alt=""></li>
         <li><img src="img/sjk/sjk3.jpg" alt=""></li>
         <li><img src="img/sjk/sjk4.png" alt=""></li>
         <li><img src="img/sjk/sjk5.png" alt=""></li>
 `
 console.log(111);
 
  }
  if (trg.innerHTML == "耳机") {
    for(var i=0;i<lis.length;i++){
      lis[i].id = ""
    }
    trg.id = "tabbg"
    recommend.innerHTML = `
    <li><img src="img/rj/rj1.png" alt=""></li>
         <li><img src="img/rj/rj2.jpg" alt=""></li>
         <li><img src="img/rj/rj3.jpg" alt=""></li>
         <li><img src="img/rj/rj4.jpg" alt=""></li>
         <li><img src="img/rj/rj5.jpg" alt=""></li>
 `
  }
  if (trg.innerHTML == "充电宝") {
    for(var i=0;i<lis.length;i++){
      lis[i].id = ""
    }
    trg.id = "tabbg"
    recommend.innerHTML = `
    <li><img src="img/cdb/cdb1.jpg" alt=""></li>
         <li><img src="img/cdb/cdb2.jpg" alt=""></li>
         <li><img src="img/cdb/cdb3.jpg" alt=""></li>
         <li><img src="img/cdb/cdb4.jpg" alt=""></li>
         <li><img src="img/cdb/cdb5.jpg" alt=""></li>
 `
  }
}
export{recom}