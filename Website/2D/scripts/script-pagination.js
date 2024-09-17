// Adds the pagination functionality to the assets page once the DOMContent is loaded
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");
  const wrapper = document.querySelector(".assets-container-wrapper");
  const assets = document.querySelectorAll(".asset");


// Applies a sliding effect to the assets when the page is changed vie the pagination buttons
function applySlidingEffect() {
  const assetContainers = document.querySelectorAll(".asset");
  assetContainers.forEach((assetContainer, assetIndex) => {
    const page = Math.floor(assetIndex / 6);
    const translateX = (page - currentPage) * wrapper.clientWidth;
    assetContainer.style.transform = `translateX(${translateX}px)`;
  });
}

// Switches the page to the specified page
function switchToPage(event) {
  const _this = event.target;

  if (_this.classList.contains("active")) {
    return false;
  }

  const previousPage = currentPage;
  currentPage = Array.from(buttons).indexOf(_this);
  
  // Animates the assets out
  for (let i = previousPage * 6; i < (previousPage * 6) + 6; i++) {
    if (assets[i]) {
      let translateX;
      if(previousPage < currentPage) {
        translateX = -wrapper.clientWidth;
      } else {
        translateX = wrapper.clientWidth;
      }
      assets[i].style.transform = `translateX(${translateX}px)`;
      setTimeout(() => {
        assets[i].style.display = "none";
      }, 300);
    }
  }

  // Animates the assets in
  for (let i = currentPage * 6; i < (currentPage * 6) + 6; i++) {
    if (assets[i]) {
      let translateX;
      if(previousPage < currentPage) {
        translateX = wrapper.clientWidth;
      } else {
        translateX = -wrapper.clientWidth;
      }
      assets[i].style.transform = `translateX(${translateX}px)`;
      setTimeout(() => {
        assets[i].style.display = "";
        assets[i].offsetHeight;
        assets[i].style.transform = `translateX(0)`;
      }, 300);
    }
  }
  
  // Updates the active pagination button
  buttons.forEach((btn) => btn.classList.remove("active"));
  _this.classList.add("active");
}  

// Initialize the assets
assets.forEach((asset, index) => {
  if (index >= 6) {
    asset.style.display = "none";
  } else {
    asset.style.display = "";
  }
});

// Adds the click event listeners to the pagination buttons to switch between pages
buttons.forEach((button) => button.addEventListener("click", switchToPage));});

// Keeps count of the currently selected page
let currentPage = 0;

// Functions used to switch pages
function goToNextPage() {
  currentPage++;
  displayAssets(currentPage);
}
function goToPreviousPage() {
  currentPage--;
  displayAssets(currentPage);
}