
let passForDB = Math.random()
  localStorage["PassForDB"] = localStorage["PassForDB"] ? localStorage["PassForDB"] : localStorage["PassForDB"] = JSON.stringify(passForDB);
  let dataPass = JSON.parse(localStorage["PassForDB"])
const tblRecord = document.getElementById("result_tbl");
const cont = document.querySelector('.result_tblDiv');
let newData = [];



let ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
Read();



function Read() {
  const stringName = 'CHK20';
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
     
      dataRecordTable = dataRecordTable.filter(item => item);
      dataRecordTable.sort(function (a, b) {
        return b.score - a.score;
      });
      
      for (let i = 0; i < dataRecordTable.length;) {
        let pos = document.createElement("tr");
     
        pos.innerHTML = `<tr >   <th>${[i + 1]}</th><th>${dataRecordTable[i].score}</th><th>${dataRecordTable[i].nameRecord}</th></tr>`;
        i++;
        tblRecord.append(pos);
        if(i==10){
        
          pos.innerHTML = ` <br> <tr > <th> </th><th> <button type="button" id="menuR">back</button></th><th>  </th></tr> <br>`
 
          tblRecord.append(pos);
          break;}
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

