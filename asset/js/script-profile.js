// Button Elements
const btnEditProfile = document.getElementById("editProfile");
const btnResetForm = document.getElementById("resetForm");
const btnSave = document.getElementById("saveProfile");

// User Detail
const userDetails = document.querySelectorAll("#user-detail-biodata.col p");

// Input Elements
const inputUserData = document.getElementsByClassName("edit-user-data-form");

// Get data from user's recent data
inputUserData[0].setAttribute("placeholder", JSON.parse(localStorage.loggedInUser).name);
inputUserData[1].setAttribute("placeholder", JSON.parse(localStorage.loggedInUser).status);

userDetails[0].innerHTML = JSON.parse(localStorage.loggedInUser).name;
userDetails[1].innerHTML = JSON.parse(localStorage.loggedInUser).status;

// Edit Form Action
btnEditProfile.addEventListener("click", function () {
    for (let i = 0; i < inputUserData.length; i++) {
        inputUserData[i].removeAttribute("disabled");
        inputUserData[i].setAttribute("placeholder", "Isi data sesuai profil Anda");
    }
    this.classList.toggle("btn-primary");
    this.classList.toggle("btn-secondary");
    this.setAttribute("disabled", "");
    btnResetForm.removeAttribute("disabled");
    btnResetForm.classList.toggle("btn-secondary");
    btnResetForm.classList.toggle("btn-danger");
    btnSave.classList.toggle("btn-secondary");
    btnSave.classList.toggle("btn-success");
    btnSave.removeAttribute("disabled");
})

// Reset Form
btnResetForm.addEventListener("click", function () {
    const userConfirm = confirm("Apakah Anda yakin untuk menghapus form edit pengguna?");
    if (userConfirm) {
        for (let i = 0; i < inputUserData.length; i++) {
            inputUserData[i].value = "";
        }
    }
})