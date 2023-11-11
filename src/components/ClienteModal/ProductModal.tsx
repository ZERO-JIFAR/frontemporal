import { Button, Form, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalTypes";
import { Product } from "../../types/Product";

//Dependencias para la validacion de datos de formularios
import * as Yup from "yup";
import { useFormik } from "formik";
import { ProductServices } from "../../services/ProductService";

//Notificaciones al usuario
import { toast } from "react-toastify";

type ProductModalProps = {
  show: boolean;
  onHide: () => void;
  title: string;
  modalType: ModalType;
  prod: Product;
  refreshData: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductModal = ({show,onHide,title,modalType,prod, refreshData}: ProductModalProps) => {
  //CREATE - ACTUALIZAR
  const handleSaveUpdate = async (pro: Product) => {
    try {
      const isNew = prod.id === 0;
      if (isNew) {
        await ProductServices.createProduct(pro);
      } else {
        await ProductServices.updateProduct(pro.id, pro);
      }
      toast.success(isNew ? "Producto Creado" : "Producto Actualizado", {
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
      await ProductServices.deleteProduct(prod.id);

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
      title: Yup.string().required("El titulo es requerido"),
      price: Yup.number().min(0).required("El precio es requerido"),
      description: Yup.string().required("La descripcion es requerida"),
      category: Yup.string().required("La categoria es requerida"),
      image: Yup.string().required("La URL de la imagen es requerida"),
    });
  };

  //Formik usa el esquema de validacion de arriba
  const formik = useFormik({
    initialValues: prod,
    validationSchema: validationSchema(),
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (obj: Product) => handleSaveUpdate(obj),
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
                ¿Está seguro que desea eliminar el producto <br />
                <strong> {prod.title} </strong>?
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
                {/*ESTE GROUP ES PARA EL CAMPO TITULO*/}
                <Form.Group controlId="formTitulo">
                  <Form.Label>Titulo</Form.Label>
                  <Form.Control
                    name="title"
                    type="text"
                    value={formik.values.title || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.title && formik.touched.title
                    )}
                    placeholder="Titulo"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.title}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO PRECIO*/}
                <Form.Group controlId="formPrice">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    name="price"
                    type="number"
                    value={formik.values.price || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.price && formik.touched.price
                    )}
                    placeholder="Precio"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.price}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO DESCRIPCION*/}
                <Form.Group controlId="formDescription">
                  <Form.Label>Descripcion</Form.Label>
                  <Form.Control
                    name="description"
                    type="text"
                    value={formik.values.description || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.description && formik.touched.description
                    )}
                    placeholder="Descripcion"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.description}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO CATEGORIA*/}
                <Form.Group controlId="formCategory">
                  <Form.Label>Categoria</Form.Label>
                  <Form.Control
                    name="category"
                    type="text"
                    value={formik.values.category || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.category && formik.touched.category
                    )}
                    placeholder="Categoria"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.category}
                  </Form.Control.Feedback>
                </Form.Group>

                {/*ESTE GROUP ES PARA EL CAMPO IMAGEN*/}
                <Form.Group controlId="formImage">
                  <Form.Label>Imagen</Form.Label>
                  <Form.Control
                    name="image"
                    type="text"
                    value={formik.values.image || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={Boolean(
                      formik.errors.image && formik.touched.image
                    )}
                    placeholder="URL Imagen"
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.image}
                  </Form.Control.Feedback>
                </Form.Group>
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

export default ProductModal;
