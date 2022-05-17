import CasaFlotanteDirector from "./casaflotante";
import CastilloDirector from "./castillo.director";
import IgluDirector from "./iglu.director";

test('Cuando_SeCrea_UnIglu_DebeCrear_Correctamente_El_Iglu', () => {
    const IGLU = IgluDirector.construct()
    expect(IGLU.construction()).toBe("Esto es Iglu hecho con Hielo y tiene 1 puerta(s) y 0 ventana(s).");
});

test('Cuando_SeCrea_UnCastillo_DebeCrear_Correctamente_El_Castillo', () => {
    const CASTILLO= CastilloDirector.construct()
    expect(CASTILLO.construction()).toBe("Esto es Castillo hecho con Arena y tiene 100 puerta(s) y 200 ventana(s).");
});

test('Cuando_SeCrea_UnaCasaFlotante_DebeCrear_Correctamente_La_CasaFlotante', () => {
    const CASAFLOTANTE= CasaFlotanteDirector.construct()
    expect(CASAFLOTANTE.construction()).toBe("Esto es Casa Flotante hecho con Madera y tiene 6 puerta(s) y 8 ventana(s).");
});

test('Cuando_SeCrea_UnIglu_Debe_Ser_De_Hielo', () => {
    const IGLU=IgluDirector.construct()
    expect(IGLU.tipoMaterial).toBe("Hielo");
});

test('Cuando_SeCrea_UnaCasaflotante_Debe_Ser_De_Madera', () => {
    const CASAFLOTANTE= CasaFlotanteDirector.construct()
    expect(CASAFLOTANTE.tipoMaterial).toBe("Madera");
});

test('Cuando_SeCrea_UnaCastillo_Debe_Ser_De_Arena', () => {
    const CASTILLO= CastilloDirector.construct()
    expect(CASTILLO.tipoMaterial).toBe("Arena");
});






