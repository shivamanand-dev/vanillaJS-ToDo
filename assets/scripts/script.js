const arrowContainer = document.getElementById("arrowContainer1");
const arrowContainer2 = document.getElementById("arrowContainer2");

const sideChangeRight = () => {
  document.getElementById("col-1").style.transform = "translate3d(100%, 0, 0)";
  document.getElementById("col-2").style.transform = "translate3d(0%, 0, 0)";
  document.getElementById("col-1").style.zIndex = "-1";
  document.getElementById("col-2").style.zIndex = "1";
  document.getElementById("col-2").style.background = "rgb(250, 75, 75)";
};

const sideChangeLeft = () => {
  document.getElementById("col-1").style.transform = "translate3d(0%, 0, 0)";
  document.getElementById("col-2").style.transform = "translate3d(-100%, 0, 0)";
  document.getElementById("col-1").style.zIndex = "1";
  document.getElementById("col-2").style.zIndex = "-1";
};

arrowContainer.addEventListener("click", sideChangeRight, true);
arrowContainer2.addEventListener("click", sideChangeLeft, true);
