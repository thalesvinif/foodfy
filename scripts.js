var modalOverlay = document.querySelector(".modal-overlay");
var cards = document.querySelectorAll(".card");

for (let card of cards) {
    card.addEventListener("click", function(){
        var cardId = card.getAttribute("id");
        var tituloModal = card.getAttribute("h3");
        var chefModal = card.getAttribute("p");
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("img").src = `assets/${cardId}`;
        modalOverlay.querySelector("h3") = tituloModal;
        modalOverlay.querySelector("p").p = chefModal;
    })
}

var fecharModal = document.querySelector(".fechar");
fecharModal.addEventListener("click", function(){modalOverlay.classList.remove("active")});