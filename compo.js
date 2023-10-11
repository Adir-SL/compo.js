function findTags() {
    var x = document.querySelectorAll("*");
    var promises = [];

    for (var i = 0; i < x.length; i++) {
        if (x[i].tagName.includes("-")) {
            const box = x[i];
            const tempTag = x[i].tagName.toLowerCase();

            promises.push(
                fetch(tempTag + '.html')
                    .then(response => response.text())
                    .then(html => {
                        box.innerHTML = html;
                    })
                    .catch(error => {
                        console.log(error);
                    })
            );
        }
    }

    Promise.all(promises)
        .then(() => {
            setTimeout(function(){ editStyles(); }, 250);
            setTimeout(function(){ replaceProps(); }, 10);
        });
}

function editStyles(){
    var x = document.styleSheets;
    var i;
    for (i = 0; i < x.length; i++) {
        tempSelector = x[i].href.slice(x[i].href.lastIndexOf('/')+1,-4);
        if(tempSelector.includes("-") == true){
            fixStyles(x[i], tempSelector);
        }
    }
}

function fixStyles(z, o){
    var y = z.cssRules;
    var j;
    for (j = 0; j < y.length; j++) {
        temp = y[j].selectorText;
        y[j].selectorText = o + " " + temp;
    }
}

function replaceProps(){
    var t = document.querySelectorAll("*");
    var b;
    for (b = 0; b < t.length; b++) {
        if(t[b].outerHTML.slice(0,t[b].outerHTML.indexOf(">")+1).includes("{") == true){
            validProps(t[b]);
        }
    }
}

function validProps(y){
    var z = y.attributes;
    var w;
    for (w = 0; w < z.length; w++) {
        varTemp = z[w].nodeName;
        varRes = z[w].nodeValue;
        y.innerHTML = y.innerHTML.replace(new RegExp(varTemp, 'g'), varRes);
    }
}

findTags();