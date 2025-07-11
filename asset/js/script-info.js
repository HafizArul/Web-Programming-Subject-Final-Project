// Containers
const mainContent = document.getElementsByClassName("main-content")[0];
const listInfo = document.getElementById("list-info");

// Desktop Containers
let beasiswaDesktopContainer, lombaDesktopContainer, lokerDesktopContainer;
const listDesktopInfoGroup = [(beasiswaDesktopContainer = document.getElementById("beasiswa")), (lombaDesktopContainer = document.getElementById("lomba")), (lokerDesktopContainer = document.getElementById("loker"))];

// Mobile Containers
let beasiswaMobileContainer, lombaMobileContainer, lokerMobileContainer;
const listMobileInfoGroup = [beasiswaMobileContainer, lombaMobileContainer, lokerMobileContainer];
for (let i = 0; i < listMobileInfoGroup.length; i++) {
    listMobileInfoGroup[i] = document.querySelectorAll(".offcanvas-body a.dropdown-item")[i];
}

// Contents
const beasiswaContent = document.getElementById("beasiswa-content-container");
const lombaContent = document.getElementById("lomba-content-container");
const lokerContent = document.getElementById("loker-content-container");

// Dropdown
const btnDropdown = document.querySelectorAll("ul.dropdown-menu.ms-3 li a");
function returnArr(x) {
    return x;
}

// User's Data
const user = {
    name: "Nama Lorem Ipsum",
    status: "Mahasiswa",
    photoURL: ["asset/img/sunrise.png","asset/img/forest.jpg","asset/img/living-room.jpg"]
};

// Content Elements
const contentInfo = (valIndex) => { 
    return `
    <div class="info card p-3">
        <!-- Profil User -->
        <div class="d-flex align-items-center mb-3">
            <img src="asset/img/user-fill.jpg" class="rounded-circle me-3" width="50" height="50" />
            <div>
                <h6 class="mb-0">${user.name}</h6>
                <small class="text-muted">${user.status}</small>
            </div>
        </div>
        <!-- Konten Post -->
        <img src="${user.photoURL[valIndex]}" class="img-fluid rounded mb-2" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque, vel doloribus quae sed, dolorem rem reprehenderit architecto vitae eos earum veritatis laborum quo tenetur quia maxime! Itaque ducimus blanditiis ipsum assumenda unde qui amet reprehenderit a beatae laborum illo, sequi quos eaque odit molestiae, voluptatum repudiandae incidunt delectus dolorem quo eveniet iste! Accusamus, assumenda? Eos porro maiores architecto impedit qui exercitationem id? Delectus numquam cupiditate ipsam corrupti aspernatur. Quidem.</p>
    </div>
    `;
}

// DESKTOP DISPLAY
// Function to Remove Elements aren't Selected on Desktop Mode
let totalBtnArrDesktop = [];
function removeElm(val) {
    for (let i = 0; i < btnDropdown.length; i++) {
        totalBtnArrDesktop.push(i);
    }
    for (let i = 0; i < totalBtnArrDesktop.length; i++) {
        if (val == i) {
            listDesktopInfoGroup[i].style.display = "flex";
        } else {
            listDesktopInfoGroup[i].style.display = "none";
        };
    }
}

// Display Desktop Content
for (let i = 0; i < btnDropdown.length; i++) {
    btnDropdown[i].addEventListener("click", function() {
        if (returnArr(i) == 0) {
            for (let i = 0; i < 3; i++) {
                beasiswaContent.insertAdjacentHTML("beforebegin", contentInfo(0));
            }
            removeElm(returnArr(i));
        } else if (returnArr(i) == 1) {
            for (let i = 0; i < 3; i++) {
                lombaContent.insertAdjacentHTML("beforebegin", contentInfo(1));
            }
            removeElm(returnArr(i));
        } else {
            for (let i = 0; i < 3; i++) {
                lokerContent.insertAdjacentHTML("beforebegin", contentInfo(2));
            }
            removeElm(returnArr(i));
        };
    });
}

// MOBILE DISPLAY
// Function to Remove Elements aren't Selected on Mobile Mode
let totalBtnArrMobile = [];
function removeMobileElm(val) {
    for (let i = 0; i < listMobileInfoGroup.length; i++) {
         totalBtnArrMobile.push(i);
    }
    for (let i = 0; i < totalBtnArrMobile.length; i++) {
        if (val == i) {
            listMobileInfoGroup[i].style.display = "flex";
        } else {
            listMobileInfoGroup[i].style.display = "none";
        }
    }
}

// Display Mobile Content
for (let i = 0; i < listMobileInfoGroup.length; i++) {
    listMobileInfoGroup[i].addEventListener("click", function() {
        if (returnArr(i) == 0) {
            for (let i = 0; i < 3; i++) {
                beasiswaContent.insertAdjacentHTML("beforebegin", contentInfo(0));
            }
            removeElm(returnArr(i));
        } else if (returnArr(i) == 1) {
            for (let i = 0; i < 3; i++) {
                lombaContent.insertAdjacentHTML("beforebegin", contentInfo(1));
            }
            removeElm(returnArr(i));
        } else {
            for (let i = 0; i < 3; i++) {
                lokerContent.insertAdjacentHTML("beforebegin", contentInfo(2));
            }
            removeElm(returnArr(i));
        }
    })
}