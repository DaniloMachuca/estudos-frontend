function calculaArea(base: number, altura: number): number {
  return base * altura;
}

const caculaArea2 = (base: number, altura: number): number => base * altura;

//void
function somar(...numeros: number[]): void {
  // numeros.reduce((total, num) => total + num);
  console.log(numeros);
}

function teste(): string | number {
  if (10 > 5) {
    return "dez maior q cinco";
  } else {
    return 5;
  }
}

const resultadoTeste = teste();
