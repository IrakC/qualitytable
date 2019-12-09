function addRow(){
    var table = document.getElementById("tableCBody");
    var row = table.insertRow(2);
    
}

function insert(tableDataEl){
    var inputNodeEl = document.createElement('INPUT');
    inputNodeEl.setAttribute('type', 'text');
    inputNodeEl.value = tableDataEl.innerHTML;
    tableDataEl.parentNode.appendChild(inputNodeEl);

    inputNodeEl.onkeypress = function(){
        tableDataEl.innerHTML = inputNodeEl.value;
    }
    inputNodeEl.onblur = function(){
        this.remove();
    }

    console.log(tableDataEl);
}