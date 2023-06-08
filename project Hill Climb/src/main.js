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
    '/Hill_Climb/project%20Hill%20Climb/src/view/view_main/': 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start.html',
        '/Hill_Climb/project%20Hill%20Climb/src/view/view_result/': 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_result/result.html',
        '/Hill_Climb/project%20Hill%20Climb/src/view/view_setting/': 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_setting/seting.html',
    
}
const handleLocation = async ()=>{
    const path = location.pathname;
    const html1 = await fetch(routers[path]).then((data) => data.text());
    document.querySelector('.contener').innerHTML = html1;


}

window.onpopstate = handleLocation;
window.route = route;
handleLocation()
