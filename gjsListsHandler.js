let FIELDS = 'field';
let CADASTERS = 'cadasters';

let curState = FIELDS;

if (curState == FIELDS) {
    showFields();
} else if (curState == CADASTERS) {
    showCadasters();
}

//Функция показывающая/скрывающая блоки
function showFields() {
    fieldsDiv.style.display="block";
    cadastersDiv.style.display="none";
}

//Функция показывающая/скрывающая блоки
function showCadasters() {
    cadastersDiv.style.display="block";
    fieldsDiv.style.display="none";
}

geoViewOnclick = function (event) { //обработка нажатий
    event.stopPropagation();

    if (curState == FIELDS) {
        if (event.target == buttonCadastre) {
            curState = CADASTERS;
            showCadasters();
        }
    } else if (curState == CADASTERS) {
        if (event.target == buttonFields) {
            curState = FIELDS;
            showFields();
        }
    }
}

buttonFields.onclick = geoViewOnclick;
buttonCadastre.onclick = geoViewOnclick;


function updGJSListsCheckboxes() {
    let divToCheck;
    if (curState == CADASTERS) {
        divToCheck = cadastersDiv;
    } else if (curState == FIELDS) {
        divToCheck = fieldsDiv;
    }

    gjsListsSelAll.checked = true;
    if (divToCheck.children.length == 0)
        gjsListsSelAll.checked = false;
    for (let elem of divToCheck.children) {
      if (!elem.firstChild.checked) {
        gjsListsSelAll.checked = false;
        break;
      }
    }
}

function clickGJSListSelAll() {
    let divToCheck;
    if (curState == CADASTERS) {
        divToCheck = cadastersDiv;
    } else if (curState == FIELDS) {
        divToCheck = fieldsDiv;
    }

    for (let elem of divToCheck.children) {
      elem.firstChild.checked = gjsListsSelAll.checked;
    }
}

gjsListsSelAll.onclick = clickGJSListSelAll;

cadastersDiv.addEventListener("click", () => updGJSListsCheckboxes());
fieldsDiv.addEventListener("click", () => updGJSListsCheckboxes());

