let uploadedFields;
let uploadedCadasters;

function uploadFile(input) {
  let file = input.files[0];
  
  if (curState == FIELDS) {
      addField(file);
  } else if (curState == CADASTERS) {
    addCadaster(file);
  }
}

function addField(fieldFile) {
  fieldsDiv.insertAdjacentHTML('beforeend', `<input type="checkbox">${fieldFile.name}`);
}

function addCadaster(fieldFile) {
  cadastreDiv.insertAdjacentHTML('beforeend', `<input type="checkbox">${fieldFile.name}`);
}