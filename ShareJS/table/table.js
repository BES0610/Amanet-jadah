
let table = document.getElementById("table");
console.log(table)

table.innerHTML = `
        <table class="table">
            <thead class="Header">
            </thead>
            <tbody class="body"> 
                <tr id="bodyDiv"></tr>
            </tbody>
        </table>
        <div class="pagination" style="width: 100%;" id="pagination"></div>
    `