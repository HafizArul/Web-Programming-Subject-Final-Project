// Simulasi Login/Logout
let isLoggedIn = false;

function updateAuthUI() {
    document.getElementById("userStatus").innerText = isLoggedIn ? "Halo, Iqbal" : "Belum login";
    document.getElementById("authBtn").innerText = isLoggedIn ? "Logout" : "Login";
    document.getElementById("mobileAuthBtn").innerText = isLoggedIn ? "Logout" : "Login";
}

document.getElementById("authBtn").onclick = function (e) {
    e.preventDefault();
    isLoggedIn = !isLoggedIn;
    updateAuthUI();
};

document.getElementById("mobileAuthBtn").onclick = function (e) {
    e.preventDefault();
    isLoggedIn = !isLoggedIn;
    updateAuthUI();
};

updateAuthUI();

// Posting logika
document.getElementById("postForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const text = document.getElementById("postText").value.trim();
    const imageInput = document.getElementById("postImage");
    const imageFile = imageInput.files[0];

    if (!text && !imageFile) {
        alert("Isi teks atau unggah gambar dulu.");
        return;
    }

    const postList = document.getElementById("postList");
    const postCard = document.createElement("div");
    postCard.className = "card mb-3";
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const userInfo = `
      <div class="d-flex align-items-center mb-2">
        <img src="asset/img/user.svg" class="rounded-circle me-2" alt="Profile">
        <div>
          <strong>${isLoggedIn ? "Iqbal Asidiq" : "Guest"}</strong><br>
          <small class="text-muted">${isLoggedIn ? "Mahasiswa" : "Pengunjung"}</small>
        </div>
      </div>
    `;

    const textEl = text ? `<p>${text}</p>` : "";

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = `<img src="${e.target.result}" class="img-fluid rounded post-image" alt="Post Image" />`;
            cardBody.innerHTML = userInfo + img + textEl;
            postCard.appendChild(cardBody);
            postList.prepend(postCard);
        };
        reader.readAsDataURL(imageFile);
    } else {
        cardBody.innerHTML = userInfo + textEl;
        postCard.appendChild(cardBody);
        postList.prepend(postCard);
    }

    document.getElementById("postForm").reset();
});
