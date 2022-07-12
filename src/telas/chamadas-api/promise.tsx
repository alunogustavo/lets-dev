import React from "react";

const Promisses: React.FC = () => {
    // condição para a nossa promise
    const motoristaAceitou = true;

    // Nossa promise
    const promessa = new Promise((resolve, reject) => {
        if (motoristaAceitou) {
            resolve("Deu certo! Seu motorista está vindo.");
        } else {
            reject("Deu errado! Procure outro motorista!");
        }
});

 // Executando nossa promise
  promessa
  .then((sucesso) => console.log(sucesso))
  .catch((erro) => console.log (erro))
  .finally(() => console.log ("Aceitou!"));

  return (
     <div>
    <h1>Promisses</h1>
    </div>
    );
  };

  export default Promisses;
  
