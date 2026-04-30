// By Cycloneblaze.

function countProgress(generation) {
    //TODO: can I change this from a switch to a function that takes the class as argument, and deduplicate? 
    console.log("generation was", generation)
    switch (generation) {
        case 'Gen1':
            let elemsGen1 = document.querySelectorAll('.Gen1 > img:not([src="Images/Pokémon/0.png"])');
            /* More advanced usage of querySelectorAll! Who needs getElementsByClassName? This selects all
            elements which have the class .Gen9, and also have at least one direct child element which has
            the attribute src=the placeholder image link. We need to do this because we need to only select
            the Gen9 Pokémon, that class being on the divs, but also not select the placeholders, which are
            imgs inside the divs.
            We could also use document.querySelectorAll('.Gen1:not(.placeholder)') where .placeholder is
            a class on every placeholder div, but we would have to add that manually. So long as the URL
            for the placeholder image is the same across all placeholders, it's easier to take advantage of
            that fact, and we can just change the URL here if needed. Admittedly it is a bit magic.*/
            let ownedGen1 = Array.from(elemsGen1).filter(value => Array.from(document.querySelectorAll('.Gen1 .own')).includes(value));
            /* Build an array containing those Pokémon which are not placeholders but which also appear in
            an array of Pokémon marked as owned. This counts owned Pokémon while excluding placeholders. */
            let progGen1 = document.getElementById('progressBars').getElementsByTagName('progress')[0];
            // The progress bars are all in order in a div, so just get the first (0th) one.
            progGen1.setAttribute("value", ownedGen1.length);
            progGen1.setAttribute("title", ownedGen1.length.toString().concat("/", elemsGen1.length.toString()));
            progGen1.setAttribute("max",   elemsGen1.length);
            /* Set the values for the progress bars according to the number of Pokémon to be clicked. This
            ensures the progress bars are correct. */
            break;
        case 'Gen2':
            let elemsGen2 = document.querySelectorAll('.Gen2 > img:not([src="Images/Pokémon/0.png"])');
            let ownedGen2 = Array.from(elemsGen2).filter(value => Array.from(document.querySelectorAll('.Gen2 .own')).includes(value));
            let progGen2 = document.getElementById('progressBars').getElementsByTagName('progress')[1];
            progGen2.setAttribute("value", ownedGen2.length);
            progGen2.setAttribute("title", ownedGen2.length.toString().concat("/", elemsGen2.length.toString()));
            progGen2.setAttribute("max",   elemsGen2.length);
            break;
        case 'Gen3':
            let elemsGen3 = document.querySelectorAll('.Gen3 > img:not([src="Images/Pokémon/0.png"])');
            let ownedGen3 = Array.from(elemsGen3).filter(value => Array.from(document.querySelectorAll('.Gen3 .own')).includes(value));
            let progGen3 = document.getElementById('progressBars').getElementsByTagName('progress')[2];
            progGen3.setAttribute("value", ownedGen3.length);
            progGen3.setAttribute("title", ownedGen3.length.toString().concat("/", elemsGen3.length.toString()));
            progGen3.setAttribute("max",   elemsGen3.length);
            break;
        case 'Gen4':
            let elemsGen4 = document.querySelectorAll('.Gen4 > img:not([src="Images/Pokémon/0.png"])');
            let ownedGen4 = Array.from(elemsGen4).filter(value => Array.from(document.querySelectorAll('.Gen4 .own')).includes(value));
            let progGen4 = document.getElementById('progressBars').getElementsByTagName('progress')[3];
            progGen4.setAttribute("value", ownedGen4.length);
            progGen4.setAttribute("title", ownedGen4.length.toString().concat("/", elemsGen4.length.toString()));
            progGen4.setAttribute("max",   elemsGen4.length);
            break;
        case 'Gen5':
            let elemsGen5 = document.querySelectorAll('.Gen5 > img:not([src="Images/Pokémon/0.png"])');
            let ownedGen5 = Array.from(elemsGen5).filter(value => Array.from(document.querySelectorAll('.Gen5 .own')).includes(value));
            let progGen5 = document.getElementById('progressBars').getElementsByTagName('progress')[4];
            progGen5.setAttribute("value", ownedGen5.length);
            progGen5.setAttribute("title", ownedGen5.length.toString().concat("/", elemsGen5.length.toString()));
            progGen5.setAttribute("max",   elemsGen5.length);
            break;
        case 'Gen6':
            let elemsGen6 = document.querySelectorAll('.Gen6 > img:not([src="Images/Pokémon/0.png"])');
            let ownedGen6 = Array.from(elemsGen6).filter(value => Array.from(document.querySelectorAll('.Gen6 .own')).includes(value));
            let progGen6 = document.getElementById('progressBars').getElementsByTagName('progress')[5];
            progGen6.setAttribute("value", ownedGen6.length);
            progGen6.setAttribute("title", ownedGen6.length.toString().concat("/", elemsGen6.length.toString()));
            progGen6.setAttribute("max",   elemsGen6.length);
            break;
        case 'Gen7':
            let elemsGen7 = document.querySelectorAll('.Gen7 > img:not([src="Images/Pokémon/0.png"])');
            let ownedGen7 = Array.from(elemsGen7).filter(value => Array.from(document.querySelectorAll('.Gen7 .own')).includes(value));
            let progGen7 = document.getElementById('progressBars').getElementsByTagName('progress')[6];
            progGen7.setAttribute("value", ownedGen7.length);
            progGen7.setAttribute("title", ownedGen7.length.toString().concat("/", elemsGen7.length.toString()));
            progGen7.setAttribute("max",   elemsGen7.length);
            break;
        case 'Gen8':
            let elemsGen8 = document.querySelectorAll('.Gen8 > img:not([src="Images/Pokémon/0.png"])');
            let ownedGen8 = Array.from(elemsGen8).filter(value => Array.from(document.querySelectorAll('.Gen8 .own')).includes(value));
            let progGen8 = document.getElementById('progressBars').getElementsByTagName('progress')[7];
            progGen8.setAttribute("value", ownedGen8.length);
            progGen8.setAttribute("title", ownedGen8.length.toString().concat("/", elemsGen8.length.toString()));
            progGen8.setAttribute("max",   elemsGen8.length);
            break;
        case 'Gen9':
            let elemsGen9 = document.querySelectorAll('.Gen9 > img:not([src="Images/Pokémon/0.png"])');
            let ownedGen9 = Array.from(elemsGen9).filter(value => Array.from(document.querySelectorAll('.Gen9 .own')).includes(value));
            let progGen9 = document.getElementById('progressBars').getElementsByTagName('progress')[8];
            progGen9.setAttribute("value", ownedGen9.length);
            progGen9.setAttribute("title", ownedGen9.length.toString().concat("/", elemsGen9.length.toString()));
            progGen9.setAttribute("max",   elemsGen9.length);
            break;
        case 'Novelty':
            let elemsNovelty = document.querySelectorAll('.Novelty > img:not([src="Images/Pokémon/0.png"])');
            let ownedNovelty = Array.from(elemsNovelty).filter(value => Array.from(document.querySelectorAll('.Novelty .own')).includes(value));
            let progNovelty = document.getElementById('progressBars').getElementsByTagName('progress')[9];
            progNovelty.setAttribute("value", ownedNovelty.length);
            progNovelty.setAttribute("title", ownedNovelty.length.toString().concat("/", elemsNovelty.length.toString()));
            progNovelty.setAttribute("max",   elemsNovelty.length);
            break;
        default:
            console.log("counting all generations by default");
            countProgress('Gen1');
            countProgress('Gen2');
            countProgress('Gen3');
            countProgress('Gen4');
            countProgress('Gen5');
            countProgress('Gen6');
            countProgress('Gen7');
            countProgress('Gen8');
            countProgress('Gen9');
            countProgress('Novelty');
    }
}

