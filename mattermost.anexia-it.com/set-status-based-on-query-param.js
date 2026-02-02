function waitForElement(selector, callback, intervalTime = 200) {
	const interval = setInterval(() => {
		const element = document.querySelector(selector);
		if (element) {
			clearInterval(interval);
			callback(element);
		}
	}, intervalTime);
}

async function clickButtonByTypeWhenReady() {
	const params = new URLSearchParams(window.location.search);
	const type = params.get('type');

	if (!type) {
		console.warn('No "type" query parameter found.');
		return;
	}

	const button = await new Promise((resolve) =>
		waitForElement('#CustomizeYourExperienceTour button:has(img)', resolve)
	);
	button.click();

	const customStatusButton = await new Promise((resolve) =>
		waitForElement('#status-menu-custom-status > button', resolve)
	);
	customStatusButton.click();

	const recentStatusButton = await new Promise((resolve) =>
		waitForElement(
			`.statusSuggestion__row.cursor--pointer:has([aria-label="${type}"]`,
			resolve
		)
	);

	recentStatusButton.click();

	const setStatusButton = await new Promise((resolve) =>
		waitForElement(`.modal-footer button:last-child`, resolve)
	);
	setStatusButton.click();

	window.opener?.postMessage({ status: 'finished' }, '*');
}

clickButtonByTypeWhenReady();

