let btn = document.querySelector('#btn');

document.addEventListener('keydown', (e) => {
    let keys = [];

    if (e.shiftKey) keys.push('shift');
    if (e.ctrlKey) keys.push('ctrl');
    if (e.altKey) keys.push('alt');
    if (e.metaKey) keys.push('meta');

    let msg = document.querySelector('#msg');
    msg.textContent = `Keys: ${keys.join('+')}`;
});