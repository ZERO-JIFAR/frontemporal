/*import { Formik } from 'formik';
import { Form, Modal } from 'react-bootstrap';
import * as Yup from 'yup';
import { Cliente } from '../../types/Cliente';

type FormRegisterProps = {
  showModal: boolean;
  handleClose:() => void;
  createCliente: (newCliente: Cliente) => void;
}

const FormRegister: React.FC<FormRegisterProps> = ({showModal, handleClose, createCliente}) => {
  
  const validationSchema = Yup.object({
    username: Yup.string().required('Este campo es obligatorio'),
    password: Yup.string().required('Este campo es obligatorio'),    
    nombre: Yup.string().required("Este campo es obligatorio"),
    apellido: Yup.string().required("Este campo es obligatorio"),
    telefono: Yup.string().required("Este campo es obligatorio"),
    mail: Yup.string().email("Formato de correo electrónico inválido").required("Este campo es obligatorio"),
    fechaAltaCliente: Yup.string().required("Este campo es obligatorio"),
    calle: Yup.string().required("Este campo es obligatorio"),
    nroCalle: Yup.number().required("Este campo es obligatorio").integer("Debe ser un número entero").positive("Debe ser mayor a 0"),
    pisoDpto: Yup.number().integer("Debe ser un número entero").positive("Debe ser mayor o igual a 0"),
    nroDpto: Yup.number().integer("Debe ser un número entero").positive("Debe ser mayor o igual a 0"),
    localidad: Yup.object({
      id: Yup.number().required("Este campo es obligatorio"),
      nombreLocalidad: Yup.string().required("Este campo es obligatorio"),
      codigoPostal: Yup.number().required("Este campo es obligatorio"),
    }),
  });

  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      telefono: 0,
      mail: '',
      estado: ''
    }
  })
  
  return (
    <div>FormRegister</div>
  )
}

export default FormRegister*/


const FormRegister = () => {
    return (
      <div>FormRegister</div>
    )
  }
  
  export default FormRegister