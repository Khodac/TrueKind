// Get the modal
const modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const $fileSelector = document.querySelector("#fileSelector"),
$previewImage = document.querySelector("#previewImage");
$fileSelector.addEventListener("change", () => {
const files = $fileSelector.files;
if (!files || !files.length) {
    $previewImage.src = "";
    return;
}
const firtsfile = files[0];
const objectURL = URL.createObjectURL(firtsfile);
$previewImage.src = objectURL;
});