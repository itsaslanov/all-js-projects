let currencyEl_one = document.getElementById('currency-one');
let amountEl_one = document.getElementById('amount-one');
let currencyEl_two = document.getElementById('currency-two');
let amountEl_two = document.getElementById('amount-two');

let rateEl = document.getElementById('rate');
let btn = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/89b45906580a2ca4d94bc28d/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.conversion_rates[currency_two];
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
            rateEl.innerText = `${amountEl_one.value} ${currency_one} = ${amountEl_two.value} ${currency_two}`;
        });

}

// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

btn.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
})

calculate()