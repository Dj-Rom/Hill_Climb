

import { dataGetRecords } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/ajax.js";


// import { read } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/ajax.js";
let passForDB = Math.random()
  localStorage["PassForDB"] = localStorage["PassForDB"] ? localStorage["PassForDB"] : localStorage["PassForDB"] = JSON.stringify(passForDB);

const tblRecord = document.getElementById("result_tbl");
const cont = document.querySelector('.contener');
let newData = [];
const btnR = document.createElement("button");
btnR.id = "menuR";
btnR.innerHTML = "MENU";
cont.append(btnR);
let dataPass = JSON.parse(localStorage["PassForDB"])
let ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
window.onload = Read();
const stringName = 'CHK123';

function Read() {
  $.ajax({
    url: ajaxHandlerScript,
    type: 'POST',
    cache: false,
    dataType: 'json',
    data: {
      f: 'LOCKGET',
      n: 'CHK123',
      p: dataPass
    },
    success: restoreInfo1,
    error: errorHandler
  });
  function restoreInfo1() {
    $.ajax({
      url: ajaxHandlerScript,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'READ',
        n: 'CHK123'
      },
      success: readReady,
      error: errorHandler
    });
  }
  function readReady(callresult) {
    if (callresult.error != undefined) alert(callresult.error);else if (callresult.result != "") {
      const info = JSON.parse(callresult.result);
      let dataRecordTable;
      dataRecordTable = info.record;
      dataRecordTable = dataRecordTable.filter(item => item);
      dataRecordTable.sort(function (a, b) {
        return b.score - a.score;
      });
      for (let i = 0; i <= dataRecordTable.length; i++) {
        if (i <= dataRecordTable.length) {
          newData.push(dataRecordTable[i]);
        } else if (i > 10) {
          break;
        }
      }
      for (let i = 0; i < newData.length - 2;) {
        let pos = document.createElement("tr");
        pos.innerHTML = `<tr >   <th>${[i + 1]}</th><th>${newData[i].nameRecord}</th><th>${newData[i].score}</th></tr>`;
        i++;
        tblRecord.append(pos);
      }
      return dataRecordTable;
    }
  }
  function errorHandler(jqXHR, statusStr, errorStr) {
    alert(statusStr + ' ' + errorStr);
  }
  document.addEventListener('click', () => {
    location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_menu/menu.html";
    Read();
  });
}
