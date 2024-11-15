
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
  // imageElement.src = `./images/${image}`;
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

// const SEARCH_ENGINE_ID = "625dddd791a9b4de3";  
// const GOOGLE_API_KEY = "AIzaSyDQLSeWIZViPgx4BpZwwTxE537zISitSZI";  
// const GOOGLE_API_KEY = "AIzaSyBtMl6o8eWFYXMS8Z3LZx8gq4lzMSK1tZk";  
// const GOOGLE_API_KEY = "AIzaSyDa9AoFrsmbljSTFg648pZS2i32IcjKKTA"; 

const GOOGLE_API_KEY = "AIzaSyDa9AoFrsmbljSTFg648pZS2i32IcjKKTA"; 
const SEARCH_ENGINE_ID = "625dddd791a9b4de3"; 
document
  .getElementById("mountainDropDown")
  .addEventListener("change", async () => {
    const mountainName = mountainDropDown.value

    document.getElementById("mountainName").textContent = mountainName;

    try {
      const searchUrl = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent("Mountain " + mountainName
      )}+site:unsplash.com&searchType=image&num=1`;

      console.log("Fetching from URL:", searchUrl); 

      const response = await fetch(searchUrl);
      const data = await response.json();

      console.log("API response:", data); 

      if (data.items && data.items.length > 0) {
        const imageUrl = data.items[0].link;
        console.log(imageUrl);
        document.getElementById(
          "info-body"
        ).style.backgroundImage = `url(${imageUrl})`;
      } else {
        console.log("No images found for this query.");
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  });

  document.getElementById("switchInput").addEventListener("click", (event) => {
    if (event.target.checked) {  
      window.location.href = "mountains.html"; 
    }
  });