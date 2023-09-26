function findTags(){
    var x = document.querySelectorAll("*");
    var i;
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
            setTimeout(function(){ editStyles(); }, 500);
            setTimeout(function(){ replaceProps(); }, 300);
        }
    }
}

function replaceProps(){
    // Replace all acceptable props from any element's parent. Scan the entire body for those.

    var x = document.querySelectorAll("*");
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].outerHTML.slice(0,x[i].outerHTML.indexOf(">")+1).includes("{") == true){
            validProps(x[i]);
            // varTemp = x[i].outerHTML;
            // varTemp = varTemp.slice(varTemp.indexOf("{"),varTemp.indexOf("}")+1);
            // varRes = x[i].outerHTML;
            // varRes = varRes.slice(varRes.indexOf("}")+2,varRes.indexOf(">"));

            // if(varRes.includes(" ") == true){
            //     varRes = varRes.slice(0,varRes.indexOf(" "));
            // }

            // - Needs to support multiple {vars} in the same element.

            // if(varRes.includes('"') == true){
            //     varRes = varRes.replace(/"/g, "");
            // }
            // if(varRes !== ''){
            //     console.log(varTemp +","+varRes+"  ("+x[i].tagName+")");
            //     x[i].innerHTML = x[i].innerHTML.replace(new RegExp(varTemp, 'g'), varRes);
            //     // - Add support for replacing multiple times.
            // }

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
        console.log(varTemp + " : " + varRes + "("+y.attributes.length+")");
    }
}

function editStyles(){
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
}

findTags();