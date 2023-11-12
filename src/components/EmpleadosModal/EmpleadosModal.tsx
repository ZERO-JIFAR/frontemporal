import { Button, Form, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalTypes";
import { Empleado } from "../../types/Empleado";

//Dependencias para la validacion de datos de formularios
import * as Yup from "yup";
import { useFormik } from "formik";
import { EmpleadosServices } from "../../services/EmpleadosServices";

//Notificaciones al usuario
import { toast } from "react-toastify";


type EmpleadosModalProps = {
  show: boolean;
  onHide: () => void;
  title: string;
  modalType: ModalType;
  empls: Empleado;
  refreshData: React.Dispatch<React.SetStateAction<boolean>>;
};

const EmpleadoModal = ({show,onHide,title,modalType,empls, refreshData}: EmpleadosModalProps) => {
  //CREATE - ACTUALIZAR
  const handleSaveUpdate = async (empls: Empleado) => {
    try {
      const isNew = empls.id === 0;
      if (isNew) {
        await EmpleadosServices.createEmpleado(empls);
      } else {
        await EmpleadosServices.updateEmpleado(empls.id, empls);
      }
      toast.success(isNew ? "Empleado Creado" : "Empleado Actualizado", {
        position: "top-center",
      });

      onHide();
      refreshData(prevState => !prevState);
    } catch (error) {
      console.error(error);
      toast.error("Ha ocurrido un error inesperado D:");
    }
  };

  //DELETE
  const handleDelete = async () => {
    try {
      await EmpleadosServices.deleteEmpleado(empls.id);

      toast.success("Producto eliminado con éxito", {
        position: "top-center",
      });
      onHide();
      refreshData(prevState => !prevState);
    } catch (error) {
      console.error(error);
      toast.error("Ha ocurrido un error inesperado D:");
    }
  };
  //Yup, esquema de validacion.
  const validationSchema = () => {
    return Yup.object().shape({
      id: Yup.number().integer().min(0),
      nomape: Yup.string().required("Tanto el nombre como el apellido son requeridos"),
      username: Yup.string().required("El usuario es requerido"),
      password: Yup.string().required("La contraseña es SUPER requerida"),
      direccion: Yup.string().required("La direccion es requerida"),
      localidad: Yup.string().required("La localidad es requerida"),
      telefono:Yup.string().required("El telefono es requerido"),
      rol:Yup.string().required("El ROL es super necesario GIL"), /*NO ES UN STRING PERO NO SE PONER TODAVIA LA ENUM*/
      activo:Yup.boolean().required("Es necesario Saber si está Activo/Inactivo"),
    });
  };

  //Formik usa el esquema de validacion de arriba
  const formik = useFormik({
    initialValues: empls,
    validationSchema: validationSchema(),
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (obj: Empleado) => handleSaveUpdate(obj),
  });

  

  return (
    <>
      {modalType === ModalType.DELETE ? (
        <>
          <Modal show={show} onHide={onHide} centered backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title> {title} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                ¿Está seguro que desea eliminar el Usuario <br />
                <strong> {empls.username} </strong>?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onHide}>
                Cancelar
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Eliminar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <>
          <Modal show={show} onHide={onHide} centered backdrop="static" className="modal-xl">
            <Modal.Header closeButton>
              <Modal.Title> {title} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={formik.handleSubmit}>
                
                
                <Modal.Footer className="mt-4">
                  <Button variant="secondary" onClick={onHide}>
                    Cancelar
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={!formik.isValid}
                  >
                    Guardar
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

export default EmpleadoModal;
