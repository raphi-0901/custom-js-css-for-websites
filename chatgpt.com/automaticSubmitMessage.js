const interval = setInterval(() => {
	const url = new URL(window.location.href);
	if (!url.searchParams.get('prompt')) {
		return;
	}

	const button = document.getElementById('composer-submit-button');

	if (button && !button.disabled) {
		console.log('Button ready, clicking');
		button.click();
		clearInterval(interval); // stop checking
	}
}, 100);

