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

function deepestChild() {
  var container = document.querySelector("grand-node");
  var childContainer = container.child[0];
  while (childContainer) {
    container = childContainer;
    childContainer = container.children[0];
  }
  return container;
  }
