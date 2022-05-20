function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

async function animate(e) {
    await wait(200);
    e.dataset.slidevisible = 'true';
}

function showSlide(id) {
    var elemsList = document.querySelectorAll('.slide');
    for (var i = 0; i < elemsList.length; i++) {
        if (elemsList[i].id === id) {
            animate(elemsList[i]);
        } else {
            elemsList[i].dataset.slidevisible = 'false';
        }
    }
}

function setBtnFunction(number) {
    var elem = document.querySelectorAll(`[data-num="${number}"]`)[0];
    elem.onclick = () => {
        showSlide(`slide${number}`);
    }
}

function setButtonFunctions() {
    let btns = document.getElementsByClassName('item');
    for (var i = 0; i < btns.length; i++) {
        setBtnFunction(i);
    }
}

setButtonFunctions();
