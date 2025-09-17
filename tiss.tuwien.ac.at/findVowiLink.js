async function addVowiLink() {
	const courseTitle =
		document.querySelector('#contentInner > h1 > span.light')?.nextSibling?.textContent;

	if (!courseTitle) {
		return;
	}

	const VOWI_LINK = `https://vowi.fsinf.at/index.php?search=${encodeURIComponent(courseTitle)}&title=Spezial%3ASuche&profile=advanced&fulltext=1&ns3000=1`;

	const response = await fetch('https://proxy.raphi-tab.workers.dev', {
		method: 'POST',
		body: JSON.stringify({
			url: VOWI_LINK,
		}),
	});

	const text = await response.text();

	const container = document.createElement('div');
	container.innerHTML = text;

	const link = container.querySelector('.mw-search-results a');

	if (!link) {
		return;
	}

	const finalLink = `https://vowi.fsinf.at${link.href.substring(location.origin.length)}`;

	// Create <a> element
	const aTag = document.createElement('a');
	aTag.href = finalLink;
	aTag.target = '_blank'; // optional, opens in new tab

	// Create <img> element
	const img = document.createElement('img');
	img.src = 'https://vowi.fsinf.at/logo.png?284b1';
	img.alt = 'VOWI Logo';
	img.style.width = '20px'; // optional, adjust size
	img.style.height = 'auto';
	img.style.filter = 'invert(1)';

	// Append image to link
	aTag.appendChild(img);

	// Append the link to the page, for example after the <h1>
	const h1 = document.querySelector('#contentInner > h1 > small');
	if (h1) {
		h1.insertAdjacentElement('afterend', aTag);
	}
}

addVowiLink();

