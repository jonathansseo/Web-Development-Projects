document.addEventListener("DOMContentLoaded", function () {
    drawTable();
});

function drawTable() {
    const rows = document.getElementById('rows').value || 15;
    const cols = document.getElementById('cols').value || 15;

    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = ''; 

    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            td.textContent = `(${i + 1}, ${j + 1})`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableContainer.appendChild(table);
}
