//#region  national park functions
loadTableData();
function loadTableData() {
  const tableBody = document.querySelector("tbody");
  const headers = document.querySelectorAll("th");

  nationalParksArray.forEach((park) => {
    const row = document.createElement("tr");

    for (const header of headers) {
      if (Object.hasOwn(park, header.id)) {
        const tableDataCell = document.createElement("td");
        let headerId = header.id;
        tableDataCell.textContent = park[headerId];
        row.appendChild(tableDataCell);
      } else {
        const tableDataCell = document.createElement("td");
        let headerId = header.id;
        tableDataCell.textContent = "";
        row.appendChild(tableDataCell);
      }
      tableBody.appendChild(row);
    }
  });
}

initializeDropdown();
function initializeDropdown() {
  const allRadios = document.querySelectorAll("input[type='radio']");
  allRadios.forEach((radio) => {
    radio.addEventListener("click", () => {
      resetDropdown();
      displayDropdown(
        populateDropdown(radio, getDropdownID(radio), getArray(radio))
      );
    });
  });
}

function getDropdownID(radio) {
  const dropdownID =
    radio.id === "location-radio" ? "location-DropDown" : "parkType-DropDown";
  return dropdownID;
}
function getArray(radio) {
  const array =
    radio.id === "location-radio" ? locationsArray : parkTypesArray;
  return array;
}

function populateDropdown(radioInput, dropdownID, array) {
  console.log("working");
  const dropdown = document.getElementById(dropdownID);
  array.forEach((element) => {
    const option = document.createElement("option");
    option.textContent = element;
    dropdown.appendChild(option);
  });
  return { radioInput, dropdown };
}

function resetDropdown() {
  const allSelect = document.querySelectorAll("select");
  allSelect.forEach((select) => {
    select.classList.add("hide-display");
  });
}

function displayDropdown(obj) {
  radioInput = obj.radioInput;
  dropdown = obj.dropdown;
  const activeDropdown = radioInput.checked
    ? dropdown.classList.remove("hide-display")
    : dropdown.classList.add("hide-display");
  captureInput(dropdown);
}

function captureInput(dropdownElement) {
  dropdownElement.addEventListener("change", () => {
    const selectedOption = dropdownElement.value;
    console.log(selectedOption);
    console.log("working 2");
    clearTable();
    parseArray(dropdownElement, selectedOption);
  });
}

function parseArray(dropdownElement, selectedOption) {
  if (dropdownElement.id === "location-DropDown") {
    console.log("working 3");
    nationalParksArray.forEach((state) => {
      if (selectedOption === state.State) {
        createTableRow(state);
      }
    });
  } else {
    nationalParksArray.forEach((park) => {
      if (park.LocationName.includes(selectedOption)) {
        createTableRow(park);
      }
    });
  }
}

function createTableRow(obj) {
  const tableBody = document.querySelector("tbody");
  const row = document.createElement("tr");
  const tableHeaders = document.querySelectorAll("th");

  tableHeaders.forEach((header) => {
    const tableDataCell = document.createElement("td");
    let tempVariable = Object.hasOwn(obj, header.id) ? obj[header.id] : "";
    tableDataCell.textContent = tempVariable;
    row.appendChild(tableDataCell);
    tableBody.appendChild(row);
  });
}

function clearTable() {
  const tableBody = document.querySelector("tbody");
  tableBody.textContent = "";
}
