/*ajuste do conteudo a tela de acordo com o modo (portrait or landscape)*/
if ((window.visualViewport.width) <= (window.visualViewport.height)) {
    document.getElementById("nav").style.justifyContent = "space-around";
    document.getElementById("titleport").style.flexFlow = "column wrap";
    document.getElementById("titleport").style.paddingBottom = "20vh";
    document.getElementById("title_texts").style.width = "100%";
    document.getElementById("title_avatar").style.width = "70%";
}

window.onresize = function() {
    location.reload();
}

function initialPage() {
    location.href = "index.html";
}

function loadFormacoes() {
    location.href = "formacoes.html";
}

function loadHobbies() {
    location.href = "hobbies.html";
}

function loadExps() {
    location.href = "experiencias.html";
}

function contactme() {
    location.href = "contactme.html";
}