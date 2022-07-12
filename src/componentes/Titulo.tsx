interface TituloProps {
    titulo: string;
}

function Titulo({ titulo }: TituloProps) {

 return <h1 
          style={{
        // Cor e peso da fonte, alinhamento e margem
        color: "7D2EBA",
        fontWeight: 600,
        fontstyle: "Italic",
        textAlign: "Center",
        marginBottom: "60px",
    }}
 >
    {titulo}
    </h1>;
 };

export default Titulo;