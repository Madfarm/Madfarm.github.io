const menu = document.getElementById('menu');
const title = document.getElementById('name');
const topbar = document.getElementById('topbar');
const backgroundImage = document.querySelector('#menu-background-image');


const backgroundOptions = {};

const backgroundImageObserver =  new IntersectionObserver(function(
    entries,
    backgroundImageObserver
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            title.textContent = "< AS >"
        } else {
            title.textContent = "Anthony Scott"
        }
    })
}, backgroundOptions)

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.style.setProperty("--active-index", index)
        }
    });






backgroundImageObserver.observe(backgroundImage);