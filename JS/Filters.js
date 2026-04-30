// Get references
const filterToggleButton = document.querySelector('.filter-button');
const filterPanelElement = document.getElementById('filter-settings');
const filterCloseButton = document.querySelector('.filter-close');

// Open or close the filter panel with main button
filterToggleButton.addEventListener('click', (event) => {
    event.stopPropagation();
    filterPanelElement.classList.toggle('open');
});

// Close filter pannel with other methods
filterCloseButton.addEventListener('click', (event) => {
    event.stopPropagation();
    filterPanelElement.classList.remove('open');
});

document.addEventListener('click', (event) => {
    if (!filterPanelElement.contains(event.target) && !filterToggleButton.contains(event.target)) {
        filterPanelElement.classList.remove('open');
    }
});

// Apply all selected filters to Pokémon
function applyFilters() {
    const getCheckedValues = selector =>
        Array.from(document.querySelectorAll(selector + ':checked')).map(checkbox => checkbox.value);

    const selectedGenerations = getCheckedValues('.generation');
    const selectedTypes = getCheckedValues('.type');
    const selectedRarities = getCheckedValues('.rarity');
    const selectedForms = getCheckedValues('.form');
    const selectedGenders = getCheckedValues('.gender');
    const selectedColors = getCheckedValues('.color');
    const selectedSteps = getCheckedValues('.steps');
    const selectedGroups = getCheckedValues('.groups');
    const selectedOwnership = getCheckedValues('.ownership');

    document.querySelectorAll('div.pkmn').forEach(pokemonElement => {
        const generation = pokemonElement.dataset.generation;
        const typeList = pokemonElement.dataset.type?.split(' ') || [];
        const rarity = pokemonElement.dataset.rarity;
        const formList = pokemonElement.dataset.form?.split(' ') || [];
        const genderList = pokemonElement.dataset.gender?.split(' ') || [];
        const colorList = pokemonElement.dataset.color?.split(' ') || [];
        const steps = pokemonElement.dataset.steps;
        const groupList = pokemonElement.dataset.groups?.split(' ') || [];

        const imageElement = pokemonElement.querySelector('img');
        const ownedStatus = imageElement && imageElement.classList.contains('own') ? 'true' : 'false';

        const matchesGeneration = !selectedGenerations.length || selectedGenerations.includes(generation);
        const matchesType = !selectedTypes.length || selectedTypes.every(type => typeList.includes(type));
        const matchesRarity = !selectedRarities.length || selectedRarities.includes(rarity);
        const matchesForm = !selectedForms.length || selectedForms.some(form => formList.includes(form));
        const matchesGender = !selectedGenders.length || selectedGenders.some(g => genderList.includes(g));
        const matchesColor = !selectedColors.length || selectedColors.some(c => colorList.includes(c));
        const matchesSteps = !selectedSteps.length || selectedSteps.includes(steps);
        const matchesGroups = !selectedGroups.length || selectedGroups.every(group => groupList.includes(group));
        const matchesOwnership = !selectedOwnership.length || selectedOwnership.includes(ownedStatus);

        pokemonElement.style.display = (
            matchesGeneration &&
            matchesType &&
            matchesRarity &&
            matchesForm &&
            matchesGender &&
            matchesColor &&
            matchesSteps &&
            matchesGroups &&
            matchesOwnership
        ) ? '' : 'none';
    });

    // Update each PC Box visibility
    document.querySelectorAll('div.pc-box').forEach(cardElement => {
        const pokemonElements = cardElement.querySelectorAll('div.pkmn');
        const hasVisiblePokemon = Array.from(pokemonElements).some(p => p.style.display !== 'none');
        cardElement.style.display = hasVisiblePokemon ? '' : 'none';
    });

    // Hide PC Boxes with no Pokémon
    document.querySelectorAll('div.pc-box').forEach(boxElement => {
        const pokemonElements = boxElement.querySelectorAll('div.pkmn');
        const hasVisiblePokemon = Array.from(pokemonElements).some(p => p.style.display !== 'none');
        boxElement.style.display = hasVisiblePokemon ? '' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox =>
        checkbox.addEventListener('change', applyFilters)
    );

    document.querySelectorAll('div.pkmn img').forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('own');
            applyFilters();
        });
    });
});

window.applyFilters = applyFilters;
