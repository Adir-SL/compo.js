/*
function loadPage() {
    const box = document.getElementById('box');

    fetch('hero.html')
        .then(response => response.text())
        .then(html => {
        box.innerHTML = html;
        })
        .catch(error => {
        console.log(error);
        });
    }
    loadPage();
*/

function findTags(){
    // var x = document.body.children;
    var x = document.querySelectorAll("*");
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].tagName.includes("-") == true){
            const box = x[i];
            fetch(x[i].tagName + '.html')
                .then(response => response.text())
                .then(html => {
                box.innerHTML = html;
                })
                .catch(error => {
                console.log(error);
                });
        }
    }
}

function replaceProps(){
    // Replace all acceptable props from any element's parent. Scan the entire body for those.
}

function editStyles(){
    console.log(document.styleSheets[0].href.slice(document.styleSheets[0].href.lastIndexOf('/')+1,-4))
    temp = document.styleSheets[0].cssRules[0].selectorText;
    tempSelector = document.styleSheets[0].href.slice(document.styleSheets[0].href.lastIndexOf('/')+1,-4);
    document.styleSheets[0].cssRules[0].selectorText = tempSelector + " " + temp;

    // Take existing styles and enclose them inside their parent tags to scope them eg: button{} == button-primary button{}
}

findTags();
editStyles();