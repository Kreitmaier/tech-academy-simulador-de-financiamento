const tableBody = document.querySelector("#tableBody");

export function clearTableBody(){
    while(tableBody.firstChild){
        tableBody.removeChild(tableBody.firstChild);
    }
}