function mark(elem, generation, state = "own", count_now = true) {
    if (!['own', 'notown'].includes(state)) {
        // notice the ! to negate
        console.log("Invalid status passed, setting", elem.alt, "to owned");
        console.log("status passed was", state);
        elem.classList = "own";
    } else { elem.classList = state; }
    /* note that these assume that the Pokémon images only have EITHER
    the class "own" OR the class "notown", since they overwrite the
    whole class list with only one of those two.*/
    if (state === "own") {
        localStorage.setItem("shiny ".concat(elem.alt), "own");
    } else { // we've already ensured state is valid
        localStorage.removeItem("shiny ".concat(elem.alt));
    }
    if ( count_now ) { countProgress(generation); }
}

function markThis(event){
    clickState = localStorage.getItem("shiny ".concat(event.target.alt));
    gen = event.target.parentElement.classList[1];
    if (clickState !== null) {
        mark(event.target, gen, "notown", true);
        /* if there was any stored status, treat it as own. Then we want
        to set the _opposite_ status, i.e. notown. */
    } else {
        mark(event.target, gen, "own", true);
        /* if there was no stored status, the existing status is notown
        (as the default), so we set to own. */
    }
}

function markAll() {
    const elems = document.getElementById("mark").querySelectorAll('img:not([src="Images/Pokémon/0.png"])');
    /* an extra class on each img would be necessary if there were any img elements
    that were children of the single <main> element and not Pokémon, but there are not.
    Also, this means we don't attach event listeners to placeholders, so they do nothing
    when clicked upon. */

    for (let i = 0; i < elems.length; i++) {
        /* It could be nice to make this loop asynchronous - probably something like,
        use the loop to predefine all the mark functions (with stored element,
        generation and state) in an array, then give that array to Promise.all(). But
        performance does not seem to demand it at the minute. See:
        https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#combining_multiple_promises */
        elems[i].addEventListener('click', (ev) => markThis(ev));
        elems[i].addEventListener("keyup", function (ev) {
            if (ev.key === "Enter") {  //checks whether the pressed key is "Enter"
                markThis(ev);
            }
        });
        let prevState = localStorage.getItem("shiny ".concat(elems[i].alt));
        if (prevState !== null) {
            mark(elems[i], elems[i].parentElement.classList[1], "own", false);
            // if any state was stored, treat it as own, and mark accordingly.
        }
    }
    countProgress();
    // we don't let each mark above count progress, so we do it all now
}
