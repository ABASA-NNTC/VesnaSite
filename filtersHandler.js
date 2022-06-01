function updFiltersCheckboxes() {
    filterSelAll.checked = true;
    for (let elem of filtersDiv.children) {
      if (!elem.firstChild.nextSibling.checked) {
        filterSelAll.checked = false;
        break;
      }
    }
}

function clickFilterSelAll() {
    for (let elem of filtersDiv.children) {
      elem.firstChild.nextSibling.checked = filterSelAll.checked;
    }
}


filterSelAll.onclick = clickFilterSelAll;

filtersDiv.addEventListener("click", () => updFiltersCheckboxes());