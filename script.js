const firstAnswer = document.querySelector(".answer");

function display() {
  console.log("hyyyyy");
  if (firstAnswer.style.display == "none") {
    firstAnswer.style.display = "block";
  } else {
    firstAnswer.style.display = "none";
  }
}
