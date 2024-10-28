
let SearchAndFilter = document.getElementById("SearchAndFilter");

SearchAndFilter.innerHTML = `
    <div class="searchAndFilterTop">
        <input type="search" placeholder="بحث" />
        <button>بحث</button>
        <div id="filter" class="filter">فلتر</div>
    </div>
    
    <div id="filterInputs" class="hidden"> 
        <input type="text" class="input-field" id="input1"  />
        <input type="text" class="input-field" id="input2" />
        <input type="text" class="input-field" id="input3" />
    </div>
    `