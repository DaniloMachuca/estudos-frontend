// document.addEventListener("DOMContentLoaded", function () {
//   document
//     .getElementById("btn-search-cep")
//     .addEventListener("click", function () {
//       const xhttp = new XMLHttpRequest();
//       const cep = document.getElementById("cep").value;
//       const endPoint = `https://viacep.com.br/ws/${cep}/json/`;

//       xhttp.open("GET", endPoint);
//       xhttp.send();
//     });
// });

$(document).ready(function () {
  //Máscara do Cep
  $("#cep").mask("00000-000");

  //evento de click no botão cep
  $("#btn-search-cep").click(function () {
    //setta as constantes
    const cep = $("#cep").val();
    const endPoint = `https://viacep.com.br/ws/${cep}/json/`;
    const btn = $(this);

    //muda o icone e mostra o spinner
    $(btn).find("i").addClass("d-none");
    $(btn).find("span").removeClass("d-none");

    //Adiquiri os dados na api
    // $.ajax(endPoint).done(function (resposta) {
    //   const logradouro = resposta.logradouro;
    //   const bairro = resposta.bairro;
    //   const cidade = resposta.localidade;
    //   const estado = resposta.uf;

    //   const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;

    //   //Coloca os Dados na tela
    //   $("#endereco").val(endereco);

    //   $(btn).find("span").addClass("d-none");
    //   $(btn).find("i").removeClass("d-none");
    // });

    fetch(endPoint)
      .then(function (resposta) {
        return resposta.json();
      })
      .then(function (json) {
        const logradouro = json.logradouro;
        const bairro = json.bairro;
        const cidade = json.localidade;
        const estado = json.uf;

        const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;

        $("#endereco").val(endereco);

        $(btn).find("span").addClass("d-none");
        $(btn).find("i").removeClass("d-none");
      })
      .catch(function (error) {
        alert("Ocorreu um erro ao buscar o cep");
      })
      .finally(function () {
        $(btn).find("span").addClass("d-none");
        $(btn).find("i").removeClass("d-none");
      });
  });

  $("#formulario-pedido").submit(function (e) {
    e.preventDefault();

    if ($("#nome").val().length == 0) {
      throw new Error("Digite o nome");
    }
  });
});
