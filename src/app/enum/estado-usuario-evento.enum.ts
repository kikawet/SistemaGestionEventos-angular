export enum EstadoUsuarioEvento {
    ACEPTADO = 'ACEPTADO',
     LISTA_DE_ESPERA = 'LISTA_DE_ESPERA'
}

export namespace EstadoUsuarioEvento {
    export function values() {
        return Object.keys(EstadoUsuarioEvento).filter(
            (type) => isNaN(<any>type) && type !== 'values'
        );
    }
}