document.addEventListener('click', eo =>{
    eo = eo || window.event;
    target = eo.target || eo.srcElement
    eo.preventDefault();
    
    if(eo.target.tagName == 'BUTTON' || eo.target.tagName == 'A' ){
          
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
    '/Hill_Climb/project%20Hill%20Climb/src/': (function () {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("contener").innerHTML = this.responseText;
  }
  xhttp.open("GET", eo.target.href );
  xhttp.send();
}},
    '/Hill_Climb/project%20Hill%20Climb/src/view/view_main/main_game_start.html':function () {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("contener").innerHTML = this.responseText;
  }
  xhttp.open("GET", eo.target.href )
  xhttp.send()},
        '/Hill_Climb/project%20Hill%20Climb/src/view/view_result/result.html': 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_result/result.html',
        '/Hill_Climb/project%20Hill%20Climb/src/view/view_setting/seting.html': 'https://dj-rom.github.io/Hill_Climb/project%20Hill%20Climb/src/view/view_setting/seting.html',
    
}
const handleLocation = async ()=>{
    const path = location.pathname;
    const html1 = await fetch(routers[path]).then((data) => data.text());
    document.querySelector('.contener').innerHTML = html1;


}

window.onpopstate = handleLocation;
window.route = route;
handleLocation()
