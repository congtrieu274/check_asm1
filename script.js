"use strict";
const submitBtn = document.getElementById("submit-btn");
const heathy_btn = document.querySelector("#healthy-btn");

const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");

const tbodyEl = document.querySelector("#tbody");
const btnBMI = document.querySelector("#BMI-btn");

// bat su kien vao nut submit
// get data from form input
// validate data
// render data to form
// filter good heathy pet ---> render heathy pet

const pet001 = {
  petID: "P001",
  petName: "Tom",
  petAge: 3,
  petType: "Cat",
  petWeight: "5",
  petLenght: "50",
  petBreed: "Tabby",
  vaccin: false,
  dewormed: false,
  steri: false,
  petBMI: "?",
  date: "11/11/2011",
};
const pet002 = {
  petID: "P002",
  petName: "Tom",
  petAge: 3,
  petType: "Cat",
  petWeight: "5",
  petLenght: "50",
  petBreed: "Tabby",
  vaccin: false,
  dewormed: false,
  steri: false,
  petBMI: "?",
  date: "11/11/2011",
};
const pet003 = {
  petID: "P003",
  petName: "Tom",
  petAge: 3,
  petType: "Cat",
  petWeight: "5",
  petLenght: "50",
  petBreed: "Tabby",
  vaccin: true,
  dewormed: true,
  steri: true,
  petBMI: "?",
  date: "11/11/2011",
};
const pet004 = {
  petID: "P004",
  petName: "Tom",
  petAge: 3,
  petType: "Cat",
  petWeight: "5",
  petLenght: "50",
  petBreed: "Tabby",
  vaccin: true,
  dewormed: true,
  steri: true,
  petBMI: "?",
  date: "11/11/2011",
};
const pet005 = {
  petID: "P005",
  petName: "Tom",
  petAge: 3,
  petType: "Cat",
  petWeight: "5",
  petLenght: "50",
  petBreed: "Tabby",
  vaccin: true,
  dewormed: true,
  steri: true,
  petBMI: "?",
  date: "11/11/2011",
};
const pet006 = {
  petID: "P006",
  petName: "Tom",
  petAge: 3,
  petType: "Cat",
  petWeight: "5",
  petLenght: "50",
  petBreed: "Tabby",
  vaccin: true,
  dewormed: true,
  steri: true,
  petBMI: "?",
  date: "11/11/2011",
};
const pet007 = {
  petID: "P007",
  petName: "Tom",
  petAge: 3,
  petType: "Cat",
  petWeight: "5",
  petLenght: "50",
  petBreed: "Tabby",
  vaccin: true,
  dewormed: true,
  steri: true,
  petBMI: "?",
  date: "11/11/2011",
};
const pet008 = {
  petID: "P008",
  petName: "Tom",
  petAge: 3,
  petType: "Cat",
  petWeight: "5",
  petLenght: "50",
  petBreed: "Tabby",
  vaccin: true,
  dewormed: true,
  steri: true,
  petBMI: "?",
  date: "11/11/2011",
};

let petArr = [];
petArr.push(pet001);
petArr.push(pet002);

petArr.push(pet003);
petArr.push(pet004);

petArr.push(pet005);
petArr.push(pet006);

petArr.push(pet007);
petArr.push(pet008);

// validate data

let validate;
var validateHandle = (data) => {
  let condition_1;
  let condition_2;
  let condition_3;
  let condition_4;
  let condition_5 = true;

  // condition_1
  let formEl = document.querySelector(".form");
  let inputEl = formEl.querySelectorAll(".form-control");
  inputEl.forEach((item) => {
    if (
      item.value === "" ||
      item.value === "Select Breed" ||
      item.value === "Select Type"
    ) {
      item.parentElement.querySelector(
        ".error_message"
      ).innerText = `vui long nhap du lieu`;
      condition_1 = false;
    } else {
      item.parentElement.querySelector(".error_message").innerText = "";
      condition_1 = true;
    }
  });
  // condition_2
  if (condition_1) {
    if (ageInput.value !== "Input Age") {
      if (ageInput.value < 1 || ageInput.value > 15) {
        alert("Age must be between 1 and 15!");
        ageInput.value = "";
        condition_2 = false;
      } else {
        condition_2 = true;
      }
    }
    // condition_3

    if (weightInput.value !== "Input Weight") {
      if (weightInput.value < 1 || weightInput.value > 15) {
        condition_3 = false;
        alert("Weight must be between 1 and 15!");
        weightInput.value = "";
      } else {
        condition_3 = true;
      }
    }
    // condition_4

    if (lengthInput.value !== "Input Length") {
      if (lengthInput.value < 1 || lengthInput.value > 15) {
        condition_4 = false;
        alert("Length must be between 1 and 15!");
        lengthInput.value = "";
      } else {
        condition_4 = true;
      }
    }

    for (let i = 0; i < petArr.length; i++) {
      if (idInput.value === petArr[i].petID) {
        condition_5 = false;
        console.log(`trung id o item thu ${i}`);
        alert("ID must be unique!");
      }
    }
  }

  if (
    condition_1 === true &&
    condition_2 === true &&
    condition_3 === true &&
    condition_4 === true &&
    condition_5 === true
  ) {
    validate = true;
  } else {
    validate = false;
  }
  // console.log(checked);
  return validate;
};

