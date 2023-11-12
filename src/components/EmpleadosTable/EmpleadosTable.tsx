import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { ModalType } from "../../types/ModalTypes";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import { Button, Table } from "react-bootstrap";
import { Empleado } from "../../types/Empleado";
import { EmpleadosServices } from "../../services/EmpleadosServices";
import EmpleadoModal from "../EmpleadosModal/EmpleadosModal";

const EmpleadosTable = () => {
  //Variable con los datos recibidos por la API
  const [empleados, setEmpleados] = useState<Empleado[]>([]);

  //Variable que muestra el Loader hasta que cargue la info de la API
  const [isLoading, setIsLoading] = useState(true);

  //Variable que actualizará la tabla después de cada operación exitosa
  const [refreshData, setRefreshData] = useState(false);

  //Este hook se ejecuta cada vez que se renderiza el componente
  //O RefreshData cambie de estado
  useEffect(() => {
    //Llamamos a la funcion para obtener TODOS los productos del ProductService
    const fetchEmpleados = async () => {
      const empleados = await EmpleadosServices.getEmpleados();
      setEmpleados(empleados);
      setIsLoading(false);
    };
    fetchEmpleados();
  }, [refreshData]);

  //Este const es para inicializar un producto por defecto y asi evitar valores 'undefined'

  const initializableNewProduct = (): Empleado => {
    return {
        id: 0,
        nomape: "" ,
        username: "" ,
        password:  "" ,
        direccion:  "" ,
        localidad:  "" ,
        telefono: "",
        rol: "",
        activo:false ,
    };
  };

  const [empleado, setEmpleado] = useState<Empleado>(initializableNewProduct);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
  const [title, setTitle] = useState("");

  //Logica del Modal
  const handleClick = (newTitle: string, empls: Empleado, modal: ModalType) => {
    setTitle(newTitle);
    setModalType(modal);
    setEmpleado(empls);
    setShowModal(true);
  };

  return (
    <>
    <Button 
     onClick={() =>handleClick("Nuevo Empleado",initializableNewProduct(),ModalType.CREATE)}>
      Nuevo Empleado </Button>
      {isLoading ? <Loader /> : (
        <Table hover>
          <thead>
            <tr>
              <th>Nombre y Apellido</th>
              <th>Email/Usuario</th>
              <th>Direccion</th>
              <th>Localidad</th>
              <th>Telefono</th>
              <th>ROL</th>
              <th>Activo</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((empleado) => (
              <tr key={empleado.id}>
                <td>{empleado.nomape}</td>
                <td>{empleado.username}</td>
                <td>{empleado.password}</td>
                <td>{empleado.direccion}</td>
                <td>{empleado.localidad}</td>
                <td>{empleado.telefono}</td>
                <td>{empleado.rol}</td>
                <td>{empleado.activo}</td>
                <td><EditButton onClick={() => handleClick("Editar empleado", empleado, ModalType.UPDATE)}/></td>
                <td><DeleteButton onClick={() => handleClick("Borrar empleado", empleado, ModalType.DELETE)}/></td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {showModal && (
        <EmpleadoModal
          show={showModal}
          onHide={() => setShowModal(false)}
          title={title}
          modalType={modalType}
          empls={empleado}
          refreshData={setRefreshData}
        />
      )}
    </>
  );
};

export default EmpleadosTable;
