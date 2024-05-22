document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  let index = 0;

  function scrollToNextSection() {
    // Scroll to the next section
    index = (index + 1) % sections.length;
    sections[index].scrollIntoView({ behavior: "smooth" });
  }

  //kør denne funktion efter 2000 milisekunder
  setTimeout(scrollToNextSection, 2000);
});
