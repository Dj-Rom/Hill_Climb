
import { storeInfo } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/ajax.js";
import { dataGetRecords } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/ajax.js";
import { resultGetUserName } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/JS/main.js";
import { resultGetUserResult } from "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/model/model_main/JS/main.js";



import { storeInfo } from "/model/ajax.js";
import { dataGetRecords } from "/model/ajax.js";
import { resultGetUserName } from "../model_main/JS/main.js";
import { resultGetUserResult } from "../model_main/JS/main.js";

const tblRecord = document.getElementById("result_tbl");
const cont = document.querySelector('.contener')
let dataRecordPred = {nameRecord: resultGetUserName, score: resultGetUserResult}

export let dataRecord = {"record":[{nameRecord: "Anton", score: 20300},]} 
dataRecord.record.push(dataRecordPred);

let newData = [];
dataRecord.record.sort(function(a, b) {
    return  b.score - a.score  ;
});
for(let i=0; i<=dataRecord.record.length;i++){
    if(i <=10){       
newData.push({i:dataRecord.record[i]})
}
else if(i>10){break}
}
for(let i = 1; i <= 10; ){
    let pos = document.createElement("tr");
    pos.innerHTML=  `<tr >   <th>${[i]}</th><th>${newData[JSON.stringify(i)]}</th><th>${newData[JSON.stringify(i)]}</th></tr>`
    i++
    tblRecord.append(pos)
}
const btnR = document.createElement("button")
btnR.id = "menuR"
btnR.innerHTML= "MENU"
cont.append(btnR)
document.getElementById('menuR').addEventListener('click',()=>{
    // location = "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_menu/menu.html" 
    storeInfo()
 console.log(dataGetRecords);
})
