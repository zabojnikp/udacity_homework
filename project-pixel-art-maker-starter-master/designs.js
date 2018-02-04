//create table on submit
const submit = $("#sizePicker").submit(function(evt) {
  evt.preventDefault();
  $("tr").remove();
  $("td").remove();
  makeGrid();
});

//get the number of rows and columns from user input for table 
function makeGrid() {
    const row = $('#inputHeight').val();
    const column = $('#inputWeight').val();
    addTable(row, column);
}

function addTable(rowsNumber, columnsNumber) {
    for(let i = 0; i < rowsNumber; i++) {
        $('#pixelCanvas').append("<tr></tr>");
        for(let y = 0; y < columnsNumber; y++) {
            $('tr').last().append("<td></td>");  
        };
    };
}

//use selected color to color the canvas fields
const fieldColor = $( "#pixelCanvas" ).on('click', 'td', function() {
   const currentCellColor = $(this).css("background-color");
   const selectedColor = currentCellColor === "rgba(0, 0, 0, 0)" ? $('#colorPicker').val() : "rgba(0, 0, 0, 0)";
   $( this ).css( "background-color", selectedColor);
});

  

