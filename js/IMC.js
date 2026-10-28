const weight = document.getElementById('weight');

const height = document.getElementById('height');

function calcularIMC(event) {
    event.preventDefault();

    console.log(weight. value)
    console.log(height.value)


    const imc = Number(weight.value) / (Number(height.value) * Number(height.value));

    console.log(imc);


    const result = document.getElementById('result');
    result.innerHTML = `
        <p>Seu IMC é: ${imc.toFixed(1)}</p>
        <p>Classificação</p>
    `;
}