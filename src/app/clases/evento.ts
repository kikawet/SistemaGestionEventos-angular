import { TipoEvento } from '../enum/tipo-evento.enum';
import { CategoriaEvento } from '../enum/categoria-evento.enum';
import { EstadoUsuarioEvento } from '../enum/estado-usuario-evento.enum';
export class Evento {

    private _id:number;
    private _titulo:string;
    private _foto:string;
    private _descripcion:string;
    private _aforoMaximo:number;
    private _fecha:Date;
    private _lugar:string;
    private _tipo:TipoEvento;
    private _categoria:CategoriaEvento;
    private _idCreador:string;
    private _numAsistentes:number;
    private _numListaEspera:number;
    private _estadoUsuario:EstadoUsuarioEvento;

    constructor() {
    }

    public set id(v : number) {
        this._id = v;
    }

    public get id() : number {
        return this._id;
    }
    
    
    public set titulo(v : string) {
        this._titulo = v;
    }
     
    public get titulo() : string {
        return this._titulo;
    }

    
    public set foto(v : string) {
        this._foto = v;
    }
    
    public get foto() : string {
        return this._foto;
    }
    
    public set descripcion(v : string) {
        this._descripcion = v;
    }
    
    public get descripcion() : string {
        return this._descripcion;
    }
    
    public set aforoMaximo(v : number) {
        this._aforoMaximo = v;
    }
    
    public get aforoMaximo() : number {
        return this._aforoMaximo;
    }
    
    public set fecha(v : Date) {
        this._fecha = v;
    }
    
    public get fecha() : Date {
        return this._fecha;
    }

    public set lugar(v : string) {
        this._lugar = v;
    }
    
    public get lugar() : string {
        return this._lugar;
    }

    public set tipo(v : TipoEvento) {
        this._tipo = v;
    }
    
    public get tipo() : TipoEvento {
        return this._tipo;
    }
    
    public set categoria(v : CategoriaEvento) {
        this._categoria = v;
    }
    
    public get categoria() : CategoriaEvento {
        return this._categoria;
    }

    public set idCreador(v : string) {
        this._idCreador = v;
    }
    
    public get idCreador() : string {
        return this._idCreador;
    }

    public set numAsistentes(v : number) {
        this._numAsistentes = v;
    }
    
    public get numAsistentes() : number {
        return this._numAsistentes;
    }

    public set numListaEspera(v : number) {
        this._numListaEspera = v;
    }
    
    public get numListaEspera() : number {
        return this._numListaEspera;
    }

    public set estadoUsuario(v : EstadoUsuarioEvento) {
        this._estadoUsuario = v;
    }
    
    public get estadoUsuario() : EstadoUsuarioEvento {
        return this._estadoUsuario;
    }

}
