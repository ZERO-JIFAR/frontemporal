import { Button, Form, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalTypes";
import { Rol } from "../../types/Rol";

//Dependencias para la validacion de datos de formularios
import * as Yup from "yup";
import { useFormik } from "formik";

//Notificaciones al usuario
import { toast } from "react-toastify";
import { Cliente } from "../../types/Cliente";
import { ClienteService } from "../../services/ClienteService";

type ClientesModalProps = {
  show: boolean;
  onHide: () => void;
  title: string;
  modalType: ModalType;
  client: Cliente;
  refreshData: React.Dispatch<React.SetStateAction<boolean>>;
};

const ClienteModal = ({
  show,
  onHide,
  title,
  modalType,
  client,
  refreshData,
}: ClientesModalProps) => {
  //CREATE - ACTUALIZAR
  const handleSaveUpdate = async (client: Cliente) => {
    try {
      const isNew = client.id === 0;
      if (isNew) {
        await ClienteService.createCliente(client);
      } else {
        await ClienteService.updateCliente(client.id, client);
      }
      toast.success(isNew ? "Cliente Creado" : "Cliente Actualizado", {
        position: "top-center",
      });

      onHide();
      refreshData((prevState) => !prevState);
    } catch (error) {
      console.error(error);
      toast.error("Ha ocurrido un error inesperado D:");
    }
  };

  //DELETE
  const handleDelete = async () => {
    try {
      await ClienteService.deleteCliente(client.id);

      toast.success("Cliente eliminado con éxito", {
        position: "top-center",
      });
      onHide();
      refreshData((prevState) => !prevState);
    } catch (error) {
      console.error(error);
      toast.error("Ha ocurrido un error inesperado D:");
    }
  };
  //Yup, esquema de validacion.
  const validationSchema = () => {
    return Yup.object().shape({
      id: Yup.number().integer().min(0),
      username: Yup.string().required("Ingrese USERNAME por favor"),
      password: Yup.string().required("Ingrese CONTRASEÑA por favor"),
      ROL: Yup.mixed().oneOf(Object.values(Rol)),
      activo: Yup.boolean(),
    });
  };

  //Formik usa el esquema de validacion de arriba
  const formik = useFormik({
    initialValues: client,
    validationSchema: validationSchema(),
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (obj: Cliente) => handleSaveUpdate(obj),
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
                ¿Está seguro que desea eliminar el Cliente <br />
                <strong> {client.nombre} </strong>?
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
          <Modal
            show={show}
            onHide={onHide}
            centered
            backdrop="static"
            className="modal-xl"
          >
            <Modal.Header closeButton>
              <Modal.Title> {title} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={formik.handleSubmit}>
                {/*ESTE GROUP ES PARA EL CAMPO ID*/}
                <Form.Group controlId="formid">
                  <Form.Label>Id</Form.Label>
                  <Form.Control
                    name="Id"
                    type="number"
                    value={formik.values.id || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(formik.errors.id && formik.touched.id)}
                    placeholder="Id"
                    disabled
                    readOnly
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.id}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO nombre*/}
                <Form.Group controlId="formnombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    name="nombre"
                    type="text"
                    value={formik.values.nombre || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.nombre && formik.touched.nombre
                    )}
                    placeholder="nombre"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.nombre}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO apellido*/}
                <Form.Group controlId="formnombre">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    name="apellido"
                    type="text"
                    value={formik.values.apellido || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.apellido && formik.touched.apellido
                    )}
                    placeholder="apellido"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.apellido}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO email*/}
                <Form.Group controlId="formnombre">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="text"
                    value={formik.values.email || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.email && formik.touched.email
                    )}
                    placeholder="email"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                      
                {/*ESTE GROUP ES PARA EL CAMPO fechaHoraAltaCliente*/}
                <Form.Group controlId="formnombre">
                  <Form.Label>fechaHoraAltaCliente</Form.Label>
                  <Form.Control
                    name="fechaHoraAltaCliente"
                    type="text"
                    value={formik.values.fechaHoraAltaCliente || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.fechaHoraAltaCliente && formik.touched.fechaHoraAltaCliente
                    )}
                    placeholder="fechaHoraAltaCliente"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.fechaHoraAltaCliente}
                  </Form.Control.Feedback>
                </Form.Group>
                
                {/*ESTE GROUP ES PARA EL CAMPO fechaHoraModificacionCliente*/}
                <Form.Group controlId="formnombre">
                  <Form.Label>fechaHoraModificacionCliente</Form.Label>
                  <Form.Control
                    name="fechaHoraModificacionCliente"
                    type="text"
                    value={formik.values.fechaHoraModificacionCliente || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.fechaHoraModificacionCliente && formik.touched.fechaHoraModificacionCliente
                    )}
                    placeholder="fechaHoraModificacionCliente"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.fechaHoraModificacionCliente}
                  </Form.Control.Feedback>
                </Form.Group>
                
                {/*ESTE GROUP ES PARA EL CAMPO fechaHoraBajaCliente*/}
                <Form.Group controlId="formnombre">
                  <Form.Label>fechaHoraBajaCliente</Form.Label>
                  <Form.Control
                    name="fechaHoraBajaCliente"
                    type="text"
                    value={formik.values.fechaHoraBajaCliente || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.fechaHoraBajaCliente && formik.touched.fechaHoraBajaCliente
                    )}
                    placeholder="fechaHoraBajaCliente"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.fechaHoraBajaCliente}
                  </Form.Control.Feedback>
                </Form.Group>
                
                {/*ESTE GROUP ES PARA EL CAMPO estadoCliente*/}
                <Form.Group controlId="formnombre">
                  <Form.Label>EstadoCliente</Form.Label>
                  <Form.Control
                    name="estadoCliente"
                    type="text"
                    value={formik.values.estadoCliente || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.estadoCliente && formik.touched.estadoCliente
                    )}
                    placeholder="estadoCliente"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.estadoCliente}
                  </Form.Control.Feedback>
                </Form.Group>


                {/* FIN DE LOS CAMPOS DEL MODAL*/}
                {/* ACA EMPIEZA EL FOOTER CANCELAR GUARDAR*/}
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

export default ClienteModal;
