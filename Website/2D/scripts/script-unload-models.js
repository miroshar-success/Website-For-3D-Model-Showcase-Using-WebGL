// Function used to unload the 3D models and show a screenshot of them when the overlay is opened. (Drastically improves performance)
function unloadAllModels(exception) {
  document.querySelectorAll(".asset").forEach((asset) => {
    const modelViewer = asset.querySelector("model-viewer");
    modelViewer.setAttribute("poster", "");
    if (modelViewer != exception) {
      modelViewer.setAttribute("poster", getModelViewerBlob(modelViewer));
    };
      modelViewer.showPoster();
    });
}
    
// Method that generates a blob from the model-viewer element and returns a temporary URL to it
function getModelViewerBlob(modelViewer) {
  modelViewer.toBlob({ idealAspect: true }).then((blob) => {
  const objectUrl = URL.createObjectURL(blob);
  modelViewer.setAttribute("poster", objectUrl);
  });
}

// Function used to unload models when they are out of view
function unloadInvisibleModels() {
  const windowHeight = window.innerHeight;
  const scrollTop = document.documentElement.scrollTop;

  document.querySelectorAll(".asset").forEach((asset, index) => {
    const modelViewer = asset.querySelector("model-viewer");
    const modelViewerRect = modelViewer.getBoundingClientRect();
    const modelViewerTop = modelViewerRect.top + scrollTop;
    const modelTitle = assets[index].title;

    // Checks if the model is not in the viewport
    if (modelViewerTop + modelViewerRect.height < scrollTop || modelViewerTop > scrollTop + windowHeight) {
      // Shows the poster for models outside of the viewport
      modelViewer.setAttribute("poster", asset.postersrc);
      modelViewer.showPoster();
      // console.log(`Model ${index} (${modelTitle}): Poster shown (out of view)`);
    } else {
      // Dismisses the poster for models in the viewport
      modelViewer.dismissPoster();
      // console.log(`Model ${index} (${modelTitle}): Poster dismissed (in view)`);
    }
  });
}
window.addEventListener("scroll", unloadInvisibleModels);