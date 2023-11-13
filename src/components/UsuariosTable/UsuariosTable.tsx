import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { UsuariosServices } from "../../services/UsuariosServices";
import { ModalType } from "../../types/ModalTypes";
import { Usuario } from "../../types/Usuarios";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import Loader from "../Loader/Loader";
import UsuarioModal from "../UsuariosModal/UsuariosModal";

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
      const usuarios = await UsuariosServices.getUsuarios();
      setUsuarios(usuarios);
      setIsLoading(false);
    };
    fetchUsuarios();
  }, [refreshData]);

  //Este const es para inicializar un producto por defecto y asi evitar valores 'undefined'

  const initializableNewUsuario = (): Usuario => {
    return {
      latitud: 0,
      longitud: 0,
      ciudad: "",
      calle: "",
      numero: 0,
      codpostal: "",
      id: 0,
      email: "",
      username: "",
      password: "",
      nombre: "",
      apellido: "",
      telefono: "",
      _v: false,
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
              <th>Latitud</th>
              <th>Longitud</th>
              <th>Ciudad</th>
              <th>Calle</th>
              <th>Numero</th>
              <th>Codigo Postal</th>
              <th>Email</th>
              <th>Usuario</th>
              <th>Contraseña</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Telefono</th>
              <th>Activo</th>
              <th>ROL</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.latitud}</td>
                <td>{usuario.longitud}</td>
                <td>{usuario.ciudad}</td>
                <td>{usuario.calle}</td>
                <td>{usuario.numero}</td>
                <td>{usuario.codpostal}</td>
                <td>{usuario.email}</td>
                <td>{usuario.username}</td>
                <td>{usuario.password}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellido}</td>
                <td>{usuario.telefono}</td>
                <td>{usuario._v}</td>
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
