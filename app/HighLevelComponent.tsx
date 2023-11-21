// HighLevelComponent.tsx
"use client";
import React, { useEffect } from "react";

const HighLevelComponent: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDevelopment = process.env.NODE_ENV === "development";

      if (isDevelopment) {
        // Desativar avisos de hidratação no console em ambiente de desenvolvimento
        console.warn = () => {};
      }
    }
  }, []);

  return (
    // O conteúdo do seu componente aqui
    <div>Hello from HighLevelComponent!</div>
  );
};

export default HighLevelComponent;
