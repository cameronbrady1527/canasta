// Default page behaviors
window.onload = function() {
    if (window.location.hash) {
        history.replaceState(null, '', window.location.href.split('#')[0]);
    }

    setTimeout(function() {
        window.scrollTo(0, 0)
    }, 0);
}


// Item and Function Definitions
const ol = document.querySelector('#rule-nav ol');

function navClicked(e) {
    
    const childrenLI = Array.from(ol.children);
    childrenLI.forEach((li) => {
        li.firstElementChild.style.color = '#453c3c';
    });
    
    const h2s = document.querySelectorAll('section h2');
    h2s.forEach(subtitle => subtitle.style.color = '#453c3c');

    const targetLI = e.target.closest('li');
    const class_name = targetLI.className;
    const desiredID = String(class_name).substring(9);
    
    const h2 = document.getElementById(desiredID).querySelector('h2');
    h2.style.color = 'rgb(230, 30, 30)';
    targetLI.firstElementChild.style.color = 'rgb(230, 30, 30)';
}

// Event Listeners
ol.addEventListener('click', navClicked);
