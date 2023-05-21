const topbarBtn = document.getElementById('topbar-button');
const hamburger = document.getElementById('hamburger');

const handleMouseMove = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}


for(let card of document.querySelectorAll('.card')){
    card.onmousemove = e => handleMouseMove(e);
}

function handleTopMenu(e){
    if (hamburger.style.display === "block"){
        hamburger.style.display = "none";
    } else {
        hamburger.style.display = "block";
    }
}

topbarBtn.addEventListener('click', handleTopMenu);