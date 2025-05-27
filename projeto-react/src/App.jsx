import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  return (
    <>
      <Perfil
        nome="Danilo Machuca de Souza"
        endereco="https://github.com/DaniloMachuca.png"
      />
      <ReposList />
      {/* {formularioEstaVisivel && <Formulario />}
      <button type="button" onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>Toggle</button> */}
    </>
  );
}

export default App;
