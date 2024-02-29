function check() {
    var table = document.createElement("table");
    const row0 = table.insertRow(0);
    const header0 = document.createElement("th");
    const header1 = document.createElement("th");
    const header2 = document.createElement("th");

    header0.innerHTML = "Units Range";
    header1.innerHTML = "Number Of Units";
    header2.innerHTML = "Price Per Unit";

    row0.appendChild(header0);
    row0.appendChild(header1);
    row0.appendChild(header2);

    table.appendChild(row0)
    
    const row1 = table.insertRow(1);
    const row2 = table.insertRow(2);
    const row3 = table.insertRow(3);

    row1.insertCell(0).innerHTML = "60 -90 ";
    row1.insertCell(1).innerHTML = "30";
    row1.insertCell(2).innerHTML = "41";

    row2.insertCell(0).innerHTML = "91 - 121";
    row2.insertCell(1).innerHTML = "30";
    row2.insertCell(2).innerHTML = "59";

    row3.insertCell(0).innerHTML = "121 - 180";
    row3.insertCell(1).innerHTML = "50";
    row3.insertCell(2).innerHTML = "59";

    table.className = "table1";
    document.getElementById("div").appendChild(table);

}