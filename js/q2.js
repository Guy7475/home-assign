'use strict'

function renderTable() {
    const cols = document.querySelector('.cols').value;
    const rows = document.querySelector('.rows').value;
    var strHTML = '<table><tbody>';
    for (var i = 0; i < cols; i++) {
      strHTML += '<tr>';
      for (var j = 0; j < rows; j++) {
        strHTML += `<td> ${(i+1)*(j+1)} </td>`;
      }
      strHTML += '</tr>';
    }
    strHTML += '</tbody></table>';
    document.querySelector('.q2-table').innerHTML = strHTML;
}

  
  
  