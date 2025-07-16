// FORM SCRIPTS
// Button Elements
const btnEditProfile = document.getElementById("editProfile");
const btnResetForm = document.getElementById("resetForm");
const btnSave = document.getElementById("saveProfile");

// User Detail
const userDetails = document.querySelectorAll("#user-detail-biodata.col p");

// Get User Data From localStorage Object
const user = JSON.parse(localStorage.loggedInUser);

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
    for (let i = 0; i < inputUserData.length; i++) {
        inputUserData[i].addEventListener("input", function () {
            btnSave.classList.add("btn-success");
            btnSave.classList.remove("btn-secondary");
            btnSave.removeAttribute("disabled");
        });
    }
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

// Save Form Changes
let newUserName, newUserStatus;
for (let i = 0; i < inputUserData.length; i++) {
    inputUserData[i].addEventListener("input", function () {
        newUserName = inputUserData[0].value;
        newUserStatus = inputUserData[1].value;
    });
}

btnSave.addEventListener("click", function () {
    // Save Username
    if (newUserName) {
        user.name = newUserName;
    }
    // Save User Status
    if (newUserStatus) {
        user.status = newUserStatus;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    location.reload();
})

// USER AUTHENTICATION
const desktopGreeting = document.getElementById("desktopGreeting");
const mobileGreeting = document.getElementById("mobileGreeting");

if (user) {
    const firstName = user.name.split(" ")[0];
    desktopGreeting.innerHTML = `Halo, ${firstName}`;
    mobileGreeting.innerHTML = `Halo, ${firstName}`;

    // Mobile Login or Logout Button
    document.getElementById("mobileAuthBtn").innerHTML = "Logout";
    document.getElementById("mobileAuthBtn").addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("loggedInUser");
        location.reload();
    })

    // Desktop Login or Logout Button
    document.getElementById("desktopAuthBtn").innerHTML = "Logout";
    document.getElementById("desktopAuthBtn").addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("loggedInUser");
        location.reload();
    })
}