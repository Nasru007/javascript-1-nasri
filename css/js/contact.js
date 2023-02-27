const nameInput = document.querySelector("#nameInput")
const emailInput = document.querySelector("#emailInput")
const messageInput = document.querySelector("#messageInput")
const subjectInput = document.querySelector("#subjectInput")
const contactForm = document.querySelector("#contactForm")
const errorMessage = document.querySelectorAll(".error")

function errorCheck() {
  for (let i = 0; i < errorMessage.length; i++) {
    errorMessage[i].innerText = ""
  }
  nameInput.classList.remove("error")
  emailInput.classList.remove("error")
  messageInput.classList.remove("error")
  subjectInput.classList.remove("error")
}

function validEmail(email) {
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(email)
}

function validate() {
  errorCheck()
  let errorPass = false

  if (nameInput.value.length < 1) {
    errorMessage[0].innerText = "Enter a name"
    nameInput.classList.add("error")
    errorPass = true
  }

  if (!validEmail(emailInput.value)) {
    errorMessage[1].innerText = "Write a valid email"
    emailInput.classList.add("error")
    errorPass = true
  }

  if (subjectInput.value.length < 10) {
    errorMessage[2].innerText = "Enter a valid subject(must be atleast 10 characters)"
    subjectInput.classList.add("error")
    errorPass = true
  }

  if (messageInput.value.length < 24) {
    errorMessage[3].innerText = "Enter a valid message(atleast 25 characters)"
    messageInput.classList.add("error")
    errorPass = true
  }

  if (!errorPass) {
    alert("Your Message has been sent!")
    contactForm.reset()
  }
}