// render data

var renderPetData = (arr) => {
  let htmls = "";
  arr.map((item) => {
    htmls += `   <tr>
    <th scope="row">${item.petID}</th>
    <td>${item.petName}</td>
    <td>${item.petAge}</td>
    <td>${item.petType}</td>
    <td>${item.petWeight} kg</td>
    <td>${item.petLenght} cm</td>
    <td>${item.petBreed}</td>
    <td>
    <i class="bi bi-square-fill" style="color:${item.petCl}"></i>
    </td>
    <td><i class = ${
      item.vaccin === true
        ? `"bi bi-check-circle-fill"`
        : `"bi bi-x-circle-fill"`
    }></i></td>
    <td><i class = ${
      item.dewormed === true
        ? `"bi bi-check-circle-fill"`
        : `"bi bi-x-circle-fill"`
    }></i></td>
    <td><i class = ${
      item.steri === true
        ? `"bi bi-check-circle-fill"`
        : `"bi bi-x-circle-fill"`
    }></i></td>
    <td>${item.petBMI}</td>
    <td>01/03/2022</td>
    <td>
    <button class="btn btn-danger" id="delete_btn" onclick="deletePet('${
      item.petID
    }')">Delete</button>
    </td>
  </tr>
    `;
    return htmls;
  });
  tbodyEl.innerHTML = htmls;
  // tbodyEl.appendChild(trEl);
};

// deletePet
const deletePet = (PetId_Delete) => {
  let handelDelet = confirm("Are you sure");
  if (handelDelet) {
    petArr.map((item, index) => {
      if (item.petID === PetId_Delete) {
        console.log(index);
        petArr.splice(index, 1);
      }
    });
    // coutClick = 1;
    // coutClickHandel();
    // renderPetData(petArr);

    if (coutClick % 2 === 0) {
      heathy_btn.innerText = "Show Healthy Pet";
      renderPetData(petArr);
    } else if (coutClick % 2 !== 0) {
      heathy_btn.innerText = "Show All Pet";
      showHeathyPet();
    }

    // heathy_btn.innerText = "Show Healthy Pet ";
  }
};

// show heathypet

var showHeathyPet = () => {
  let heathyPettArr = [];
  petArr.map((item, index) => {
    if (item.vaccin === true && item.dewormed === true && item.steri === true) {
      heathyPettArr.push(item);
    }
    console.log(heathyPettArr);
    return heathyPettArr;
  });
  renderPetData(heathyPettArr);
  // heathy_btn.innerText = "Show All Pet";
};
let coutClick = 0;
var coutClickHandel = () => {
  coutClick = coutClick + 1;
  if (coutClick % 2 !== 0) {
    heathy_btn.innerText = "Show All Pet";
    showHeathyPet();
  } else if (coutClick % 2 === 0) {
    heathy_btn.innerText = "Show Healthy Pet";
    renderPetData(petArr);
  }
};
heathy_btn.addEventListener("click", () => {
  coutClickHandel();
});

const caculateHandle = () => {
  let BMI_Value = 0;
  petArr.map((item, index) => {
    if (item.petType === "Dog") {
      BMI_Value = (item.petWeight * 703) / item.petLenght ** 2;
    } else if (item.petType === "Cat") {
      BMI_Value = (item.petWeight * 886) / item.petLenght ** 2;
    }
    item.petBMI = BMI_Value.toFixed(1);
  });
};

btnBMI.addEventListener("click", () => {
  caculateHandle();
  renderPetData(petArr);
});

// deletevalue
var cleareInput = () => {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  typeInput.value = "";
  weightInput.value = "";
  lengthInput.value = "";
  breedInput.value = "";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
  colorInput.value = "000";
};

// main app
submitBtn.addEventListener("click", () => {
  const petData = {
    petID: idInput.value,
    petName: nameInput.value,
    petAge: ageInput.value,
    petType: typeInput.value,
    petWeight: parseInt(weightInput.value),
    petLenght: parseInt(lengthInput.value),
    petBreed: breedInput.value,
    vaccin: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    petBMI: "?",
    steri: sterilizedInput.checked,
    petCl: colorInput.value,
    data: new Date(),
  };
  validateHandle();
  if (validate) {
    console.log("du lieu hop le");
    cleareInput();
    petArr.push(petData);
    // console.log(petArr);
    renderPetData(petArr);
  } else {
    console.log("du lieu sai");
  }
  console.log(petArr);
});

// console.log(petArr);
