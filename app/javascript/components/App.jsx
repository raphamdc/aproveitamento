import React from "react";
import GerenciarCoordenacao from "./GerenciarCoordenacao";

export default function App() {
  return (
    <div className="container py-5">
      <h1 className="display-5">Sistema de Aproveitamento</h1>

      <div className="row g-4">
        <div className="col-12 col-md-6">
          <GerenciarCoordenacao />
        </div>
      </div>
    </div>
  );
}
