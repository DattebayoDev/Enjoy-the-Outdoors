//#region  mountain page

populateMountainDropdown();
function populateMountainDropdown() {
  const mountainDropdown = document.getElementById("mountainDropDown");
  mountainsArray.forEach((element) => {
    const option = document.createElement("option");
    option.textContent = element.name;
    mountainDropdown.appendChild(option);
  });
  displayMountainDropdown(mountainDropdown);
}

function displayMountainDropdown(dropdownElement) {
  dropdownElement.addEventListener("change", () => {
    if (dropdownElement.value != "Select One") {
      const mountainName = document.getElementById("mountainName");
      mountainName.textContent = dropdownElement.value;
      fetchMountainImage(mountainName.textContent);
    }
  });
}

function fetchMountainImage(mountainName) {
  console.log(mountainName);
  mountainsArray.forEach((mountain) => {
    if (mountain.name === mountainName) {
      setMountainImage(mountain.img);
      setMountainAttributes(mountain);
      setMountainDescription(mountain);
    }
  });
}

function setMountainImage(image) {
  let imageElement = document.getElementById("mountainImage");
  imageElement.src = `./images/${image}`;
  revealDisplay();
}

function revealDisplay() {
  const hiddenElements = document.querySelectorAll(".hideDisplay");
  hiddenElements.forEach((element) => {
    element.classList.remove("hideDisplay");
  });
}

function setMountainAttributes(mountain) {
  const mountainInfo = document.getElementById("elevationInfo");
  mountainInfo.innerHTML =
    "Elevation: " + mountain.elevation + "&emsp;" + "Effort: " + mountain.effort;
}

function setMountainDescription(mountain) {
  const description = document.getElementById("mountainDesc");
  description.textContent = mountain.desc;
}

document.getElementById("switchInput").addEventListener("click", (event) => {
  if (event.target.checked) {
    window.location.href = "mountains2.html";
  }
});
//#endregion
