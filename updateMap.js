let SERVER_URL = 'http://localhost:5000';
let processedGJS = filter;
let curLayer;

function updateMap() {
	let fieldsToProcess = [];
	let cadastersToProcess = [];
	let filtersProcess = [];

	prepareData(fieldsToProcess, cadastersToProcess, filtersProcess);
	
	let dataToSend = {
		cadasters: cadastersToProcess,
		fields: fieldsToProcess,
		filters: filtersProcess
	};

	sendToServer(dataToSend);
}


function drawGJS(gjsObj) {
	let layer = DG.geoJson(gjsObj, {
        style: function (feature) {
            return {
                stroke: true,
                fill: true,
                color: feature.properties.stroke,
                fillColor: feature.properties.fill,
                fillOpacity: feature.properties["fill-opacity"],
            };
        }
    }	
    );
	removeLayer();
	layer.addTo(mapDG);
	curLayer = layer;
	console.log("нарисовал");
}

function removeLayer() {
	if (curLayer) {
		curLayer.remove();
	}
}
function sendToServer(data) {
	var formData = new FormData();
	formData.append("json", JSON.stringify(data));
	let fetchData = {
		method: 'POST',
		body: formData,
		headers: {
		'Access-Control-Allow-Origin': '*'
		},
	};

	return fetch(SERVER_URL + "/geo", fetchData)
	.then((resp) => resp.json())
	.then(function (data) {
		console.log(data);
		drawGJS(data);	
	});
  }

  function downloadReport(data) {
	var formData = new FormData();
	formData.append("json", JSON.stringify(data));
	let fetchData = {
		method: 'POST',
		body: formData,
		headers: {
		'Access-Control-Allow-Origin': '*'
		},
	};

	return fetch(SERVER_URL + "/geo/report", fetchData)
	.then((resp) => resp.json())
	.then(function (data) {
		console.log(data);
		drawGJS(data);	
	});
  }  
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