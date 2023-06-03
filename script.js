let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
function openModal(imageUrl) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = imageUrl;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

