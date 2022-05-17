import Casa from './casa'
import House from './casa'

interface ICasaBuilder {
    casa: Casa
    setTipoConstruccion(tipoconstruccion: string): this
    setTipoMaterial(tipomaterial: string): this
    setNumeroPuertas(number: number): this
    setNumeroVentanas(number: number): this
    getResult(): Casa 
}

export default class CasaBuilder implements ICasaBuilder {
    casa: Casa

    constructor() {
        this.casa = new Casa()
    }
    setNumeroVentanas(number: number): this {
        this.casa.ventanas = number
        return this
    }

    setTipoConstruccion(tipoconstruccion: string): this {
        this.casa.tipoConstruccion = tipoconstruccion
        return this
    }

    setTipoMaterial(tipomaterial: string): this {
        this.casa.tipoMaterial = tipomaterial
        return this
    }

    setNumeroPuertas(number: number): this {
        this.casa.puertas = number
        return this
    }


    getResult(): Casa {
        return this.casa
    }
}