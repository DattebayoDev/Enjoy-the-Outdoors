
//#region  mountain page

mountains_PopulateDropDown();
function mountains_PopulateDropDown() {
  const mountainDropDown = document.getElementById("mountainDropDown");
  mountainsArray.forEach((element) => {
    const option = document.createElement("option");
    option.textContent = element.name;
    mountainDropDown.appendChild(option);
  });
  mountainsDisplayDropDown(mountainDropDown);
}

function mountainsDisplayDropDown(dropDownElement) {
  dropDownElement.addEventListener("change", () => {
    if (dropDownElement.value != "Select One") {
      const mountainName = document.getElementById("mountainName");
      mountainName.textContent = dropDownElement.value;
      searchMountainImage(mountainName.textContent)
    } 
  });
}

function searchMountainImage(mountainName) {
  console.log(mountainName)
  mountainsArray.forEach((mountain) => {
    if (mountain.name === mountainName) {
      addMountainImage(mountain.img);
      addMountainattr(mountain);
      addDescription(mountain);
    }
  });
}
function addMountainImage(image) {
  let imageElement = document.getElementById("mountainImage");
  imageElement.src = `./images/${image}`;
  changeDisplay()
 
}

function changeDisplay(){
  const hideDisplayElements = document.querySelectorAll(".hideDisplay")
  hideDisplayElements.forEach(element => {
    element.classList.remove("hideDisplay")
  })
}
function addMountainattr(mountain) {
  const mountainInfo = document.getElementById("elevationInfo");
  mountainInfo.innerHTML = "Elevation: " + mountain.elevation + "&emsp;" +  "Effort: " + mountain.effort
}

function addDescription(mountain) {
  const description = document.getElementById("mountainDesc");
  description.textContent = mountain.desc;
}

document.getElementById("switchInput").addEventListener("click", (event) => {
  console.log("working")
  if (event.target.checked) {
    console.log("working 2")

    window.location.href = "info_page_version2.html"; // Replace with your target page
  }
});
//#endregion

