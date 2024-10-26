import React, { useState } from "react";
import { FaWeightHanging, FaRuler } from "react-icons/fa";

const App = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const calcularIMC = () => {
    if (peso === "" || altura === "") {
      setResultado("Por favor, preencha todos os campos!");
      setMostrarResultado(true);
      return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc <= 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc <= 24.9) {
      classificacao = "Peso normal";
    } else if (imc <= 29.9) {
      classificacao = "Sobrepeso";
    } else if (imc <= 34.9) {
      classificacao = "Obesidade grau 1";
    } else if (imc <= 39.9) {
      classificacao = "Obesidade grau 2";
    } else {
      classificacao = "Obesidade grau 3";
    }

    setResultado(`Seu IMC é: ${imc.toFixed(2)} (${classificacao})`);
    setMostrarResultado(true);
  };

  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Imagem à esquerda - visível apenas em telas md e acima */}
        <img
          src="/assets/doctor.svg"
          className="hidden md:block w-[300px] lg:w-[420px] h-[300px] lg:h-[400px]"
          alt="Doutor"
        />

        {/* Inputs à direita - visível em todas as telas */}
        <div className="w-[300px] md:w-[360px] h-auto bg-neutral-800 rounded p-5">
          <h1 className="text-white text-[24px] md:text-[28px] font-bold mb-4 border-b-2 border-violet-900 pb-2 text-center">
            Calculadora de IMC
          </h1>

          <label className="grid text-white mb-4 relative">
            <FaWeightHanging
              size={18}
              className="absolute mt-[38px] ml-2 text-violet-800 pointer-events-none"
            />
            Peso (kg):
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              className="bg-neutral-600 h-10 w-full border-none outline-none focus:ring-0 pl-10 pr-10 mt-1 text-white"
            />
            <span className="absolute top-[38px] right-2 text-violet-800 pointer-events-none">
              Kg
            </span>
          </label>

          <label className="grid text-white mb-4 relative">
            <FaRuler
              size={21}
              className="absolute mt-[38px] ml-2 text-violet-800 pointer-events-none"
            />
            Altura (m):
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              className="bg-neutral-600 h-10 w-full border-none outline-none focus:ring-0 pl-10 pr-10 mt-1 text-white"
            />
            <span className="absolute top-[38px] right-2 text-violet-800 pointer-events-none">
              m
            </span>
          </label>

          <button
            onClick={calcularIMC}
            className="w-full text-white bg-violet-800 font-bold rounded h-10 mt-2"
          >
            Calcular
          </button>

          {/* Exibe o resultado se mostrarResultado for verdadeiro */}
          {mostrarResultado && (
            <h2 className="text-white text-xl mt-4">
              IMC: <span className="text-violet-800">{resultado}</span>
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
