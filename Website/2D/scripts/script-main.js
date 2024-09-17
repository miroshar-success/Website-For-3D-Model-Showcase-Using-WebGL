// Assets array containing the path to the 3D model .glb files and the corresponding information
var assets = [
  {
    title: "Exotic Statue",
    src: "assets/Exotic_Ethnic_Tribal_Statue/Exotic_Ethnic_Tribal_Statue.glb",
    alt: "A small, exotic ethnic tribal statue of a woman crafted from a diverse array of materials, including both worn and pristine metals, aswell as various types of wood.",
    authorURL: "https://www.instagram.com/samueltheonlyone/",
    downloadLinks: [
        { format: "Turbosquid", url: "https://www.turbosquid.com/de/FullPreview/2050536" },
        { format: "CGTrader", url: "https://www.cgtrader.com/3d-models/architectural/decoration/exotic-ethnic-tribal-statue" },
    ],
    price: 10,
    description: "A small, exotic ethnic tribal statue of a woman crafted from a diverse array of materials, including both worn and pristine metals, aswell as various types of wood.",
    publishingDate: "2023-04-02",
    vertices: "75623",
    polygons: "75621",
    type: "Figurine",
    dimensions: "6.3 x 7.0 x 12.5 cm",
    unwrappedUVs: "Yes",
    pbr: "Yes",
    rigged: "No",
    animated: "No",
    lowPoly: "No",
    cameraOrbit: "180deg 75.00deg auto",
    postersrc: "posters/Exotic_Statue.webp",
  },

  {
    title: "Cardboard Boxes",
    src: "assets/Cardboard_Boxes/Cardboard_Boxes.glb",
    alt: "A cluster of cardboard boxes of varying sizes. One large empty rather worn looking open box, two closed medium-sized boxes, one with a warning label on it, and one closed small box. Every cardboard box has a packaging label and tape on it.",
    authorURL: "https://www.instagram.com/samueltheonlyone/",
    downloadLinks: [
      { format: "Turbosquid", url: "https://www.turbosquid.com/de/FullPreview/2052326" },
      { format: "CGTrader", url: "https://www.cgtrader.com/free-3d-models/household/other/cardboard-boxes-3fe020a4-6ec4-4a7c-bb14-62fecc777748" },
    ],
    price: 2,
    description: "A cluster of cardboard boxes of varying sizes. One large empty rather worn looking open box, two closed medium-sized boxes, one with a warning label on it, and one closed small box. Every cardboard box has a packaging label and tape on it.",
    publishingDate: "2023-04-05",
    vertices: "354",
    polygons: "298",
    type: "Cardboard Box",
    dimensions: "78 x 89.5 x 48.6 cm",
    unwrappedUVs: "Yes",
    pbr: "Yes",
    rigged: "No",
    animated: "No",
    lowPoly: "Yes",
    cameraOrbit: "135deg 75.00deg auto",
    postersrc: "posters/Cardboard_Boxes.webp",
  },
    
  {
    title: "Metal Pendulum",
    src: "assets/Metal_Pendulum/Metal_Pendulum.glb",
    alt: "A worn metal pendulum with a metal frame and metal spheres.",
    authorURL: "https://www.instagram.com/samueltheonlyone/",
    downloadLinks: [
      { format: "Turbosquid", url: "https://www.turbosquid.com/de/FullPreview/2041793" },
      { format: "CGTrader", url: "https://www.cgtrader.com/3d-models/science/other/worn-metal-pendulum" },
    ],
    price: 2,
    publishingDate: "2023-04-03",
    vertices: "9044",
    polygons: "10753",
    type: "Pendulum",
    description: "A worn metal pendulum with a metal frame and metal spheres.",
    dimensions: "8.0 x 17.0 x 11.7 cm",
    pbr: "Yes",
    rigged: "No",
    animated: "No",
    lowPoly: "No",
    cameraOrbit: "90deg 75.00deg auto",
    postersrc: "posters/Metal_Pendulum.webp",
  },

  {
    title: "Industrial Chimney",
    src: "assets/Industrial_Chimney/Industrial_Chimney.glb",
    alt: "A large industrial brick Chimney with heavy traces of soot and rust on it.",
    authorURL: "https://www.instagram.com/samueltheonlyone/",
    downloadLinks: [
      { format: "Turbosquid", url: "https://www.turbosquid.com/de/FullPreview/2013676" },
      { format: "CGTrader", url: "https://www.cgtrader.com/3d-models/industrial/other/large-industrial-brick-chimney" },
    ],
    price: 2,
    publishingDate: "2023-04-02",
    vertices: "872",
    polygons: "741",
    type: "Chimney",
    description: "A large industrial brick Chimney with heavy traces of soot and rust on it.",
    dimensions: "120.0 x 120.0 x 230.0 cm",
    pbr: "Yes",
    rigged: "No",
    animated: "No",
    lowPoly: "Yes",
    postersrc: "posters/Industrial_Chimney.webp",
  },

  {
    title: "AC Unit",
    src: "assets/AC_Unit/AC_Unit.glb",
    alt: "A commonly found AC-Unit with traces of heavy use and wear on it, manufactured by the fictional brand EC0MAX.",
    authorURL: "https://www.instagram.com/samueltheonlyone/",
    downloadLinks: [
      { format: "Turbosquid", url: "https://www.turbosquid.com/de/FullPreview/2014469" },
      { format: "CGTrader", url: "https://www.cgtrader.com/3d-models/exterior/industrial-exterior/dirty-white-worn-ac-unit" },
    ],
    price: 2,
    publishingDate: "2023-04-04",
    vertices: "2254",
    polygons: "2135",
    type: "Window AC Unit",
    description: "A commonly found AC-Unit with traces of heavy use and wear on it, manufactured by the fictional brand EC0MAX.",
    dimensions: "22.2 x 64.5 x 48.3 cm",
    pbr: "Yes",
    rigged: "No",
    animated: "No",
    lowPoly: "No",
    cameraOrbit: "90deg 75.00deg auto",
    postersrc: "posters/AC_Unit.webp",
  },

  {
    title: "Laboratory Door",
    src: "assets/Laboratory_Door/Laboratory_Door.glb",
    alt: "A used light-blue laboratory door with traces of use and wear aswell as warning signs and a looktrough window.",
    authorURL: "https://www.instagram.com/samueltheonlyone/",
    downloadLinks: [
      { format: "Turbosquid", url: "https://www.turbosquid.com/de/FullPreview/2039605" },
      { format: "CGTrader", url: "https://www.cgtrader.com/3d-models/science/laboratory/used-laboratory-door" },
    ],
    price: 2,
    publishingDate: "2023-04-04",
    vertices: "3084",
    polygons: "5950",
    type: "Door",
    description: "A used light-blue laboratory door with traces of use and wear aswell as warning signs and a looktrough window.",
    dimensions: "24.9 x 166.4 x 266.2 cm",
    pbr: "Yes",
    rigged: "No",
    animated: "No",
    lowPoly: "No",
    postersrc: "posters/Laboratory_Door.webp",
  },
];


