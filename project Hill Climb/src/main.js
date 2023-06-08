document.addEventListener('click', eo =>{
    eo = eo || window.event;
    target = eo.target || eo.srcElement
    eo.preventDefault();
    console.log(eo.target.tagName);
    if(eo.target.tagName == 'BUTTON'){
        console.log(eo.target.tagName);
        route(eo);
    }
    
})
const route = (eo)=>{
    eo = eo || window.event
    console.log(eo.target.href);
    history.pushState({}, '', eo.target.href);
    handleLocation();
}
const routers = {
    '/index.html': 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_menu/menu.html',
    '/New game': 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start'
}
const handleLocation = async ()=>{
    const path = location.pathname;
    const html = await fetch(routers[path]).then((data) => data.text());
    document.querySelector('.contener').innerHTML = html;


}

window.onpopstate = handleLocation;
window.route = route;
handleLocation()
