const colors = ["rgb(133,122,200)", "rgb(128,0,0)", "rgb(255,0,0)", "rgb(128,128,128)", "rgb(128,0,0)", "rgb(0,0,128)", "rgb(255,215,0)", "rgb(154,205,50)", "rgb(47,79,79)", "rgb(25,25,112)", "rgb(139,0,139)"];
const color = document.querySelector(".colors");

document.querySelector('body').addEventListener("keydown", (e) => {
    e.preventDefault();

    // ! get random number between 0 - 3

    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

color.textContent = 'Please, Press any keyboard!';

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}