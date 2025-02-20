import convertir from "./conversor.js";

describe("Deberia convertir los numeros a romanos",()=>{
   it("Deberia convertir un numero 1",()=>{
     expect(convertir(1)).toEqual("I");
   });
});
