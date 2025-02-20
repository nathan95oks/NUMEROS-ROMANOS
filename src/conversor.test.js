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
  it("Deberia convertir un numero 4",()=>{
    expect(convertir(4)).toEqual("IV");
  });
  it("Deberia convertir un numero 5",()=>{
    expect(convertir(5)).toEqual("V");
  });
  it("Deberia convertir un numero 6",()=>{
    expect(convertir(6)).toEqual("VI");
  });
  it("Deberia convertir un numero 6",()=>{
    expect(convertir(7)).toEqual("VII");
  });
});
