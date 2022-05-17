
// Código de ejemplo de constructor de casas

import IgluDirector from './iglu.director'
import CastilloDirector from './castillo.director'
import CasaFlotanteDirector from './casaflotante'

const IGLU = IgluDirector.construct()
const CASTILLO = CastilloDirector.construct()
const CASAFLOTANTE = CasaFlotanteDirector.construct()

console.log(IGLU.construction())
console.log(CASTILLO.construction())
console.log(CASAFLOTANTE.construction())