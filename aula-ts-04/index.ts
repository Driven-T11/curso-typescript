// Essa parte já fizemos ontem
function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function sum(num1: number, num2: number): number {
    return num1 + num2;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function showResult(result: number): void {
    if (isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

// Essa parte é a continuação
(() => {
    const num1 = prompt("First Number");
    const num2 = prompt("Second Number");

    if (!num1 || !num2) {
        console.log("Insira os 2 numeros!")
    } else {
        if (!isNaN(Number(num1)) && !isNaN(Number(num2))) {
            let result = sum(Number(num1), Number(num2));
            result += multiply(1, 2);
            showResult(result);
        } else {
            console.log("Não é possível executar com esses valores!")
        }
    }

})();