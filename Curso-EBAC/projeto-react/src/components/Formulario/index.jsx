import { useState, useEffect } from "react";

const Formulario = () => {
  let [materiaA, setMateriaA] = useState(0);
  let [materiaB, setMateriaB] = useState(0);
  let [materiaC, setMateriaC] = useState(0);
  let [nome, setNome] = useState("");

  //mount
  //update
  //unmount

  useEffect(() => {
    console.log("componente montado");

    return () => {
      console.log("componente desmontado");
    };
  }, []);

  useEffect(() => {
    console.log("mudou nome");
  }, [nome]);

  useEffect(() => {
    console.log("mudou nota");
  }, [materiaA]);

  const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;

    if (media >= 7) {
      return <p>Olá, {nome}! Você foi Aprovado</p>;
    } else {
      return <p>Olá, {nome}! Você foi Reprovado</p>;
    }
  };

  return (
    <form>
      <ul>
        {[1, 2, 3, 4, 5].map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="nome"
        onChange={(e) => setNome(e.target.value)}
      />
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
