//Primero usa some() para verificar si hay al menos una persona menor de 18 años. Luego usa sort()
//para ordenar de menor a mayor edad y find() para obtener la persona mayor de edad (18 o más) más
//joven.

const personas = [
    { nombre: "Sara", edad: 31 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Pedro", edad: 15 }
];

const hayMenores = personas.some(persona => persona.edad < 18);

personas.sort((a, b) => a.edad - b.edad);

const primeraMayorEdad = personas.find(persona => persona.edad >= 18);

console.log("¿Hay personas menores de edad?:", hayMenores);
console.log("Personas ordenadas:", personas);
console.log("Persona mayor de edad más joven:", primeraMayorEdad);
