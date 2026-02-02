(function () {
	document.addEventListener('click', (event) => {
		const joinButton = event.target.closest('#prejoin-join-button');
		if (joinButton) {
			console.log('Join button clicked:', joinButton);

			setCustomStatus(':teams:');

			return;
		}

		const leaveButton = event.target.closest('#hangup-button');
		if (leaveButton) {
			console.log('Leave button clicked:', leaveButton);

			setCustomStatus(':this_is_fine_fire:');

			return;
		}
	});

	function setStatusToMeeting() {}

	async function setCustomStatus(type) {
		const encodedType = encodeURIComponent(type);

		openWindow = window.open(
			`https://mattermost.anexia-it.com/anexia/channels/me-myself-and-i?type=${encodedType}`,
			'_blank',
			'width=1,height=1'
		);

		if (openWindow) {
			openWindow.blur();
			window.focus();
		}
	}

	let openWindow = null;
	window.addEventListener('message', (event) => {
		if (event.data.status === 'finished') {
			if (openWindow) {
				openWindow.close();
			}
		}
	});
})();

