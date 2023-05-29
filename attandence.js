// For Card show on click

const showCardButton = document.getElementById('show-card-button');
const profileCard = document.getElementById('profile-card');

let visible = false;

showCardButton.addEventListener("click", () => {
  visible = !visible;
  if (visible) {
    profileCard.style.display = "block";
  } else {
    profileCard.style.display = "none";
  }
});