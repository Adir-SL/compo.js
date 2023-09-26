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
        }
    }
}

function replaceProps(){
    // Replace all acceptable props from any element's parent. Scan the entire body for those.
    var x = document.querySelectorAll("*");
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].outerHTML.includes("{") == true){
            varTemp = x[i].outerHTML;
            varTemp = varTemp.slice(varTemp.indexOf("{")+1,varTemp.indexOf("}"));
            varRes = x[i].outerHTML;
            varRes = varRes.slice(varRes.indexOf("}")+2,varRes.indexOf(">"));
            if(varRes.includes('"') == true){
                varRes = varRes.replace(/"/g, "");
            }

            x[i].innerHTML = x[i].innerHTML.replace(/varTemp/g, varRes);
            console.log(varTemp +","+varRes)

            // var z = x[i].children;
            // var e;
            // for (e = 0; e < z.length; e++) {
            //     z[e].
            // }

        }
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