import { RolUsuario } from "../enum/rol-usuario-enum";


class Usuario {

    login: string;
    password: string;
    email: string;
    uId: string;
    rol: RolUsuario;

    numEventosCreados: number;
    numEventosInscritos: number;

    constructor(login: string, password: string) {
        this.login = login;
        this.password = password;
    }

    get _login(): string {
        return this.login;
    }

    set _login(value: string) {
        this.login = value;
    }

    get _passwrod(): string {
        return this.password;
    }

    set _password(value: string) {
        this.password = value;
    }

    get _email(): string {
        return this.email;
    }

    set _email(value: string) {
        this.email = value;
    }

    get _uId(): string {
        return this.uId;
    }

    set _uId(value: string) {
        this.uId = value;
    }

    get _numEventosCreados(): number {
        return this.numEventosCreados;
    }

    set _numEventosCreados(value: number) {
        this.numEventosCreados = value;
    }

    get _numEventosInscritos(): number {
        return this.numEventosInscritos;
    }

    set _numEventosInscritos(value: number) {
        this.numEventosInscritos = value;
    }

    get _rolUsuario() {
        return this.rol;
    }

    set _rolUsuario(value: RolUsuario) {
        this.rol = value;
    }
}