// Function used to show the model information in the overlay
function showModelInfo(asset) {
  const overlay = document.createElement("div");
  overlay.className = "overlay";

  // Adds the no-scroll class to the html when the overlay is opened, so that the user cannot scroll the page while the overlay is open
  document.documentElement.classList.add("no-scroll");

  // Removes the overlay when clicking outside of it
  overlay.onclick = function (event) {
    if (event.target === overlay) {
      overlay.style.opacity = "0";
      setTimeout(() => {
        overlay.style.display = "none";
        document.documentElement.classList.remove("no-scroll");
        unloadInvisibleModels();
      }, 300);
    }
  };

  const overlayContent = document.createElement("div");
  overlayContent.className = "overlay-content";

  const leftColumn = document.createElement("div");
  leftColumn.className = "left-column";
  const modelViewer = document.createElement("model-viewer");

  // Sets the Google Model Viewer Attributes for the model-viewer inside the overlay
  const modelViewerId = "model-viewer-overlay"; // ModelViewer ID Variable
  modelViewer.setAttribute("id", modelViewerId); // Sets the Id
  modelViewer.setAttribute("src", asset.src); // Sets the Source depending on the asset
  modelViewer.setAttribute("alt", asset.alt); // Sets the alt description text
  modelViewer.setAttribute("camera-controls", ""); // Enables camera controls
  modelViewer.setAttribute("orbit-sensitivity", "0.75"); // Sets the orbit/rotate sensitivity
  modelViewer.setAttribute("interaction-prompt-style", "basic"); // Sets the interaction prompt style (basic or flat)
  modelViewer.setAttribute("interaction-prompt-threshold", "1500"); // Sets the interaction prompt threshold (Delay before the interaction prompt is shown)
  modelViewer.setAttribute("auto-rotate", ""); // Enables auto-rotate
  modelViewer.setAttribute("ar", ""); // Enables the ability to view the model in AR (Augmented Reality)
  modelViewer.setAttribute("ar-modes", "webxr scene-viewer quick-look");
  modelViewer.setAttribute("disable-zoom", ""); // Disables zooming
  modelViewer.setAttribute("disable-tap", ""); // Disables tap-to-zoom
  modelViewer.setAttribute("shadow-intensity", "1"); // Sets the shadow intensity
  modelViewer.setAttribute("camera-orbit", asset.cameraOrbit); // Sets the camera orbit (The way the camera moves around the model)
  modelViewer.style.width = "100%"; // Sets the width of the model-viewer to 100% (relative to its parent element e.g. fills parent which is the left colmn)
  modelViewer.style.height = "100%"; // Sets the height of the model-viewer to 100% (relative to its parent element e.g. fills parent which is the left colmn)
  modelViewer.setAttribute("poster", asset.postersrc); // Sets the poster image for the model-viewer which is shown while the model is loading

  // Adds the model-viewer to the left column
  leftColumn.appendChild(modelViewer);

  // Removes all models from the model-viewers except the one in the overlay
  unloadAllModels(modelViewer);

  // Creates a wrapper element for the right column
  const rightColumnWrapper = document.createElement("div");
  rightColumnWrapper.className = "right-column-wrapper";


  // Creates the right column
  const rightColumn = document.createElement("div");
  rightColumn.className = "right-column";

  // Creates the ionicon back button in the left column of the overlay
  const backButton = document.createElement("ion-icon");
  backButton.setAttribute("name", "arrow-back-outline");
  backButton.setAttribute("size", "large");
  backButton.className = "back-button";

  // Sets the onclick event for the back button which closes the overlay and removes the no-scroll class from the html
  backButton.onclick = function () {
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
      // Remove the no-scroll class from the html when the overlay is closed
      document.documentElement.classList.remove("no-scroll");
      unloadInvisibleModels();
    }, 300);
  };

  // Appends the back button to the left column
  leftColumn.appendChild(backButton);

  // Creates the model info element where the model information will be inserted and displayed
  const modelInfo = document.createElement("div");
  modelInfo.className = "model-info";
  modelInfo.innerHTML = `
  <h2>${asset.title}</h2>
  <p><strong>Price:</strong> $${asset.price}.00</p>
  <p><strong>Description:</strong> ${asset.description}</p>
  <p><strong>Publishing Date:</strong> ${asset.publishingDate}</p>
  <p><strong>Vertex Count:</strong> ${asset.vertices}</p>
  <p><strong>Face Count:</strong> ${asset.polygons}</p>
  <p><strong>Type:</strong> ${asset.type}</p>
  <p><strong>Dimensions:</strong> ${asset.dimensions}</p>
  <p><strong>Unwrapped UVs:</strong> ${asset.unwrappedUVs}</p>
  <p><strong>PBR:</strong> ${asset.pbr}</p>
  <p><strong>Rigged:</strong> ${asset.rigged}</p>
  <p><strong>Animated:</strong> ${asset.animated}</p>
  <p><strong>Low Poly:</strong> ${asset.lowPoly}</p>
  `;

  // Creates a new download dropdown menu
  const downloadContainer = document.createElement("div");
  downloadContainer.className = "download-container overlay-download-container";

  // Sets the onHover event for the download container which opens and closes the dropdown menu
  downloadContainer.addEventListener("mouseenter", () => {
    openDropdown(dropdownMenu, downloadContainer);
    downloadTextIcon.querySelector(".download-icon").style.transform = "rotate(90deg)";
    downloadTextIcon.querySelector(".download-icon").style.transition = "transform 0.2s ease-in-out";
  });
  downloadContainer.addEventListener("mouseleave", () => {
    closeDropdown(dropdownMenu, downloadContainer);
    downloadTextIcon.querySelector(".download-icon").style.transform = "rotate(0deg)";
    downloadTextIcon.querySelector(".download-icon").style.transition = "transform 0.2s ease-in-out";
  });

  const downloadWrapper = document.createElement("div");
  downloadWrapper.className = "download-wrapper";

  const dropdownMenu = createDropdownMenu(asset.downloadLinks);
  const downloadTextIcon = createDownloadTextIcon();
  downloadTextIcon.querySelector(".download-text").textContent = "Purchase";

  // Appends the download elements to the download container
  downloadWrapper.appendChild(downloadTextIcon);
  downloadWrapper.appendChild(dropdownMenu);
  downloadContainer.appendChild(downloadWrapper);
  modelInfo.appendChild(downloadContainer);


  // Appends the modelInfo to the rightColumn
  rightColumn.appendChild(modelInfo);
  // Appends rightColumn to the rightColumnWrapper
  rightColumnWrapper.appendChild(rightColumn);
  // Appends the left and right columns to the overlay content
  overlayContent.appendChild(leftColumn);
  overlayContent.appendChild(rightColumnWrapper);
  // Finally appends the overlay content to the overlay
  overlay.appendChild(overlayContent)
  // Appends the overlay to the page body
  document.body.appendChild(overlay);

  // Starts the orbit interpolation animation of the model-viewer
  startOrbitInterpolation(modelViewer);

  // Sets the opacity of the overlay to 1 and then displays it
  setTimeout(() => {
    overlay.style.display = "flex";
    setTimeout(() => {
      overlay.style.opacity = "1";
    }, 50);
  }, 50);
}


