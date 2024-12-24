const table = document.querySelector("#table");
const makeTable = () => {
    let count = 1, html = "";
    for (let i = 0; i < rows.value; i++) {
        html += "<tr>";
        for (let j = 0; j < cols.value; j++) {
            html += `<td>${count++}</td>`;
        }
        html += "</tr>";
    }
    table.innerHTML = html;
};
rows.addEventListener('change', makeTable);
cols.addEventListener('change', makeTable);
makeTable();
