const preview = document.getElementById("preview");
const previewImg = document.getElementById("preview-img");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".container img").forEach(img => {
    img.addEventListener("click", () => {
        preview.style.display = "flex";
        previewImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    preview.style.display = "none";
});

preview.addEventListener("click", (e) => {
    if (e.target === preview) {
        preview.style.display = "none"; // close when clicking outside
    }
});
