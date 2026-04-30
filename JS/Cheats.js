// Button functions
window.shinyMaster = shinyMaster;
window.restoreData = restoreData;
window.resetProgress = resetProgress;


// Get all Pokémon images
function getAllPokemon() {
    return document.querySelectorAll('#mark img:not([src="Images/Pokémon/0.png"])');
}


// Save previous data
function savePreviousData() {
    const previousData = {};
    const elems = getAllPokemon();

    elems.forEach(elem => {
        const key = "shiny " + elem.alt;

        if (localStorage.getItem(key)) {
            previousData[key] = true;
        }
    });

    localStorage.setItem("previousData", JSON.stringify(previousData));
}


// Restore previous data
function restoreData() {
    const previousData = JSON.parse(localStorage.getItem("previousData"));
    if (!previousData) {
        console.log("No previous data to restore.");
        return;
    }

    const elems = getAllPokemon();

    elems.forEach(elem => {
        const key = "shiny " + elem.alt;

        if (previousData[key]) {
            mark(elem, elem.parentElement.classList[1], "own", false);
        } else {
            mark(elem, elem.parentElement.classList[1], "notown", false);
        }
    });

    countProgress();
}


// Shiny Master
function shinyMaster() {
    if (!confirm("This will complete your Pokédex. You'll still be able to restore your previous data or reset all shiny progress. Continue?")) return;

    savePreviousData(); // Save current progress before overwriting

    const elems = getAllPokemon();

    elems.forEach(elem => {
        mark(elem, elem.parentElement.classList[1], "own", false);
    });

    countProgress();
}


// Reset Progress
function resetProgress() {
    if (!confirm("This will reset all of your shiny collection progress. You will not be able to restore any previous data. Continue?")) return;

    const elems = getAllPokemon();

    elems.forEach(elem => {
        mark(elem, elem.parentElement.classList[1], "notown", false);
    });

    // Clear previous data
    localStorage.removeItem("previousData");

    countProgress();
}
