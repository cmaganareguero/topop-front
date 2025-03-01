import { useState } from "react";
import Layout from "../../components/Layout";
import MainVoteList from "./components/MainVoteList";

const VoteList = () => {
  // Puedes definir los datos para la tabla o cualquier configuración dinámica aquí
  const [tableData, setTableData] = useState([
    { id: 1, name: "Voto 1", description: "Descripción del voto 1" },
    { id: 2, name: "Voto 2", description: "Descripción del voto 2" },
    // Agrega más datos según lo necesites
  ]);

  // Puedes tener funciones para modificar los datos internos si es necesario
  const updateData = () => {
    setTableData([
      ...tableData,
      { id: 3, name: "Voto 3", description: "Descripción del voto 3" },
    ]);
  };

  return (
    <Layout>
      {/* Título o contenido específico de la página */}
      
      {/* Usamos MainGrid para visualizar la tabla */}
      <MainVoteList /> {/* Aquí ya no se pasa data ni onDataChange por ahora */}
      
      {/* Si deseas agregar más contenido aquí, puedes hacerlo */}
    </Layout>
  );
};

export default VoteList;
