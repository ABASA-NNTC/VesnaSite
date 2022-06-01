let uploadedFields = [];
let uploadedCadasters = [];

function uploadFile(input) {
  let file = input.files[0];
  if (curState == FIELDS) {
      addFileToList(file, FIELDS);
  } else if (curState == CADASTERS) {
    addFileToList(file, CADASTERS);
  }
}

let i = 0;

function addFileToList(gjsFile, to) {
  let divToAdd;
  let arrToAdd;
  if (to == FIELDS) {
    divToAdd = fieldsDiv;
    arrToAdd = uploadedFields;
  } else if (to == CADASTERS) {
    divToAdd = cadastersDiv;
    arrToAdd = uploadedCadasters;
  }
  
  let div = document.createElement('div');
  div.class = "checkboxDiv";
  div.insertAdjacentHTML('beforeend', `<input value="${i}" type="checkbox">${gjsFile.name}`);
  divToAdd.append(div);

  let gjsObj = {
    'idGJS': i++,
    'fileName': gjsFile.name,
    'content': null,
    'status': 0,
    };
    readFile(gjsFile, gjsObj);
    arrToAdd.push(gjsObj);
}

function readFile(file, objContent) {

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
    console.log("complete");
    objContent.content = reader.result;
    objContent.status = 1;
    console.log(objContent);
  };

  reader.onerror = function() {
    return reader.error;
  };
}