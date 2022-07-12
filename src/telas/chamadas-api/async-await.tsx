import React, { useState } from "react";
import axios from "axios";

const AsyncAwait: React.FC = () => {
    // estado
    const [minhaFotodePerfil, setMinhaFotoDePerfil] = useState();

    // Requisição
    axios
    .get("https://api.github.com/users/uesleisuptitz")
    .then((resposta) => {
        setMinhaFotoDePerfil(resposta.data.avatar_url);
    })
    .catch((erro) => console.log("catch", erro))
    .finally(() => console.log("Foi"));

    return (
        <div>
            <img src={minhaFotodePerfil} alt="Imagem Let's Dev"></img>
        </div>
    );
};

export default AsyncAwait;