function hideSelf() {
	const hiddenButton = document.querySelector('.hide-self-button');
	hiddenButton.onclick = () => {
		hiddenButton.hidden = true;
	}
}