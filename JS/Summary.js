document.querySelectorAll('div.pkmn').forEach(pokemon => {
    const tooltip = pokemon.querySelector('span.summary');
    if (!tooltip) return;

    pokemon.addEventListener('mouseenter', () => {
        const rect = pokemon.getBoundingClientRect();
        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;
        const viewportWidth = window.innerWidth;
        const padding = 10;

        let left = rect.left + rect.width / 2;
        let top = rect.top - tooltipHeight;

        if (left + tooltipWidth / 2 > viewportWidth - padding)
            left = viewportWidth - tooltipWidth / 2 - padding;

        if (left - tooltipWidth / 2 < padding)
            left = tooltipWidth / 2 + padding;

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
    });

    pokemon.addEventListener('mouseleave', () => {
        tooltip.style.left = '';
        tooltip.style.top = '';
    });
});
