function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(`#nested .target`)
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll(`.ranked-list`)
  for (var i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i]) + n
  }
}

function deepestChild() {
  var node = document.querySelectorAll(`div#grand-node`)
  var nextNode = node.children[0]
  
}