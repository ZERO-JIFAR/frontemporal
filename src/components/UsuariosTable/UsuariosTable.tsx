import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";

import { ModalType } from "../../types/ModalTypes";
import { Usuario } from "../../types/Usuarios";
import UsuarioModal from "../UsuariosModal/UsuariosModal";

import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import Loader from "../Loader/Loader";
import { UsuarioService } from "../../services/UsuariosServices";
import { Rol } from "../../types/Rol";

const UsuariosTable = () => {
  //Variable con los datos recibidos por la API
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  //Variable que muestra el Loader hasta que cargue la info de la API
  const [isLoading, setIsLoading] = useState(true);

  //Variable que actualizará la tabla después de cada operación exitosa
  const [refreshData, setRefreshData] = useState(false);

  //Este hook se ejecuta cada vez que se renderiza el componente
  //O RefreshData cambie de estado
  useEffect(() => {
    //Llamamos a la funcion para obtener TODOS los productos del ProductService
    const fetchUsuarios = async () => {
      const usuarios = await UsuarioService.getUsuarios();
      setUsuarios(usuarios);
      setIsLoading(false);
    };
    fetchUsuarios();
  }, [refreshData]);

  //Este const es para inicializar un producto por defecto y asi evitar valores 'undefined'

  const initializableNewUsuario = (): Usuario => {
    return {
      id: 0,
      fechaAlta: "",
      fechaModificacion: null,
      fechaBaja: null,
      username: "",
      password: "",
      rol: Rol.CLIENTE,
      activo: false,

      cliente: {
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
      },
    };
  };

  const [usuario, setUsuario] = useState<Usuario>(initializableNewUsuario);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
  const [title, setTitle] = useState("");

  //Logica del Modal
  const handleClick = (newTitle: string, user: Usuario, modal: ModalType) => {
    setTitle(newTitle);
    setModalType(modal);
    setUsuario(user);
    setShowModal(true);
  };

  return (
    <>
      <Button
        onClick={() =>
          handleClick(
            "Nuevo Usuario",
            initializableNewUsuario(),
            ModalType.CREATE
          )
        }
      >
        Nuevo Usuario{" "}
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
              <th>Usuario</th>
              <th>Contraseña</th>
              <th>ROL</th>
              <th>Activo</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id ? usuario.id : "vacio"}</td>
                <td>{usuario.fechaAlta ? usuario.fechaAlta : "vacio"}</td>
                <td>{usuario.fechaModificacion ? usuario.fechaModificacion : "vacio"}</td>
                <td>{usuario.fechaBaja ? usuario.fechaBaja : "vacio"}</td>
                <td>{usuario.username ? usuario.username : "vacio"}</td>
                <td>{usuario.password ? usuario.password : "vacio"}</td>
                <td>{usuario.rol ? usuario.rol : "vacio"}</td>
                <td>{usuario.activo.toString()}</td>
                <td>
                  <EditButton
                    onClick={() =>
                      handleClick("Editar usuario", usuario, ModalType.UPDATE)
                    }
                  />
                </td>
                <td>
                  <DeleteButton
                    onClick={() =>
                      handleClick("Borrar usuario", usuario, ModalType.DELETE)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {showModal && (
        <UsuarioModal
          show={showModal}
          onHide={() => setShowModal(false)}
          title={title}
          modalType={modalType}
          user={usuario}
          refreshData={setRefreshData}
        />
      )}
    </>
  );
};

export default UsuariosTable;
