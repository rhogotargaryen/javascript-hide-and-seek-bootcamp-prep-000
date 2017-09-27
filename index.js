function getFirstSelector(selector) {
   return document.querySelector(`${selector}`);
 }

 function nestedTarget() {
   return document.querySelector("#nested .target");
 }

 function increaseRankBy(n) {
   var nList = document.querySelectorAll("ul.ranked-list li");
   for (var i = 0; i < nList.length; i++) {
     nList[i].innerHTML = parseInt(nList[i].innerHTML) + n;
   }
 }
