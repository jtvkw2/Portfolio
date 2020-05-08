// **************** Portfolio Filtering ****************//

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// **************** Portfolio DIVS ****************//
document.body.onload = createDivs;

function createDivs(){
  var portfolioArray = [
    ["html","img/Bugboy.png","Bug Boy in Water World", "https://github.com/jtvkw2/Bug_Boy_in_Water_World"],
    ["mobile","img/Pitch.jpg","Pitch Perfect","https://github.com/jtvkw2/Pitch-Perfect"],
    ["html","img/List.png","To-Do-List","https://github.com/jtvkw2/To-Do-List"],
    ["html","img/Map.png","Map","https://github.com/jtvkw2/Map"],
    ["html","img/Memory.png","Memory","https://github.com/jtvkw2/Memory"]
  ];
  for(var i=0; i< portfolioArray.length; i++){
    addElement(portfolioArray[i][0],portfolioArray[i][1],portfolioArray[i][2],portfolioArray[i][3]);
    //console.log(addElement(portfolioArray[i][0],portfolioArray[i][1],portfolioArray[i][2],portfolioArray[i][3]));
  }
};

function addElement (w,x,y,z) {
  var div1 = document.createElement("div");
  div1.classList.add("column",w, "show");
  var div2 = document.createElement("div");
  div1.appendChild(div2);
  div2.classList.add("content");
  var div3 = document.createElement("div");
  div2.appendChild(div3);
  div2.classList.add("grid");
  var figure = document.createElement("figure");
  div3.appendChild(figure);
  div2.classList.add("effect-apollo","port-img");
  var img = document.createElement("img");
  figure.appendChild(img);
  img.classList.add("imgStyle");
  img.src = x;
  var figcap = document.createElement("figcaption");
  figure.appendChild(figcap);
  var h2 = document.createElement("h2");
  h2.classList.add("h2Style");
  figcap.appendChild(h2);
  var newContent = document.createTextNode(y);
  h2.appendChild(newContent);
  var p = document.createElement("p");
  var github = document.createTextNode("Link To Github");
  figcap.appendChild(p);
  var a = document.createElement("a");
  a.href = z;
  p.appendChild(a);
  a.appendChild(github);
  var currentDiv = document.getElementById("currentDiv");
  currentDiv.append(div1);
}
