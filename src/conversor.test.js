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
  it("Deberia convertir un numero 7",()=>{
    expect(convertir(7)).toEqual("VII");
  });
  it("Deberia convertir un numero 8",()=>{
    expect(convertir(8)).toEqual("VIII");
  });
  it("Deberia convertir un numero 9",()=>{
    expect(convertir(9)).toEqual("IX");
  });
  it("Deberia convertir un numero 10",()=>{
    expect(convertir(10)).toEqual("X");
  });
  it("Deberia convertir un numero 11",()=>{
      expect(convertir(11)).toEqual("XI");
  });
  it("Deberia convertir un numero 15",()=>{
    expect(convertir(15)).toEqual("XV");
  })
  it("Deberia convertir un numero 20",()=>{  
    expect(convertir(20)).toEqual("XX");  
  });
  it("Deberia convertir un numero 40",()=>{
    expect(convertir(40)).toEqual("XL");
  });
  it("Deberia convertir un numero 65",()=>{
   expect(convertir(65)).toEqual("LXV");
  });
  it("Deberia convertir un numero 77",()=>{
    expect(convertir(77)).toEqual("LXXVII");
  })
  it("Deberia convertir un numero 100",()=>{
    expect(convertir(100)).toEqual("C");
  });
});
