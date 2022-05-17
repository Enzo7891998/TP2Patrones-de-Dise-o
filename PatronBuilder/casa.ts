export default class Casa {
    puertas = 0
    ventanas = 0
    tipoMaterial = ''
    tipoConstruccion = ''

    construction(): string {
        return `Esto es ${this. tipoConstruccion} hecho con ${this.tipoMaterial} y tiene ${this.puertas} puerta(s) y ${this.ventanas} ventana(s).`
    }
}