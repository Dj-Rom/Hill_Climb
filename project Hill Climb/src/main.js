document.addEventListener('click', eo =>{
    eo = eo || window.event;
    target = eo.target || eo.srcElement
    eo.preventDefault();
    console.log(eo.target.tagName);
    if(eo.target.tagName == 'BUTTON' || eo.target.tagName == 'A' ){
            console.log(eo.target);
        console.log(eo.target.tagName);
        console.log(eo.target.href)
        route(eo);
    }
    
})
const route = (eo)=>{
    eo = eo || window.event

    history.pushState({}, '', eo.target.href);
    handleLocation();
}
const routers = {
    '/Hill_Climb/project%20Hill%20Climb/src/': 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_menu/menu.html',
    '/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start.html': 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start.html',
        '/Hill_Climb/project%20Hill%20Climb/src/view/view_result/result.html': 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_result/result.html',
        '/Hill_Climb/project%20Hill%20Climb/src/view/view_setting/seting.html': 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_setting/seting.html',
    
}
const handleLocation = async ()=>{
    const path = location.pathname;
    const html1 = await fetch(routers[path]).then((data) => data.text());
    document.querySelector('.contener').innerHTML = html1;


}
function SendRequest(query, link)
{
    var xhr = new XMLHttpRequest(); //Создаём объект для отправки запроса

    xhr.open("GET", "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src" , true); //Открываем соединение

    xhr.onreadystatechange = function() //Указываем, что делать, когда будет получен ответ от сервера
    {
   	 if (xhr.readyState != 4) return; //Если это не тот ответ, который нам нужен, ничего не делаем

   	 //Иначе говорим, что сайт загрузился
   	 loaded = true;

   	 if (xhr.status == 200) //Если ошибок нет, то получаем данные
   	 {
   		 GetData(JSON.parse(xhr.responseText), link);
   	 }
   	 else //Иначе выводим сообщение об ошибке
   	 {
   		 alert("Loading error! Try again later.");
   		 console.log(xhr.status + ": " + xhr.statusText);
   	 }
    }

    loaded = false; //Говорим, что идёт загрузка

    //Устанавливаем таймер, который покажет сообщение о загрузке, если она не завершится через 2 секунды
    setTimeout(ShowLoading, 2000);
    xhr.send()
window.onpopstate = handleLocation;
window.route = route;
handleLocation()
