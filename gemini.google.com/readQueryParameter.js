function waitForElement(selector, callback, intervalTime = 200) {
	const interval = setInterval(() => {
		const element = document.querySelector(selector);
		if (element) {
			clearInterval(interval);
			callback(element);
		}
	}, intervalTime);
}

async function putQueryInTextArea() {
	const query = new URL(document.location.toString()).searchParams.get('q');
	if (query) {
		const richTextarea = await new Promise((resolve) =>
			waitForElement('rich-textarea', resolve)
		);
		richTextarea.value = query;
		
		const sendButton = await new Promise((resolve) => 
			waitForElement('[data-test-id="send-button-container"] button', resolve)
		)
		sendButton.click()
	}
}

putQueryInTextArea();

