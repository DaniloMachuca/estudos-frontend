import { useState } from "react";

const Formulario = () => {
  let [materiaA, setMateriaA] = useState(0);
  let [materiaB, setMateriaB] = useState(0);
  let [materiaC, setMateriaC] = useState(0);

  const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;

    if (media >= 7) {
      return <p>Aprovado</p>;
    } else {
      return <p>Reprovado</p>;
    }
  };

  return (
    <form>
      <input
        type="number"
        placeholder="Nota matéria A"
        onChange={(e) => setMateriaA(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria B"
        onChange={(e) => setMateriaB(parseInt(e.target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria C"
        onChange={(e) => setMateriaC(parseInt(e.target.value))}
      />
      {renderizaResultado()}
    </form>
  );
};

export default Formulario;
