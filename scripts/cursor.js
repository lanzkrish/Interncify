

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
// #3108a4, #0037c6, #0052de, #0067ec, #007af0, #008ae9, #0099d8, #00a8c1, #00b5a5, #00c287, #00ce68, #0fd848

const colors = [
  "000",
  "#0fd848",
  "#00ce68",
  "#00c287",
  "#00b5a5",
  "#00a8c1",
  "#0099d8",
  "#008ae9",
  "#007af0",
  "#0067ec",
  "#0052de",
  "#0037c6",
  "#3108a4",
//   "#b22c5e",
//   "#ac265e",
//   "#179bbf",
//   "#179bbf",
//   "#179bbf",
//   "#080da4",
//   "#080da4",
//   "#080da4",
//   "#48005f",
//   "#3108a4"
];


circles.forEach(function (circle, index) {
  circle.x = 5;
  circle.y = 5;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
//   circles.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 5 + "px";
    circle.style.top = y - 1 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

$(document).mouseleave(function () {
    console.log('out');
    document.querySelector(".circle").classList.add("hide-cursor")
});
$(document).mouseenter(function () {
    console.log('in');
    document.querySelector(".circle").classList.remove("hide-cursor")
});

console.log("lil")
