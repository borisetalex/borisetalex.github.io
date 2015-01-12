var headertext = [],
headers = document.querySelectorAll("#accomodation th"),
tablerows = document.querySelectorAll("#accomodation th"),
tablebody = document.querySelector("#accomodation tbody");


for(var i = 0; i < headers.length; i++) {
  var current = headers[i];
  headertext.push(current.textContent.replace(/\r?\n|\r/,""));
} 
for (var i = 0, row; row = tablebody.rows[i]; i++) {
  for (var j = 0, col; col = row.cells[j]; j++) {
    col.setAttribute("accomodation-data-th", headertext[j]);
  } 
}

window.alert("pouet")