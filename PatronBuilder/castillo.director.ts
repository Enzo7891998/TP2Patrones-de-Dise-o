
//Clase Director
import Casa from './casa'
import CasaBuilder from './casa.builder'

export default class CastilloDirector {
    static construct(): Casa {
        return new CasaBuilder()
            .setTipoConstruccion('Castillo')
            .setTipoMaterial('Arena')
            .setNumeroPuertas(100)
            .setNumeroVentanas(200)
            .getResult()
    }
}