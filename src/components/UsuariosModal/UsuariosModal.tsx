import { Button, Form, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalTypes";
import { Usuario } from "../../types/Usuarios";

//Dependencias para la validacion de datos de formularios
import * as Yup from "yup";
import { useFormik } from "formik";

//Notificaciones al usuario
import { toast } from "react-toastify";
import { UsuarioService } from "../../services/UsuariosServices";


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
      latitud: Yup.number().integer().min(0),
      longitud: Yup.number().integer().min(0),
      ciudad: Yup.string().required("Ingrese CIUDAD por favor"),
      calle: Yup.string().required("Ingrese CALLE por favor"),
      numero: Yup.number()
        .integer()
        .min(0)
        .required("Ingrese NUMERO por favor"),
      codpostal: Yup.string().min(0).max(4),
      id: Yup.number().integer().min(0),
      email: Yup.string().required("Ingrese EMAIL por favor"),
      username: Yup.string().required("Ingrese USERNAME por favor"),
      password: Yup.string().required("Ingrese CONTRASEÑA por favor"),
      nombre: Yup.string().required("Ingrese NOMBRE por favor"),
      apellido: Yup.string().required("Ingrese APELLIDO por favor"),
      telefono: Yup.string().required("Ingrese TELEFONO por favor"),
      _v: Yup.boolean().required(
        "Es necesario saber si esta activo o inactivo"
      ),
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
                {/*ESTE GROUP ES PARA EL CAMPO LATITUD*/}
                <Form.Group controlId="formlatitud">
                  <Form.Label>Latitud</Form.Label>
                  <Form.Control
                    name="latitud"
                    type="text"
                    value={formik.values.latitud || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.latitud && formik.touched.latitud
                    )}
                    placeholder="Latitud"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.address?.geolocation?.lat}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO LONGITUD*/}
                <Form.Group controlId="formlongitud">
                  <Form.Label>Longitud</Form.Label>
                  <Form.Control
                    name="longitud"
                    type="text"
                    value={formik.values.longitud || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.longitud && formik.touched.longitud
                    )}
                    placeholder="Longitud"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.address?.geolocation?.long}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO CIUDAD*/}
                <Form.Group controlId="formciudad">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    name="ciudad"
                    type="text"
                    value={formik.values.ciudad || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.ciudad && formik.touched.ciudad
                    )}
                    placeholder="Ciudad"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.address?.city}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO CALLE*/}
                <Form.Group controlId="formcalle">
                  <Form.Label>Calle</Form.Label>
                  <Form.Control
                    name="calle"
                    type="text"
                    value={formik.values.calle || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.calle && formik.touched.calle
                    )}
                    placeholder="Calle"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.address?.street}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO NUMERO*/}
                <Form.Group controlId="formnumero">
                  <Form.Label>Numero</Form.Label>
                  <Form.Control
                    name="Numero"
                    type="number"
                    value={formik.values.numero || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.numero && formik.touched.numero
                    )}
                    placeholder="Numero de Calle"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.address?.number}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO COD-POSTAL*/}
                <Form.Group controlId="formcodpostal">
                  <Form.Label>Codigo Postal</Form.Label>
                  <Form.Control
                    name="codpostal"
                    type="text"
                    value={formik.values.codpostal || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.codpostal && formik.touched.codpostal
                    )}
                    placeholder="Codigo Postal"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.address?.zipcode}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO USERNAME*/}
                <Form.Group controlId="formusername">
                  <Form.Label>UserName</Form.Label>
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

                {/*ESTE GROUP ES PARA EL CAMPO PASSWORD*/}
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
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO NOMBRE*/}
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
                    placeholder="Nombre"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.name?.firstname}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO APELLIDO*/}
                <Form.Group controlId="formapellido">
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
                    placeholder="Apellido"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.name?.lastname}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO TELEFONO*/}
                <Form.Group controlId="formtelefono">
                  <Form.Label>Telefono</Form.Label>
                  <Form.Control
                    name="telefono"
                    type="text"
                    value={formik.values.telefono || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.telefono && formik.touched.telefono
                    )}
                    placeholder="Telefono"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.phone}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO VALIDO*/}
                <Form.Group controlId="formvalido">
                  <Form.Label>Valido</Form.Label>
                  <Form.Control
                    name="valido"
                    type="boolean"
                    /*value={formik.values._v || ''} -----------------REVISAR ESTA PARTE*/
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(formik.errors._v && formik.touched._v)}
                    placeholder="Valido"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.__v}
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
