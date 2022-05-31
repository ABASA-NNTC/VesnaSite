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
    document.getElementById('fieldsDiv').style.display="block";
    document.getElementById('cadastreDiv').style.display="none";
}

//Функция показывающая/скрывающая блоки
function showCadasters() {
    document.getElementById('cadastreDiv').style.display="block";
    document.getElementById('fieldsDiv').style.display="none";
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