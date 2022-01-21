function $g(selector) {
    //判斷是否為id selector
    if (selector.includes('#') && !selector.includes(' ')) {
        //回傳Element
        return document.querySelector(selector);
    }

    //回傳NodeList集合
    let nodelist = document.querySelectorAll(selector);

    return nodelist.length == 1 ? nodelist[0] : nodelist;
}

function $gg(selector){
    let nodelist = document.querySelectorAll(selector)

    if(nodelist.length==0){
        return null
    }

    return nodelist.length == 1 ? nodelist[0] : nodelist
}

function $ce(element, text) {
    const el = document.createElement(element)

    if (typeof (text) !== 'undefined' && typeof (text) !== '' && typeof (text) !== null){
        el.innerText = text
    }

    return el
}

export { $g, $gg , $ce}