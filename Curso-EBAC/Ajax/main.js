//código em javaScript puro:

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

//código em Jquery:

$(document).ready(function () {
  //Máscara do Cep
  $("#cep").mask("00000-000");

  //evento de click no botão cep
  $("#btn-search-cep").click(function () {
    //setta as constantes:
    //constante do cep
    const cep = $("#cep").val();
    //constante da api
    const endPoint = `https://viacep.com.br/ws/${cep}/json/`;
    //constante do botão
    const btn = $(this);

    //muda o icone e mostra o spinner
    $(btn).find("i").addClass("d-none");
    $(btn).find("span").removeClass("d-none");

    //código sem análise do erro:

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

    //código com a analise do erro:

    //Adiquiri os dados no endPoint da api
    fetch(endPoint)
      //pega as resposta da api
      .then(function (resposta) {
        //retorna elas em json (arquivo de dados)
        return resposta.json();
      })
      .then(function (json) {
        //setta as constantes com os dados recebidos
        const logradouro = json.logradouro;
        const bairro = json.bairro;
        const cidade = json.localidade;
        const estado = json.uf;

        //junta tudo em uma string de texto
        const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`;

        //Coloca os Dados na tela
        $("#endereco").val(endereco);

        //muda o icone e mostra o spinner
        $(btn).find("span").addClass("d-none");
        $(btn).find("i").removeClass("d-none");
      })
      //Se ocorrer um erro, mostra a msg na tela
      .catch(function (error) {
        alert("Ocorreu um erro ao buscar o cep");
      })
      //dps de tudo isso, mostra o icone e esconde o spinner
      .finally(function () {
        $(btn).find("span").addClass("d-none");
        $(btn).find("i").removeClass("d-none");
      });
  });

  $("#formulario-pedido").submit(function (e) {
    e.preventDefault();

    //verifica se o campo nome foi preenchido, se não, lançar um erro no console
    if ($("#nome").val().length == 0) {
      throw new Error("Digite o nome");
    }
  });
});
