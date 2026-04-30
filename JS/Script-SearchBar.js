// By Cycloneblaze.

/* Add a tabindex attribute to all images. As well as allowing them to be
   focused upon (which <img>s normally cannot), which allows the below
   function to work, it also allows you to tab through the images,
   enabling keyboard navigation which is good for accessibility. It would
   be very tedious to add an incrementing "tabindex" attribute on every
   image by hand, though, and impossible to update it when you added a
   new Pokémon in the middle! So let's add them with javascript. */ 
function addTabIndex() {
  const targets = Array.from(document.querySelectorAll('main img:not([src="Images/Pokémon/0.png"])'));
  // Get the list of all non-placeholder Pokémon, convert it to an array.
  for (let i = 0; i < targets.length; i++) {
    targets[i].setAttribute("tabindex", i);
    /* Since each image gets tabindex=its position in the list of targets,
       the user can tab through them in order all the way down the page.*/
  }
}

// Add the search bar box with JS. That way if it appears, you can use it.
function addSearch() {
  // Create a new div element:
  const searchHead = document.createElement("div");
  // Style it with a class:
  searchHead.classList.add("head");
  // And give it some content:
  const searchHeadText = document.createTextNode("Jump to a Pokémon");
  // Add the text node to the newly created div:
  searchHead.appendChild(searchHeadText);
  // Add the newly created element and its content into the DOM:
  const theNav = document.getElementsByTagName("nav")[0]; // assume only one nav, else we have to put an ID on the nav
  theNav.append(searchHead);
  // Repeat!
  const searchBox = document.createElement("div");
  searchBox.classList.add("search");
  const searchBoxBox = document.createElement("input");
  searchBoxBox.setAttribute("id", "searchText");
  searchBoxBox.setAttribute("type", "search");
  searchBoxBox.setAttribute("name", "searchv");
  searchBoxBox.setAttribute("placeholder", "Totodile");
  const searchBoxText = document.createElement("p");
  searchBoxText.classList.add("searchInfo");
  let searchBoxTextText = document.createTextNode("Search forms with [], e.g. 'altaria [c'.");
  searchBoxText.appendChild(searchBoxTextText);
  const searchBoxButton = document.createElement("button");
  searchBoxButton.setAttribute("name", "searchb");
  searchBoxButton.setAttribute("id", "searchButton");
  const searchBoxButtonText = document.createTextNode("Find it!");
  searchBoxButton.appendChild(searchBoxButtonText);
  searchBox.append(searchBoxBox);
  searchBox.append(searchBoxButton);
  searchBox.append(searchBoxText);
  theNav.append(searchBox);
  // Add an anonymous function to the button's onclick attribute:
  searchBoxButton.onclick = () => {
    let uSearchValue = document.getElementById("searchText").value
    let searchValue = uSearchValue.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
    // Get the search string we want to use, and normalise it.
    const searchTargets = Array.from(document.querySelectorAll('main img:not([src="Images/Pokémon/0.png"])'));
    // Get the list of all non-placeholder Pokémon, convert it to an array.
    let searchTarget = searchTargets.find((img) => img.alt.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().startsWith(searchValue));
    // The first img in searchTargets where img.alt.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase() === searchValue.
    if ( searchTarget != null ) { 
      searchTarget.focus({ preventScroll: true });
      /* Focus the searchTarget to highlight it as the search result.
      Don't scroll to it, because we want to do a nicer scroll ourselves with: */
      searchTarget.scrollIntoView({ behavior: "smooth", block: "center" });
      searchBoxText.innerText = "Click or press Enter to mark the Pokémon as owned!"
      searchBoxText.style = "display: initial; color: #fff;";
    } else {
      searchBoxText.innerText = "Couldn't find a name starting with '" + uSearchValue + "'!";
      searchBoxText.style = "display: initial; color: #ff7c7c;";
    }
  }
  // Add an event listener for the Enter key to the search box:
  searchBoxBox.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === "Enter") {
      // if we get it, click the Search button
        searchBoxButton.click();
    }
  });
}