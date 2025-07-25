// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.


const body = document.querySelector("body");
const button = document.querySelector(".change-color");


button.addEventListener('click', () => {
    const color = getRandomHexColor();
 
    body.style.backgroundColor = color;

    document.querySelector(".color").textContent = color;
})

// Для генерування випадкового кольору 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

