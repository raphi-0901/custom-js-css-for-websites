function highlightPMsModule() {
	const config = {
		developers: ['TR', 'LT', 'JK', 'LK', 'RAW', 'DS', 'BEK'],
		marketing: [
			'BK',
			'CL',
			'SHO',
			'TW',
			'BAL',
			'KK',
			'CAS',
			'DAR',
			'BD',
			'AFE',
			'SBE',
			'JGA',
		],
	};

	function highlightPMs() {
		document
			.querySelectorAll('.content .table-label-anx-private')
			.forEach((val) => {
				const text = val.textContent.trim();

				if (config.developers.includes(text)) {
					val.style.color = '#640000';
					val.style.borderLeft = '8px solid #FF0000';
				}

				if (config.marketing.includes(text)) {
					val.style.color = '#644000';
					val.style.borderLeft = '8px solid #FFA500';
				}
			});
	}

	try {
		highlightPMs();
	} catch (e) {
		console.error('Error in highlightPMs:', e);
	}
}

highlightPMsModule();

