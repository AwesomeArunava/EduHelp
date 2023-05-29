const toggleButton = document.getElementById('toggle-button');
const sideNav = document.getElementById('side-nav');

toggleButton.addEventListener('click', () => {
	sideNav.classList.toggle('show');
});
