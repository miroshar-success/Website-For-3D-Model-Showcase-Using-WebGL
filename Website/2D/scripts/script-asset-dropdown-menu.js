// Function used to create the dropdown menu for each asset
function createDropdownMenu(downloadLinks) {
    const dropdownMenu = document.createElement("div");
    dropdownMenu.className = "dropdown-menu";
  
    downloadLinks.forEach((link) => {
      const dropdownItem = document.createElement("a");
      dropdownItem.className = "dropdown-item";
      dropdownItem.href = link.url;
      dropdownItem.textContent = link.format;
      dropdownMenu.appendChild(dropdownItem);
    });
  
    return dropdownMenu;
  }
  
  // Function used to open the dropdown menu for each asset
  function openDropdown(dropdownMenu, assetContainer) {
    let hoverTimeout = setTimeout(() => {
      dropdownMenu.classList.add("open");
      assetContainer.classList.add("dropdown-open");
    }, 100);
    dropdownMenu.hoverTimeout = hoverTimeout; // store the timeout ID in the dropdown menu element
  }
  
  // Function used to close the dropdown menu for each asset
  function closeDropdown(dropdownMenu, assetContainer) {
    clearTimeout(dropdownMenu.hoverTimeout); // clear the timeout if the mouse leaves before it expires
    dropdownMenu.classList.remove("open");
    assetContainer.classList.remove("dropdown-open");
  }
  
  // Function used to create the animated download ionicon and text for each asset
  function createDownloadTextIcon() {
    const downloadTextIcon = document.createElement("div");
    downloadTextIcon.className = "download-text-icon";
  
    const downloadText = document.createElement("span");
    downloadText.className = "download-text";
    downloadText.textContent = "Purchase";
  
    const downloadIcon = document.createElement("ion-icon");
    downloadIcon.id = "download";
    downloadIcon.className = "download-icon";
    downloadIcon.setAttribute("name", "caret-forward-circle-outline");
  
    downloadTextIcon.appendChild(downloadText);
    downloadTextIcon.appendChild(downloadIcon);
  
    return downloadTextIcon;
  }