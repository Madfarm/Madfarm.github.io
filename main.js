const menu = document.getElementById('menu');

const title = document.getElementById('name');
const scrolledTitle = document.getElementById('scrolled-name')


const topbar = document.getElementById('topbar');
const backgroundImage = document.querySelector('#menu-background-image');


scrolledTitle.classList.add('onload');

title.classList.add('hidden');

const backgroundOptions = {
    rootMargin: "-250px 0px 0px 0px"
};

const backgroundImageObserver =  new IntersectionObserver(function(
    entries,
    backgroundImageObserver
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            scrolledTitle.classList.toggle('hidden');
            title.classList.toggle('hidden');
            scrolledTitle.classList.remove('onload');
        } else {
           title.classList.toggle('hidden');
           scrolledTitle.classList.toggle('hidden');
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