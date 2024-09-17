const resources = document.querySelectorAll('img, link[rel="stylesheet"], script');
const wave = document.querySelector(".wave");

// Tracks how many resources have been already loaded
let loadedResources = 0;

resources.forEach(resource => {
  resource.addEventListener("load", () => {
    loadedResources++;

    const progress = (loadedResources / resources.length) * 100;

    wave.style.height = `${progress}%`;
  });
});

// Sets the progress and wave to 100/full height if the page has fully loaded
window.addEventListener("load", () => {
  const progress = 100;

  wave.style.height = `${progress}%`;
});

// Listens for when the pages CSS animations have finished (Ensures that the wave reaches the full height before the loading screen disappears)
wave.addEventListener("transitionend", () => {
    wave.style.display = "none";
    document.querySelector(".page-content").style.display = "block";
    document.querySelector(".loader").style.display = "none";
});