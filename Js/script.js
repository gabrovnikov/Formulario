const form = document.getElementById("form");
//const campos = document.querySelectorAll('.required');
const name = document.querySelector("#name");
const descricao = document.querySelector("#descricao");
const spanName = document.querySelector("#span-name");
const spanDescricao = document.querySelector("#span-descricao");

function descricaoValidate() {
  if (descricao.value.length < 16) {
    console.log("Bug/Sugestão deve ser maior que 15 caracteres");
    setError();
  } else {
    console.log("Validado");
    removeError();
  }

  function setError() {
    descricao.style.border = "2px solid #e63636";
    spanDescricao.style.display = "block";
  }

  function removeError() {
    descricao.style.border = "";
    spanDescricao.style.display = "none";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (name.value === "") {
    alert("Por favor, preencha seu nome");
    return;
  }

  if (descricao.value.length < 11) {
    alert("Bug/Sugestão deve ser maior que 10 caracteres");
    return;
  }

  form.submit();
});
