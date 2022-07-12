import React from "react";

const Callback: React.FC = () => {
    function printNome (nome: string, callback: () => void) {
        console.log(nome);
        callback();
    }

    printNome("João", () => {
        console.log("Silva");
    });

    return (
        <div>
            <h1>Callback</h1>
        </div>
    );
};

export default Callback;