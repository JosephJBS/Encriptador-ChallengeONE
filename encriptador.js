function textEncryptDecrypttByButtonId(action) {
    var noContenDivExist = true

    //obtiene texto del textarea
    var text = document.getElementById("input-txtarea");
    var textValue = text.value;

    var containerDiv = document.querySelector(".output-area")
    const divOutPut = document.getElementById("output-nocontent")
    var div = document.createElement('div');

    //Verifica la presencia del div NoContent
    if (divOutPut == null) {
        noContenDivExist = false
        console.log("Imagen de NoContent no presente")
    } else {
        var parent = divOutPut.parentNode;
        console.log("Imagen de NoContent no presente")
        containerDiv.appendChild(div)
    }

    
    if(validateTextArea(textValue.trim())){
        // Si el div noContent existe se elimina para poner el textarea de salida
        if (noContenDivExist) parent.removeChild(divOutPut);

        // Verifica si se realizara el encriptado o desencrriptado
        (action.id == "encrypt") ? encryptedText = encryptor(textValue.trim())
            : encryptedText = decryptor(textValue.trim())

        if (htmlElementExist("output-txtarea")) {
            var outputTex = document.getElementById("output-txtarea");
            outputTex.value = encryptedText;
        } else showOutputTxtArea(div, encryptedText);
    }
}

function copyText() {
    var text = document.getElementById("output-txtarea");
    text.select()
    navigator.clipboard.writeText(text.value)
        .then(function () {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Texto copiado en portapapeles',
                showConfirmButton: false,
                timer: 1200
            })
        })
        .catch(function () {
            alert("Error al copiar el texto al portapapeles.");
        });
}

function showOutputTxtArea(div, text) {
    let html = `<textarea disabled name="" id="output-txtarea" cols="20" rows="10"  class="output-txtarea">${text}</textarea> 
                    <input type="submit" id="bt-copy" onclick="copyText()" value="Copiar" class="bt-copiar" />`;

    div.insertAdjacentHTML('beforeend', html);
}

function htmlElementExist(idElement) {
    var divOutPut = document.getElementById(idElement)
    if (divOutPut != null) return true;
    else return false;
}

function encryptor(text) {
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

function decryptor(text) {
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

function validateTextArea(text) {
    var validado = true;
    words = String(text);
    var regxs = {
        "upper": /[A-Z]/,
        "accents": /[áéíóú]/
    }

    if (text == ""){
        sweetAlertWarning("Ingrese un mensaje ☺");
        validado = false
    }

    if (regxs.upper.test(words)){
        sweetAlertWarning("Ingrese un texto en minusculas ☺");
        validado = false;
    }

    if (regxs.accents.test(words)){
        sweetAlertWarning("Ingrese un texto sin acentos ☺");
        validado = false;    
    }

    return validado;
}

function sweetAlertWarning(mensaje){
    Swal.fire({
        title: mensaje,
        icon: "warning",
        confirmButtonColor: '#0a3871',
    });
}