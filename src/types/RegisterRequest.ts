export interface RegisterRequest {
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
      rol:TipoUsuario.CLIENTE; 
      fechaAltaUsuario: string;
      fechaBajaUsuario: string | null;
      fechaModificacionUsuario: string | null;
}