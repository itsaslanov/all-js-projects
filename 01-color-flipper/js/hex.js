const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector(".colors");


document.querySelector('body').addEventListener("keydown", (e) => {
    e.preventDefault();

    let hex = "#"
    for (let i = 0; i < 6; i++) {
        hex += hexNumbers[getRandomNumber()];
    }

    document.body.style.backgroundColor = hex;
    color.textContent = hex;
})

color.textContent = 'Please, Press any keyboard!';

function getRandomNumber() {
    return Math.floor(Math.random() * hexNumbers.length);
}