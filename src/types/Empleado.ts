export interface Empleado{

    //ACA VAN LOS ATRIBUTOS QUE TIENEN LOS PRODUCTOS DE LA FAKE API

    address:{
        geolocation:{
          lat:string;
          long:string},
          city:string;
          street:string;
          number:number,
          zipcode:string},
      id:number;
      email:string;
      username:string;
      password:string;
      name:{
        firstname:string;
        lastname:string};
      phone:string;
      __v:number;
      rol:TipoUsuario; //ESTE HABRIA QUE VER BIEN EL ORDEN
      fechaAltaUsuario: string;
      fechaBajaUsuario: string | null;
      fechaModificacionUsuario: string | null;

}