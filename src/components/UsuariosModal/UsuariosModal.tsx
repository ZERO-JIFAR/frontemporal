import { Button, Form, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalTypes";
import { Usuario } from "../../types/Usuarios";
import { Rol } from "../../types/Rol";
import { UsuarioService } from "../../services/UsuariosServices";

//Dependencias para la validacion de datos de formularios
import * as Yup from "yup";
import { useFormik } from "formik";

//Notificaciones al usuario
import { toast } from "react-toastify";

type UsuariosModalProps = {
  show: boolean;
  onHide: () => void;
  title: string;
  modalType: ModalType;
  user: Usuario;
  refreshData: React.Dispatch<React.SetStateAction<boolean>>;
};

const UsuarioModal = ({
  show,
  onHide,
  title,
  modalType,
  user,
  refreshData,
}: UsuariosModalProps) => {
  //CREATE - ACTUALIZAR
  const handleSaveUpdate = async (user: Usuario) => {
    try {
      const isNew = user.id === 0;
      if (isNew) {
        await UsuarioService.createUsuario(user);
      } else {
        await UsuarioService.updateUsuario(user.id, user);
      }
      toast.success(isNew ? "Usuario Creado" : "Usuario Actualizado", {
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
      await UsuarioService.deleteUsuario(user.id);

      toast.success("Usuario eliminado con éxito", {
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
    initialValues: user,
    validationSchema: validationSchema(),
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (obj: Usuario) => handleSaveUpdate(obj),
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
                <strong> {user.username} </strong>?
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

                {/*ESTE GROUP ES PARA EL CAMPO USERNAME*/}
                <Form.Group controlId="formusername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name="username"
                    type="text"
                    value={formik.values.username || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.username && formik.touched.username
                    )}
                    placeholder="Username"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO password*/}
                <Form.Group controlId="formpassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="text"
                    value={formik.values.password || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.password && formik.touched.password
                    )}
                    placeholder="Password"
                    disabled
                    readOnly
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO ROL*/}
                <Form.Group controlId="formrol">
                  <Form.Label>Rol</Form.Label>
                  <Form.Select aria-label="Default select example" id="mySelect" className="mySelect"
                  name="rol"
                  defaultValue={Object.values(Rol).indexOf(user.rol)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={Boolean(formik.errors.rol && formik.touched.rol)}>
                    <option value="CLIENTE">{Rol[0]}</option>
                    <option value="CAJERO">{Rol[1]}</option>
                    <option value="COCINERO">{Rol[2]}</option>
                    <option value="DELIVERY">{Rol[3]}</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.rol}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO ACTIVO*/}
                <Form.Group controlId="formactivo">
                  <Form.Label>Activo</Form.Label>
                  <Form.Select aria-label="Default select example"
                  name="activo"
                  value={formik.values.activo.toString() || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={Boolean(formik.errors.activo && formik.touched.activo)}>
                    <option value="True" >Activo</option>
                    <option value="False">Inactivo</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.activo}
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

export default UsuarioModal;
