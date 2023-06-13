

let passForDB = Math.random()
  localStorage["PassForDB"] = localStorage["PassForDB"] ? localStorage["PassForDB"] : localStorage["PassForDB"] = JSON.stringify(passForDB);
  let dataPass = JSON.parse(localStorage["PassForDB"])
const tblRecord = document.getElementById("result_tbl");
const cont = document.querySelector('.contener');
let newData = [];
const btnR = document.createElement("button");
btnR.id = "menuR";
btnR.innerHTML = "MENU";
cont.append(btnR);

let ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
Read();



function Read() {
  const stringName = 'CHK2023';
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
  
    if (callresult.error != undefined) alert(callresult.error);else if (callresult.result != "") {
      const info = JSON.parse(callresult.result);
      let dataRecordTable;
      dataRecordTable = info.record;
      console.log(dataRecordTable);
      dataRecordTable = dataRecordTable
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
      for (let i = 0; i < newData.length;) {
        let pos = document.createElement("tr");
        console.log(newData);
        pos.innerHTML = `<tr >   <th>${[i + 1]}</th><th>${newData[i].score}</th><th>${newData[i].nameRecord}</th></tr>`;
        i++;
        tblRecord.append(pos);
        if(i==10)break;
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

