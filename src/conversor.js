function convertir(a) {
    const valores = [
        { numero: 500 , romano:"D"},
        { numero: 400 , romano:"CD"},
        { numero: 300 , romano:"CCC"},
        { numero: 200 , romano:"CC"},
        { numero: 100 , romano:"C"},
        { numero: 90, romano: "XC"},
        { numero: 50, romano: "L"},
        { numero: 40, romano:"XL"},
        { numero: 20, romano: "XX" },
        { numero: 15, romano: "XV"},
        { numero: 10, romano: "X" },
        { numero: 9, romano: "IX" },
        { numero: 5, romano: "V" },
        { numero: 4, romano: "IV" },
        { numero: 1, romano: "I" }
    ];

    let resultado = "";
    for (let i = 0; i < valores.length; i++) {
        while (a >= valores[i].numero) {
            resultado += valores[i].romano;
            a -= valores[i].numero;
        }
    }
    return resultado;
}

export default convertir;
