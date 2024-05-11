const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const ans = question.querySelector(".answer");
  question.addEventListener("click", () => {
    if (ans.style.display === "none") {
      ans.style.display = "block";
    } else {
      ans.style.display = "none";
    }
  });
});
