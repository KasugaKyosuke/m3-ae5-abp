const generaEdadAleatoria = (edadMinima, edadMaxima) => Math.round(Math.random() * (edadMaxima - edadMinima) + edadMinima);
const generaValorEnergia = () => Math.round(Math.random() * (1000000 - 1000) + 1000);

let superheroe = {
    nombre: "",
    edad: 0,
    habilidades: [],
    activo: true,
    energia: 0,
    saludo: function() {
        let saludoTexto = `Hola!! mi nombre es ${this.nombre}, y mi edad es ${this.edad}\n`;
        saludoTexto += `Mis habilidades son : ${this.habilidades.slice(0)}\n`;
        saludoTexto += `Mi edad fue asignada automaticamente: ${this.edad}\n`;
        saludoTexto += `Primera letra de mi nombre: ${this.nombre.charAt(0)}\n`;
        saludoTexto += `Mi nivel de energia es: ${this.energia}\n`;
        saludoTexto += `¿Nombre como Objeto?: ${typeof this.nombre === "object"}\n`;
        saludoTexto += `¿Nombre Primitivo?: ${this.nombre !== Object(this.nombre)}\n`;
        console.log(saludoTexto);
    }
};

let superman = Object.create(superheroe);
let batman = Object.create(superheroe);
let ironman = Object.create(superheroe);

superman.nombre = "Superman";
superman.edad = generaEdadAleatoria(20, 40);
superman.habilidades = ["Volar", "SuperVelocidad", "Vision Calorifica", "Superfuerza"];
superman.activo = true;
superman.energia = generaValorEnergia();

batman["nombre"] = new String("Batman");
batman["edad"] = generaEdadAleatoria(20, 40);
batman["habilidades"] = ["Inteligencia Superior", "Maestro en Karate", "Millonario"];
batman["activo"] = false;
batman["energia"] = generaValorEnergia();

ironman.nombre = "IronMan";
ironman.edad = generaEdadAleatoria(20, 40);
ironman.habilidades = ["Volar", "Inteligencia Superior", "Dinero Ilimitado", "Guapo", "Nanotecnologia", "Guantelete del Infinito"];
ironman.activo = true;
ironman.energia = generaValorEnergia();


console.log(superman.saludo());
console.log(batman.saludo());
console.log(ironman.saludo());

console.log(`El valor máximo entre la energía de ${superman.nombre}, ${batman.nombre} y ${ironman.nombre} es: ${Math.max(superman.energia, batman.energia, ironman.energia)} niveles de poder`);
