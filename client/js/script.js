function copied() {
  const output = document.getElementById("toast");
  output.style.visibility = "visible";
  setTimeout(function () {
    output.style.visibility = "hidden"; // Hide the "toast" element after 2 seconds
  }, 2000);
}
