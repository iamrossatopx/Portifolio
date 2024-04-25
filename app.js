/*ajuste do conteudo a tela de acordo com o modo (portrait or landscape)*/
if (window.visualViewport.width < window.visualViewport.height) {
    document.getElementById("nav").style.justifyContent = "space-around";
}

window.onresize = function(){ location.reload(); }