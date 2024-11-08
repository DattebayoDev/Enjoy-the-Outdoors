
loadingTableData();
function loadingTableData() {
  const tableBody = document.querySelector("tbody");
  const headers = document.querySelectorAll("th");

  nationalParksArray.forEach((park) => {
    const row = document.createElement("tr");

    for (header of headers) {
      if (Object.hasOwn(park, header.id)) {
        const tableDataCell = document.createElement("td");
        let headerId = header.id;
        tableDataCell.textContent = park[headerId] 
        row.appendChild(tableDataCell);
      } else {
        const tableDataCell = document.createElement("td");
        let headerId = header.id;
        tableDataCell.textContent = "" 
        row.appendChild(tableDataCell);
      }
      tableBody.appendChild(row);
    }
  });
}

nationalPark_selectDropDown();
function nationalPark_selectDropDown() {
  const allRadios = document.querySelectorAll("input[type='radio']");
  allRadios.forEach((radio) => {
    radio.addEventListener("click", () => {
      resetDropdown();
      displayDropDown(
        populateDropDown(radio, selectedDropdown(radio), selectedArray(radio))
      );
    });
  });
}

function selectedDropdown(radio) {
  const selectedDropdown =
    radio.id === "location-radio" ? "location-DropDown" : "parkType-DropDown";
  return selectedDropdown;
}
function selectedArray(radio) {
  const selectedArray =
    radio.id === "location-radio" ? locationsArray : parkTypesArray;
  return selectedArray;
}

function populateDropDown(radioInput, dropDownID, array) {
  console.log("working")
  const dropDown = document.getElementById(dropDownID);
  //dropDown.length = 1;
  array.forEach((element) => {
    const option = document.createElement("option");
    option.textContent = element;
    dropDown.appendChild(option);
  });
  return { radioInput, dropDown };
}

function resetDropdown() {
  const allSelect = document.querySelectorAll("select");
  allSelect.forEach((select) => {
    select.classList.add("hide-display");
  });
}

function displayDropDown(obj) {
  radioInput = obj.radioInput;
  dropDown = obj.dropDown;
  const activeDropdown = radioInput.checked
    ? dropDown.classList.remove("hide-display")
    : dropDown.classList.add("hide-display");
  capturingInput(dropDown);
}

function capturingInput(dropDownElement) {
  dropDownElement.addEventListener("change", () => {
    const selectedOption = dropDownElement.value;
    console.log(selectedOption)
    console.log("working 2 ")
    eraseTable()
    parsingArray(dropDownElement, selectedOption);

  });
}

function parsingArray(dropDownElement, selectedOption) {
  if (dropDownElement.id === "location-DropDown") {
    console.log("working 3 ")
    nationalParksArray.forEach((state) => {
      if (selectedOption === state.State) {
        createTableData(state);
      }
    });
  } else {
    nationalParksArray.forEach((park) => {
      if (park.LocationName.includes(selectedOption)) {
        createTableData(park);      }
    });
  }
}

function createTableData(obj) {
  const tableBody = document.querySelector("tbody");
  const row = document.createElement("tr");
  const tableHeaders = document.querySelectorAll("th")

  tableHeaders.forEach((header) => {
    // console.log("header", header.id)
    // console.log("object header", obj[header.id])


    const tableDataCell = document.createElement("td");
    let tempVariable = Object.hasOwn(obj,  header.id) ? obj[ header.id] : "";
    tableDataCell.textContent = tempVariable
    row.appendChild(tableDataCell);
    tableBody.appendChild(row);
  });
}

function eraseTable() {
  const tableBody = document.querySelector("tbody");
  tableBody.textContent = ""
}

