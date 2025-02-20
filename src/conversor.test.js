import convertir from "./conversor.js";

describe("Deberia convertir los numeros a romanos",()=>{
   it("Deberia convertir un numero 1",()=>{
     expect(convertir(1)).toEqual("I");
   });
   it("Deberia convertir un numero 2",()=>{
    expect(convertir(2)).toEqual("II");
  });
  it("Deberia convertir un numero 3",()=>{
    expect(convertir(3)).toEqual("III");
  });
});
