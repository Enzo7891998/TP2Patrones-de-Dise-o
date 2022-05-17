
//Clase Director
import Casa from './casa'
import CasaBuilder from './casa.builder'


export default class CasaFlotanteDirector {
    static construct(): Casa {
        return new CasaBuilder()
            .setTipoConstruccion('Casa Flotante')
            .setTipoMaterial('Madera')
            .setNumeroPuertas(6)
            .setNumeroVentanas(8)
            .getResult()
    }
}