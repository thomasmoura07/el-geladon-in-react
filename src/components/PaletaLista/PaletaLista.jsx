import React, { useState } from "react";
import "./PaletaLista.css";
import { paletas } from "../../mocks/paletas";

console.log("paletas", paletas);

function PaletaLista() {
  const [paletaSelecionadas, setPaletaSelecionadas] = useState({});

  function adicionarItem(index) {
    const initialValue = Number(paletaSelecionadas[index] || 0);

    const paleta = {
      [index]: initialValue + 1,
    };
    setPaletaSelecionadas({ ...paletaSelecionadas, ...paleta });
  }

  function removerItem(index) {
    const initialValue = Number(paletaSelecionadas[index] || 0);

    const paleta = {
      [index]: initialValue - 1,
    };
    setPaletaSelecionadas({ ...paletaSelecionadas, ...paleta });
  }

  const badgeCounter2 = (canRender, index) => {
    return (
      <>
        {}
        {Boolean(canRender) && (
          <span className="PaletaListaItem__badge">
            {paletaSelecionadas[index]}
          </span>
        )}
      </>
    );
  };

  const removeButton = (canRender, index) => {
    return (
      <>
        {}
        {Boolean(canRender) && (
          <button
            className="Acoes__remover "
            onClick={() => removerItem(index)}
          >
            remover
          </button>
        )}
      </>
    );
  };

  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => {
        return (
          <div key={index} className="PaletaListaItem">
            <div>
              {badgeCounter2(paletaSelecionadas[index], index)}
              <div className="PaletaListaItem__titulo">{paleta.titulo}</div>
              <div className="PaletaListaItem__preco">R$ {paleta.preco}</div>
              <div className="PaletaListaItem__descricao">
                {paleta.descricao}
              </div>
              <div className="PaletaListaItem__acoes Acoes">
                {/* RENDERIZAÇÃO CONDICIONAL DE ESTILO */}
                <button
                  className={`Acoes__adicionar ${
                    !paletaSelecionadas[index] && "Acoes__adicionar--preencher"
                  }`}
                  onClick={() => adicionarItem(index)}
                >
                  adicionar
                </button>
                {removeButton(paletaSelecionadas[index], index)}
              </div>
            </div>
            <img
              className="PaletaListaItem__foto"
              src={paleta.foto}
              alt={`Paleta de ${paleta.sabor}`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PaletaLista;
