const btn = document.getElementById("submit-btn")

function submitData() {
    console.log("berhasil di klik")
let name = document.getElementById("name").value
let email = document.getElementById("email").value
let phone = document.getElementById("phone").value
let subject = document.getElementById("subject").value
let message = document.getElementById("message").value
let form = document.getElementById("form-contact")

console.log(name, email, phone, subject, message)
form.reset();
let emailReceiver = "sayapusing@gmail.com"

let a = document.createElement('a')
a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name ${name}, ${message}, this is my email ${email} and phone number ${phone}`
    a.click()
}
