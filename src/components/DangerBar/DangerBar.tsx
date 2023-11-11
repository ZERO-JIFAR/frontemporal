import { ProgressBar } from "react-bootstrap";
type DangerBarprops ={
    value:number;
};
const DangerBar = ({value}:DangerBarprops) => {
    const getVariant = (value:number)=>{
        if (value < 30){
            return 'sucess';

        }else if(value<60){
            return 'warning';
        }else 
        return 'danger';
    };
  return (
    <ProgressBar animated now={value} variant={getVariant(value)}/>
  )

}

export default DangerBar