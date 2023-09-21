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
    console.log(x.length);
    for (i = 0; i < x.length; i++) {
        if(x[i].tagName.includes("-") == true){
            const box = x[i];
            tempTag = x[i].tagName.toLocaleLowerCase();
            console.log(tempTag);
            fetch(tempTag + '.html')
                .then(response => response.text())
                .then(html => {
                box.innerHTML = html;
                })
                .catch(error => {
                console.log(error);
                });
        }
        if(i == x.length-1){
            // alert('done');
            setTimeout(function(){ editStyles(); }, 200);
        }
    }
}

function replaceProps(){
    // Replace all acceptable props from any element's parent. Scan the entire body for those.
}

function editStyles(){
    // console.log(document.styleSheets[0].href.slice(document.styleSheets[0].href.lastIndexOf('/')+1,-4))

    var x = document.styleSheets;
    var i;
    for (i = 0; i < x.length; i++) {
        tempSelector = x[i].href.slice(x[i].href.lastIndexOf('/')+1,-4);
        if(tempSelector.includes("-") == true){
            var y = x[i].cssRules;
            var j;
            for (j = 0; i < y.length; j++) {
                temp = y[j].selectorText;
                y[j].selectorText = tempSelector + " " + temp;
            }
        }
    }

    // temp = document.styleSheets[0].cssRules[0].selectorText;
    // tempSelector = document.styleSheets[0].href.slice(document.styleSheets[0].href.lastIndexOf('/')+1,-4);
    // document.styleSheets[0].cssRules[0].selectorText = tempSelector + " " + temp;

    // Take existing styles and enclose them inside their parent tags to scope them eg: button{} == button-primary button{}
}

findTags();
