export enum TipoEvento {
    BENEFICO, NO_BENEFICO
}

export namespace TipoEvento {

    export function values() {
        return Object.keys(TipoEvento).filter(
            (type) => isNaN(<any>type) && type !== 'values'
        );
    }
}