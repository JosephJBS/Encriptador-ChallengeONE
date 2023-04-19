function getTextAreaContentEncrypted() {
    var noContenDivExist = true
    var text = document.getElementById("input-txtarea");
    var textValue = text.value;

    const divOutPut = document.getElementById("output-nocontent")


    //REFACTOR
    if (divOutPut == null) {
        noContenDivExist = false
        console.log("No existe el img nocontent")
    } else {
        var parent = divOutPut.parentNode;
        console.log("existe el img nocontent")
    }

    var div = document.createElement('div');

    var containerDiv = document.querySelector(".output-area")
    containerDiv.appendChild(div)

    if (textValue == "") {
        Swal.fire({
            title: "Ingrese un mensaje ☺",
            icon: "warning",
            confirmButtonColor: '#0a3871',
        });
    } else {
        if (noContenDivExist) parent.removeChild(divOutPut);
        var encryptedText = encriptador(textValue)
        

        if(htmlElementExist("output-txtarea")){
            var outputTex = document.getElementById("output-txtarea");
            outputTex.value= encryptedText;
        }else{
            showOutputTxtArea(div, encryptedText);
        }
        
        
    }
}

function getTextAreaContentDecrypted() {
    var noContenDivExist = true
    var text = document.getElementById("input-txtarea");
    var textValue = text.value;

    const divOutPut = document.getElementById("output-nocontent")


    //REFACTOR
    if (divOutPut == null) {
        noContenDivExist = false
        console.log("No existe el img nocontent")
    } else {
        var parent = divOutPut.parentNode;
        console.log("existe el img nocontent")
    }

    var div = document.createElement('div');

    var containerDiv = document.querySelector(".output-area")
    containerDiv.appendChild(div)

    if (textValue == "") {
        Swal.fire({
            title: "Ingrese un mensaje ☺",
            icon: "warning",
            confirmButtonColor: '#0a3871',
        });
    } else {
        if (noContenDivExist) parent.removeChild(divOutPut);
        var encryptedText = desencriptador(textValue)
        

        if(htmlElementExist("output-txtarea")){
            var outputTex = document.getElementById("output-txtarea");
            outputTex.value= encryptedText;
        }else{
            showOutputTxtArea(div, encryptedText);
        }
        
        
    }

}

function showOutputTxtArea(div, text) {
    let html = `<textarea disabled name="" id="output-txtarea" cols="20" rows="10"  class="output-txtarea">${text}</textarea> 
                    <input type="submit" value="Copiar" class="bt-copiar" />`;

    div.insertAdjacentHTML('beforeend', html);
}

function htmlElementExist(idElement) {
    var divOutPut = document.getElementById(idElement)
    if (divOutPut != null) return true;
    else return false;
}

function encriptador(text) {
    const chars = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat",
    };

    var s = text;
    s = s.replace(/[aeiou]/g, (m) => chars[m]);
    return s;
}

function desencriptador(text) {
    const chars = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u",
    };

    var s = text;
    s = s.replace(/(?:ai|enter|imes|ober|ufat)/g, (m) => chars[m]);
    return s;
}
