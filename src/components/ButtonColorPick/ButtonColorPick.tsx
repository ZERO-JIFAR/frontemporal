import {useState} from 'react'
import ModalColorPick from '../ModalColorPick/ModalColorPick';
import {Button } from "react-bootstrap";


const ButtonColorPick = () => {

    //Color inicial
    const [buttonColor,setButtonColor] = useState ("#000000");
    const [showModal, setShowModal] = useState (false);
    const handleColorChange= (color:string) => {
        setButtonColor(color);
    };
    const handleShowModal = () => {
        setShowModal(true)
    }


  return (
    <div className='m-3'>
        <h2>Ejemplo 3</h2>
        <Button variant='primary' style={{backgroundColor:buttonColor}} 
        onClick={handleShowModal}>Cambiar color</Button>

        {showModal && <ModalColorPick
        show={showModal}
        onHide={()=> setShowModal(false)}
        handleColorChange={handleColorChange} />}
    </div>
  )
}

export default ButtonColorPick