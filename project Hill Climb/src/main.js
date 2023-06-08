document.addEventListener('click', eo =>{
    eo = eo || window.event;
    target = eo.target || eo.srcElement
    eo.preventDefault();
    
    if(eo.target.tagName == 'BUTTON' || eo.target.tagName == 'A' ){
        route(eo);
    }
    
})
const route = (eo)=>{
    eo = eo || window.event

    history.pushState({}, '', eo.target.href);
    handleLocation();
}
const routers = {
    '/Hill_Climb/project%20Hill%20Climb/src/': "https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_menu/menu.html" ,
    '/Hill_Climb/project%20Hill%20Climb/src/game':"https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start.html",
        '/Hill_Climb/project%20Hill%20Climb/src/result.html': 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/result.html',
        '/Hill_Climb/project%20Hill%20Climb/src/seting.html': 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/setting.html',
    
}
const handleLocation = async ()=>{
    const path = location.pathname;
    const html = await fetch(routers[path]).then((data) => data.text());
   
    document.querySelector('.contener').innerHTML = html;


}

window.onpopstate = handleLocation;
window.route = route;
handleLocation()


