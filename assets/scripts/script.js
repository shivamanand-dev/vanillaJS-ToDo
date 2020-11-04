const arrowContainer = document.getElementById("arrowContainer1");
const arrowContainer2 = document.getElementById("arrowContainer2");

const sideChangeRight = () => {
  document.getElementById("col-1").style.transform = "translate3d(100%, 0, 0)";
  document.getElementById("col-2").style.transform = "translate3d(0%, 0, 0)";
  document.getElementById("col-1").style.zIndex = "-1";
  document.getElementById("col-2").style.zIndex = "1";
  document.getElementById("col-2").style.background = "rgb(250, 75, 75)";
  document.getElementById("arrowContainer2").classList.add("arrowContainer");
  document.getElementById("arrowLeft").classList.add("arrowLeft");
  document.getElementById("active-col-2").style.display = "none";
  document.getElementById("hide").classList.remove("hidden");
};

const sideChangeLeft = () => {
  document.getElementById("col-1").style.transform = "translate3d(0%, 0, 0)";

  document.getElementById("col-1").style.zIndex = "1";
  document.getElementById("col-2").style.zIndex = "-1";
  document.getElementById("col-2").style.background = "#fff";
  document.getElementById("arrowContainer2").classList.remove("arrowContainer");
  document.getElementById("arrowLeft").classList.remove("arrowLeft");
  document.getElementById("active-col-2").style.display = "block";
  document.getElementById("hide").classList.add("hidden");
};

arrowContainer.addEventListener("click", sideChangeRight, true);
arrowContainer2.addEventListener("click", sideChangeLeft, true);
