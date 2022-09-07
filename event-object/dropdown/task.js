const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItems = Array.from(document.querySelectorAll(".dropdown__item"));

function classListToggle() {
	dropdownList.classList.toggle("dropdown__list_active");
};

dropdownValue.addEventListener("click", classListToggle);

function changeValue(event) {
	event.preventDefault();
	let target = event.target;
	dropdownList.classList.remove("dropdown__list_active");
	dropdownValue.textContent = target.textContent;
	return false;
};

dropdownItems.forEach(elem => {
	elem.addEventListener("click", changeValue);
});