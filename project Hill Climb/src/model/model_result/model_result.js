
const tblRecord = document.getElementById("result_tbl");
const cont = document.querySelector('.contener')
const dataRecord= {"record":[{nameRecord: "Anton", score: 2000},{nameRecord: "Anton", score: 2000},{nameRecord: "Anton", score: 2000},{nameRecord: "Anton", score: 2000},{nameRecord: "Anton", score: 2000},{nameRecord: "Anton", score: 2000},{nameRecord: "Anton", score: 2000},{nameRecord: "Anton", score: 2000},{nameRecord: "Anton", score: 2000},{nameRecord: "Anton", score: 2000},{nameRecord: "Anton", score: 2000},{nameRecord: "Anton", score: 2000},{nameRecord: "Anton", score: 2000},{nameRecord: "Anton", score: 2000},{nameRecord: "Anton", score: 200450},{nameRecord: "Anton", score: 20006},{nameRecord: "Anton", score: 22000},{nameRecord: "Anton", score: 200},{nameRecord: "Anton", score: 2022200},{nameRecord: "Anton", score: 20000},{nameRecord: "Anton", score: 2000},{nameRecord: "Anton", score: 20030},{nameRecord: "Anton", score: 20300},]} 

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
    pos.innerHTML=  `<tr id="${newData[i]}">   <th>${[i]}</th><th>${newData[JSON.stringify(i)].i.score}</th><th>${newData[JSON.stringify(i)].i.nameRecord}</th></tr>`
    i++
    tblRecord.append(pos)
}
const btnR = document.createElement("button")
btnR.id = "menuR"
btnR.innerHTML= "MENU"
cont.append(btnR)
