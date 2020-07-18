export class ItemCarrinho {
    constructor(
        public id: number,
        public img: object,
        public title: string,
        public descricao_oferta: string,
        public valor: number,
        public quantidade: number 
    ){}
}