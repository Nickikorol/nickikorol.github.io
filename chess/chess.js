var content = document.getElementById('content');

for (var i = 1; i <= 8; i++) {
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    for (var j = 1; j <= 8; j++) {

        var cell = document.createElement("div");

        if (j % 2 == 0 & i % 2 !== 0) {
            cell.setAttribute("class", "cell black");
         }
        if (j % 2 !== 0 & i % 2 !== 0) {
            cell.setAttribute("class", "cell white");
        }
        if (j % 2 !== 0 & i % 2 == 0) {
            cell.setAttribute("class", "cell black");
        }
        if (j % 2 == 0 & i % 2 == 0) {
            cell.setAttribute("class", "cell white");
        }
        row.appendChild(cell);
    }
    content.appendChild(row);
}
