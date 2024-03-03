console.clear();

setTimeout(function () {
    document.getElementById("splashScreen").style.display = "none";
    document.getElementById("formstructor").style.display = "block";
  }, 4000); // 4000 milliseconds

const signupBtn = document.getElementById("enter");
const gen = document.getElementById("generate");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("mn");
const emailInput = document.getElementById("email");
const qrContainer = document.getElementById("qr-container");

signupBtn.addEventListener("click", (e) => {
  let parent = e.target.parentNode;
  Array.from(e.target.parentNode.classList).find((element) => {
    if (element !== "slide-up") {
      parent.classList.add("slide-up");
    } else {
      loginBtn.parentNode.parentNode.classList.add("slide-up");
      parent.classList.remove("slide-up");
    }
  });
});

gen.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  if(name === "" || phone === "" || email === "") {
      alert("Please enter name , phone number and email.");
      return;
  }
  nameInput.style.display = "none";
  phoneInput.style.display = "none";
  emailInput.style.display = "none";
  qrContainer.style.display = "block";
  const qrData = `BEGIN:VCARD\nVERSION:3.0\nN:${name};;;;\nEMAIL:${email}\nTEL:+91${phone}\nEND:VCARD`;
  generateQRCode(qrData);
});

function generateQRCode(data) {
  qrContainer.innerHTML = ""; // Clear previous QR code
  
  // Use Google Charts API to generate QR code image
  const qrImageUrl = `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${encodeURIComponent(data)}`;
  const qrImg = document.createElement("img");
  qrImg.src = qrImageUrl;
  qrContainer.appendChild(qrImg);
}