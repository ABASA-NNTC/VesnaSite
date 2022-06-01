let SERVER_URL = 'https://localhost:5000';

function updateMap() {
	let fieldsToProcess = [];
	let cadastersToProcess = [];
	let filtersProcess = [];

	prepareData(fieldsToProcess, cadastersToProcess, filtersProcess);
	
	let dataToSend = {
		cadasters: cadastersToProcess,
		fields: fieldsToProcess,
		filters: fieldsToProcess
	};


	
}

function sendToServer(data) {
  return new Promise(function(succeed, fail) {
    var req = new XMLHttpRequest();
    req.open("GET", SERVER_URL + '/geo', true);
    req.addEventListener("load", function() {
      if (req.status < 400)
        succeed(req.responseText);
      else
        fail(new Error("Request failed: " + req.statusText));
    });
    req.addEventListener("error", function() {
      fail(new Error("Network error"));
    });
    req.send(null);
  });
}

function prepareData(fieldsToProcess, cadastersToProcess, filtersProcess) {
	for(let elem of cadastersDiv.children) {
		let checkboxCad = elem.firstChild;
		if (checkboxCad.checked) {
			cadastersToProcess.push(getCadasterById(checkboxCad.value).content);
		}
	}

	for(let elem of fieldsDiv.children) {
		let checkboxField = elem.firstChild;
		if (checkboxField.checked) {
			fieldsToProcess.push(getFieldById(checkboxField.value).content);
		}
	}

	for (let elem of filtersDiv.children) {
		let checkboxFilter = elem.firstChild.nextSibling;
		if (checkboxFilter.checked) {
			filtersProcess.push(checkboxFilter.name);
		}
	}
}


function getFieldById(id) {
	for (let field of uploadedFields) {
		if (field.idGJS == id) {
			return field;
		}
	}
}

function getCadasterById(id) {
	for (let cadaster of uploadedCadasters) {
		if (cadaster.idGJS == id) {
			return cadaster;
		}
	}
}