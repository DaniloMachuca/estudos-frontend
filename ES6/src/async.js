function funcaoMtPesada() {
  let execucoes = 0;
  for (let i = 0; i < 1000000000; i++) {
    execucoes++;
  }
  return execucoes;
}

const funcaoMtPesadaPromise = new Promise((resolve, reject) => {
  try {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
      execucoes++;
    }
    resolve(execucoes);
  } catch (e) {
    reject("Deu erro na integração dos números");
  }
});

const promiseComParametros = (login, senha) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Logado com o usuário ${login}`);
    }, 3000);
  });

async function funcaoPrincipal() {
  console.log("inicio");

  // await funcaoMtPesadaPromise
  //   .then((resultado) => console.log(resultado))
  //   .catch((e) => console.log(e));

  promiseComParametros("daku@gmail.com", "123456").then((resultado) =>
    console.log(resultado)
  );

  try {
    const resultado = await funcaoMtPesadaPromise;
    console.log(resultado);
  } catch (e) {
    console.log("deu erro dnv porra");
  }

  console.log("fim");
}

funcaoPrincipal();