// Function used to create the assets on the page
function createAsset(asset, index, page) {
  const assetContainer = document.createElement("div");
  assetContainer.className = "asset";
  assetContainer.setAttribute("data-asset-index", index);

  // Creates and appends the infoButtonContainer to the assetContainer
  const infoButtonContainer = document.createElement("div");
  infoButtonContainer.className = "info-button-container";
  assetContainer.appendChild(infoButtonContainer);

  // Creates the ionicon information button
  const information = document.createElement("ion-icon");
  information.id = "information";
  information.setAttribute("size", "large");
  information.setAttribute("src", "icons/information.svg");

  // Sets the onclick event for the information button which opens the model info overlay
  information.addEventListener("click", function () {
    const assetIndex = assetContainer.getAttribute("data-asset-index");
    const asset = assets[assetIndex];
    showModelInfo(asset);
  });

  // Appends the info button the the infoButtonContainer
  infoButtonContainer.appendChild(information);
  // Appends the infoButtonContainer to the assetContainer
  assetContainer.appendChild(infoButtonContainer);

  // Sets the Google Model Viewer Attributes for the model-viewer inside the assetContainer (Main 2D Page)
  const modelViewer = document.createElement("model-viewer"); // Creates the model-viewer element
  modelViewer.setAttribute("bounds", "tight"); // Sets the bounds attribute to tight
  modelViewer.setAttribute("enable-pan", ""); // Disables panning
  modelViewer.setAttribute("src", asset.src); // Sets the Source depending on the asset
  modelViewer.setAttribute("alt", asset.alt); // Sets the alt description text
  modelViewer.setAttribute("ar", ""); // Enables the ability to view the model in AR (Augmented Reality)
  modelViewer.setAttribute("ar-modes", "webxr scene-viewer quick-look"); // Sets the AR modes to webxr, scene-viewer, and quick-look
  modelViewer.setAttribute("disable-zoom", ""); // Disables zooming
  modelViewer.setAttribute("shadow-intensity", "1"); // Sets the shadow intensity to 1
  modelViewer.setAttribute("camera-orbit", asset.cameraOrbit); // Sets the camera orbit (The way the camera moves around the model)
  modelViewer.setAttribute("auto-rotate", ""); // Enables auto rotation
  modelViewer.setAttribute("autoplay", ""); // Enables auto play which starts the rotate animation as soon as the model is loaded
  modelViewer.setAttribute("disable-tap", ""); // // Disables tap-to-zoom
  modelViewer.setAttribute("environment-image", "neutral"); // Sets the environment image (skybox) to neutral
  modelViewer.setAttribute("reveal", "auto"); // Sets the reveal attribute to auto which reveals the model when it is in view 
  modelViewer.setAttribute("interaction-prompt-threshold", "5000"); // Sets the interaction prompt threshold/delay to 5000ms (5 seconds)
  modelViewer.setAttribute("poster", asset.postersrc); // Sets the poster image for the model-viewer which is shown while the model is loading

  // Creates the asset-Header element which contains the model title and download button
  const assetHeader = document.createElement("div");
  assetHeader.className = "asset-header";

  // Creates the model title Container element
  const titleInfoContainer = document.createElement("div");
  titleInfoContainer.className = "title-info-container";

  // Creates the model title element
  const modelTitle = document.createElement("h2");
  modelTitle.className = "model-title";
  modelTitle.textContent = asset.title;

  // Creates the download dropdown element below the model title and adds onHover eventListeners to it
  // TODO: Extract method to createDownloadDropdown()
  const downloadContainer = document.createElement("div");
  downloadContainer.className = "download-container asset-download-container";

  downloadContainer.addEventListener("mouseenter", () => {
    openDropdown(dropdownMenu, downloadContainer);
    downloadTextIcon.querySelector(".download-icon").style.transform = "rotate(90deg)";
    downloadTextIcon.querySelector(".download-icon").style.transition = "transform 0.2s ease-in-out";
  });
  downloadContainer.addEventListener("mouseleave", () => {
    closeDropdown(dropdownMenu, downloadContainer);
    // Make it rotate back
    downloadTextIcon.querySelector(".download-icon").style.transform = "rotate(0deg)";
    downloadTextIcon.querySelector(".download-icon").style.transition = "transform 0.2s ease-in-out";
  });

  const downloadWrapper = document.createElement("div");
  downloadWrapper.className = "download-wrapper";

  const dropdownMenu = createDropdownMenu(asset.downloadLinks);
  const downloadTextIcon = createDownloadTextIcon();

  // Appends the modelViewer assetHeader to the assetContainer
  assetContainer.appendChild(modelViewer);
  assetContainer.appendChild(assetHeader);
  assetHeader.appendChild(modelTitle);
  assetHeader.appendChild(downloadContainer);
  downloadContainer.appendChild(downloadWrapper);
  downloadWrapper.appendChild(downloadTextIcon);
  downloadWrapper.appendChild(dropdownMenu);
  titleInfoContainer.appendChild(modelTitle);
  assetHeader.appendChild(titleInfoContainer);
  assetHeader.appendChild(downloadContainer);

  return assetContainer;
}
  

// Creates the assetsContainer in which the assets are displayed as a grid
const assetsContainer = document.querySelector(".assets-container");

// Creates the assets using the createAsset() Function and appends them to the assetsContainer
assets.forEach((asset, index) => {
  const page = Math.floor(index / 6); // Makes sure that only 6 assets are displayed per page
  const assetElement = createAsset(asset, index, page);
  assetsContainer.appendChild(assetElement);
});


// Registers the service worker used to cache certain files
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/2D/service-worker.js").then((registration) => {
      console.log("ServiceWorker registration successful:", registration);
    }, (error) => {
      console.log("ServiceWorker registration failed:", error);
    });
  });
}
  