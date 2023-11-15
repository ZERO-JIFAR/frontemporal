import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="px-3  h-100 d-flex justify-content-center align-items-center">
      <div className="text-center" >
        <Spinner animation="border" variant="primary" role="status" />
        <div className="h3 text-primary mt-3">Cargando...</div>
      </div>
    </div>
  );
};

export default Loader;
