let body = document.querySelector('body');
let btn = document.querySelector('#btn');


function toggleTheme() {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

btn.addEventListener('click', toggleTheme);

window.addEventListener('storage', (e) => {
    console.log('STORAGE');
    if (e.key === 'theme') {
        const newTheme = e.newValue;
        const isCurrentlyDark = body.classList.contains('dark');

        if ((newTheme == 'dark' && !isCurrentlyDark || newTheme === 'light' && isCurrentlyDark)) {
            btn.dispatchEvent(new Event('click'));
        }
    }
});