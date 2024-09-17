// When the DOMContent has loaded, the scroll sticky footer is added
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.getElementById("sticky-footer");
    let bottomReached = false;
    let scrollTimeout;
    
    // Checks if the bottom of the page was reached through scrolling
    function handleScroll() {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        bottomReached = true;
      } else if (bottomReached && window.scrollY < document.body.scrollHeight - window.innerHeight) {
        bottomReached = false;
        footer.classList.remove("visible");
        document.querySelector("lottie-player").style.opacity = "1";
      }
  
      clearTimeout(scrollTimeout);
      document.documentElement.classList.remove("fade-out-scrollbar");
      scrollTimeout = setTimeout(() => {
        document.documentElement.classList.add("fade-out-scrollbar");
      }, 3000); // 3 seconds
    }
    /* Function used to check, if the bottom of the page was reached and the user scrolls again, 
    the sticky footer card is shown and the lottie player disappears */
    const deltaYThreshold = 50; // Threshold for how sensitive this action is
    function handleWheel(event) {
      if (bottomReached && event.deltaY > deltaYThreshold) {
        footer.classList.add("visible");
        document.querySelector("lottie-player").style.opacity = "0";
      }
    }
    
    // Adds the events to the window
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel);
  
    // Handles the footer action/response on touch devices
    let startY;
    function handleTouchStart(event) {
      startY = event.touches[0].clientY;
    }
  
    function handleTouchMove(event) {
      const deltaY = event.touches[0].clientY - startY;
      if (bottomReached && deltaY < -deltaYThreshold) {
        footer.classList.add("visible");
        document.querySelector("lottie-player").style.opacity = "0";
      }
    }
  
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
  });