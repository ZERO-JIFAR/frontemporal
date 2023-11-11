import React , {useState} from 'react'
import {Form} from 'react-bootstrap';
import DangerBar from '../DangerBar/DangerBar';



const Dangerinput = () => {
//Varable que guarda el valor elegido por el usuario
    const [value,setValue]=useState(0)

  //Actualizar estado de value  
    const handleChangle=(event:React.ChangeEvent<HTMLInputElement>)=> {
        setValue(Number(event.target.value));
    }
  return (
    <div className="m-3 w-50">
        <h2>Ejemplo1</h2>
        {/*Componente Padre */ }
        <Form.Range value={value} onChange={handleChangle}/>
        {/*Componente Hijo */ }
        <DangerBar value={value}/>
    </div>

  )
}

export default Dangerinput


