// Function to start and configure the orbit interpolation
function startOrbitInterpolation(modelViewer) {
  const orbitCycle = [
    "45deg 55deg 4m",
    "-60deg 110deg 2m",
    modelViewer.getAttribute("camera-orbit")
  ];
  
  let intervalId = setInterval(orbit, 2000);
  let userInteracting = false;

  // Interaction events for devides with touch screens
  modelViewer.addEventListener("touchstart", handleInteractionStart);
  modelViewer.addEventListener("touchend", handleInteractionEnd);

  // Interaction events for desktop devices
  modelViewer.addEventListener("mousedown", handleInteractionStart);
  modelViewer.addEventListener("mouseup", handleInteractionEnd);

  // Functions to handle the start and end of the interaction
  function handleInteractionStart() {
    userInteracting = true;
    clearInterval(intervalId);
  }
  function handleInteractionEnd() {
    userInteracting = false;
    intervalId = setInterval(orbit, 2000);
  }

  // Function that changes the camera-orbit attribute of the model-viewer element to the new orbit
  function orbit() {
    if (!userInteracting) {
      const currentOrbit = modelViewer.getAttribute("camera-orbit");
      const currentOrbitIndex = orbitCycle.indexOf(currentOrbit);
      modelViewer.setAttribute("camera-orbit", orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length]);
    }
  }
}
  