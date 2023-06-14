
import { dataRecordPred } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/JS/main.js";
export let dataGetRecords;
const ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";

let passForDB = Math.random()
  localStorage["PassForDB"] = localStorage["PassForDB"] ? localStorage["PassForDB"] : localStorage["PassForDB"] = JSON.stringify(passForDB);
  let updatePassword = JSON.parse(localStorage["PassForDB"])
  const stringName = 'CHK20';
export function storeInfo() {
  
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
  if (callresult.error != undefined) alert(callresult.error1);else {
    // нам всё равно, что было прочитано -
    // всё равно перезаписываем
    let info = new Object();
    let records = new Array();
    records.push(dataRecordPred);
    records.push(dataGetRecords);
    console.log(dataRecordPred);
    console.log(dataGetRecords);
    info.record = records.flat()
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
  else {
  restoreInfo();}
}
function restoreInfo() {
  $.ajax({
    url: ajaxHandlerScript,
    type: 'POST',
    cache: false,
    dataType: 'json',
    data: {
      f: 'READ',
      n: stringName
    },
    success: readReady,
    error: errorHandler
  });
}
function readReady(callresult) {
  if (callresult.error != undefined) {
    alert(callresult.error);
  } else if (callresult.result != "") {
    const info = JSON.parse(callresult.result);
    dataGetRecords = info.record;
    return dataGetRecords;
  }
}
function errorHandler(jqXHR, statusStr, errorStr) {
  alert(statusStr + ' ' + errorStr);
}
