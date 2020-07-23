import { TipoEvento } from '../enum/tipo-evento.enum';
import { CategoriaEvento } from '../enum/categoria-evento.enum';
import { EstadoUsuarioEvento } from '../enum/estado-usuario-evento.enum';

export class Evento {

    id:number;
     titulo:string;
     foto:string;
     descripcion:string;
     aforoMaximo:number;
     fecha:Date;
     lugar:string;
     tipo:TipoEvento;
     categoriaEvento:CategoriaEvento;
     idCreador:string;
     numAsistentes:number;
     numListaEspera:number;
     estadoUsuario:EstadoUsuarioEvento;

    constructor() {
    }

    

    
}
