/* Functions used to animate the intro pages flex to the start/end of the header */
/*
function chbg(id, color, flex) {
    var element = document.getElementById(id);
    element.style.backgroundColor = color;
    if (flex) {
        element.style.flex = flex;
        element.style.transition = "flex 0.5s ease-in-out2";
    } else {
        element.style.transition = "none";
    }
}

function chbg2(id, color) {
    var header = document.getElementById("header").getBoundingClientRect();
    if (id == "right-bottom") {
        chbg(id, color, Math.abs(window.innerWidth / 2 + header.right) / window.innerWidth * 100 + "%");
    } else if (id == "left-top") {
        chbg(id, color, Math.abs(header.right + window.innerWidth / 2) / window.innerWidth * 100 + "%");
    }
}
*/

/* Mouse event listeners for the intro page */
document.getElementById("left-top").addEventListener("mouseover", function () {
  this.style.flex = "2";
  document.getElementById("video-left-top").play();
  document.querySelector("#header").style.opacity = "0";
});
document.getElementById("left-top").addEventListener("mouseout", function () {
  this.style.flex = "1";
  document.getElementById("video-left-top").pause();
  document.querySelector("#header").style.opacity = "1";
});
document.getElementById("right-bottom").addEventListener("mouseover", function () {
  this.style.flex = "2";
  document.getElementById("video-right-bottom").play();
  document.querySelector("#header").style.opacity = "0";
});
document.getElementById("right-bottom").addEventListener("mouseout", function () {
  this.style.flex = "1";
  document.getElementById("video-right-bottom").pause();
  document.querySelector("#header").style.opacity = "1";
});


