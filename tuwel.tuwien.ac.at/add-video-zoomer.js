setInterval(() => {
    const existingButton = document.getElementById('video-zoomer');
    if (existingButton) {
        return;
    }
    const videoElement = document.querySelector('video');
    if (!videoElement) {
        return;
    }

    const togglerButton = document.createElement('button');
    togglerButton.id = 'video-zoomer';
    togglerButton.innerText = 'Toggle Video Zoom';

    let number = 0;
    const modes = ['both', 'left', 'right'];

    const toggleZoom = () => {
        number = (number + 1) % modes.length;
        videoElement.setAttribute('data-mode', modes[number]);
    };

    togglerButton.addEventListener('click', toggleZoom);

    const controls = document.querySelector('.op-controls');
    if (controls) {
        controls.appendChild(togglerButton);
    }
}, 1000);
