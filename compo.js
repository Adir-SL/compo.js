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
    var x = document.body.children;
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].tagName.includes("-") == true){
            // console.log(x[i].tagName);

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

findTags();