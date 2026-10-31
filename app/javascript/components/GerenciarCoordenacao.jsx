import React from "react";

export default function GerenciarCoordenacao() {
  const handleGerenciar = () => {
    console.log("Botão Gerenciar clicado");
  };

  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
          <i className="bi bi-briefcase fs-4" aria-hidden="true"></i>
          <span className="fs-5">Gerenciar coordenação</span>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <button type="button" className="btn btn-primary" onClick={handleGerenciar}>
            Gerenciar
          </button>
        </div>
      </div>
    </div>
  );
}
