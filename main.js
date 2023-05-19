const menu = document.getElementById('menu');
const topbarBtn = document.getElementById('topbar-button');
const hamburger = document.getElementById('hamburger');

const backToTopBtn = document.getElementById('back-to-top');
const scrollIndicator = document.getElementById('skill-indicator');

const title = document.getElementById('name');
const scrolledTitle = document.getElementById('scrolled-name')


const topbar = document.getElementById('topbar');
const backgroundImage = document.querySelector('#menu-background-image');

scrolledTitle.classList.toggle('showing');
title.classList.toggle('hidden');


scrolledTitle.classList.add('onload-hide')
title.classList.add('onload-appear')





const backgroundOptions = {
    rootMargin: "-250px 0px 0px 0px"
};

const backgroundImageObserver = new IntersectionObserver(function (
    entries,
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {

            title.classList.remove('onload-appear');

            scrolledTitle.classList.toggle('showing');
            scrolledTitle.classList.toggle('hidden');


            title.classList.toggle('showing');
            title.classList.toggle('hidden');

            scrolledTitle.classList.remove('onload-hide');

        } else {
            title.classList.toggle('showing');
            title.classList.toggle('hidden');

            scrolledTitle.classList.toggle('hidden');
            scrolledTitle.classList.toggle('showing');


        }
    })
}, backgroundOptions)

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.style.setProperty("--active-index", index)
        }
    });


function handleTopMenu(e) {
    if (hamburger.style.display === "block") {
        hamburger.style.display = "none";
    } else {
        hamburger.style.display = "block";
    }
}

const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth"
    });

};

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > 150) {
        backToTopBtn.classList.remove("hidden")
    } else {
        backToTopBtn.classList.add("hidden")
    }
})


topbarBtn.addEventListener('click', handleTopMenu);
backToTopBtn.addEventListener('click', goToTop)


backgroundImageObserver.observe(backgroundImage);