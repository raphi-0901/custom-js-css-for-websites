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

		window.open(
			`https://mattermost.anexia-it.com/anexia/channels/me-myself-and-i?type=${encodedType}`,
			'_blank',
			'width=800,height=600'
		);
	}
})();

