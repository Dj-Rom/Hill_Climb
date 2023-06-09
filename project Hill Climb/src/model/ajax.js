
import { dataRecord } from "./model_result/model_result.js";
export let dataGetRecords;

const ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";

let updatePassword;
const stringName='AlehKapusta';

export function storeInfo() {
    updatePassword=Math.random();
    $.ajax( {
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'LOCKGET', n : stringName, p : updatePassword },
            success : lockGetReady, error : errorHandler
        }
    );
}

function lockGetReady(callresult, ) {
    if ( callresult.error!=undefined )
        alert(callresult.error);
    else {
       
        // нам всё равно, что было прочитано -
        // всё равно перезаписываем
        const info={
          record : dataRecord
        };
        $.ajax( {
                url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
                data : { f : 'UPDATE', n : stringName,
                    v : JSON.stringify(info), p : updatePassword },
                success : updateReady, error : errorHandler
            }
        );
    }
}





function updateReady(callresult) {
    if ( callresult.error!=undefined )
        alert(callresult.error);
}

function restoreInfo() {
    $.ajax(
        {
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'READ', n : stringName },
            success : readReady, error : errorHandler
        }
    );
}

function readReady(callresult) {
    if ( callresult.error!=undefined )
        alert(callresult.error);
    else if ( callresult.result!="" ) {
        const info=JSON.parse(callresult.result);

            dataGetRecords =  info.record
      
    }
}

function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}

restoreInfo();



