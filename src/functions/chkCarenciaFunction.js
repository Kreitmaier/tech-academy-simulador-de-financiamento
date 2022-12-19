
const chkCarencia = document.querySelector("#carencia");

chkCarencia.addEventListener("change", () => {
    const optCarenciaTempo = document.querySelector("#carenciaTempo");
    if(chkCarencia.checked){
        optCarenciaTempo.removeAttribute("hidden");
    } else {
        optCarenciaTempo.setAttribute("hidden", true);
    }
});