function filterTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toLowerCase(); // Converter a pesquisa para minúsculas
    table = document.querySelector('table');
    tr = table.querySelectorAll('tbody tr');
    tr.forEach(function (row) {
        td = row.getElementsByTagName('td');
        row.style.display = 'none';
        for (i = 0; i < td.length; i++) {
            txtValue = td[i].textContent || td[i].innerText;
            txtValue = txtValue.toLowerCase(); // Converter o valor da tabela para minúsculas
            if (txtValue.indexOf(filter) > -1) {
                row.style.display = 'table-row';
                break;
            }
        }
    });
}
