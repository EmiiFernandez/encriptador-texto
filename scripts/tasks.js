const text = document.querySelector("#texto");
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const sinMensaje = document.querySelector(".sinmensaje");
const textSalida = document.querySelector(".textsalida");
const tSalida = document.querySelector("#tsalida");
const mSalida = document.querySelector("#mSalida");
const btnCopiar = document.querySelector("#copiar");
const bCopiar= document.querySelector(".bCopiar")

/* ---------------Recibir texto encriptado--------------- */
function normalizar() {
  let capturar = capturarTexto(text.value);
  let normalizar = normalizarTexto(capturar);
  //console.log(normalizar);
  return normalizar;
}

/* ---------------Recibir texto encriptado--------------- */

function botonEncriptar() {
    btnEncriptar.addEventListener("click", function (e) {
    e.preventDefault();

    console.log("Encriptando...");

    let textoNormalizado = normalizar();

    if (textoNormalizado.length >= 1) {
        let encriptado = encriptarTexto(textoNormalizado);

        textoNormalizado = encriptado;

        sinMensaje.classList.add("ocultar");
        
        textSalida.classList.remove("ocultar");

        bCopiar.classList.remove("ocultar")

        tSalida.innerHTML = `<textarea id="mSalida">${encriptado}</textarea>`;

        console.log(encriptado);

        return encriptado;
        } else {
            sinMensaje.classList.remove("ocultar");
            textSalida.classList.add("ocultar");
            bCopiar.classList.add("ocultar")

            console.error('Ingrese el texto a encriptar');
        }
    });
}

/* ---------------Desencriptar texto--------------- */

function botonDesencriptar() {
    
    btnDesencriptar.addEventListener('click', function (e) {
        e.preventDefault();
        
        console.log('Desencriptando...');
        
        let textoNormalizado = normalizar();

        if (textoNormalizado.length >= 1) {
            let desencriptado = desencriptarTexto(textoNormalizado);
    
            textoNormalizado = desencriptado;
    
            sinMensaje.classList.add("ocultar");
            textSalida.classList.remove("ocultar");
            bCopiar.classList.remove("ocultar")

    
            tSalida.innerHTML = `<textarea id="mSalida">${desencriptado}</textarea>`;
    
            console.log(desencriptado);
    
            return desencriptado;
            } else {
                sinMensaje.classList.remove("ocultar");
                textSalida.classList.add("ocultar");
                bCopiar.classList.add("ocultar")

                
                console.error('Ingrese el texto a desencriptar');
            }
        });
    }
    

/* ---------------Copiar texto--------------- */
btnCopiar.addEventListener("click", function (e) {
    e.preventDefault();

    const salida = document.querySelector("#mSalida").value;

    navigator.clipboard.writeText(salida);

    console.error(`Texto copiado = ${salida}`);
});

