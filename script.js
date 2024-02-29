function calculate() {

    var start_date = document.getElementById("start-date").value;
    var end_date = document.getElementById("current-date").value;

    var starting_units = document.getElementById("starting-units").value;
    var current_units = document.getElementById("current-units").value;

    if (start_date == "" || end_date == "") {

        alert("Please Select Start Date And Current Date");

    } else {

        if (starting_units == "" || current_units == "") {

            alert("Please Enter Your Starting Units And Current Units");

        } else {

            var dateObj1 = new Date(start_date);
            var dateObj2 = new Date(end_date);
            var dateDiff = dateObj2.getTime() - dateObj1.getTime();
            var dateRange = dateDiff / (1000 * 3600 * 24);

            //table creation

            var table = document.createElement("table");

            // first row

            var row1 = table.insertRow(0);
            var cell1 = row1.insertCell(0);
            var cell2 = row1.insertCell(1);

            cell1.innerHTML = "Date Range";
            cell2.innerHTML = dateRange;

            // second row

            var row2 = table.insertRow(1);
            var cell3 = row2.insertCell(0);
            var cell4 = row2.insertCell(1);

            cell3.innerHTML = "Unit Range";
            var unitRange = current_units - starting_units;
            cell4.innerHTML = unitRange;

            // third row

            var row3 = table.insertRow(2);
            var cell5 = row3.insertCell(0);
            var cell6 = row3.insertCell(1);

            cell5.innerHTML = "Number of units for 30 days";
            var numOfUnits = Math.round((unitRange / dateRange) * 30);
            cell6.innerHTML = numOfUnits;

            // forth row

            var row4 = table.insertRow(3);
            var cell7 = row4.insertCell(0);
            var cell8 = row4.insertCell(1);

            cell7.innerHTML = "Your fixed charge";

            table.className = "table1";
            document.getElementById("div").appendChild(table);

            document.getElementById("button").disabled = true;

            //second table

            if (numOfUnits <= 60 && numOfUnits > 0) {

                if (numOfUnits <= 30) {

                    cell8.innerHTML = 180;

                    var table1 = document.createElement("table");
                    const t1row0 = table1.insertRow(0);
                    const header0 = document.createElement("th");
                    const header1 = document.createElement("th");
                    const header2 = document.createElement("th");

                    header0.innerHTML = "Units Range";
                    header1.innerHTML = "Number Of Units";
                    header2.innerHTML = "Price Per Unit";

                    t1row0.appendChild(header0);
                    t1row0.appendChild(header1);
                    t1row0.appendChild(header2);

                    table1.appendChild(t1row0);

                    const t1row1 = table1.insertRow(1);

                    t1row1.insertCell(0).innerHTML = "0 - 30 ";
                    t1row1.insertCell(1).innerHTML = numOfUnits;
                    t1row1.insertCell(2).innerHTML = 12;

                    table1.className = "table1";
                    document.getElementById("div-1").appendChild(table1);

                    document.getElementById("bill").innerHTML = numOfUnits * 12 + 180;

                } else {

                    cell8.innerHTML = 360;

                    var table1 = document.createElement("table");
                    const t1row0 = table1.insertRow(0);
                    const header0 = document.createElement("th");
                    const header1 = document.createElement("th");
                    const header2 = document.createElement("th");

                    header0.innerHTML = "Units Range";
                    header1.innerHTML = "Number Of Units";
                    header2.innerHTML = "Price Per Unit";

                    t1row0.appendChild(header0);
                    t1row0.appendChild(header1);
                    t1row0.appendChild(header2);

                    table1.appendChild(t1row0)

                    const t1row1 = table1.insertRow(1);
                    const t1row2 = table1.insertRow(2);
                    const t1row3 = table1.insertRow(3);

                    t1row1.insertCell(0).innerHTML = "0 - 30 ";
                    t1row1.insertCell(1).innerHTML = 30;
                    t1row1.insertCell(2).innerHTML = 12;

                    t1row2.insertCell(0).innerHTML = "30 - 60";
                    t1row2.insertCell(1).innerHTML = (numOfUnits - 30);
                    t1row2.insertCell(2).innerHTML = 30;

                    table1.className = "table1";
                    document.getElementById("div-1").appendChild(table1);

                    document.getElementById("bill").innerHTML = 30 * 12 + (numOfUnits - 30) * 30 + 360;

                }

            } else {

                if (numOfUnits >= 61 && numOfUnits <= 90) {

                    cell8.innerHTML = 480;

                    var table1 = document.createElement("table");
                    const t1row0 = table1.insertRow(0);
                    const header0 = document.createElement("th");
                    const header1 = document.createElement("th");
                    const header2 = document.createElement("th");

                    header0.innerHTML = "Units Range";
                    header1.innerHTML = "Number Of Units";
                    header2.innerHTML = "Price Per Unit";

                    t1row0.appendChild(header0);
                    t1row0.appendChild(header1);
                    t1row0.appendChild(header2);

                    table1.appendChild(t1row0)

                    const t1row1 = table1.insertRow(1);

                    t1row1.insertCell(0).innerHTML = "61 - 90 ";
                    t1row1.insertCell(1).innerHTML = numOfUnits;
                    t1row1.insertCell(2).innerHTML = 41;

                    table1.className = "table1";
                    document.getElementById("div-1").appendChild(table1);

                    document.getElementById("bill").innerHTML = numOfUnits * 41 + 480;

                } else if (numOfUnits >= 91 && numOfUnits <= 120) {

                    cell8.innerHTML = 1180;

                    var table1 = document.createElement("table");
                    const t1row0 = table1.insertRow(0);
                    const header0 = document.createElement("th");
                    const header1 = document.createElement("th");
                    const header2 = document.createElement("th");

                    header0.innerHTML = "Units Range";
                    header1.innerHTML = "Number Of Units";
                    header2.innerHTML = "Price Per Unit";

                    t1row0.appendChild(header0);
                    t1row0.appendChild(header1);
                    t1row0.appendChild(header2);

                    table1.appendChild(t1row0)

                    const t1row1 = table1.insertRow(1);
                    const t1row2 = table1.insertRow(2);

                    t1row1.insertCell(0).innerHTML = "61 - 90 ";
                    t1row1.insertCell(1).innerHTML = 30;
                    t1row1.insertCell(2).innerHTML = 41;

                    t1row2.insertCell(0).innerHTML = "91 - 120";
                    t1row2.insertCell(1).innerHTML = numOfUnits - 30;
                    t1row2.insertCell(2).innerHTML = 59;

                    table1.className = "table1";
                    document.getElementById("div-1").appendChild(table1);

                    document.getElementById("bill").innerHTML = 30 * 41 + (numOfUnits - 30) * 59 + 1180;

                } else if (numOfUnits >= 121 && numOfUnits <= 180) {

                    cell8.innerHTML = 1770;

                    var table1 = document.createElement("table");
                    const t1row0 = table1.insertRow(0);
                    const header0 = document.createElement("th");
                    const header1 = document.createElement("th");
                    const header2 = document.createElement("th");

                    header0.innerHTML = "Units Range";
                    header1.innerHTML = "Number Of Units";
                    header2.innerHTML = "Price Per Unit";

                    t1row0.appendChild(header0);
                    t1row0.appendChild(header1);
                    t1row0.appendChild(header2);

                    table1.appendChild(t1row0)

                    const t1row1 = table1.insertRow(1);
                    const t1row2 = table1.insertRow(2);
                    const t1row3 = table1.insertRow(3);

                    t1row1.insertCell(0).innerHTML = "61 - 90 ";
                    t1row1.insertCell(1).innerHTML = 30;
                    t1row1.insertCell(2).innerHTML = 41;

                    t1row2.insertCell(0).innerHTML = "91 - 120";
                    t1row2.insertCell(1).innerHTML = 30;
                    t1row2.insertCell(2).innerHTML = 59;

                    t1row3.insertCell(0).innerHTML = "121 - 180";
                    t1row3.insertCell(1).innerHTML = numOfUnits - 60;
                    t1row3.insertCell(2).innerHTML = 59;

                    table1.className = "table1";
                    document.getElementById("div-1").appendChild(table1);

                    document.getElementById("bill").innerHTML = 30 * 41 + 30 * 59 + (numOfUnits - 60) * 59 + 1770;

                } else {

                    cell8.innerHTML = 2360;

                    var table1 = document.createElement("table");
                    const t1row0 = table1.insertRow(0);
                    const header0 = document.createElement("th");
                    const header1 = document.createElement("th");
                    const header2 = document.createElement("th");

                    header0.innerHTML = "Units Range";
                    header1.innerHTML = "Number Of Units";
                    header2.innerHTML = "Price Per Unit";

                    t1row0.appendChild(header0);
                    t1row0.appendChild(header1);
                    t1row0.appendChild(header2);

                    table1.appendChild(t1row0)

                    const t1row1 = table1.insertRow(1);
                    const t1row2 = table1.insertRow(2);
                    const t1row3 = table1.insertRow(3);
                    const t1row4 = table1.insertRow(4);

                    t1row1.insertCell(0).innerHTML = "61 - 90 ";
                    t1row1.insertCell(1).innerHTML = 30;
                    t1row1.insertCell(2).innerHTML = 41;

                    t1row2.insertCell(0).innerHTML = "91 - 120";
                    t1row2.insertCell(1).innerHTML = 30;
                    t1row2.insertCell(2).innerHTML = 59;

                    t1row3.insertCell(0).innerHTML = "121 - 180";
                    t1row3.insertCell(1).innerHTML = 50;
                    t1row3.insertCell(2).innerHTML = 59;

                    t1row4.insertCell(0).innerHTML = "180 - " + numOfUnits + "" ;
                    t1row4.insertCell(1).innerHTML = numOfUnits - 110;
                    t1row4.insertCell(2).innerHTML = 89;

                    table1.className = "table1";
                    document.getElementById("div-1").appendChild(table1);

                    document.getElementById("bill").innerHTML = 30 * 41 + 30 * 59 + 50*59 + (numOfUnits - 110) * 89 + 2360;

                }

            }

        }

    }

}

function tryAgain() {
    document.getElementById("button").disabled = false;

    document.getElementById("start-date").value = "";
    document.getElementById("current-date").value = "";
    document.getElementById("starting-units").value = "";
    document.getElementById("current-units").value = "";

    document.getElementById("div").innerHTML = "";
    document.getElementById("div-1").innerHTML = "";

}