document.addEventListener('DOMContentLoaded', () => {
    const sunButton = sun;
    const moonButton = moon;

    const prefersDarkMode = localStorage.theme === 'moon' ||
        (!localStorage.theme && matchMedia('(prefers-color-scheme: dark)').matches);

    document.body.classList.toggle('moon', prefersDarkMode);

    const updateTheme = isMoonMode => {
        document.body.classList.toggle('moon', isMoonMode);
        localStorage.theme = isMoonMode ? 'moon' : 'sun';
        sunButton.classList.toggle('active', !isMoonMode);
        moonButton.classList.toggle('active', isMoonMode);
    };

    sunButton.onclick = () => updateTheme(false);
    moonButton.onclick = () => updateTheme(true);

    updateTheme(prefersDarkMode);
});
