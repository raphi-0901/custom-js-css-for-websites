function updateFinishedECTS() {
	if (!window.location.href.startsWith('https://tiss.tuwien.ac.at/education/favorites.xhtml')
	) {
		return;
	}

	const tables = [...document.querySelectorAll('tbody')];

	function getFinishedECTS(table) {
		const rows = [...table.querySelectorAll('tr')];
		return rows.reduce((acc, current) => {
			const ects = Number(current.querySelector('td:nth-child(4)').innerText);
			const isFinished = !!current
				.querySelector('td:nth-child(8)')
				.innerHTML.trim();

			if (isFinished) {
				return acc + ects;
			}

			return acc;
		}, 0);
	}

	const finishedPerTable = tables.map(getFinishedECTS);

	finishedPerTable.forEach((ects, i) => {
		const finishedECTSTd = tables[i].parentNode.querySelector(
			'tfoot tr td:nth-child(8)'
		);
		finishedECTSTd.innerText = ects.toFixed(1);
	});

	const globalFinishedECTS = finishedPerTable.reduce((a, b) => a + b, 0);

	const heading = document.querySelector('#contentInner h1');
	if (heading) {
		heading.innerText += ` (Finished ECTS: ${globalFinishedECTS.toFixed(1)})`;
	}
}

updateFinishedECTS()
