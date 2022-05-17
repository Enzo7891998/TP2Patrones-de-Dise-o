// A Director Class
import Casa from './casa'
import CasaBuilder from './casa.builder'


export default class IgluDirector {
    static construct(): Casa {
       // la clase iglu director viene sin ventanas 
       //porque no tendra ventanas
        return new CasaBuilder()
            .setTipoConstruccion('Iglu')
            .setTipoMaterial('Hielo')
            .setNumeroPuertas(1)
            .getResult()
    }
}