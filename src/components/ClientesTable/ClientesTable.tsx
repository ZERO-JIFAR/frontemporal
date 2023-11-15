import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";

import { ModalType } from "../../types/ModalTypes";
import { Cliente } from "../../types/Cliente";
import ClienteModal from "../ClientesModal/ClientesModal";

import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import Loader from "../Loader/Loader";

import { ClienteService } from "../../services/ClienteService";

const ClientesTable = () => {
  //Variable con los datos recibidos por la API
  const [clientes, setClientes] = useState<Cliente[]>([]);

  //Variable que muestra el Loader hasta que cargue la info de la API
  const [isLoading, setIsLoading] = useState(true);

  //Variable que actualizará la tabla después de cada operación exitosa
  const [refreshData, setRefreshData] = useState(false);

  //Este hook se ejecuta cada vez que se renderiza el componente
  //O RefreshData cambie de estado
  useEffect(() => {
    //Llamamos a la funcion para obtener TODOS los productos del ProductService
    const fetchClientes = async () => {
      const clientes = await ClienteService.getClientes();
      setClientes(clientes);
      setIsLoading(false);
    };
    fetchClientes();
  }, [refreshData]);

  //Este const es para inicializar un producto por defecto y asi evitar valores 'undefined'

  const initializableNewCliente = (): Cliente => {
    return {
        id: 0,
        fechaHoraAltaCliente: "",
        fechaHoraModificacionCliente: null,
        fechaHoraBajaCliente: null,
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        estadoCliente: null,
        pedidos: [],
        domicilioList: []
    };
  };

  const [cliente, setCliente] = useState<Cliente>(initializableNewCliente);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
  const [title, setTitle] = useState("");

  //Logica del Modal
  const handleClick = (newTitle: string, client: Cliente, modal: ModalType) => {
    setTitle(newTitle);
    setModalType(modal);
    setCliente(client);
    setShowModal(true);
  };

  return (
    <>
      <Button
        onClick={() =>
          handleClick(
            "Nuevo Cliente",
            initializableNewCliente(),
            ModalType.CREATE
          )
        }
      >
        Nuevo Cliente{" "}
      </Button>
      {isLoading ? (
        <Loader />
      ) : (
        <Table hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Fecha Alta</th>
              <th>Fecha Modificacion</th>
              <th>Fecha Baja</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Estado</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id ? cliente.id : "vacio"}</td>
                <td>{cliente.fechaHoraAltaCliente ? cliente.fechaHoraAltaCliente : "vacio"}</td>
                <td>{cliente.fechaHoraModificacionCliente ? cliente.fechaHoraModificacionCliente : "vacio"}</td>
                <td>{cliente.fechaHoraBajaCliente ? cliente.fechaHoraBajaCliente : "vacio"}</td>
                <td>{cliente.nombre ? cliente.nombre : "vacio"}</td>
                <td>{cliente.apellido ? cliente.apellido : "vacio"}</td>
                <td>{cliente.telefono ? cliente.telefono : "vacio"}</td>
                <td>{cliente.email ? cliente.email : "vacio"}</td>
                <td>{cliente.estadoCliente ? cliente.estadoCliente : "vacio"}</td>
                <td>
                  <EditButton
                    onClick={() =>
                      handleClick("Editar cliente", cliente, ModalType.UPDATE)
                    }
                  />
                </td>
                <td>
                  <DeleteButton
                    onClick={() =>
                      handleClick("Borrar cliente", cliente, ModalType.DELETE)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {showModal && (
        <ClienteModal
          show={showModal}
          onHide={() => setShowModal(false)}
          title={title}
          modalType={modalType}
          client={cliente}
          refreshData={setRefreshData}
        />
      )}
    </>
  );
};

export default ClientesTable;
