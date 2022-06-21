let questionContainer = document.getElementById('q6');

function createHtmlElement(tag, parent, properties) {
   
    let htmlElement = document.createElement(tag);
    if (properties) {
        Object.entries(properties).forEach(([key, value]) => {
            htmlElement.setAttribute(key, value)
        });
    }
    
    parent.appendChild(htmlElement);
    return htmlElement
};