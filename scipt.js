function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function downloadResume() {
  const link = document.createElement("a");
  link.href = "Abhishek Musmiri ATS Resume.pdf";
  link.download = "Abhishek_Musmiri_Resume.pdf";
  link.click();
}

function emailMe() {
  window.location.href = "mailto:abhishekmusmiri07@gmail.com";
}
