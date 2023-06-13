import { dataRecordPred } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/JS/main.js";
export let dataGetRecords;
const ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
let passForDB = Math.random()
  localStorage["PassForDB"] = localStorage["PassForDB"] ? localStorage["PassForDB"] : localStorage["PassForDB"] = JSON.stringify(passForDB);

let updatePassword;
const stringName = 'CHK123';
export function storeInfo() {
  updatePassword = JSON.parse(localStorage["PassForDB"])
  $.ajax({
    url: ajaxHandlerScript,
    type: 'POST',
    cache: false,
    dataType: 'json',
    data: {
      f: 'LOCKGET',
      n: stringName,
      p: updatePassword
    },
    success: lockGetReady,
    error: errorHandler
  });
}
function lockGetReady(callresult) {
  if (callresult.error != undefined) alert(callresult.error);else {
    // нам всё равно, что было прочитано -
    // всё равно перезаписываем
    let info = new Object();
    let record = new Array();
    record.push(dataRecordPred);
    record.push(dataGetRecords);
    info.record = record.flat();
    $.ajax({
      url: ajaxHandlerScript,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'UPDATE',
        n: stringName,
        v: JSON.stringify(info),
        p: updatePassword
      },
      success: updateReady,
      error: errorHandler
    });
  }
}
function updateReady(callresult) {
  if (callresult.error != undefined) alert(callresult.error);
  lockGetReady();
}

function errorHandler(jqXHR, statusStr, errorStr) {
  alert(statusStr + ' ' + errorStr);
}
