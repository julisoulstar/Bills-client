export class Bill {
    _id?: number;
    constructor(public items: any[], public totalValue: number, public totalIva: number, public paid: boolean, public code: number, public fechaCreacion: Date){

    }

}