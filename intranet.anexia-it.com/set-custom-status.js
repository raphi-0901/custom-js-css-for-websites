{
	const TYPE_ICON_MAP = {
		'Gehen bestätigen': ':pepewave:',
		Pause: ':double_vertical_bar:',
		'Kommen bestätigen': ':this_is_fine_fire:',
	};


	const button = document.querySelector('#my-presence-info-submit');
	button.addEventListener('click', () => {
		const type = document.querySelector('#myModalLabel')?.innerText || '';
		setCustomStatus(TYPE_ICON_MAP[type]);
	});

	async function setCustomStatus(type) {
		// Encode type for URL safety
		const encodedType = encodeURIComponent(type);

		// Open new window with type as query param
		openWindow = window.open(
			`https://mattermost.anexia-it.com/anexia/channels/me-myself-and-i?type=${encodedType}`,
			'_blank',
			'width=800,height=600'
		);

		setTimeout(() => {
			openWindow.close();
		}, 10000);
	}

	let openWindow = null;
	window.addEventListener('message', (event) => {
		console.log('Antwort:', event.data);
		if (event.data.status === 'finished') {
			if (openWindow) {
				openWindow.close();
			}
		}
	});
}

