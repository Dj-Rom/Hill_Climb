import { dataRecordPred } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/JS/main.js";
export let dataGetRecords;
const ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";

let passForDB = Math.random()
  localStorage["PassForDB"] = localStorage["PassForDB"] ? localStorage["PassForDB"] : localStorage["PassForDB"] = JSON.stringify(passForDB);
  let updatePassword = JSON.parse(localStorage["PassForDB"])
  const stringName = 'CHK2023';
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
  if (callresult.error != undefined) alert(callresult.error);else {
    // нам всё равно, что было прочитано -
    // всё равно перезаписываем
    let info = new Object();
    let record = new Array();
    record.push(dataRecordPred);
    record.push(dataGetRecords);
    info.record = record.flat().filter(item => item);
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
  if (callresult.error != undefined) alert(callresult.error111);
  // storeInfo();
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
restoreInfo();
export function read() {
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
    success: restoreInfo,
    error: errorHandler
  });
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
      console.log('3');
    } else if (callresult.result != "") {
      const info = JSON.parse(callresult.result);
      dataGetRecords = info.record;
      return dataGetRecords;
    }
  }
  function errorHandler(jqXHR, statusStr, errorStr) {
    alert(statusStr + ' ' + errorStr);
  }
}