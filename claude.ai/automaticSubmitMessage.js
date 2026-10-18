
function waitForElement(selector, callback, intervalTime = 200) {
	const interval = setInterval(() => {
		const element = document.querySelector(selector);
		if (element) {
			clearInterval(interval);
			callback(element);
		}
	}, intervalTime);
}

async function submitQuery() {
	const query = new URL(document.location.toString()).searchParams.get('q');

	if (query) {
		const sendButton = await new Promise((resolve) =>
			waitForElement('[data-testid="chat-input-send"]', resolve)
		);

		sendButton.click();
	}
}

submitQuery();

