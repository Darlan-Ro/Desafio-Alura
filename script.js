var botaoCriptografar = document.querySelector(".botao-criptografar");
var botaoDescriptografar = document.querySelector(".botao-descriptografar");
var containerDireito = document.querySelector(".container__direito");
var containerParagrafo = document.querySelector(".container-paragrafo");
var containerResultado = document.querySelector(".texto__resultado");


botaoCriptografar.onclick = criptografar;
botaoDescriptografar.onclick = descriptografar;

function criptografar() {
    ocultarDepois();
    var containerCriptografarInput = recuperarTexto();
    containerResultado.textContent = criptografarTexto(containerCriptografarInput);
}

function descriptografar() {
    ocultarDepois();
    var containerCriptografarInput = recuperarTexto();
    containerResultado.textContent = descriptografarTexto(containerCriptografarInput);
}

function recuperarTexto() {
    var containerCriptografarInput = document.querySelector(".container__criptografar__input");
    return containerCriptografarInput.value;
}

function ocultarDepois() {
    containerDireito.classList.add("ocultar");
    containerParagrafo.classList.add("ocultar");
}

function criptografarTexto(mensagem) {
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        } else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        } else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        } else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        } else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        } else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function descriptografarTexto(mensagem) {
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        } else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        } else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        } else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        } else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        } else{
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

const botaoCopiar = document.querySelector(".botao__copiar");
botaoCopiar.addEventListener("click", copiar = () => {
    var conteudo = document.querySelector(".texto__resultado").textContent;
    navigator.clipboard.writeText(conteudo);
    console.log("Olá");
});