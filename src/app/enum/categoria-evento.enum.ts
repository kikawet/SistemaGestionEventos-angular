export enum CategoriaEvento {
    FESTIVAL_MUSICA, DEPORTE, CULTURAL, EXCURSIONES, CHARLAS, REUNIONES
}

export namespace CategoriaEvento {
    export function values() {
        return Object.keys(CategoriaEvento).filter(
            (type) => isNaN(<any>type) && type !== 'values'
        );
    }
}