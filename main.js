const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const btnFormat = document.querySelector(".controls__button--format");
const btnmenor = document.querySelector(".controls__button--menor");

btnFormat.addEventListener("click", () => {
  const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 4); 

  outputArea.value = formatted;
});

btnmenor.addEventListener("click", ()=>{
    const menor = JSON.stringify(JSON.parse(inputArea.value));

    outputArea.value = menor;
});